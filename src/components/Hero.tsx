import Image from "next/image";
export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24"
    >
    
      <div className="order-2 md:order-1">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b47b48]">
          Hello, I'm
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#253d63] sm:text-5xl lg:text-6xl">
          Soha Tabassom Supre
          <span className="text-[#d59a62]">.</span>
        </h1>

        <h2 className="mt-5 text-xl font-medium text-[#687386] sm:text-2xl">
          CSE Undergraduate & Aspiring Software Developer
        </h2>

        <p className="mt-6 max-w-xl text-base leading-8 text-[#687386]">
          I'm a Computer Science and Engineering student at Jashore University
          of Science and Technology, interested in building thoughtful,
          user-focused web applications. I enjoy solving problems and turning
          ideas into practical software.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg border border-[#253d63] px-6 py-3 text-sm font-semibold text-[#253d63] transition-colors hover:bg-[#253d63] hover:text-white"
          >
            Explore My Work
          </a>

          <a
            href="/resume.pdf"
            download="Soha-Tabassom-Supre-Resume.pdf"
            className="rounded-lg border border-[#253d63] px-6 py-3 text-sm font-semibold text-[#253d63] transition-colors hover:bg-[#253d63] hover:text-white"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-[#253d63] px-6 py-3 text-sm font-semibold text-[#253d63] transition-colors hover:bg-[#253d63] hover:text-white"
          >
            Get in Touch
          </a>
        </div>

        <p className="mt-8 text-sm text-[#8991a0]">
          Currently exploring: Full-Stack Development · AI/ML
        </p>
      </div>

      
      <div className="order-1 flex justify-center md:order-2 md:justify-end">
        <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-[#e8e5de] bg-[#eeece5]">
          <Image
            src="/images/profile.jpeg"
            alt="Soha Tabassom Supre - Profile Photo"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 384px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
