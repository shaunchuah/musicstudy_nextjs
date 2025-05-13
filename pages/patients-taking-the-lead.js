import MotionPage from "../components/MotionPage";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";
import data from "../data/results.json";
import Image from "next/image";
import Script from "next/script";
import AudioPlayer from "../components/ui/AudioPlayer";
import SEOHead from "../components/SEOHead";

export default function PatientsTakingTheLead() {
  const ResultsData = data;

  return (
    <>
      <SEOHead
        title="Patient-Led IBD Research"
        description="Explore our groundbreaking patient-led approach to IBD research, where patients analyse and interpret data to provide unique insights into living with inflammatory bowel disease."
      />
      <MotionPage>
        <main className="flex flex-col w-full">
          <Script src="https://platform.twitter.com/widgets.js" />
          <SectionWrapper id="results">
            <div className="relative ">
              {/* Hero banner with gradient background */}
              <div className=" text-white p-8 rounded-t-lg">
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-white text-primary rounded-full text-sm font-bold">
                      PATIENT-LED RESEARCH
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold mb-4">
                    Our patient group&apos;s research into IBD wellbeing
                  </h1>
                  <p className="text-lg opacity-90 mb-6">
                    A novel approach where patients define what matters most in
                    IBD care
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#audiobook"
                      className="btn bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded-md flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                      </svg>
                      Listen to Paper
                    </a>
                    <a
                      href="/static/files/patient_led_analysis_of_ibd.pdf"
                      target="_blank"
                      className="btn bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded-md flex items-center"
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
                      Download Full PDF
                    </a>
                    <a
                      href="https://www.medrxiv.org/content/10.1101/2025.03.19.25324163v1"
                      target="_blank"
                      className="btn bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded-md flex items-center"
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

              <div className="flex justify-end -mt-8 max-w-5xl mx-auto">
                <div className="flex -space-x-4">
                  {/* Patient authors */}
                  <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-white">
                    <Image
                      src="/static/images/ppi.jpg"
                      alt="Molly Halligan"
                      width="64"
                      height="64"
                    />
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-white">
                    <Image
                      src="/static/images/ppi2.jpg"
                      alt="Aerin Thompson"
                      width="64"
                      height="64"
                    />
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden flex items-center justify-center bg-gray-200">
                    <span className="text-lg font-bold text-primary">DD</span>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden flex items-center justify-center bg-gray-200">
                    <span className="text-lg font-bold text-primary">PK</span>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden flex items-center justify-center bg-gray-200">
                    <span className="text-lg font-bold text-primary">EP</span>
                  </div>
                  {/* More authors */}
                </div>
              </div>
            </div>

            {/* Card Group */}
            <div
              className="bg-white text-primary shadow-md rounded-lg p-8 max-w-5xl mx-auto mt-8 scroll-mt-24"
              id="audiobook"
            >
              <h2 className="text-3xl font-bold mb-2">
                Listen to the Audiobook
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="mb-2 font-medium">Abstract:</p>
                  <AudioPlayer
                    id="abstract_audio"
                    src="/static/audio/ppi_abstract.mp3"
                    className="w-full"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Brief overview of the patient-led paper (5 min)
                  </p>
                </div>
                <div>
                  <p className="mb-2 font-medium">Full Paper:</p>
                  <AudioPlayer
                    id="full_paper_audio"
                    src="/static/audio/full_ppi_paper.mp3"
                    className="w-full"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Complete reading of the patient-led analysis (42 min)
                  </p>
                </div>
                <p className="text-sm italic">
                  You can download these files for offline listening by
                  right-clicking on the player and selecting &quot;Save audio
                  as...&quot;
                </p>
              </div>
            </div>
            {/* End Card Group */}

            <div className="bg-white text-primary shadow-md rounded-lg p-8 max-w-5xl mx-auto mt-8">
              <h2 className="text-3xl font-bold mb-4">Abstract</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Background</h3>
                  <p className="mb-4">
                    This paper investigates a patient-led approach to research
                    on wellbeing in individuals with Inflammatory Bowel Disease
                    (IBD). Traditionally, Public and Patient Involvement (PPI)
                    groups have contributed to the design of clinical research
                    but less often to the analysis and reporting of findings.
                    This study is wholly led by a patient group with no direct
                    input from clinicians, thus presenting an entirely novel and
                    unique patient-centric view.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Methods</h3>
                  <p className="mb-4">
                    This report draws on data from a Wellbeing Survey led by the
                    Edinburgh IBD Science team as part of the MUSIC IBD cohort
                    study (www.musicstudy.uk) with over 1375 IBD respondents
                    over two time periods in 2023 from United Kingdom. The PPI
                    group utilised high-level topic analysis and their own lived
                    experience of IBD to explore the 415 free-text survey
                    responses. Regular discussions allowed the team to reflect
                    on patient narratives and generate findings collaboratively.
                    PPI members contributed to both the structure and content of
                    the final write-up, utilising their diverse backgrounds and
                    skillsets.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Results</h3>
                  <p className="mb-4">
                    The analysis provided in-depth exploration of several key
                    themes affecting wellbeing in IBD patients. Of interest, the
                    PPI group discussed and explored themes such as &apos;what
                    does remission mean?&apos;, access to care, expectations of
                    self-management, mental and women&apos;s health. The patient
                    narratives highlighted the variability of IBD experiences,
                    the interconnectedness of these issues, and the importance
                    of holistic, patient-centric approaches to care. The
                    findings emphasise the necessity for improved support, both
                    within and beyond healthcare settings.
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
                    and support ways to address the complexities of living with
                    IBD. The model highlights challenges and benefits of this
                    approach, serving as a foundational template for future
                    patient-led collaborations, in addition to the immediate
                    impact of patients&apos; wellbeing from shared experiences,
                    to educating clinicians and people without IBD about the
                    impact of IBD on patients&apos; lives.
                  </p>
                </div>

                <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/static/files/patient_led_analysis_of_ibd.pdf"
                      target="_blank"
                      className="flex items-center px-3 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition"
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
                      className="flex items-center px-3 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition"
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
            {/* Card Group */}
            <div className="bg-white text-primary shadow-md rounded-lg p-8 max-w-5xl mx-auto mt-8">
              <figure>
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
                  <p>
                    This draft report analyses and discusses patient reported
                    concerns from a survey exploring Wellbeing living with
                    Inflammatory Bowel Disease (IBD). This report was developed
                    by members of the IBD Patient Public Involvement (PPI) group
                    who have lived experience of either Crohn&apos;s disease or
                    colitis.
                    <br />
                    <br />
                    The report draws together survey responses and the PPI group
                    members&apos; experiences of managing wellbeing living with
                    IBD. The key findings highlight priority areas for future
                    research, such as improving quality of life overall,
                    addressing the confusion around the term
                    &apos;remission&apos;, and improving access to mental health
                    support. The report also outlines a number of interconnected
                    issues across the themes explored.
                    <br />
                    <br />
                    Currently, the project group is working to refine this
                    report and strengthen its ability to influence
                    clinical-based research, practice, and challenge traditional
                    models of PPI work.
                  </p>
                </blockquote>

                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <Image
                    src="/static/images/ppi.jpg"
                    alt="Molly Halligan"
                    width="36"
                    height="36"
                    className="rounded-full"
                  />
                  <div className="md:flex items-center md:divide-x-2 divide-gray-500 ">
                    <div className="md:pr-3 font-medium flex-none">
                      Molly Halligan
                    </div>
                    <div className="md:pl-3 text-sm">
                      on behalf of the Gut Research Group Patient PPIE team
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            {/* Card Group */}
            <div className="bg-white text-primary shadow-md rounded-lg p-8 max-w-5xl mx-auto mt-8">
              <figure>
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
                  <p>
                    This is an immensely impactful work driven entirely by our
                    patient group. As both clinician and researcher, I (and my
                    whole team) have learned a lot and this has changed my
                    practice. We aim to publish this work as a model of patient
                    public involvement work that is wholly led by our patients.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <Image
                    src="/static/images/gth.jpg"
                    alt="Gwo-Tzer Ho"
                    width="36"
                    height="36"
                    className="rounded-full"
                  />
                  <div className="md:flex items-center md:divide-x-2 divide-gray-500 ">
                    <div className="md:pr-3 font-medium flex-none">
                      Professor Gwo-Tzer Ho
                    </div>
                    <div className="md:pl-3 text-sm">
                      on behalf of the MUSIC IBD team
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="max-w-5xl mx-auto py-8">
              <h2 className="text-2xl font-bold mb-4 text-center text-primary">
                Share This Page
              </h2>
              <div className="flex flex-col items-center space-y-4">
                <p className="text-lg text-center">
                  Help spread awareness about patient-led IBD research by
                  sharing this page with your network.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}&text=Check out this patient-led IBD research project`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#1DA1F2] text-white rounded-md hover:bg-opacity-90 transition"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.07l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                    Share on X
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#1877F2] text-white rounded-md hover:bg-opacity-90 transition"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                    Share on Facebook
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#0A66C2] text-white rounded-md hover:bg-opacity-90 transition"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Share on LinkedIn
                  </a>
                  <a
                    href={`mailto:?subject=Patient-led IBD Research&body=Check out this patient-led IBD research project: ${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}`}
                    className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-opacity-90 transition"
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
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Share via Email
                  </a>
                </div>

                <div className="mt-6 bg-white text-primary p-4 rounded-md shadow-sm flex items-center w-full max-w-md">
                  <input
                    type="text"
                    readOnly
                    value={
                      typeof window !== "undefined" ? window.location.href : ""
                    }
                    className="flex-grow border-none focus:outline-none focus:ring-0 text-sm"
                    onClick={(e) => e.target.select()}
                  />
                  <button
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied!");
                      }
                    }}
                    className="ml-2 p-2 bg-primary text-white rounded-md hover:bg-opacity-90 text-sm flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      ></path>
                    </svg>
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </main>
      </MotionPage>
    </>
  );
}
