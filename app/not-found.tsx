import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md">
        <span className="text-xs uppercase tracking-widest font-semibold text-terracotta">
          Page Not Found
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-charcoal mt-2 mb-4">
          404
        </h1>
        <p className="text-charcoal-muted text-sm sm:text-base mb-8 font-light">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
}

