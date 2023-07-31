import Image from "next/image";
import MaxWidthControl from "./MaxWidthControl";

export default function SectionWrapperHero({ children, id }) {
  return (
    <section
      className="relative px-5 py-6 md:py-12 md:px-12 w-full text-white min-h-screen 2xl:min-h-0 hero"
      id={id}
    >
      <MaxWidthControl>{children}</MaxWidthControl>
    </section>
  );
}
