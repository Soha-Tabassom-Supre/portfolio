const skillGroups = [
  {
    title: "Programming Languages",
    description: "Languages I use for problem-solving and development.",
    skills: ["C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "Working with server-side logic and APIs.",
    skills: ["Node.js", "Express.js", "REST APIs", "Better Auth"],
  },
  {
    title: "Databases",
    description: "Storing, querying, and managing application data.",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    description: "Tools I use in my development workflow.",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "Computer Science",
    description: "Core foundations I continue to practice.",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Problem Solving",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[#e8e5de]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b47b48]">
            What I work with
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#253d63] sm:text-4xl">
            Technical Skills
          </h2>

          <p className="mt-4 leading-7 text-[#687386]">
            Technologies and concepts I've worked with through coursework,
            personal projects, and continuous practice.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-[#e8e5de] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-[#253d63]">
                {group.title}
              </h3>

              <p className="mt-2 min-h-12 text-sm leading-6 text-[#8991a0]">
                {group.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-[#f3f1eb] px-3 py-1.5 text-xs font-medium text-[#52627a]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
