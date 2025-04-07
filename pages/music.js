import MotionPage from "../components/MotionPage";
import SectionHeaderWhite from "../components/SectionHeaderWhite";
import SectionWrapperWhite from "../components/SectionWrapperWhite";
import CenterCard from "../components/CenterCard";
import InlinePDFViewer from "../components/InlinePDFViewer";
import FileDownload from "../components/FileDownload";

export default function Participants() {
  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <SectionWrapperWhite id="introduction">
          <SectionHeaderWhite title="What is the MUSIC study?" />
          <div className="text-xl space-y-4 max-w-prose">
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
          <div className="text-xl space-y-4 max-w-prose">
            <ul className="list-disc list-outside pl-4 space-y-4">
              <li>
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
        <SectionWrapperWhite id="who">
          <SectionHeaderWhite title="Who Can Take Part?" />
          <div className="text-xl space-y-4 max-w-prose">
            <p className="mb-4">We are looking for patients:</p>
            <ul className="list-disc list-outside pl-4 space-y-4">
              <li>Age 16 and above</li>
              <li>Have Crohn&apos;s disease or ulcerative colitis</li>
              <li>Referred by their NHS doctor</li>
              <li>Edinburgh, Glasgow or Dundee</li>
            </ul>
          </div>
        </SectionWrapperWhite>

        <SectionWrapperWhite id="involvement">
          <SectionHeaderWhite title="What is Involved?" />
          <div className="text-xl space-y-4 max-w-prose mb-12">
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
              you&apos;re doing more closely than usual. For full details, please
              read the patient information sheet below.
            </p>
          </div>

          <ol className="items-center flex mx-auto">
            <li className="relative mb-6 sm:mb-0 w-1/5">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-14 h-14 bg-white rounded-full ring-2 ring-[#264653]  shrink-0">
                  0
                </div>
                <div className="flex w-full bg-[#264653] h-0.5 "></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="sm:text-lg font-semibold text-gray-900 ">Start</h3>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0 w-1/5">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-14 h-14 bg-white rounded-full ring-2 ring-[#264653]  shrink-0">
                  3
                </div>
                <div className="flex w-full bg-[#264653] h-0.5 "></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="sm:text-lg font-semibold text-gray-900 ">
                  3 Months
                </h3>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0 w-1/5">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-14 h-14 bg-white rounded-full ring-2 ring-[#264653]  shrink-0">
                  6
                </div>
                <div className="flex w-full bg-[#264653] h-0.5 "></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="sm:text-lg font-semibold text-gray-900 ">
                  6 Months
                </h3>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0 w-1/5">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-14 h-14 bg-white rounded-full ring-2 ring-[#264653]  shrink-0">
                  9
                </div>
                <div className="flex w-full bg-[#264653] h-0.5 "></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="sm:text-lg font-semibold text-gray-900 ">
                  9 Months
                </h3>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0 w-1/5">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-14 h-14 bg-white rounded-full ring-2 ring-[#264653]  shrink-0">
                  12
                </div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="sm:text-lg font-semibold text-gray-900 ">
                  12 Months
                </h3>
              </div>
            </li>
          </ol>
        </SectionWrapperWhite>

        <SectionWrapperWhite id="centres">
          <SectionHeaderWhite title="Participating Centres" />
          <div className="grid lg:grid-cols-3 gap-10 mb-4">
            <CenterCard
              name="Western General Hospital"
              city="Edinburgh"
              pi="Dr Gwo-Tzer Ho"
              image_url="/static/images/edinburgh.jpg"
            />
            <CenterCard
              name="Queen Elizabeth University Hospital"
              city="Glasgow"
              pi="Dr John Paul Seenan & Dr Jonathan MacDonald"
              image_url="/static/images/glasgow.jpg"
            />
            <CenterCard
              name="Ninewells Hospital"
              city="Dundee"
              pi="Dr Craig Mowat"
              image_url="/static/images/dundee.jpg"
            />
          </div>
        </SectionWrapperWhite>
        <div className="hidden sm:block">
          <SectionWrapperWhite id="pis">
            <SectionHeaderWhite title="Participant Information Sheet" />
            <InlinePDFViewer pdf_file_path="/static/files/musicsummarypis.pdf" />
          </SectionWrapperWhite>
        </div>
        <SectionWrapperWhite id="downloads">
          <SectionHeaderWhite title="Downloads" />
          <div className="sm:text-lg md:text-xl">
            <FileDownload
              filename="Full Participant Information Sheet v3.0"
              file_path="/static/files/musicfullpis.pdf"
            />

            <FileDownload
              filename="Summary Participant Information Sheet v1.0"
              file_path="/static/files/musicsummarypis.pdf"
            />

            <FileDownload
              filename="Patient Public Involvement and Engagement: A Strategic Vision to
              Combine High Quality Clinical Care with Research"
              file_path="/static/files/music_ppi_strategy.pdf"
            />
          </div>
        </SectionWrapperWhite>
      </main>
    </MotionPage>
  );
}
