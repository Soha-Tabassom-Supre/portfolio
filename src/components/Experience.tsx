import { EXPERIENCES, ACTIVITIES } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-[var(--border)]">
      <div className="container section">
        <div className="mb-12">
          <p className="section-label">MY JOURNEY</p>

          <h2 className="section-title">
            Experience & Activities
            <span className="text-[var(--accent)]">.</span>
          </h2>

          <p className="section-description mt-5">
            Experiences and activities that have helped me grow as a programmer,
            learner, and collaborator.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
         
          <div>
            <h3 className="mb-6 text-xl font-bold text-[var(--primary)]">
              Experience
            </h3>

            <div className="space-y-6">
              {EXPERIENCES.map((experience, index) => (
                <article
                  key={`${experience.organization}-${index}`}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <h4 className="text-lg font-semibold text-[var(--primary)]">
                    {experience.role}
                  </h4>

                  <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                    {experience.organization}
                  </p>

                  {experience.period && (
                    <p className="mt-2 text-xs text-[var(--muted)]">
                      {experience.period}
                    </p>
                  )}

                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {experience.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {experience.responsibilities.map((responsibility, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
                      >
                        <span className="text-[var(--accent)]">•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          
          <div>
            <h3 className="mb-6 text-xl font-bold text-[var(--primary)]">
              Activities & Participation
            </h3>

            <div className="space-y-4">
              {ACTIVITIES.map((activity, index) => (
                <div
                  key={activity}
                  className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eeece5] text-sm font-bold text-[var(--primary)]">
                    0{index + 1}
                  </span>

                  <p className="text-sm font-medium leading-6 text-[var(--primary)]">
                    {activity}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
