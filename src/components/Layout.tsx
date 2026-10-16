import type { ReactNode } from "react";
import { Header, Footer } from "./Navigation";
import { WhatsAppFloating } from "./whatsapp-floating";
import { ChatBot } from "./chatbot";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
      <WhatsAppFloating />
      <ChatBot />
    </div>
  );
}
