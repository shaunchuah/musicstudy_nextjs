import MaxWidthControl from "./MaxWidthControl";

export default function SectionWrapper({ children, id }) {
  return (
    <section className="px-5 py-6 md:py-12 md:px-12 w-full" id={id}>
      <MaxWidthControl>
      {children}
      </MaxWidthControl>
    </section>
  );
}
