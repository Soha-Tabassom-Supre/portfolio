import { PROFILE } from "@/data/portfolioData";

export default function Contact() {
  const availableLinks = PROFILE.socialLinks.filter(
    (social) => social.href.trim() !== "",
  );

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">LET'S CONNECT</p>

          <h2 className="section-title">
            Have an Opportunity?
            <span className="text-[var(--accent)]"> Let's Talk.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
            I'm interested in software development opportunities, internships,
            and meaningful collaborations. Feel free to reach out if you'd like
            to connect.
          </p>

          {PROFILE.email.trim() !== "" ? (
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-9 inline-flex items-center justify-center rounded-md bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#354e70]"
            >
              Get in Touch
              <span className="ml-2">↗</span>
            </a>
          ) : (
            <p className="mt-8 text-sm text-[var(--muted)]">
              Contact email will be added soon.
            </p>
          )}

          {availableLinks.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {availableLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[var(--primary)] underline underline-offset-4 transition-colors hover:text-[var(--accent)]"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
