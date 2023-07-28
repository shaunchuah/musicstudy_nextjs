import Image from "next/image";
import PublicationCard from "../components/PublicationCard";
import MotionPage from "../components/MotionPage";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";

export default function Investigators() {
  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <SectionWrapper id="design">
          <SectionHeader title="Study Design" />
          <div className="max-w-screen-lg mx-auto py-12">
            <Image
              src="/static/marvel_study_overview.png"
              alt="Marvel Study Design Overview"
              height="650"
              width="1920"
            />
            <div className="flex flex-row-reverse">
              <a
                href="/static/marvel_study_overview.png"
                target="_blank"
                className="hover:text-[#008000] text-gray-600 text-sm flex gap-1 flex-row"
              >
                Full Size Image
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
            <div className="border rounded p-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Design
              </h2>
              <p>
                MARVEL is a randomised, double-blind, multi-centre trial in
                patients with a moderate flare of ulcerative colitis.
              </p>
            </div>
            <div className="border rounded p-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Aims
              </h2>
              <p>
                MARVEL aims to test the validity of mitochondrial antioxidant
                therapy in the context of a UC flare.
              </p>
            </div>
            <div className="border rounded p-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Setting
              </h2>
              <p>
                MARVEL will initially open in Edinburgh, Glasgow and Dundee with
                a plan for 20 sites in total across the UK.
              </p>
            </div>
            <div className="border rounded p-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Population
              </h2>
              <p>MARVEL plans to recruit 250 adult patients.</p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="endpoints">
          <SectionHeader title="Endpoints" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="py-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Primary
              </h2>
              <ul>
                <li>
                  <h3 className="text-lg font-bold">
                    Clinical Response at Week 12
                  </h3>
                  <p>
                    A decrease from baseline Mayo Score of at least 3 points and
                    at least 30%, with accompanying decrease in the subscore for
                    rectal bleeding of at least 1 point or an absolute subscore
                    of rectal bleeding of 0 or 1.
                  </p>
                </li>
              </ul>
            </div>
            <div className="py-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Secondary
              </h2>
              <ul className="list-disc list-outside ml-4 pl-4 text-lg">
                <li>Clinical remission at week 12</li>
                <li>Clinical response and remission at week 24</li>
                <li>Mucosal healing</li>
                <li>Normalization of faecal calprotectin</li>
                <li>Normalization of faecal haemoglobin</li>
                <li>Treatment escalation rates</li>
                <li>Colectomy rates</li>
                <li>Adverse event rates</li>
                <li>Drug concentration analyses</li>
              </ul>
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper id="criteria">
          <SectionHeader title="Inclusion &amp; Exclusion Criteria" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="py-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Inclusion
              </h2>
              <ul className="list-disc list-outside ml-4 pl-4 text-lg">
                <li>Active UC</li>
                <li>&ge;18 years old</li>
                <li>Established diagnosis of UC for &ge;3 months</li>
                <li>Able and willing to give informed consent</li>
                <li>
                  Able to take prednisolone at the same time as study
                  drug/placebo
                </li>
                <li>Stable on maintenance dose prior to flare</li>
                <li>5-ASA dose stable for at least 4 weeks</li>
                <li>Thiopurine dose stable for at least 8 weeks</li>
              </ul>
            </div>

            <div className="py-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Exclusion
              </h2>
              <ul className="list-disc list-outside ml-4 pl-4 text-lg">
                <li>
                  Severe extensive colitis likely to require hospitalisation or
                  surgery
                </li>
                <li>Any previous biologic treatments</li>
                <li>UC confined to proctitis (15cm or less)</li>
                <li>UC with PSC</li>
                <li>Pregnancy</li>
                <li>
                  IV steroids, cyclosporin, mycophenolate or tacrolimus within 8
                  weeks of screening
                </li>
                <li>Proven GI infection</li>
                <li>Known allergy/contraindication to MitoQ</li>
                <li>Currently taking any products containing Coenzyme Q10</li>
                <li>
                  Subjects with current - or recent history of - severe,
                  progressive, or uncontrolled renal, hepatic, haematological,
                  gastrointestinal, metabolic (including uncontrolled
                  hypercholesterolemia), endocrine, pulmonary, cardiac,
                  neurological disease.
                </li>
                <li>
                  Subjects with current barriers in language or communication
                  that in the judgement of local PI will impede the completion
                  of the trial.
                </li>
                <li>
                  A history of overdose or suicide, or significant active mental
                  health problems.
                </li>
              </ul>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="science">
          <SectionHeader title="Scientific Basis" />
          <PublicationCard
            publicationDate="10 February 2022"
            journal="Annual Review of Physiology"
            authors="Gwo-Tzer Ho, Arianne L. Theiss"
            title="Mitochondria and Inflammatory Bowel Diseases: Toward a Stratified Therapeutic Intervention
            Annual Review of Physiology"
            externalLink="https://doi.org/10.1146/annurev-physiol-060821-083306"
          />
          <PublicationCard
            publicationDate="12 November 2020"
            journal="Immunotherapy Advances"
            authors="Emily Gwyer Findlay, Greg Sutton, Gwo-Tzer Ho, BSI Inflammation Affinity Group Trialswatch Team"
            title="The MARVEL trial: a phase 2b randomised placebo-controlled trial of oral MitoQ in moderate ulcerative colitis"
            externalLink="https://academic.oup.com/immunotherapyadv/article/1/1/ltaa002/5985574"
          />
          <PublicationCard
            publicationDate="3 January 2019"
            journal="Nature Communications"
            authors="Yael Haberman, Rebekah Karns, Phillip J. Dexheimer, Melanie Schirmer, Judith Somekh, Ingrid Jurickova, Tzipi Braun, Elizabeth Novak, Laura Bauman, Margaret H. Collins, Angela Mo, Michael J. Rosen, Erin Bonkowski, Nathan Gotman, Alison Marquis, Mason Nistel, Paul A. Rufo, Susan S. Baker, Cary G. Sauer, James Markowitz, Marian D. Pfefferkorn, Joel R. Rosh, Brendan M. Boyle, David R. Mack, Robert N. Baldassano, Sapana Shah, Neal S. Leleiko, Melvin B. Heyman, Anne M. Grifiths, Ashish S. Patel, Joshua D. Noe, Bruce J. Aronow, Subra Kugathasan, Thomas D. Walters, Greg Gibson, Sonia Davis Thomas, Kevin Mollen, Shai Shen-Orr, Curtis Huttenhower, Ramnik J. Xavier, Jeffrey S. Hyams & Lee A. Denson."
            title="Ulcerative colitis mucosal transcriptomes reveal mitochondriopathy and personalized mechanisms underlying disease severity and treatment response"
            externalLink="https://www.nature.com/articles/s41467-018-07841-3"
          />
        </SectionWrapper>
        
      </main>
    </MotionPage>
  );
}
