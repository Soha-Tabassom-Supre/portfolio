import { PROFILE } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-semibold text-[var(--foreground)]">
            {PROFILE.name}
          </p>
          <p className="text-sm text-[var(--muted)]">
            Building, learning, and growing through technology.
          </p>
        </div>

        <p className="text-sm text-[var(--muted)]">
          © 2026 {PROFILE.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
