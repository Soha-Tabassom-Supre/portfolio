import { EDUCATION } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="border-t border-[var(--border)]">
      <div className="container section">
        <div className="mb-12">
          <p className="section-label">ACADEMIC BACKGROUND</p>

          <h2 className="section-title">
            Education<span className="text-[var(--accent)]">.</span>
          </h2>
        </div>

        <div className="space-y-5">
          {EDUCATION.map((education, index) => (
            <article
              key={`${education.institution}-${index}`}
              className="flex flex-col gap-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:flex-row sm:items-start sm:justify-between md:p-8"
            >
              <div>
                <h3 className="text-xl font-bold text-[var(--primary)]">
                  {education.degree}
                </h3>

                <p className="mt-2 font-medium text-[var(--accent)]">
                  {education.institution}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                  {education.description}
                </p>
              </div>

              <span className="w-fit shrink-0 rounded-md bg-[#eeece5] px-4 py-2 text-sm font-semibold text-[var(--primary)]">
                {education.period}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
