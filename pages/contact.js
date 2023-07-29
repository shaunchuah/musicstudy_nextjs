import MotionPage from "../components/MotionPage";
import SectionHeaderWhite from "../components/SectionHeaderWhite";
import SectionWrapperWhite from "../components/SectionWrapperWhite";

export default function Contact() {
  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <SectionWrapperWhite id="contact">
          <SectionHeaderWhite title="Contact Us" />
          <div className="flex flex-col items-center justify-center text-xl h-96">
            <div className="text-3xl text-center mb-2 font-bold">
              
              MUSIC
            </div>
            <div className="mb-16">
              <a
                className="flex flex-row items-center hover:text-[#008000]"
                href="mailto:IBDMUSICStudy@ed.ac.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-8 h-8 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                IBDMUSICStudy@ed.ac.uk
              </a>
            </div>
            <div className="text-3xl text-center mb-2 font-bold">
              Mini-MUSIC
            </div>
            <div>
              <a
                className="flex flex-row items-center hover:text-[#008000]"
                href="mailto:minimarvel.trial@ed.ac.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-8 h-8 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                minimarvel.trial@ed.ac.uk
              </a>
            </div>
          </div>
          
        </SectionWrapperWhite>
      </main>
    </MotionPage>
  );
}
