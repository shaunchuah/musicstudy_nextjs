import MotionPage from "../components/MotionPage";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";
import data from "../data/results.json";
import Image from "next/image";
export default function Results() {
  const ResultsData = data;

  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <SectionWrapper id="results">
          <SectionHeader title="Results" />
          <div className="grid justify-center text-xl items-center space-y-8">
            {/* Card Group */}
            <div className="bg-white text-[#264653] shadow-md rounded-lg p-8 max-w-5xl">
              <h2 className="text-3xl font-bold mb-2">
                Patient-led Analysis of Inflammatory Bowel Disease: Defining an
                Equitable Approach towards Patient-Centric IBD care
              </h2>
              <div className="text-base mb-8">
                Molly J Halligan, Aerin E Thompson, Destiny Docherty, Patricia
                Kelly, Emma Pryde, Crohn's and Colitis UK, Rebecca Hall and
                Gwo-Tzer Ho
              </div>
              <div className="mb-8">
                <div class="grid grid-cols-2 gap-8">
                  <div>
                    <figure className="border rounded-lg p-4 shadow-md">
                      <svg
                        className="w-8 h-8 mx-auto mb-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14"
                      >
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                      <blockquote>
                        <p class="text-lg">
                          This draft report analyses and discusses patient
                          reported concerns from a survey exploring Wellbeing
                          living with Inflammatory Bowel Disease (IBD). This
                          report was developed by members of the IBD Patient
                          Public Involvement (PPI) group who have lived
                          experience of either Crohn's disease or colitis.
                          <br />
                          <br />
                          The report draws together survey responses and the PPI
                          group members' experiences of managing wellbeing
                          living with IBD. The key findings highlight priority
                          areas for future research, such as improving quality
                          of life overall, addressing the confusion around the
                          term 'remission', and improving access to mental
                          health support. The report also outlines a number of
                          interconnected issues across the themes explored.
                          <br />
                          <br />
                          Currently, the project group is working to refine this
                          report and strengthen its ability to influence
                          clinical-based research, practice, and challenge
                          traditional models of PPI work.
                        </p>
                      </blockquote>

                      <figcaption class="flex items-center justify-center mt-6 space-x-3">
                        <Image
                          src="/static/images/ppi.jpg"
                          alt="Molly Halligan"
                          width="36"
                          height="36"
                          className="rounded-full"
                        />
                        <div class="flex items-center divide-x-2 divide-gray-500 ">
                          <div class="pr-3 font-medium flex-none">Molly Halligan</div>
                          <div class="pl-3 text-sm">
                            on behalf of the Gut Research Group Patient PPIE
                            team
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                  <div>
                    <figure className="border rounded-lg p-4 shadow-md">
                      <svg
                        className="w-8 h-8 mx-auto mb-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14"
                      >
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                      <blockquote>
                        <p class="text-lg">
                          This is an immensely impactful work driven entirely by
                          our patient group. As both clinician and researcher, I
                          (and my whole team) have learned a lot and this have
                          changed my practice. We aim to publish this work as a
                          model of patient public involvement work that is
                          wholly led by our patients.
                        </p>
                      </blockquote>
                      <figcaption class="flex items-center justify-center mt-6 space-x-3">
                        <Image
                          src="/static/images/gth.jpg"
                          alt="Gwo-Tzer Ho"
                          width="36"
                          height="36"
                          className="rounded-full"
                        />
                        <div class="flex items-center divide-x-2 divide-gray-500 ">
                          <div class="pr-3 font-medium flex-none">
                            Professor Gwo-Tzer Ho
                          </div>
                          <div class="pl-3 text-sm">
                            on behalf of the MUSIC IBD team
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex flex-row justify-between items-start">
                  <div>
                    <h3 className="uppercase text-sm font-medium mb-1">
                      Links
                    </h3>
                    <div className="text-sm flex space-x-2">
                      <a
                        href="/static/files/patient_led_analysis_of_ibd.pdf"
                        target="_blank"
                        className="flex items-center hover:text-[#e76f51]"
                      >
                        <svg
                          data-slot="icon"
                          fill="none"
                          stroke-width="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="mr-1 w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          ></path>
                        </svg>
                        PDF
                      </a>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Draft Paper | 20 January 2025
                  </div>
                </div>
              </div>
            </div>
            {/* End Card Group */}

            {/* Card Group */}
            <div className="bg-white text-[#264653] shadow-md rounded-lg p-8 max-w-5xl">
              <h2 className="text-3xl font-bold mb-2">
                Characterisation of 3000 patient reported outcomes with
                predictive machine learning to develop a scientific platform to
                study fatigue in Inflammatory Bowel Disease
              </h2>
              <div className="text-base mb-8">
                Rebecca Hall, Robert J Whelan, Peter D Cartlidge, Emily F
                Brownson, Craig Mowat, John Paul Seenan, Jonathan C MacDonald,
                Iona AM Campbell, Gwo-Tzer Ho, Shaun Chuah
              </div>
              <div className="mb-8 text-base">
                <p className="mb-2">
                  <b>Background:</b> Fatigue is commonly identified by IBD
                  patients as major issue that affects their wellbeing. This
                  presentation, however, is complex, multifactorial and mired in
                  clinical heterogeneity.
                </p>
                <p className="mb-2">
                  <b>Aims/Methods:</b> We prospectively captured patient
                  reported outcomes (PROs) from 2 current IBD biomarker studies
                  in Scotland with ~100 clinical metadata points; and an
                  international dataset (that includes non-IBD healthy controls)
                  using CUCQ32, a validated IBD questionnaire to generate a
                  contemporaneous dataset of fatigue and overall wellbeing
                  (2021-2024) and utilized 6 different machine learning (ML)
                  approaches to predict IBD-associated fatigue and patterns that
                  may aid future stratification to human mechanistic and
                  clinical studies.
                </p>
                <p className="mb-2">
                  <b>Results:</b> In 2 970 responses from 2 290 participants,
                  CUCQ32 were higher in active IBD vs. remission; and in
                  remission, higher than in non-IBD controls (both p&lt;0.0001).
                  CUCQ32-specific fatigue score significantly correlated to all
                  CUCQ32 components (p=2.9 x 10-28 to 3.2 x 10-147). During
                  active IBD, patients had significantly more fatigue days
                  compared to those in remission and non-IBD controls (medians
                  14 vs. 7 vs. 4 [out of 14 days]; both p&lt;0.0001). We
                  determine a threshold of ≥10/14 days of fatigue as clinically
                  relevant - Fatiguehigh. Overall, 72.8% (863/1185), 45.0%
                  (408/906) and 13.7% (46/355) responses in active, remission
                  and non-IBD controls were in Fatiguehigh. Using
                  train-validate-test steps, we incorporated all available
                  metadata to generate ML-models to predict Fatiguehigh. The 6
                  ML models performed similarly (all 6 models AUC of ~0.70).
                  SHapley Additive exPlanations (SHAP) analysis revealed that
                  each algorithm places different importance on variables with
                  seasonality, biologic drug levels, BMI and gender identified
                  as factors. ML prediction of Fatiguehigh in patients in
                  biochemical remission (CRP&lt;5 mg/l and calprotectin
                  &lt;250ug/g) was more challenging with AUC of 0.66-0.61.
                </p>
                <p>
                  <b>Conclusion:</b> We provide a comprehensive patient
                  involvement-ML-pathway to predict IBD-associated fatigue. Our
                  data suggests a large 'hidden' pathobiological component and
                  current work is in progress to integrate deep molecular data
                  and build a clinical-scientific ML model as a step towards
                  better understanding of IBD-associated fatigue.
                </p>
              </div>
              <div className="border-t pt-4">
                <div className="flex flex-row justify-between items-start">
                  <div>
                    <h3 className="uppercase text-sm font-medium mb-1">
                      Links
                    </h3>
                    <div className="text-sm flex space-x-2">
                      <a
                        href="/static/files/machine_learning_for_ibd_fatigue.pdf"
                        target="_blank"
                        className="flex items-center hover:text-[#e76f51]"
                      >
                        <svg
                          data-slot="icon"
                          fill="none"
                          stroke-width="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="mr-1 w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          ></path>
                        </svg>
                        PDF
                      </a>

                      <a
                        href="https://www.medrxiv.org/content/10.1101/2025.01.18.25320777v1"
                        target="_blank"
                        className="flex items-center hover:text-[#e76f51]"
                      >
                        <svg
                          data-slot="icon"
                          fill="none"
                          stroke-width="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="mr-1 w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          ></path>
                        </svg>
                        MedRXiv
                      </a>
                      <a
                        href="https://github.com/1-gut/machine_learning_for_ibd_fatigue"
                        target="_blank"
                        className="flex items-center hover:text-[#e76f51]"
                      >
                        <svg
                          data-slot="icon"
                          fill="none"
                          stroke-width="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="mr-1 w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          ></path>
                        </svg>
                        GitHub Repository
                      </a>

                      
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Preprint | 20 January 2025
                  </div>
                </div>
              </div>
            </div>
            {/* End Card Group */}
          </div>
        </SectionWrapper>
      </main>
    </MotionPage>
  );
}
