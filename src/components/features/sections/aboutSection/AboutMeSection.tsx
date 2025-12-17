import { Button } from "@/components/ui/button";
import { useSectionRefs } from "@/store/useSectionRefsStore";
import { Download } from "lucide-react";

export const AboutMeSection = () => {
  const aboutRef = useSectionRefs((s) => s.refs.about);
  return (
    <section
      id="about"
      ref={aboutRef}
      className="min-h-screen snap-start px-6 sm:px-10 lg:px-18 md:pt-[25vh] lg:pt-[50vh] xl:pt-[8vh] flex relative"
    >
      {/* Container with z-index to sit above SVG beams */}
      <div
        className="
          relative z-40 max-w-screen sm:max-w-3xl space-y-4 text-center sm:text-left
          flex flex-col justify-center
          md:max-w-fit
          lg:justify-start lg:max-w-fit
          xl:max-w-xl
        "
      >
        <h2 className="text-2xl sm:text-4xl 2xl:text-6xl font-bold leading-tight bg-linear-to-br from-[#3A7DFF] via-[#6FFFEF] to-[#0EBE8C] text-transparent bg-clip-text">
          About me
        </h2>
        <p className="text-base sm:text-lg 2xl:text-xl text-gray-300 leading-relaxed">
          Hi, I’m a frontend developer with a background in aviation operations.
          After several years working in fast-paced, detail-driven environments,
          I transitioned into web and mobile development with a focus on React
          and React Native. I’ve built and deployed a commercial website and a full-stack
          mobile app for creating and storing invoices. I’m passionate about
          building intuitive, reliable digital experiences.
        </p>

        {/* Button wrapper */}
        <div className="mt-4 2xl:mt-22 flex justify-center sm:justify-start">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="text-black hover:bg-linear-to-br hover:from-[#3A7DFF] hover:via-[#6FFFEF] hover:to-[#0EBE8C]"
          >
            <a href="/CV Boris Karasek.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
