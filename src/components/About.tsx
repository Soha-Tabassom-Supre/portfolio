const highlights = [
  {
    title: "Education",
    description: "BSc in Computer Science & Engineering at JUST",
  },
  {
    title: "Teaching",
    description:
      "ACM Lab Instructor, helping juniors with programming fundamentals",
  },
  {
    title: "Problem Solving",
    description: "Competitive programming practice and two ICPC participations",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-[#e8e5de]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b47b48]">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#253d63] sm:text-4xl">
            About Me
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">

          <div className="space-y-5 text-base leading-8 text-[#687386]">
            <p>
              I'm Soha Tabassom Supre, a Computer Science and Engineering
              undergraduate at Jashore University of Science and Technology. My
              journey in computing has been shaped by curiosity,
              problem-solving, and a desire to build useful software.
            </p>

            <p>
              I'm particularly interested in full-stack software development. I
              enjoy working across the frontend and backend, understanding how
              different parts of an application connect, and improving my
              ability to build reliable, user-focused solutions.
            </p>

            <p>
              Alongside development, competitive programming has helped me
              strengthen my logical thinking and approach unfamiliar problems.
              As an ACM Lab Instructor, I also get to support fellow students as
              they learn programming fundamentals.
            </p>

            <p>
              I'm continuously learning and exploring areas such as AI and
              machine learning, while building a stronger foundation in software
              engineering.
            </p>
          </div>

       
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e8e5de] bg-white p-5"
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eeece5] text-sm font-semibold text-[#253d63]">
                    0{index + 1}
                  </span>

                  <h3 className="font-semibold text-[#253d63]">{item.title}</h3>
                </div>

                <p className="pl-11 text-sm leading-6 text-[#687386]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
