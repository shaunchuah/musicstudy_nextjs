import MotionPage from "../components/MotionPage";
import SectionHeaderWhite from "../components/SectionHeaderWhite";
import SectionWrapperWhite from "../components/SectionWrapperWhite";
import CenterCard from "../components/ui/CenterCard";
import InlinePDFViewer from "../components/InlinePDFViewer";
import FileDownload from "../components/FileDownload";

export default function Participants() {
  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <SectionWrapperWhite id="introduction">
          <SectionHeaderWhite title="What is the Mini-MUSIC study?" />
          <div className="text-xl space-y-4 max-w-prose">
            <p>
              The Mini-MUSIC study is a year-long observational research study
              for children and young people with IBD. Study appointments occur
              at 3 time points (0, 3 and 12 months) over this year.
            </p>
            <p>
              The Mini-MUSIC study is the paediatric arm of the adult IBD MUSIC
              study making this research an all-ages IBD study.
            </p>
            <p>
              We hope that this study will unlock new scientific insights into
              what causes and drives gut inflammation in paediatric inflammatory
              bowel disease.
            </p>
            <p>
              During the year follow-up period, blood, stool and saliva samples
              are taken for scientific analyses. If you or your child are
              undergoing an endoscopy during the one-year study follow-up,
              additional intestinal biopsy samples will be taken.
            </p>
          </div>
        </SectionWrapperWhite>

        <SectionWrapperWhite id="research">
          <SectionHeaderWhite title="Research Objectives" />
          <div className="text-xl space-y-4 max-w-prose">
            <p>We aim to investigate two things:</p>
            <p>
              How damage-associated molecular patterns (DAMPs) or &apos;danger
              signals&apos; could be used as a test of disease activity in children
              and young people with IBD (Crohn&apos;s disease or ulcerative colitis
              or IBD-unclassified). We want to find out if DAMPs can tell us how
              your IBD is doing and if DAMPs can tell us more about how your
              bowel is compared to the current blood and stool tests available
              today.
            </p>
            <p>
              How do the bacteria in the mouth and the rest of your gut (your
              microbiome) change in Crohn&apos;s disease and ulcerative colitis and
              can these be used to predict disease activity?
            </p>
          </div>
        </SectionWrapperWhite>

        <SectionWrapperWhite id="takepart">
          <SectionHeaderWhite title="Why Take Part?" />
          <div className="text-xl space-y-4 max-w-prose">
            <ul className="list-disc list-outside pl-4 space-y-4">
              <li>
                Mini-MUSIC runs in conjunction with existing NHS IBD treatment
                by your paediatric IBD clinical team. The research team simply
                aims to monitor you or your child closely as the condition
                hopefully improves. You or your child will remain being cared
                for by your IBD team.
              </li>
              <li>
                We will aim to organise research study appointments at the same
                time as NHS appointments to minimise the impact on school and
                work.
              </li>
              <li>
                It may be a learning opportunity. Knowing more about the
                condition and its treatment may help you or your child get back
                to full health as soon as possible.
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
              <li>Age 6 to 17 years</li>
              <li>
                Who have a diagnosis, or suspected diagnosis, of Crohn&apos;s disease
                (CD) or ulcerative colitis (UC) or or IBD-unclassified (IBDU)
              </li>
              <li>Who have been referred by one of their NHS doctors</li>
              <li>
                Based in our 4 Scottish paediatric IBD centres in Edinburgh,
                Glasgow, Aberdeen and Dundee
              </li>
            </ul>
          </div>
        </SectionWrapperWhite>

        <SectionWrapperWhite id="involvement">
          <SectionHeaderWhite title="What is Involved?" />
          <div className="text-xl space-y-4 max-w-prose mb-12">
            <p>
              This is a 12-month follow-up study that will involve 3
              appointments over the course of one year. We plan to closely
              monitor your clinical progress alongside the scientific work which
              we will carry out. We will take 25ml extra blood (around 2
              tablespoons) during your standard NHS blood tests along with a
              saliva and stool sample. No extra endoscopies are required
              however, if you are having an endoscopy as part of your normal
              treatment we will ask for some additional biopsy samples.
            </p>
            <p>
              During the follow-up period, we will gather information on how you
              are doing, which will be shared with your treating NHS clinician.
            </p>
            <p>
              This may allow them to make treatment adjustments and check on how
              you&apos;re doing more closely than usual. For full details, please
              read the age-specific patient information sheet.
            </p>
          </div>

          <ol className="items-center flex mx-auto">
            <li className="relative mb-6 sm:mb-0 w-1/3 md:w-1/5">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-14 h-14 bg-white rounded-full ring-2 ring-primary  shrink-0">
                  0
                </div>
                <div className="flex w-full bg-primary h-0.5 "></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="sm:text-lg font-semibold text-gray-900 ">Start</h3>
                <ol className="text-base font-normal text-gray-500 list-disc list-outside pl-4 ">
                  <li>Questionnaire</li>
                  <li>Blood samples</li>
                  <li>Stool sample</li>
                  <li>Saliva sample</li>
                  <li>+/- Extra endoscopy sample</li>
                </ol>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0 w-1/3 md:w-3/5">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-14 h-14 bg-white rounded-full ring-2 ring-primary  shrink-0">
                  3
                </div>
                <div className="flex w-full bg-primary h-0.5 "></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="sm:text-lg font-semibold text-gray-900 ">
                  3 Months
                </h3>
                <ol className="text-base font-normal text-gray-500 list-disc list-outside pl-4 ">
                  <li>Questionnaire</li>
                  <li>Blood samples</li>
                  <li>Stool sample</li>
                  <li>Saliva sample</li>
                  <li>+/- Extra endoscopy sample</li>
                </ol>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0 w-1/3 md:w-1/5">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-14 h-14 bg-white rounded-full ring-2 ring-primary  shrink-0">
                  12
                </div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="sm:text-lg font-semibold text-gray-900 ">
                  12 Months
                </h3>
                <ol className="text-base font-normal text-gray-500 list-disc list-outside pl-4 ">
                  <li>Questionnaire</li>
                  <li>Blood samples</li>
                  <li>Stool sample</li>
                  <li>Saliva sample</li>
                  <li>+/- Extra endoscopy sample</li>
                </ol>
              </div>
            </li>
          </ol>
        </SectionWrapperWhite>

        <SectionWrapperWhite id="centres">
          <SectionHeaderWhite title="Participating Centres" />
          <div className="grid lg:grid-cols-4 gap-6 mb-4">
            <CenterCard
              name="Royal Hospital for Children and Young People"
              city="Edinburgh"
              pi="David Wilson"
              image_url="/static/images/edinburgh_ch.png"
            />
            <CenterCard
              name="Royal Hospital for Children"
              city="Glasgow"
              pi="David Wands"
              image_url="/static/images/glasgow_ch.png"
            />
            <CenterCard
              name="Royal Aberdeen Children's Hospital"
              city="Aberdeen"
              pi="Iain Chalmers"
              image_url="/static/images/aberdeen_ch.png"
            />
            <CenterCard
              name="Tayside Children's Hospital"
              city="Dundee"
              pi="Richard Hansen"
              image_url="/static/images/dundee_ch.png"
            />
          </div>
        </SectionWrapperWhite>
        <div className="hidden sm:block">
          <SectionWrapperWhite id="pis">
            <SectionHeaderWhite title="Participant Information Sheet" />
            <InlinePDFViewer pdf_file_path="/static/files/minimusic_parentguardian.pdf" />
          </SectionWrapperWhite>
        </div>
        <SectionWrapperWhite id="downloads">
          <SectionHeaderWhite title="Downloads" />
          <div className="sm:text-lg md:text-xl">
            <FileDownload
              filename="Participant Information Sheet - Parents/Guardians"
              file_path="/static/files/minimusic_parentguardian.pdf"
            />
            <FileDownload
              filename="Participant Information Sheet - Age 6-11"
              file_path="/static/files/minimusic_6-11.pdf"
            />
            <FileDownload
              filename="Participant Information Sheet - Age 12-15"
              file_path="/static/files/minimusic_12-15.pdf"
            />
            <FileDownload
              filename="Participant Information Sheet - Age 16-17"
              file_path="/static/files/minimusic_16-17.pdf"
            />
          </div>
        </SectionWrapperWhite>
      </main>
    </MotionPage>
  );
}
