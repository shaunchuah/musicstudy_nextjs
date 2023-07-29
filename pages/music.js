import MotionPage from "../components/MotionPage";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";
import Image from "next/image";
import MarvelCenterCard from "../components/MarvelCenterCard";

export default function Participants() {
  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <SectionWrapper id="introduction">
          <SectionHeader title="Marvel Study Overview" />
          <div className="flex justify-center">
            <div className="lg:w-2/3 border p-6 rounded-lg shadow mb-8">
              <Image
                src="/static/marvel_study_overview.png"
                alt="Marvel Study Design Overview"
                height="650"
                width="1920"
                priority={true}
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="centres">
          <SectionHeader title="Participating Centres" />
          <div className="grid lg:grid-cols-3 gap-8 mb-4">
            <MarvelCenterCard
              name="Western General Hospital"
              city="Edinburgh"
              pi="Dr Gwo-Tzer Ho"
              image_url="/static/edinburgh.jpg"
            />

            <MarvelCenterCard
              name="Queen Elizabeth University Hospital"
              city="Glasgow"
              pi="Dr John Paul Seenan & Dr Jonathan MacDonald"
              image_url="/static/glasgow.jpg"
            />
            <MarvelCenterCard
              name="Gartnavel General Hospital"
              city="Glasgow"
              pi="Dr John Paul Seenan & Dr Jonathan MacDonald"
              image_url="/static/glasgow.jpg"
            />

            <MarvelCenterCard
              name="Glasgow Royal Infirmary"
              city="Glasgow"
              pi="Prof Daniel Gaya"
              image_url="/static/glasgow.jpg"
            />

            <MarvelCenterCard
              name="Ninewells Hospital"
              city="Dundee"
              pi="Dr Craig Mowat"
              image_url="/static/dundee.jpg"
            />
            <MarvelCenterCard
              name="St George's Hospital"
              city="London"
              pi="Dr Kamal Patel"
              image_url="/static/glasgow.jpg"
            />
            <MarvelCenterCard
              name="Darlington Memorial Hospital"
              city="Darlington"
              pi="Dr Anjan Dhar"
              image_url="/static/glasgow.jpg"
            />
            <MarvelCenterCard
              name="Pinderfields Hospital"
              city="Wakefield"
              pi="Dr Nick Burr"
              image_url="/static/glasgow.jpg"
            />
            <MarvelCenterCard
              name="Chelsea and Westminster Hospital"
              city="London"
              pi="Dr Ibrahim Al-Bakir"
              image_url="/static/glasgow.jpg"
            />
          </div>
        </SectionWrapper>
        <SectionWrapper id="downloads">
          <SectionHeader title="Participant Information Sheet" />
          <object
            data="/static/files/marvel_patient_info_v7.0.pdf"
            type="application/pdf"
            width="100%"
            height="1080px"
          >
            This browser does not support PDFs. Please download the PDF to view
            it:{" "}
            <a
              href="/static/files/marvel_patient_info_v7.0.pdf"
              target="_blank"
            >
              Download Patient Information Sheet.
            </a>
          </object>
        </SectionWrapper>
        <SectionWrapper id="downloads">
          <SectionHeader title="Downloads" />
          <div className="text-xl">
            <a
              href="/static/files/marvel_patient_info_v7.0.pdf"
              target="_blank"
              className="flex flex-row items-center hover:text-[#008000]"
            >
              <svg
                className="w-8 h-8 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Participant Information Sheet v7.0
            </a>
          </div>
        </SectionWrapper>
      </main>
    </MotionPage>
  );
}
