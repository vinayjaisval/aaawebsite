import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Bot, AlertCircle, Plus, RotateCw, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  isError?: boolean;
  retryText?: string;
}

const API_URL = "https://smebuzz.com/chatbots/api/aaatechnologies/chat";

const QUICK_QUESTIONS = [
  "DPDP Compliance readiness",
  "Current job openings",
  "Contact / Office location"
];

const getTimestamp = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const createWelcomeMessage = (): ChatMessage => ({
  id: "welcome",
  sender: "bot",
  text: "Hello! Welcome to AAA Technologies. How can I assist you today?",
  timestamp: getTimestamp()
});

interface SafeUrlResult {
  leading: string;
  cleanUrl: string;
  safeHref: string;
  trailing: string;
}

/**
 * Shared helper to strip leading and trailing punctuation while respecting balanced parentheses.
 */
function trimPunctuation(str: string): { leading: string; core: string; trailing: string } {
  let leading = "";
  let trailing = "";
  let core = str;

  while (core.length > 0 && /[([{"'<]/.test(core[0])) {
    leading += core[0];
    core = core.slice(1);
  }

  while (core.length > 0) {
    const lastChar = core.slice(-1);
    if (/[.,;:!?"'>\]]/.test(lastChar)) {
      trailing = lastChar + trailing;
      core = core.slice(0, -1);
    } else if (lastChar === ")") {
      const openCount = (core.match(/\(/g) || []).length;
      const closeCount = (core.match(/\)/g) || []).length;
      if (closeCount > openCount) {
        trailing = lastChar + trailing;
        core = core.slice(0, -1);
      } else {
        break;
      }
    } else {
      break;
    }
  }

  return { leading, core, trailing };
}

/**
 * Link Safety & Protocol Verification:
 * Strictly allow ONLY trusted protocols: https: and http:
 * Disallows javascript:, data:, vbscript:, file:, etc.
 */
function parseSafeUrl(rawCandidate: string): SafeUrlResult | null {
  const { leading, core: url, trailing } = trimPunctuation(rawCandidate);
  if (!url) return null;

  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return null;
    }
    if (!parsed.hostname || (!parsed.hostname.includes(".") && parsed.hostname !== "localhost")) {
      return null;
    }
    return {
      leading,
      cleanUrl: url,
      safeHref: parsed.href,
      trailing
    };
  } catch {
    return null;
  }
}

/**
 * Validates email addresses safely against standard email rules,
 * strips leading/trailing punctuation, and prevents header injection / XSS schemes.
 */
function parseSafeEmail(rawCandidate: string): { leading: string; email: string; trailing: string } | null {
  const { leading, core: email, trailing } = trimPunctuation(rawCandidate);
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (emailRegex.test(email) && !email.includes("..")) {
    return { leading, email, trailing };
  }
  return null;
}

/**
 * Parses markdown bold formatting (**text**) safely into <strong> elements
 */
function renderTextWithBold(text: string) {
  if (!text.includes("**")) return text;
  const boldParts = text.split(/(\*\*[^*]+\*\*)/g);
  return boldParts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={idx} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function renderFormattedMessage(text: string, isUser: boolean) {
  // Tokenize string by matching potential URLs or emails
  const tokenRegex = /(https?:\/\/[^\s<>"'{}|\\^`]+|[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    if (/^https?:\/\//i.test(part)) {
      const result = parseSafeUrl(part);
      if (!result) {
        // Untrusted protocol or malformed URL: render as safe plain text
        return <span key={index}>{renderTextWithBold(part)}</span>;
      }

      return (
        <span key={index}>
          {result.leading}
          <a
            href={result.safeHref}
            target="_blank"
            rel="noopener noreferrer nofollow"
            title={`External link: ${result.safeHref}`}
            aria-label={`Visit link ${result.cleanUrl} (opens in a new tab)`}
            className={
              isUser
                ? "inline-flex items-center gap-0.5 text-white underline font-semibold break-all hover:text-white/80 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-xs"
                : "inline-flex items-center gap-0.5 text-[#35268F] font-semibold underline hover:text-[#251b64] break-all focus-visible:ring-2 focus-visible:ring-[#35268F] focus-visible:outline-none rounded-xs"
            }
          >
            <span>{result.cleanUrl}</span>
            <ExternalLink className="w-2.5 h-2.5 shrink-0 inline opacity-70 ml-0.5" aria-hidden="true" />
          </a>
          {result.trailing}
        </span>
      );
    }

    if (/@/i.test(part)) {
      const emailResult = parseSafeEmail(part);
      if (emailResult) {
        return (
          <span key={index}>
            {emailResult.leading}
            <a
              href={`mailto:${emailResult.email}`}
              title={`Send email to ${emailResult.email}`}
              aria-label={`Send email to ${emailResult.email}`}
              className={
                isUser
                  ? "text-white underline font-semibold break-all hover:text-white/80 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-xs"
                  : "text-[#35268F] font-semibold underline hover:text-[#251b64] break-all focus-visible:ring-2 focus-visible:ring-[#35268F] focus-visible:outline-none rounded-xs"
              }
            >
              {emailResult.email}
            </a>
            {emailResult.trailing}
          </span>
        );
      }
    }

    return <span key={index}>{renderTextWithBold(part)}</span>;
  });
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([createWelcomeMessage()]);

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherButtonRef = useRef<HTMLButtonElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleCloseChat = useCallback(() => {
    setIsOpen(false);
    launcherButtonRef.current?.focus();
  }, []);

  const scrollToMessage = useCallback((smooth = true) => {
    if (!messagesContainerRef.current) return;
    const container = messagesContainerRef.current;
    const lastMsg = messages[messages.length - 1];

    // When bot answers, scroll precisely to the start (Point 1) of the bot's reply
    if (lastMsg && lastMsg.sender === "bot" && lastMsg.id !== "welcome") {
      const el = container.querySelector<HTMLElement>(`[data-msg-id="${lastMsg.id}"]`);
      if (el) {
        const containerRect = container.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const targetTop = container.scrollTop + (elRect.top - containerRect.top) - 10;
        container.scrollTo({
          top: Math.max(0, targetTop),
          behavior: smooth ? "smooth" : "auto"
        });
        return;
      }
    }

    // Otherwise (user message, typing dots, welcome message), scroll to bottom
    container.scrollTo({
      top: container.scrollHeight,
      behavior: smooth ? "smooth" : "auto"
    });
  }, [messages]);

  // Clean, single post-render scroll using standard requestAnimationFrame
  useEffect(() => {
    if (isOpen) {
      const rafId = requestAnimationFrame(() => {
        scrollToMessage();
      });
      return () => cancelAnimationFrame(rafId);
    }
  }, [messages, isTyping, isOpen, scrollToMessage]);

  // Autofocus input smoothly on open
  useEffect(() => {
    if (isOpen) {
      const focusTimer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(focusTimer);
    }
  }, [isOpen]);

  // Cleanup pending network request on unmount
  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort("UNMOUNT");
    };
  }, []);

  // Accessibility: Close on Escape key and return focus to launcher button
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleCloseChat();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleCloseChat]);

  // Close when clicking outside of the chat container (supports mouse and touch)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isOpen &&
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside, { passive: true });
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const handleSendMessage = useCallback(async (textToSend?: string, isRetry = false) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isTyping) return;

    // If retrying from an error, cleanly replace the failed error message without duplicating the user message
    if (isRetry) {
      setMessages((prev) => prev.filter((m) => !(m.isError && m.retryText === text)));
    } else {
      const userMsg: ChatMessage = {
        id: "user_" + Date.now(),
        sender: "user",
        text: text,
        timestamp: getTimestamp()
      };
      setMessages((prev) => [...prev, userMsg]);
    }

    setInputMessage("");
    setIsTyping(true);

    // Cancel any previous in-flight request and create fresh controller
    abortControllerRef.current?.abort("NEW_REQUEST");
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const timeoutId = setTimeout(() => {
      controller.abort("TIMEOUT");
    }, 30000);

    try {
      if (typeof navigator !== "undefined" && !navigator.onLine) {
        throw new Error("OFFLINE");
      }

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: text }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("RATE_LIMIT");
        }
        if (response.status >= 500) {
          throw new Error("SERVER_UNAVAILABLE");
        }
        throw new Error(`HTTP_${response.status}`);
      }

      const data = await response.json();
      const botReply = (typeof data?.reply === "string" ? data.reply.trim() : "") || "No response received";

      // If user reset chat while request was pending, ignore response
      if (controller.signal.aborted) return;

      setMessages((prev) => [
        ...prev,
        {
          id: "bot_" + Date.now(),
          sender: "bot",
          text: botReply,
          timestamp: getTimestamp()
        }
      ]);
    } catch (err: unknown) {
      clearTimeout(timeoutId);

      // If intentionally aborted (e.g. New Chat), do not show error bubble
      if (controller.signal.aborted && controller.signal.reason !== "TIMEOUT") {
        return;
      }

      let errorMessage = "Unable to connect to the server. Please try again.";

      if (err instanceof Error) {
        if (err.message === "OFFLINE") {
          errorMessage = "You appear to be offline. Please check your internet connection.";
        } else if (controller.signal.reason === "TIMEOUT" || err.name === "TimeoutError" || err.name === "AbortError") {
          errorMessage = "Connection timed out. The server took too long to reply.";
        } else if (err.message === "RATE_LIMIT") {
          errorMessage = "Too many requests. Please wait a moment before sending another message.";
        } else if (err.message === "SERVER_UNAVAILABLE") {
          errorMessage = "The assistant service is temporarily unavailable. Please try again shortly.";
        } else if (err.message.startsWith("HTTP_")) {
          errorMessage = `Service returned an error (${err.message.replace("HTTP_", "status ")}). Please try again.`;
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          id: "err_" + Date.now(),
          sender: "bot",
          text: errorMessage,
          timestamp: getTimestamp(),
          isError: true,
          retryText: text
        }
      ]);
    } finally {
      if (!controller.signal.aborted || controller.signal.reason === "TIMEOUT") {
        setIsTyping(false);
      }
    }
  }, [inputMessage, isTyping]);

  const handleResetChat = useCallback(() => {
    // Abort any in-flight request so it won't inject into the fresh conversation
    abortControllerRef.current?.abort("RESET");
    abortControllerRef.current = null;
    setIsTyping(false);
    setMessages([createWelcomeMessage()]);
    setInputMessage("");
    inputRef.current?.focus();
  }, []);

  const handleToggleOpen = () => {
    if (isOpen) {
      handleCloseChat();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div ref={chatContainerRef}>
      {/* FLOATING BOT LAUNCHER */}
      <div className="fixed bottom-5 left-5 z-[1000]">
        <motion.button
          ref={launcherButtonRef}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={handleToggleOpen}
          aria-expanded={isOpen}
          aria-controls="aaa-chatbot-window"
          aria-haspopup="dialog"
          aria-label={isOpen ? "Close AAA Technologies AI Chatbot" : "Open AAA Technologies AI Chatbot"}
          className="relative flex items-center justify-center focus:outline-none focus-visible:ring-3 focus-visible:ring-[#35268F] focus-visible:ring-offset-2 rounded-full cursor-pointer"
        >
          {isOpen ? (
            <div className="w-[42px] h-[42px] rounded-full bg-[#1A1040] hover:bg-[#35268F] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(26,16,64,0.35)] border border-white/20 transition-colors">
              <X className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
          ) : (
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 1.5, -1.5, 0]
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative flex items-center justify-center motion-reduce:animate-none motion-reduce:transform-none"
            >
              <img
                src="/assets/img/chatbot-icon.png"
                alt=""
                aria-hidden="true"
                className="w-[82px] h-[82px] sm:w-[92px] sm:h-[92px] object-contain select-none pointer-events-none"
              />
            </motion.div>
          )}
        </motion.button>
      </div>

      {/* COMPACT CLEAN CHATBOX (330px width, 430px height, mobile 100dvh support) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="aaa-chatbot-window"
            role="dialog"
            aria-modal="false"
            aria-label="AAA Technologies AI Assistant"
            aria-describedby="aaa-chatbot-desc"
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed bottom-[82px] left-3 sm:left-5 z-[1000] w-[calc(100vw-24px)] sm:w-[330px] h-[430px] max-h-[calc(100dvh-90px)] max-h-[calc(100vh-90px)] bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.18)] border border-slate-200 flex flex-col overflow-hidden font-sans"
          >
            <p id="aaa-chatbot-desc" className="sr-only">
              Interactive support chat window. Press Escape to close.
            </p>

            {/* CLEAN COMPACT HEADER */}
            <div className="bg-[#1A1040] text-white px-3.5 py-2.5 flex items-center justify-between border-b border-white/10 shrink-0 select-none">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-white p-1 flex items-center justify-center shrink-0 shadow-xs">
                  <img
                    src="/assets/img/logo-dark.png"
                    alt="AAA Technologies Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[13px] text-white leading-tight">AAA Assistant</h3>
                  <p className="text-[10px] text-white/50 leading-none mt-0.5 font-normal">
                    AI Support Desk
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {messages.length > 1 && (
                  <button
                    type="button"
                    onClick={handleResetChat}
                    title="Start a new chat conversation"
                    aria-label="Start a new chat conversation"
                    className="flex items-center gap-1 text-[10.5px] font-medium text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded transition-all duration-150 border border-white/15 cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                  >
                    <Plus className="w-2.5 h-2.5" aria-hidden="true" />
                    <span>New Chat</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleCloseChat}
                  title="Close chat window"
                  aria-label="Close chat window"
                  className="p-1 text-white/60 hover:text-white rounded hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* MESSAGES BODY */}
            <div
              ref={messagesContainerRef}
              role="log"
              aria-live="polite"
              aria-relevant="additions text"
              aria-label="Chat messages history"
              className="relative flex-1 min-h-0 overflow-y-auto overscroll-contain p-3 space-y-2.5 bg-slate-50/50"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  data-msg-id={msg.id}
                  className={`flex gap-1.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div
                      aria-hidden="true"
                      className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 ${
                        msg.isError ? "bg-amber-600 text-white" : "bg-[#1A1040] text-white"
                      }`}
                    >
                      {msg.isError ? <AlertCircle className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-xl text-[12px] leading-relaxed break-words ${
                      msg.sender === "user"
                        ? "bg-[#35268F] text-white rounded-br-none font-medium shadow-xs"
                        : msg.isError
                        ? "bg-amber-50 text-amber-900 border border-amber-200 rounded-bl-none"
                        : "bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-xs"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">
                      <span className="sr-only">{msg.sender === "user" ? "You: " : "AAA Assistant: "}</span>
                      {renderFormattedMessage(msg.text, msg.sender === "user")}
                    </p>

                    {/* Retry button on error */}
                    {msg.isError && msg.retryText && (
                      <div className="mt-2 pt-1 border-t border-amber-200/80">
                        <button
                          type="button"
                          onClick={() => handleSendMessage(msg.retryText, true)}
                          disabled={isTyping}
                          aria-label={`Retry sending message: ${msg.retryText}`}
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 active:scale-95 px-2.5 py-1 rounded border border-amber-300 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:outline-none disabled:opacity-50"
                        >
                          <RotateCw className="w-3 h-3 text-amber-800" aria-hidden="true" />
                          <span>Retry</span>
                        </button>
                      </div>
                    )}

                    <span
                      className={`block text-[8.5px] mt-1 text-right ${
                        msg.sender === "user" ? "text-white/60" : "text-slate-400"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {/* CLEAN TYPING DOTS */}
              {isTyping && (
                <div
                  role="status"
                  aria-label="AAA Assistant is typing"
                  className="flex gap-1.5 justify-start items-center"
                >
                  <div
                    aria-hidden="true"
                    className="w-5 h-5 rounded bg-[#1A1040] text-white flex items-center justify-center shrink-0"
                  >
                    <Bot className="w-3 h-3" />
                  </div>
                  <div className="bg-white border border-slate-200 px-3 py-1.5 rounded-xl rounded-bl-none flex items-center gap-1 shadow-xs">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                    <span className="sr-only">AAA Assistant is typing a reply...</span>
                  </div>
                </div>
              )}

              {/* QUICK QUESTIONS PILLS */}
              {messages.length <= 2 && !isTyping && (
                <div role="group" aria-label="Suggested quick questions" className="pt-1 flex flex-wrap gap-1">
                  {QUICK_QUESTIONS.map((query) => (
                    <button
                      key={query}
                      type="button"
                      disabled={isTyping}
                      onClick={() => handleSendMessage(query)}
                      className="text-[11px] text-slate-600 bg-white hover:bg-[#35268F] hover:text-white border border-slate-200 px-2.5 py-1 rounded-full transition-colors duration-150 text-left shadow-xs focus-visible:ring-2 focus-visible:ring-[#35268F] focus-visible:outline-none disabled:opacity-50"
                    >
                      {query}
                    </button>
                  ))}
                </div>
              )}

            </div>

            {/* COMPACT INPUT FOOTER */}
            <div className="p-2 bg-white border-t border-slate-100 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 focus-within:border-[#35268F] focus-within:bg-white focus-within:ring-1 focus-within:ring-[#35268F] transition-colors"
              >
                <label htmlFor="aaa-chat-input" className="sr-only">
                  Type your message to AAA Assistant
                </label>
                <input
                  id="aaa-chat-input"
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  maxLength={1000}
                  autoComplete="off"
                  aria-required="true"
                  className="flex-1 min-w-0 bg-transparent border-none text-[12px] text-slate-800 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isTyping}
                  className="w-6 h-6 rounded bg-[#35268F] text-white flex items-center justify-center hover:bg-[#251b64] disabled:opacity-30 disabled:cursor-not-allowed transition-all focus-visible:ring-2 focus-visible:ring-[#35268F] focus-visible:outline-none"
                  aria-label="Send message"
                >
                  <Send className="w-2.5 h-2.5" aria-hidden="true" />
                </button>
              </form>
              <div className="text-center pt-1.5 pb-0.5 select-none pointer-events-none">
                <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                  Powered by <span className="font-semibold text-[#35268F]">SkyLabs</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
