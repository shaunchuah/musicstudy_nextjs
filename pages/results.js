import MotionPage from "../components/MotionPage";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";

export default function Results() {
  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <SectionWrapper id="results">
          <SectionHeader title="Results" />
          <div className="flex justify-center text-xl items-center h-96">
            Results will be released here when the study is complete.
          </div>
        </SectionWrapper>
      </main>
    </MotionPage>
  );
}
