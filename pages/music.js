import MotionPage from "../components/MotionPage";
import SectionHeaderWhite from "../components/SectionHeaderWhite";
import SectionWrapperWhite from "../components/SectionWrapperWhite";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";
import Image from "next/image";
import MarvelCenterCard from "../components/MarvelCenterCard";

export default function Participants() {
  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        
        <SectionWrapperWhite id="introduction">
          <SectionHeaderWhite title="What is the MUSIC study?" />
          <div className="text-xl space-y-4">
            <p>
              The MUSIC study is an observational study where participants are
              followed up closely every 3 months for a year.
            </p>
            <p>
              During this follow-up period, extra blood and stool samples are
              taken for scientific analyses. Participants will also be offered
              an extra colonoscopy to check for mucosal healing.
            </p>
            <p>
              We hope that this study will unlock new scientific insights into
              inflammatory bowel disease.
            </p>
          </div>
        </SectionWrapperWhite>

        <SectionWrapperWhite id="takepart">
          <SectionHeaderWhite title="Why Take Part?" />
          <div className="text-xl space-y-4">
            <ul>
              <li>
                {" "}
                MUSIC runs in conjunction with your existing NHS treatment. It
                simply aims to monitor you much more closely as your condition
                hopefully improves.
              </li>
              <li>
                It will be a learning opportunity for you. The more involved you
                are with your treatment, the more you will learn about your
                condition and how you can get back to full health as soon as
                possible.
              </li>
              <li>
                You will be contributing to the latest research, the long term
                goal of which is to find more effective treatments and
                ultimately a cure for IBD.
              </li>
            </ul>
          </div>
        </SectionWrapperWhite>

        <SectionWrapperWhite id="involvement">
          <SectionHeaderWhite title="What is Involved?" />
          <div className="text-xl space-y-4">
            <p>
              This is a 12-month follow-up study which will involve appointments
              at 3 monthly intervals. We plan to closely monitor your clinical
              progress in line with the scientific work which we will carry out.
            </p>
            <p>
              During the follow-up period, we will be gathering information on
              how you are doing and this information will be shared with your
              treating NHS clinician.
            </p>
            <p>
              This may allow them to make treatment adjustments and check on how
              you're doing more closely than usual. For full details, please
              read the patient information sheet linked here.
            </p>
          </div>
        </SectionWrapperWhite>

        <SectionWrapperWhite id="centres">
          <SectionHeaderWhite title="Participating Centres" />
          <div className="grid lg:grid-cols-3 gap-8 mb-4">
            <MarvelCenterCard
              name="Western General Hospital"
              city="Edinburgh"
              pi="Dr Gwo-Tzer Ho"
              image_url="/static/images/edinburgh.jpg"
            />
            <MarvelCenterCard
              name="Queen Elizabeth University Hospital"
              city="Glasgow"
              pi="Dr John Paul Seenan & Dr Jonathan MacDonald"
              image_url="/static/images/qeuh.jpg"
            />
            <MarvelCenterCard
              name="Ninewells Hospital"
              city="Dundee"
              pi="Dr Craig Mowat"
              image_url="/static/images/dundee.jpg"
            />
          </div>
        </SectionWrapperWhite>
        <SectionWrapperWhite id="downloads">
          <SectionHeaderWhite title="Participant Information Sheet" />
          <object
            data="/static/files/musicsummarypis.pdf"
            type="application/pdf"
            width="100%"
            height="1080px">
            This browser does not support PDFs. Please download the PDF to view
            it:{" "}
            <a
              href="/static/files/musicsummarypis.pdf"
              target="_blank">
              Download Patient Information Sheet.
            </a>
          </object>
        </SectionWrapperWhite>
        <SectionWrapperWhite id="downloads">
          <SectionHeaderWhite title="Downloads" />
          <div className="text-xl">
            <a
              href="/static/files/musicfullpis.pdf"
              target="_blank"
              className="flex flex-row items-center hover:text-[#e76f51]">
              <svg
                className="w-8 h-8 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"></path>
              </svg>
              Full Participant Information Sheet v3.0
            </a>
            <a
              href="/static/files/musicsummarypis.pdf"
              target="_blank"
              className="flex flex-row items-center hover:text-[#e76f51]">
              <svg
                className="w-8 h-8 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"></path>
              </svg>
              Summary Participant Information Sheet v1.0
            </a>
          </div>
        </SectionWrapperWhite>
      </main>
    </MotionPage>
  );
}
