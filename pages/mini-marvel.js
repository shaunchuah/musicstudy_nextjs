import MotionPage from "../components/MotionPage";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";
import CenterCard from "../components/CenterCard";
import Image from "next/image";

export default function Participants() {
  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <div className="m-4 flex text-xl justify-center text-orange-700 border-2 border-orange-700 p-4 rounded-xl shadow-xl items-center">
          <svg
            class="w-8 h-8 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            ></path>
          </svg>
          mini-Marvel is not yet recruiting. Stay tuned.
        </div>

        <SectionWrapper id="overview">
          <SectionHeader title="mini-Marvel Study Overview" />
          <div className="flex justify-center">
            <div className="lg:w-2/3 border p-6 rounded-lg shadow mb-8">
              <Image
                src="/static/mini_marvel_study_overview.png"
                alt="mini-Marvel Study Design Overview"
                height="899"
                width="1883"
                priority={true}
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="introduction">
          <SectionHeader title="Introducing mini-Marvel" />

          <div className="flex justify-center">
            <iframe
              width="720"
              height="405"
              src="https://www.youtube.com/embed/2OC58SdYJCo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </SectionWrapper>

        <SectionWrapper id="participating_centres">
          <SectionHeader title="Participating Centres" />
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-8">
            <div className="col-span-2">
              <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
                <CenterCard
                  name="Royal Hospital for Children & Young People"
                  city="Edinburgh"
                />
                <CenterCard name="Royal Hospital for Children" city="Glasgow" />
                <CenterCard
                  name="Royal Aberdeen Children's Hospital"
                  city="Aberdeen"
                />
                <CenterCard name="Royal London Hospital" city="London" />
                <CenterCard
                  name="Evelina London Children's Hospital"
                  city="London"
                />
                <CenterCard name="Great Ormond Street Hospital" city="London" />
                <CenterCard
                  name="Alder Hey Children's Hospital"
                  city="Liverpool"
                />
                <CenterCard
                  name="Bristol Royal Hospital for Children"
                  city="Bristol"
                />
                <CenterCard name="John Radcliffe Hospital" city="Oxford" />
                <CenterCard
                  name="Birmingham Children's Hospital"
                  city="Birmingham"
                />
              </div>
            </div>
            <div className="col-span-1">
              <Image
                src="/static/mini-marvel_centres_v2.jpg"
                alt="mini-Marvel centres"
                height="1112"
                width="684"
                className="rounded-lg"
              />
            </div>
          </div>
        </SectionWrapper>
        

        <SectionWrapper id="downloads">
          <SectionHeader title="Downloads" />
          <div className="text-xl">
            <a
              href="/static/files/marvel_patient_info_v5.0.pdf"
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
              Lay Summary
            </a>
          </div>
        </SectionWrapper>
      </main>
    </MotionPage>
  );
}
