export default function SectionWrapperWhite({ children, id }) {
  return (
    <section className="px-5 py-6 md:py-12 w-full bg-white text-gray-800" id={id}>
      {children}
    </section>
  );
}
