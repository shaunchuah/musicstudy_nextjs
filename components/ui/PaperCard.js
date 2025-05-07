import Link from "next/link";

export default function PaperCard({
  title,
  authors,
  abstract = {},
  pdfLink,
  preprintLink,
  githubLink,
  footerText,
  explorationLink,
  explorationButtonText
}) {
  return (
    <div className="bg-white text-primary shadow-md rounded-lg p-8 max-w-5xl">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <div className="text-base mb-4">{authors}</div>
      
      {explorationLink && (
        <div className="mb-4">
          <Link href={explorationLink} legacyBehavior>
            <button className="border-primary bg-primary hover:bg-teal-800 text-white py-2 px-6 rounded text-lg">
              {explorationButtonText || "Explore paper"}
            </button>
          </Link>
        </div>
      )}
      
      {abstract && Object.keys(abstract).length > 0 && (
        <>
          <h3 className="text-2xl font-bold mb-4">Abstract</h3>
          <div className="space-y-6">
            {abstract.background && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Background</h3>
                <p className="mb-4">{abstract.background}</p>
              </div>
            )}
            
            {abstract.methods && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Methods</h3>
                <p className="mb-4">{abstract.methods}</p>
              </div>
            )}
            
            {abstract.results && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Results</h3>
                <p className="mb-4">{abstract.results}</p>
              </div>
            )}
            
            {abstract.conclusion && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
                <p>{abstract.conclusion}</p>
              </div>
            )}
          </div>
        </>
      )}

      <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex flex-wrap gap-3">
          {pdfLink && (
            <a
              href={pdfLink}
              target="_blank"
              className="flex items-center px-3 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Full PDF
            </a>
          )}
          
          {preprintLink && (
            <a
              href={preprintLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Preprint
            </a>
          )}
          
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.917.678 1.852 0 1.335-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
              GitHub Code Repository
            </a>
          )}
        </div>
      </div>
      
      <div className="border-t pt-4">
        <div className="flex flex-row justify-between items-start">
          <div></div>
          <div className="text-sm text-gray-400">
            {footerText}
          </div>
        </div>
      </div>
    </div>
  );
}
