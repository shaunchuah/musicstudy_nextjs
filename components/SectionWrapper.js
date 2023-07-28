export default function SectionWrapper({ children, id }) {
  return (
    <section className="px-5 py-6 md:py-12 w-full" id={id}>
      {children}
    </section>
  );
}
