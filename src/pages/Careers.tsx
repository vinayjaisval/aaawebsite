import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Careers() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the internal Contact Us page
    navigate("/contact", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#1A1040] mb-2 uppercase tracking-tight italic">Redirecting to Contact Us...</h1>
        <p className="text-slate-500 font-medium italic">Please wait while we take you to our contact page for job inquiries.</p>
      </div>
    </div>
  );
}
