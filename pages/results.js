import MotionPage from "../components/MotionPage";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";
import PaperCard from "../components/ui/PaperCard";
import SEOHead from "../components/SEOHead";

export default function Results() {
  return (
    <>
      <SEOHead
        title="Research Results"
        description="Discover the latest research findings from the MUSIC and Mini-MUSIC IBD studies, including the published patient-led papers and archival preprints."
      />
      <MotionPage>
        <main className="flex flex-col w-full">
          <SectionWrapper id="results">
            <SectionHeader title="Results" />
            <div className="max-w-4xl mb-8 mx-auto ">
              <p className="text-lg">
                The MUSIC Study is beginning to generate findings that improve
                our understanding of inflammatory bowel disease. Below are our
                current publications, with archival preprints still linked
                where available.
              </p>
              <p className="text-lg text-gray-200 mt-4">Last updated: April 2026</p>
            </div>
            <div className="grid justify-center items-center space-y-8">
              <PaperCard
                title="Patient-led thematic analysis on the impact of living with inflammatory bowel disease: a contemporary appraisal of 415 patient-reported outcomes to improve care and research"
                authors="Molly J Halligan, Aerin E Thompson, Destiny Docherty, Patricia Kelly, Emma Pryde, Cher Shiong Chuah, Rebecca Hall and Gwo-tzer Ho"
                abstract={{
                  background:
                    "The conceptual context of wellbeing for people living with inflammatory bowel disease (IBD) is complex and encompasses many dimensions. Here, we employed a wholly patient-led analysis to provide a unique \"patient first\" narrative on wellbeing and IBD.",
                  methods:
                    "Our report draws on data from a Wellbeing Survey led by the Glasgow and Edinburgh IBD Science team as part of the MUSIC IBD cohort study (www.musicstudy.uk) with over 1375 IBD respondents in 2023 from the United Kingdom and globally. Our public and patient involvement (PPI) group utilized unstructured patient-reported experiences and conducted a high-level topic analysis and based their own lived experience of IBD to explore and assimilate the 415 free-text responses on the priorities and unmet needs of our IBD participants. Within the PPI group, a transparent structure of patient-led analysis, identification of key topic areas, discussion, and finally writing was agreed at the start of the project with minimal input from the clinical team.",
                  results:
                    "The analysis provided an in-depth exploration of several key themes affecting wellbeing in IBD patients. Of interest, the PPI group discussed and explored themes such as \"what does remission mean?,\" access to care, expectations of self-management, mental and women's health. The patient narratives highlighted the variability of IBD experiences, the interconnectedness of these issues, and the importance of holistic, patient-centric approaches to care. The findings emphasize the necessity for improved support, both within and beyond healthcare settings. The findings are written and presented by our PPI group to provide viewpoints that resonate directly with people living with IBD.",
                  conclusion:
                    "Our patient-led research approach demonstrates that allowing patients to lead in analysis (\"taking the reins\") and reporting provides deeper and impactful insights into IBD experiences. By shifting the lens of analysis via the patient when integrating their perspectives into wellbeing, this study advocates for a patient-dominant approach to research and care, which can provide unique insights into ways to improve outcomes and to address the complexities of living with IBD.",
                }}
                explorationLink="/patients-taking-the-lead"
                explorationButtonText="Explore paper and audiobook"
                pdfLink="/static/files/cc360_patient_led_analysis.pdf"
                pdfLinkLabel="Published article PDF"
                publisherLink="https://academic.oup.com/crohnscolitis360/article/8/1/otag011/8487896"
                publisherLinkLabel="Publisher website"
                preprintLink="https://www.medrxiv.org/content/10.1101/2025.03.19.25324163v1"
                footerText="Published in Crohn's & Colitis 360 | 16 February 2026"
              />

              <PaperCard
                title="Machine-learning approach to dissect the clinical heterogeneity of IBD-associated fatigue"
                authors="Cher S Chuah, Rebecca Hall, Robert J Whelan, Peter D Cartlidge, Beatriz Gros, Eva Iglesias-Flores, Nikita Parkash, Ray K Boyapati, Clara Ramos-Belinchon, Solomon Ong, Emily F Brownson, Iona A M Campbell, Craig Mowat, John P Seenan, Jonathan C MacDonald, MUSIC Patient-Public Involvement Group and Gwo-Tzer Ho"
                abstract={{
                  background:
                    "Extreme and persistent fatigue affects >50% of individuals with inflammatory bowel disease (IBD), with similar prevalence across many common immune-mediated inflammatory diseases (IMIDs). Despite its ubiquity, human scientific studies have yet to fully explain the mechanistic basis of this complex symptom. One fundamental reason is our inability to account for the clinical heterogeneity and multifactorial nature of fatigue.",
                  methods:
                    "We present the conceptual machine-learning (ML) framework to dissect fatigue using one of the largest prospectively captured, real-world patient-reported outcome (PROs) on well-being from three contemporaneous cohorts (2020-present), totalling 2970 responses from 2290 participants across the UK and internationally, including non-IBD controls with 100 lines of clinical metadata. In parallel, our patient public involvement group performed thematic analysis of this PRO dataset, which identified fatigue as a key research priority (www.musicstudy.uk).",
                  results:
                    "We systematically defined the (1) threshold of fatigue as our primary outcome (>=10/14 fatigue days in 1604 patients (1151 responses in active disease and 1061 responses in remission; some patients measured longitudinally; median fatigue days 14 vs 7, respectively; p<0.001) to build our ML approach, (2) used routinely available clinical data that can be used at a population-level analysis, (3) employed seven different ML methods with external validation in three different cohorts in the UK, Spain and Australia (n=252), (4) employed Shapley Additive Explanations (SHAP) analysis to break down clinical heterogeneity and allow the examination of clinical predictive factors at an individual level; and finally, (5) investigated whether there are distinct clusters of fatigue patients. We found that ML models performed comparably (area under the curve/C-index ~0.7) on external validation with SHAP analysis showing interpretable, individualised fatigue drivers and five distinct fatigue cluster groups, including a subgroup with lower fatigue burden.",
                  conclusion:
                    "Our data provide the ML 'roadmap' to predict and deconstruct fatigue in IBD and potentially more widely in IMIDs, enabling patient-level dissection beyond symptom-based classification with the ability to integrate deep molecular data. This is a step towards future clinical-scientific artificial intelligence models with immediate clinical application to stratify patients for human experimental studies to better identify patient-level patterns associated with fatigue.",
                }}
                pdfLink="/static/files/bmjdh_ml_ibd_fatigue.pdf"
                pdfLinkLabel="Published article PDF"
                publisherLink="https://bmjdigitalhealth.bmj.com/content/2/1/e000037"
                publisherLinkLabel="Publisher website"
                preprintLink="https://www.medrxiv.org/content/10.1101/2025.01.18.25320777v1"
                githubLink="https://github.com/1-gut/machine_learning_for_ibd_fatigue"
                footerText="Published in BMJ Digital Health & AI | 26 February 2026"
              />
            </div>
          </SectionWrapper>
        </main>
      </MotionPage>
    </>
  );
}
