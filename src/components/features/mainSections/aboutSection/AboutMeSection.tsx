import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { forwardRef } from "react";

export const AboutMeSection = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen px-4 sm:px-10 lg:px-32 py-16 sm:py-20 lg:py-28 flex relative"
    >
      {/* Container with z-index to sit above SVG beams */}
      <div
        className="
          relative z-10 max-w-[90%] sm:max-w-3xl space-y-4 text-center sm:text-left
          flex flex-col justify-center
          lg:justify-start lg:pt-16
        "
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          About me
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
          Hi, I’m a frontend developer with a background in aviation operations.
          After several years working in fast-paced, detail-driven environments,
          I transitioned into web and mobile development with a focus on React
          and React Native. I’ve built and deployed a commercial website and a full-stack
          mobile app for creating and storing invoices. I’m passionate about
          building intuitive, reliable digital experiences.
        </p>

        {/* Button wrapper */}
        <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center sm:justify-start">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="text-black sm:mt-18 hover:bg-linear-to-br hover:from-[#3A7DFF] hover:via-[#6FFFEF] hover:to-[#0EBE8C]"
          >
            <a href="/resume.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
});
