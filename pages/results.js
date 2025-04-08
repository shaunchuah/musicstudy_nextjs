import MotionPage from "../components/MotionPage";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";
import data from "../data/results.json";
import Image from "next/legacy/image";
import Link from "next/link";
export default function Results() {
  const ResultsData = data;

  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <SectionWrapper id="results">
          <SectionHeader title="Results" />
          <div className="grid justify-center  items-center space-y-8">
            {/* Card Group */}
            <div className="bg-white text-[#264653] shadow-md rounded-lg p-8 max-w-5xl">
              <h2 className="text-3xl font-bold mb-2">
                Patient-led Analysis of Inflammatory Bowel Disease: Defining an
                Equitable Approach towards Patient-Centric IBD care
              </h2>
              <div className="text-base mb-4">
                Molly J Halligan, Aerin E Thompson, Destiny Docherty, Patricia
                Kelly, Emma Pryde, Crohn&apos;s and Colitis UK, Rebecca Hall and
                Gwo-Tzer Ho
              </div>
              <div className="mb-8">
                <div className="mb-4">
                  <Link href="/patients-taking-the-lead" legacyBehavior>
                    <button className="border-[#264653] bg-[#264653] hover:bg-teal-800 text-white py-2 px-6 rounded text-lg">
                      Explore paper and audiobook
                    </button>
                  </Link>
                </div>
                <h3 className="text-2xl font-bold mb-4">Abstract</h3>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Background</h3>
                    <p className="mb-4">
                      This paper investigates a patient-led approach to research
                      on wellbeing in individuals with Inflammatory Bowel
                      Disease (IBD). Traditionally, Public and Patient
                      Involvement (PPI) groups have contributed to the design of
                      clinical research but less often to the analysis and
                      reporting of findings. This study is wholly led by a
                      patient group with no direct input from clinicians, thus
                      presenting an entirely novel and unique patient-centric
                      view.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Methods</h3>
                    <p className="mb-4">
                      This report draws on data from a Wellbeing Survey led by
                      the Edinburgh IBD Science team as part of the MUSIC IBD
                      cohort study (www.musicstudy.uk) with over 1375 IBD
                      respondents over two time periods in 2023 from United
                      Kingdom. The PPI group utilised high-level topic analysis
                      and their own lived experience of IBD to explore the 415
                      free-text survey responses. Regular discussions allowed
                      the team to reflect on patient narratives and generate
                      findings collaboratively. PPI members contributed to both
                      the structure and content of the final write-up, utilising
                      their diverse backgrounds and skillsets.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Results</h3>
                    <p className="mb-4">
                      The analysis provided in-depth exploration of several key
                      themes affecting wellbeing in IBD patients. Of interest,
                      the PPI group discussed and explored themes such as
                      &apos;what does remission mean?&apos;, access to care,
                      expectations of self-management, mental and women&apos;s
                      health. The patient narratives highlighted the variability
                      of IBD experiences, the interconnectedness of these
                      issues, and the importance of holistic, patient-centric
                      approaches to care. The findings emphasise the necessity
                      for improved support, both within and beyond healthcare
                      settings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
                    <p>
                      This patient-led research approach demonstrates that
                      allowing patients to lead in analysis (&apos;taking the
                      reins&apos;) and reporting provides deeper and impactful
                      insights into IBD experiences. By integrating patient
                      perspectives, this study advocates for a patient-dominant
                      approach to research and care, which can improve outcomes
                      and support ways to address the complexities of living
                      with IBD. The model highlights challenges and benefits of
                      this approach, serving as a foundational template for
                      future patient-led collaborations, in addition to the
                      immediate impact of patients&apos; wellbeing from shared
                      experiences, to educating clinicians and people without
                      IBD about the impact of IBD on patients&apos; lives.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="/static/files/patient_led_analysis_of_ibd.pdf"
                        target="_blank"
                        className="flex items-center px-3 py-2 bg-[#264653] text-white rounded-md hover:bg-opacity-90 transition"
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
                      <a
                        href="https://www.medrxiv.org/content/10.1101/2025.03.19.25324163v1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 bg-[#264653] text-white rounded-md hover:bg-opacity-90 transition"
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex flex-row justify-between items-start">
                  <div></div>
                  <div className="text-sm text-gray-400">
                    Preprint | 20 January 2025
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
              <div className="text-base mb-4">
                Rebecca Hall, Robert J Whelan, Peter D Cartlidge, Emily F
                Brownson, Craig Mowat, John Paul Seenan, Jonathan C MacDonald,
                Iona AM Campbell, Gwo-Tzer Ho, Shaun Chuah
              </div>
              <h3 className="text-2xl font-bold mb-4">Abstract</h3>
              <div className="mb-8 text-base">
                <h3 className="text-xl font-semibold mb-2">Background</h3>
                <p className="mb-2">
                  Fatigue is commonly identified by IBD patients as major issue
                  that affects their wellbeing. This presentation, however, is
                  complex, multifactorial and mired in clinical heterogeneity.
                </p>
                <h3 className="text-xl font-semibold mb-2">Methods</h3>
                <p className="mb-2">
                  We prospectively captured patient reported outcomes (PROs)
                  from 2 current IBD biomarker studies in Scotland with ~100
                  clinical metadata points; and an international dataset (that
                  includes non-IBD healthy controls) using CUCQ32, a validated
                  IBD questionnaire to generate a contemporaneous dataset of
                  fatigue and overall wellbeing (2021-2024) and utilized 6
                  different machine learning (ML) approaches to predict
                  IBD-associated fatigue and patterns that may aid future
                  stratification to human mechanistic and clinical studies.
                </p>
                <h3 className="text-xl font-semibold mb-2">Results</h3>
                <p className="mb-2">
                  In 2 970 responses from 2 290 participants, CUCQ32 were higher
                  in active IBD vs. remission; and in remission, higher than in
                  non-IBD controls (both p&lt;0.0001). CUCQ32-specific fatigue
                  score significantly correlated to all CUCQ32 components (p=2.9
                  x 10-28 to 3.2 x 10-147). During active IBD, patients had
                  significantly more fatigue days compared to those in remission
                  and non-IBD controls (medians 14 vs. 7 vs. 4 [out of 14 days];
                  both p&lt;0.0001). We determine a threshold of ≥10/14 days of
                  fatigue as clinically relevant - Fatiguehigh. Overall, 72.8%
                  (863/1185), 45.0% (408/906) and 13.7% (46/355) responses in
                  active, remission and non-IBD controls were in Fatiguehigh.
                  Using train-validate-test steps, we incorporated all available
                  metadata to generate ML-models to predict Fatiguehigh. The 6
                  ML models performed similarly (all 6 models AUC of ~0.70).
                  SHapley Additive exPlanations (SHAP) analysis revealed that
                  each algorithm places different importance on variables with
                  seasonality, biologic drug levels, BMI and gender identified
                  as factors. ML prediction of Fatiguehigh in patients in
                  biochemical remission (CRP&lt;5 mg/l and calprotectin
                  &lt;250ug/g) was more challenging with AUC of 0.66-0.61.
                </p>
                <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
                <p>
                  We provide a comprehensive patient involvement-ML-pathway to
                  predict IBD-associated fatigue. Our data suggests a large
                  &apos;hidden&apos; pathobiological component and current work
                  is in progress to integrate deep molecular data and build a
                  clinical-scientific ML model as a step towards better
                  understanding of IBD-associated fatigue.
                </p>
              </div>
              <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-50 rounded-lg mb-8">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/static/files/machine_learning_for_ibd_fatigue.pdf"
                    target="_blank"
                    className="flex items-center px-3 py-2 bg-[#264653] text-white rounded-md hover:bg-opacity-90 transition"
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
                  <a
                    href="https://www.medrxiv.org/content/10.1101/2025.01.18.25320777v1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 bg-[#264653] text-white rounded-md hover:bg-opacity-90 transition"
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
                  <a
                    href="https://github.com/1-gut/machine_learning_for_ibd_fatigue"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 bg-[#264653] text-white rounded-md hover:bg-opacity-90 transition"
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
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex flex-row justify-between items-start">
                  <div></div>
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
