export default function PublicationCard(props) {
  return (
    <div className="mx-auto max-w-prose text-lg shadow flex flex-col md:flex-row items-start gap-8 w-full border p-8 rounded-xl mb-8 ">
      <div className="">
        <div className="mb-4 text-sm">
          {props.publicationDate} | {props.journal}
        </div>
        <h4 className="max-w-prose font-semibold text-2xl mb-4">
          {props.title}
        </h4>
        <p className="text-sm">{props.authors}</p>
      </div>
      <a href={props.externalLink} target="_blank" rel="noreferrer" alt="External link to article">
        <div className="flex-none w-16 h-16 border p-4 rounded-full hover:bg-gray-200 ">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
              clipRule="evenodd"></path>
          </svg>
        </div>
      </a>
    </div>
  );
}
