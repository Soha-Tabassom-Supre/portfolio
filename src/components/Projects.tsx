import { PROJECTS } from "@/data/portfolioData";
import Image from "next/image";

export default function Projects() {
  const featuredProjects = PROJECTS.filter((project) => project.featured);

  return (
    <section id="projects" className="section bg-[var(--surface)]">
      <div className="container">
        <div className="mb-12">
          <p className="section-label">MY RECENT WORK</p>

          <h2 className="section-title">
            Featured Projects
            <span className="text-[var(--accent)]">.</span>
          </h2>

          <p className="section-description mt-5">
            A selection of projects where I've applied my development skills to
            build practical applications and explore different technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
             
              <div className="relative aspect-[16/9] overflow-hidden bg-[#eeece5]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.name} project screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-4xl font-bold text-[var(--primary)]/70">
                      {project.name}
                    </span>
                  </div>
                )}
              </div>


              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {project.tagline}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[var(--primary)]">
                  {project.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {project.description}
                </p>


                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--primary)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>


                <div className="mt-7 flex flex-wrap gap-5 border-t border-[var(--border)] pt-5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[var(--primary)] underline underline-offset-4 hover:text-[var(--accent)]"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.clientRepoUrl && (
                    <a
                      href={project.clientRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[var(--primary)] underline underline-offset-4 hover:text-[var(--accent)]"
                    >
                      Client Code ↗
                    </a>
                  )}

                  {project.serverRepoUrl && (
                    <a
                      href={project.serverRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[var(--primary)] underline underline-offset-4 hover:text-[var(--accent)]"
                    >
                      Server Code ↗
                    </a>
                  )}

                  {!project.liveUrl &&
                    !project.clientRepoUrl &&
                    !project.serverRepoUrl && (
                      <span className="text-sm text-[var(--muted)]">
                        Project links coming soon
                      </span>
                    )}
                </div>


                <details className="mt-5 border-t border-[var(--border)] pt-4">
                  <summary className="cursor-pointer text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--accent)]">
                    View Details
                  </summary>

                  <div className="mt-5 space-y-5">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-[var(--primary)]">
                        Challenges & Learning
                      </h4>

                      <ul className="list-inside list-disc space-y-2 text-sm leading-6 text-[var(--muted)]">
                        {project.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-[var(--primary)]">
                        Future Improvements
                      </h4>

                      <ul className="list-inside list-disc space-y-2 text-sm leading-6 text-[var(--muted)]">
                        {project.improvements.map((improvement, index) => (
                          <li key={index}>{improvement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
