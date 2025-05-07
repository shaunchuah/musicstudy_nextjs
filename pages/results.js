import MotionPage from "../components/MotionPage";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";
import PaperCard from "../components/ui/PaperCard";
import data from "../data/results.json";

export default function Results() {
  const ResultsData = data;

  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <SectionWrapper id="results">
          <SectionHeader title="Results" />
          <div className="grid justify-center items-center space-y-8">
            
            <PaperCard 
              title="Patient-led Analysis of Inflammatory Bowel Disease: Defining an Equitable Approach towards Patient-Centric IBD care"
              authors="Molly J Halligan, Aerin E Thompson, Destiny Docherty, Patricia Kelly, Emma Pryde, Crohn's and Colitis UK, Rebecca Hall and Gwo-Tzer Ho"
              abstract={{
                background: "This paper investigates a patient-led approach to research on wellbeing in individuals with Inflammatory Bowel Disease (IBD). Traditionally, Public and Patient Involvement (PPI) groups have contributed to the design of clinical research but less often to the analysis and reporting of findings. This study is wholly led by a patient group with no direct input from clinicians, thus presenting an entirely novel and unique patient-centric view.",
                methods: "This report draws on data from a Wellbeing Survey led by the Edinburgh IBD Science team as part of the MUSIC IBD cohort study (www.musicstudy.uk) with over 1375 IBD respondents over two time periods in 2023 from United Kingdom. The PPI group utilised high-level topic analysis and their own lived experience of IBD to explore the 415 free-text survey responses. Regular discussions allowed the team to reflect on patient narratives and generate findings collaboratively. PPI members contributed to both the structure and content of the final write-up, utilising their diverse backgrounds and skillsets.",
                results: "The analysis provided in-depth exploration of several key themes affecting wellbeing in IBD patients. Of interest, the PPI group discussed and explored themes such as 'what does remission mean?', access to care, expectations of self-management, mental and women's health. The patient narratives highlighted the variability of IBD experiences, the interconnectedness of these issues, and the importance of holistic, patient-centric approaches to care. The findings emphasise the necessity for improved support, both within and beyond healthcare settings.",
                conclusion: "This patient-led research approach demonstrates that allowing patients to lead in analysis ('taking the reins') and reporting provides deeper and impactful insights into IBD experiences. By integrating patient perspectives, this study advocates for a patient-dominant approach to research and care, which can improve outcomes and support ways to address the complexities of living with IBD. The model highlights challenges and benefits of this approach, serving as a foundational template for future patient-led collaborations, in addition to the immediate impact of patients' wellbeing from shared experiences, to educating clinicians and people without IBD about the impact of IBD on patients' lives."
              }}
              explorationLink="/patients-taking-the-lead"
              explorationButtonText="Explore paper and audiobook"
              pdfLink="/static/files/patient_led_analysis_of_ibd.pdf"
              preprintLink="https://www.medrxiv.org/content/10.1101/2025.03.19.25324163v1"
              footerText="Preprint | 20 January 2025"
            />
            
            <PaperCard 
              title="Characterisation of 3000 patient reported outcomes with predictive machine learning to develop a scientific platform to study fatigue in Inflammatory Bowel Disease"
              authors="Rebecca Hall, Robert J Whelan, Peter D Cartlidge, Emily F Brownson, Craig Mowat, John Paul Seenan, Jonathan C MacDonald, Iona AM Campbell, Gwo-Tzer Ho, Shaun Chuah"
              abstract={{
                background: "Fatigue is commonly identified by IBD patients as major issue that affects their wellbeing. This presentation, however, is complex, multifactorial and mired in clinical heterogeneity.",
                methods: "We prospectively captured patient reported outcomes (PROs) from 2 current IBD biomarker studies in Scotland with ~100 clinical metadata points; and an international dataset (that includes non-IBD healthy controls) using CUCQ32, a validated IBD questionnaire to generate a contemporaneous dataset of fatigue and overall wellbeing (2021-2024) and utilized 6 different machine learning (ML) approaches to predict IBD-associated fatigue and patterns that may aid future stratification to human mechanistic and clinical studies.",
                results: "In 2 970 responses from 2 290 participants, CUCQ32 were higher in active IBD vs. remission; and in remission, higher than in non-IBD controls (both p&lt;0.0001). CUCQ32-specific fatigue score significantly correlated to all CUCQ32 components (p=2.9 x 10-28 to 3.2 x 10-147). During active IBD, patients had significantly more fatigue days compared to those in remission and non-IBD controls (medians 14 vs. 7 vs. 4 [out of 14 days]; both p&lt;0.0001). We determine a threshold of ≥10/14 days of fatigue as clinically relevant - Fatiguehigh. Overall, 72.8% (863/1185), 45.0% (408/906) and 13.7% (46/355) responses in active, remission and non-IBD controls were in Fatiguehigh. Using train-validate-test steps, we incorporated all available metadata to generate ML-models to predict Fatiguehigh. The 6 ML models performed similarly (all 6 models AUC of ~0.70). SHapley Additive exPlanations (SHAP) analysis revealed that each algorithm places different importance on variables with seasonality, biologic drug levels, BMI and gender identified as factors. ML prediction of Fatiguehigh in patients in biochemical remission (CRP&lt;5 mg/l and calprotectin &lt;250ug/g) was more challenging with AUC of 0.66-0.61.",
                conclusion: "We provide a comprehensive patient involvement-ML-pathway to predict IBD-associated fatigue. Our data suggests a large 'hidden' pathobiological component and current work is in progress to integrate deep molecular data and build a clinical-scientific ML model as a step towards better understanding of IBD-associated fatigue."
              }}
              pdfLink="/static/files/machine_learning_for_ibd_fatigue.pdf"
              preprintLink="https://www.medrxiv.org/content/10.1101/2025.01.18.25320777v1"
              githubLink="https://github.com/1-gut/machine_learning_for_ibd_fatigue"
              footerText="Preprint | 20 January 2025"
            />
            
          </div>
        </SectionWrapper>
      </main>
    </MotionPage>
  );
}
