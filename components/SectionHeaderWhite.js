export default function SectionHeader({ title }) {
  return (
    <div className="flex flex-col">
      <div className="lg:w-1/2 w-full mb-6">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-primary">
          {title}
        </h1>
      
      </div>
    </div>
  );
}

