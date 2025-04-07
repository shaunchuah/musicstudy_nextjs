import MotionPage from "../components/MotionPage";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";
import data from "../data/results.json";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
export default function PatientsTakingTheLead() {
  const ResultsData = data;

  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <Head>
          <Script src="https://platform.twitter.com/widgets.js" />
        </Head>
        <SectionWrapper id="results">
          <SectionHeader title="Patients Taking The Lead" />
          <div className="grid justify-center text-xl items-center space-y-8">
            <div className="bg-white text-[#264653] shadow-md rounded-lg p-8 max-w-5xl">
              <div className="md:flex flex-row gap-8 justify-center lg:justify-start items-start">
                <div className="w-1/3 md:w-1/4 flex-none mx-auto md:mx-0 mb-4 md:mb-0">
                  <Image
                    src="/static/images/ppi_meeting.jpg"
                    alt="End of 2023 patient public involvement group meeting"
                    height="480"
                    width="480"
                    priority={true}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-2xl mb-4">
                    What happens if patients take the lead in an IBD Project?
                  </h2>
                  <blockquote className="twitter-tweet">
                    <p lang="en" dir="ltr">
                      What happens if patients take the lead in an IBD project?{" "}
                      <br />
                      <br />
                      Result: A wholly patient-led paper on &#39;&#39;What it
                      means to live with IBD&#39;.
                      <br />
                      <br />
                      🧵on how our patient-public involvement (PPI){" "}
                      <a href="https://twitter.com/hashtag/IBD?src=hash&amp;ref_src=twsrc%5Etfw">
                        #IBD
                      </a>{" "}
                      came about....
                      <a href="https://twitter.com/hashtag/Crohns?src=hash&amp;ref_src=twsrc%5Etfw">
                        #Crohns
                      </a>{" "}
                      <a href="https://twitter.com/hashtag/colitis?src=hash&amp;ref_src=twsrc%5Etfw">
                        #colitis
                      </a>{" "}
                      <a href="https://twitter.com/hashtag/PPIE?src=hash&amp;ref_src=twsrc%5Etfw">
                        #PPIE
                      </a>{" "}
                      <a href="https://twitter.com/hashtag/patientinvolvement?src=hash&amp;ref_src=twsrc%5Etfw">
                        #patientinvolvement
                      </a>
                      <a href="https://t.co/ewo9otZQC3">
                        https://t.co/ewo9otZQC3
                      </a>
                    </p>
                    &mdash; Edinburgh IBD Science (@Edin_IBDScience){" "}
                    <a href="https://twitter.com/Edin_IBDScience/status/1903842652522500525?ref_src=twsrc%5Etfw">
                      March 23, 2025
                    </a>
                  </blockquote>{" "}
                  <p className="mb-2">
                    Read the preprint
                    <a
                      href="https://www.medrxiv.org/content/10.1101/2025.03.19.25324163v1"
                      target="_blank"
                      className=" hover:text-[#e76f51] pl-1 underline underline-offset-2"
                    >
                      here
                    </a>
                    .
                  </p>
                  <p className="mb-2">
                    We've also included a transcript of the thread for
                    accessibility:
                  </p>
                  <details>
                    <summary className="cursor-pointer font-semibold text-[#264653] hover:text-[#e76f51]">
                      Click to view full thread transcript
                    </summary>
                    <div className="mt-3 ml-4 pl-3 border-l-2 border-gray-300">
                      <p className="mb-2">
                        What happens if patients take the lead in an IBD
                        project?
                      </p>
                      <p className="mb-2">
                        Result: A wholly patient-led paper on ''What it means to
                        live with IBD'.
                      </p>
                      <p className="mb-2">
                        🧵on how our patient-public involvement (PPI) #IBD came
                        about....
                      </p>

                      <p className="mb-2">
                        In 2023, 1315 patients with IBD in UK and across the
                        world took part in our work, aided by
                        <a
                          href="https://x.com/CMF_UK"
                          target="_blank"
                          className=" hover:text-[#e76f51] pl-1 underline underline-offset-2"
                        >
                          @CMF_UK
                        </a>
                        ,
                        <a
                          href="https://x.com/CrohnsColitisC3"
                          target="_blank"
                          className=" hover:text-[#e76f51] pl-1 underline underline-offset-2"
                        >
                          @CrohnsColitisC3
                        </a>
                        , and
                        <a
                          href="https://x.com/CrohnsColitisR"
                          target="_blank"
                          className=" hover:text-[#e76f51] pl-1 underline underline-offset-2"
                        >
                          @CrohnsColitisR
                        </a>
                        . They left 415 specific comments about IBD and their
                        lives.
                      </p>

                      <p className="mb-2">
                        Precious data to analyse and study. But how to capture,
                        analyse and present this?
                      </p>

                      <p className="mb-2">
                        Our IBD PPI volunteers, Molly
                        <a
                          href="https://x.com/halligan_molly"
                          target="_blank"
                          className=" hover:text-[#e76f51] pl-1 underline underline-offset-2"
                        >
                          @halligan_molly
                        </a>{" "}
                        and Tricia
                        <a
                          href="https://x.com/Patricia_EKelly"
                          target="_blank"
                          className=" hover:text-[#e76f51] pl-1 underline underline-offset-2"
                        >
                          @Patricia_EKelly
                        </a>{" "}
                        came out with the idea of a 'Patient-led' effort. We
                        handed over the reins, 100% to our fab patient group.
                      </p>

                      <p className="mb-2">
                        They met, discussed and wrote up this paper over 6
                        months with
                        <a
                          href="https://x.com/emmapryde7"
                          target="_blank"
                          className=" hover:text-[#e76f51] pl-1 underline underline-offset-2"
                        >
                          @emmapryde7
                        </a>
                        ,
                        <a
                          href="https://x.com/AerinET"
                          target="_blank"
                          className=" hover:text-[#e76f51] pl-1 underline underline-offset-2"
                        >
                          @AerinET
                        </a>{" "}
                        and Destiny.
                      </p>

                      <p className="mb-2">
                        The result is a radiant, fresh, empowering and positive
                        perspective. Produced by the patients. But lessons for
                        all. With no input from analytical tools, clinicians,
                        pharma input, KOLs, researchers.
                      </p>

                      <p className="mb-2">
                        The paper is a great read, note 24 pages...(with a cup
                        of tea?).
                      </p>

                      <p className="mb-2">
                        'This was an incredibly rewarding process and an
                        opportunity to represent people living with IBD in a
                        totally new way'
                      </p>

                      <p className="mb-2">
                        Molly led this group effort and originally introduced
                        this at CCUK Patient Day in 2024.
                      </p>

                      <p className="mb-2">
                        Thank you to all our IBD patients, also our clinicians
                        <a
                          href="https://x.com/GwoTzerHo"
                          target="_blank"
                          className=" hover:text-[#e76f51] pl-1 underline underline-offset-2"
                        >
                          @GwoTzerHo
                        </a>
                        ,
                        <a
                          href="https://x.com/chershiong"
                          target="_blank"
                          className=" hover:text-[#e76f51] pl-1 underline underline-offset-2"
                        >
                          @chershiong
                        </a>
                        ,
                        <a
                          href="https://x.com/reb_hal"
                          target="_blank"
                          className=" hover:text-[#e76f51] pl-1 underline underline-offset-2"
                        >
                          @reb_hal
                        </a>
                        ,
                        <a
                          href="https://x.com/EdinUni_IRR"
                          target="_blank"
                          className=" hover:text-[#e76f51] pl-1 underline underline-offset-2"
                        >
                          @EdinUni_IRR
                        </a>
                      </p>

                      <p className="mb-2">Next steps? Watch this space!</p>

                      <p className="mb-2">
                        Long form paper also available at www.musicstudy.uk
                      </p>

                      <p className="mb-2">
                        And
                        <a
                          href="https://x.com/HelmsleyTrust"
                          target="_blank"
                          className=" hover:text-[#e76f51] pl-1 underline underline-offset-2"
                        >
                          @HelmsleyTrust
                        </a>{" "}
                        for funding the main research allowing this PPIE work to
                        be done!
                      </p>
                    </div>
                  </details>
                </div>
              </div>
              <div className="flex flex-row-reverse text-gray-700 text-sm mt-6">
                28 March 2025
              </div>
            </div>
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
                <div className="grid lg:grid-cols-2 gap-8">
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
                        <p className="text-lg">
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
                        <p className="text-lg">
                          This is an immensely impactful work driven entirely by
                          our patient group. As both clinician and researcher, I
                          (and my whole team) have learned a lot and this have
                          changed my practice. We aim to publish this work as a
                          model of patient public involvement work that is
                          wholly led by our patients.
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
                          strokeWidth="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="mr-1 w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          ></path>
                        </svg>
                        Full Paper PDF
                      </a>

                      <a
                        href="https://www.medrxiv.org/content/10.1101/2025.03.19.25324163v1"
                        target="_blank"
                        className="flex items-center hover:text-[#e76f51]"
                      >
                        <svg
                          data-slot="icon"
                          fill="none"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="mr-1 w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          ></path>
                        </svg>
                        Preprint for Publication
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
          </div>
        </SectionWrapper>
        <SectionWrapper id="share" className="bg-gray-100">
          <div className="max-w-5xl mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#264653]">
              Share This Page
            </h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-lg text-center">
                Help spread awareness about patient-led IBD research by sharing
                this page with your network.
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

              <div className="mt-6 bg-white text-[#264653] p-4 rounded-md shadow-sm flex items-center w-full max-w-md">
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
                  className="ml-2 p-2 bg-[#264653] text-white rounded-md hover:bg-opacity-90 text-sm flex items-center"
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
  );
}
