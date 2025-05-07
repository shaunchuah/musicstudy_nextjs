import Image from "next/image";
import Link from "next/link";
import SectionHeaderWhite from "../components/SectionHeaderWhite";
import SectionWrapper from "../components/SectionWrapper";
import SectionWrapperWhite from "../components/SectionWrapperWhite";
import SectionWrapperHero from "../components/SectionWrapperHero";
import Script from "next/script";
import AudioPlayer from "../components/ui/AudioPlayer";
import NewsCard from "../components/ui/NewsCard";

export default function Home() {
  const consoleStyle =
    "border-radius:5px; padding: 8px; background: #065f46; color: #fff; font-size: 14px";

  console.log("%cWelcome to the MUSIC study website!", consoleStyle);
  console.log(
    "%cWebsite created by Dr Shaun Chuah using NextJS. For website-related queries please get in touch via twitter https://twitter.com/chershiong",
    consoleStyle
  );

  return (
    <main className="flex flex-col w-full">
      <Script src="https://platform.twitter.com/widgets.js" />
      <SectionWrapperHero id="hero">
        <div className="md:grid grid-cols-3 mt-20">
          <div className="col-span-2">
            <div className="flex mb-2 md:mb-0">
              <div className="text-5xl md:text-7xl md:-ml-1">
                MUSIC & Mini-MUSIC
              </div>
            </div>
            <div className="flex items-center pt-4 md:pt-6 pb-2">
              <p className="font-merriweather mb-6 leading-relaxed sm:text-2xl text-xl max-w-lg">
                Mitochondrial DAMPs as mechanistic biomarkers of gut mucosal
                inflammation in adults and children.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 mb-4">
              <Link href="/music" legacyBehavior>
                <button className="  border-primary bg-primary text-white hover:text-primary hover:bg-white py-2 px-6 rounded text-lg">
                  MUSIC (Adults)
                </button>
              </Link>
              <Link href="/mini-music" legacyBehavior>
                <button className="md:ml-2 border-primary bg-primary text-white hover:text-primary hover:bg-white py-2 px-6 rounded text-lg">
                  Mini-MUSIC (Children)
                </button>
              </Link>
            </div>

            <div className="flex items-center mb-16">
              <a
                className="mt-4 text-gray-300 hover:text-white"
                href="https://www.ed.ac.uk/inflammation-research/research/gut-research-unit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex">
                  A project by the Gut Research Unit
                  <svg
                    className="ml-1 w-5 h-5"
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
                </span>
                <br />
                Institute for Regeneration and Repair
                <br />
                University of Edinburgh
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white text-gray-800 border p-4 md:p-6 rounded-lg shadow flex flex-wrap gap-4 justify-center lg:justify-start items-start mb-6">
              <div>
                <div className="md:flex flex-row items-start gap-4">
                  <div className="flex w-full md:w-1/4 md:flex-none">
                    <div className="mx-auto md:mx-0 mb-4 md:mb-0">
                      <Image
                        src="/static/images/ppi.jpg"
                        alt="Molly Halligan shares her experience"
                        width="150"
                        height="150"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl mb-2">
                      From Patient to Research Partner
                    </h2>
                    <p className="mb-6">
                      Hear Molly share her journey as both patient and research
                      advocate.
                    </p>
                  </div>
                </div>

                <AudioPlayer
                  id="music_intro_molly"
                  src="/static/files/musicintromolly.mp3"
                  className="mt-2"
                />
              </div>
            </div>
            <div className="bg-white text-gray-800 border p-4 md:p-6 rounded-lg shadow flex flex-wrap gap-4 justify-center lg:justify-start items-start mb-6">
              <div>
                <div className="md:flex flex-row items-start gap-4">
                  <div className="flex w-full md:w-1/4 md:flex-none">
                    <div className="mx-auto md:mx-0 mb-4 md:mb-0">
                      <Image
                        src="/static/images/ppi_group_2.jpg"
                        alt="Our patients take the lead"
                        width="150"
                        height="150"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl mb-2">
                      When Patients Lead: Transforming IBD Research
                    </h2>
                    <AudioPlayer
                      id="ppi_intro"
                      src="/static/audio/ppi_intro.mp3"
                      className="mb-2"
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-2">
                    This 3-minute summary covers our recent innovative approach
                    where patients analyzed and interpreted data from hundreds
                    of people living with IBD, revealing perspectives often
                    missed in traditional research.
                  </p>
                  <div className="">
                    <Link href="/patients-taking-the-lead" legacyBehavior>
                      <button className="border-primary bg-primary hover:bg-teal-800 text-white py-2 px-6 rounded text-lg">
                        Explore paper and audiobook
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapperHero>

      <SectionWrapper id="overview">
        <div className="flex flex-col">
          <div className="w-full mb-8">
            <h1 className="sm:text-4xl text-3xl text-center font-medium title-font mb-2 text-white">
              Latest News
            </h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto gap-4 lg:gap-6">
          <NewsCard
            image="/static/images/qfit.png"
            imageAlt="Quantitative faecal immunohistochemical testing (qFIT)"
            title="qFIT vs Calprotectin: Which stool tests do you prefer?"
            date="28 March 2025"
            imageRounded="lg"
          >
            <div className="mb-4">
              <div className="mb-4">
                <Link
                  href="https://crohnsandcolitis.org.uk/get-involved/want-to-get-involved-in-research/shaping-research/can-we-improve-how-to-monitor-ibd"
                  target="_blank"
                  legacyBehavior
                >
                  <button className="border-primary bg-primary hover:bg-teal-800 text-white py-2 px-6 rounded text-lg">
                    Sign Up Here (3 Minute Survey)
                  </button>
                </Link>
              </div>
              <p className="mb-2">
                We have been studying the performance of quantitative faecal
                immunohistochemical testing (qFIT) (also known as the bowel
                screening test in the UK) and comparing it against faecal
                calprotectin to determine its effectiveness for monitoring
                patients with IBD.
              </p>
              <p className="mb-2">
                We are looking for patients with IBD to complete a short survey
                (3 minutes) to help us understand which test you prefer if it
                performs similarly to current options. Your input will help
                shape future testing approaches for IBD monitoring.
              </p>
            </div>
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                Check out this new Shaping Research opportunity! <br />
                <br />
                Researchers at University of Glasgow would like you to complete
                a short online survey looking at IBD testing methods. <br />
                <br />
                Find out more{" "}
                <a href="https://t.co/cgilxUdpK1">
                  https://t.co/cgilxUdpK1
                </a>{" "}
                <a href="https://t.co/bM6CbL5XlP">pic.twitter.com/bM6CbL5XlP</a>
              </p>
              &mdash; Crohn&#39;s &amp; Colitis Research (@CrohnsColitisR){" "}
              <a href="https://twitter.com/CrohnsColitisR/status/1918247342295400589?ref_src=twsrc%5Etfw">
                May 2, 2025
              </a>
            </blockquote>
          </NewsCard>

          <NewsCard
            image="/static/images/ppi_meeting.jpg"
            imageAlt="End of 2023 patient public involvement group meeting"
            title="What happens if patients take the lead in an IBD Project?"
            date="28 March 2025"
          >
            <div className="mb-4">
              <Link href="/patients-taking-the-lead" legacyBehavior>
                <button className="border-primary bg-primary hover:bg-teal-800 text-white py-2 px-6 rounded text-lg">
                  Explore paper and audiobook
                </button>
              </Link>
            </div>
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                What happens if patients take the lead in an IBD project? <br />
                <br />
                Result: A wholly patient-led paper on &#39;&#39;What it means to
                live with IBD&#39;.
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
                <a href="https://t.co/ewo9otZQC3">https://t.co/ewo9otZQC3</a>
              </p>
              &mdash; Edinburgh IBD Science (@Edin_IBDScience){" "}
              <a href="https://twitter.com/Edin_IBDScience/status/1903842652522500525?ref_src=twsrc%5Etfw">
                March 23, 2025
              </a>
            </blockquote>{" "}
            <p className="mb-2">
              We&apos;ve also included a transcript of the thread for
              accessibility:
            </p>
            <details>
              <summary className="cursor-pointer font-semibold text-primary hover:text-secondary">
                Click to view full thread transcript
              </summary>
              <div className="mt-3 ml-4 pl-3 border-l-2 border-gray-300">
                <p className="mb-2">
                  What happens if patients take the lead in an IBD project?
                </p>
                <p className="mb-2">
                  Result: A wholly patient-led paper on &quot;What it means to
                  live with IBD&quot;.
                </p>
                <p className="mb-2">
                  🧵on how our patient-public involvement (PPI) #IBD came
                  about....
                </p>

                <p className="mb-2">
                  In 2023, 1315 patients with IBD in UK and across the world
                  took part in our work, aided by
                  <a
                    href="https://x.com/CMF_UK"
                    target="_blank"
                    className=" hover:text-secondary pl-1 underline underline-offset-2"
                  >
                    @CMF_UK
                  </a>
                  ,
                  <a
                    href="https://x.com/CrohnsColitisC3"
                    target="_blank"
                    className=" hover:text-secondary pl-1 underline underline-offset-2"
                  >
                    @CrohnsColitisC3
                  </a>
                  , and
                  <a
                    href="https://x.com/CrohnsColitisR"
                    target="_blank"
                    className=" hover:text-secondary pl-1 underline underline-offset-2"
                  >
                    @CrohnsColitisR
                  </a>
                  . They left 415 specific comments about IBD and their lives.
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
                    className=" hover:text-secondary pl-1 underline underline-offset-2"
                  >
                    @halligan_molly
                  </a>{" "}
                  and Tricia
                  <a
                    href="https://x.com/Patricia_EKelly"
                    target="_blank"
                    className=" hover:text-secondary pl-1 underline underline-offset-2"
                  >
                    @Patricia_EKelly
                  </a>{" "}
                  came out with the idea of a &apos;Patient-led&apos; effort. We
                  handed over the reins, 100% to our fab patient group.
                </p>

                <p className="mb-2">
                  They met, discussed and wrote up this paper over 6 months with
                  <a
                    href="https://x.com/emmapryde7"
                    target="_blank"
                    className=" hover:text-secondary pl-1 underline underline-offset-2"
                  >
                    @emmapryde7
                  </a>
                  ,
                  <a
                    href="https://x.com/AerinET"
                    target="_blank"
                    className=" hover:text-secondary pl-1 underline underline-offset-2"
                  >
                    @AerinET
                  </a>{" "}
                  and Destiny.
                </p>

                <p className="mb-2">
                  The result is a radiant, fresh, empowering and positive
                  perspective. Produced by the patients. But lessons for all.
                  With no input from analytical tools, clinicians, pharma input,
                  KOLs, researchers.
                </p>

                <p className="mb-2">
                  The paper is a great read, note 24 pages...(with a cup of
                  tea?).
                </p>

                <p className="mb-2">
                  &apos;This was an incredibly rewarding process and an
                  opportunity to represent people living with IBD in a totally
                  new way&apos;
                </p>

                <p className="mb-2">
                  Molly led this group effort and originally introduced this at
                  CCUK Patient Day in 2024.
                </p>

                <p className="mb-2">
                  Thank you to all our IBD patients, also our clinicians
                  <a
                    href="https://x.com/GwoTzerHo"
                    target="_blank"
                    className=" hover:text-secondary pl-1 underline underline-offset-2"
                  >
                    @GwoTzerHo
                  </a>
                  ,
                  <a
                    href="https://x.com/chershiong"
                    target="_blank"
                    className=" hover:text-secondary pl-1 underline underline-offset-2"
                  >
                    @chershiong
                  </a>
                  ,
                  <a
                    href="https://x.com/reb_hal"
                    target="_blank"
                    className=" hover:text-secondary pl-1 underline underline-offset-2"
                  >
                    @reb_hal
                  </a>
                  ,
                  <a
                    href="https://x.com/EdinUni_IRR"
                    target="_blank"
                    className=" hover:text-secondary pl-1 underline underline-offset-2"
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
                    className=" hover:text-secondary pl-1 underline underline-offset-2"
                  >
                    @HelmsleyTrust
                  </a>{" "}
                  for funding the main research allowing this PPIE work to be
                  done!
                </p>
              </div>
            </details>
          </NewsCard>

          <NewsCard title="Our Lives with IBD" date="28 March 2025">
            <p className="mb-2">
              &quot;It&apos;s about more than just finding biomarkers —
              it&apos;s about changing lives.&quot; Experience Hugo
              Hemmati&apos;s documentary that weaves together personal
              testimonies from people living with IBD and behind the scenes
              access to the MUSIC study&apos;s research facilities. Discover how
              patient experiences are directly shaping the science that could
              revolutionize IBD treatment.
            </p>
            <a
              href="https://media.ed.ac.uk/media/Our+Lives+with+IBD/1_13bc6268"
              target="_blank"
              className="hover:text-secondary pr-1 underline underline-offset-2"
            >
              <Image
                src="/static/images/our_lives_with_ibd_thumbnail.png"
                alt="Our Lives with IBD Short Documentary Film"
                height="1755"
                width="873"
                priority={true}
                className="rounded-lg"
              />
            </a>
          </NewsCard>

          <NewsCard
            image="/static/images/initial_results.png"
            imageAlt="Initial Results"
            title="Tackling IBD Fatigue: Your Priority, Our Research Focus"
            date="20 January 2025"
          >
            <p className="mb-2">
              When over 1,300 patients told us fatigue was their most
              debilitating symptom, we listened. Our collaborative team of
              patients and clinicians has now produced the first findings from
              our comprehensive study on this challenging aspect of IBD.
            </p>
            <p className="mb-2">
              Using advanced machine learning techniques guided by patient
              insights, we&apos;re identifying patterns that could explain why
              fatigue persists even during clinical remission — a crucial step
              toward developing targeted interventions.
            </p>
            <Link
              href="/results"
              className="hover:text-secondary pr-1 underline underline-offset-2"
            >
              Read more
            </Link>
          </NewsCard>
          <NewsCard
            title="How Patients Shape Our Research"
            date="20 December 2024"
          >
            <p className="mb-2">
              At the 2024 Crohn&apos;s and Colitis UK Patient Involvement Day,
              our team showcased how patient partnerships have fundamentally
              reshaped our research approach. The presentation highlights real
              examples of how patient insights led to significant improvements
              in our study design and outcomes.
            </p>
            <div className="mb-2">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/GhqFOjJuYE0?si=-2cVmp37o4rLHhAz&amp;start=4642"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="/static/files/ccuk_patient_day_talk_nov_2024.pptx"
              target="_blank"
              className="hover:text-secondary pr-1 underline underline-offset-2"
            >
              Download Presentation Slides
            </a>
            |
            <a
              href="https://crohnsandcolitis.org.uk/get-involved/want-to-get-involved-in-research/patient-involvement-in-research-day/ibd-patient-involvement-in-research-day-2024"
              target="_blank"
              className="hover:text-secondary pl-1 underline underline-offset-2"
            >
              CCUK Page
            </a>
          </NewsCard>

          <NewsCard
            image="/static/images/ppi_meeting.jpg"
            imageAlt="End of 2023 patient public involvement group meeting"
            title="End of 2023 Patient-Public Involvement Group Meeting"
            date="29 December 2023"
          >
            <p className="mb-2">
              A fantastic afternoon with our Patient Engagement group! We
              discussed co-production of our IBD wellbeing paper, new work with
              paediatric IBD, our upcoming Edinburgh Science Festival show
              &apos;Our Lives and IBD&apos; and welcoming Ola, our new parent
              patient representative!
            </p>
          </NewsCard>

          <NewsCard
            image="/static/images/fringe_cropped.jpg"
            imageAlt="Dr Ho and Dr Hall engaging the public at the Edinburgh Fringe Festival"
            title="Engaging the public at the Edinburgh Fringe Festival 2023"
            date="19 October 2023"
          >
            <p className="mb-2">
              As part of engaging the public in research, Dr Rebecca Hall & Dr
              Gwo-Tzer Ho recently put on a show at the Edinburgh Fringe
              Festival in August 2023. Peter Ranscombe, writing for the Lancet
              Gastroenterology & Hepatology, summarises the event. Read more
              about it below.
            </p>
            <a
              href="/static/files/taking_colonoscopies_to_the_stage_at_the_edinburgh_fringe.pdf"
              target="_blank"
              className="hover:text-secondary pr-1 underline underline-offset-2"
            >
              Taking colonoscopies to the stage at the Edinburgh Fringe
            </a>
          </NewsCard>

          <NewsCard
            image="/static/images/ppi2.jpg"
            imageAlt="Aerin Thompson joins MUSIC PPI group"
            title="Welcome to our new PPI member Aerin Thompson"
            date="8 March 2023"
          >
            <p className="mb-2">
              I&apos;m Aerin, a first year PhD student at The University of
              Edinburgh studying inflammation resolution and tissue repair.
            </p>
            <p className="mb-2">
              I was diagnosed with Ulcerative Colitis back in 2014 under
              paediatric care. I was experiencing severe symptoms before being
              admitted to hospital through A&E where I was monitored for four
              weeks.
            </p>
            <p>
              I like to be active and row for the university high performance
              team alongside my studies. Originally from Nottingham, I am
              enjoying the views that Edinburgh and Scotland have to offer.
            </p>
          </NewsCard>

          <NewsCard
            image="/static/images/rebeccahall.jpeg"
            imageAlt="Rebecca Hall presents interim results at the Scottish Society of Gastroenterology"
            title="Scottish Society of Gastroenterology Winter Meeting December 2022"
            date="28 December 2022"
          >
            <p className="mb-2">
              Dr Rebecca Hall recently presented our work linking
              patient-reported well-being as a potential marker for our
              scientific biomarker studies
            </p>
            <a
              href="/static/files/ssgabstract2022.pdf"
              target="_blank"
              className="hover:text-secondary pr-1 underline underline-offset-2"
            >
              Download Abstract
            </a>
            |
            <a
              href="/static/files/ssgslides2022.pptx"
              target="_blank"
              className="hover:text-secondary pl-1 underline underline-offset-2"
            >
              Download Presentation Slides
            </a>
          </NewsCard>
          <NewsCard
            image="/static/images/story.jpg"
            imageAlt="Kris Gourlay sharing his experience"
            title="Read and hear from Kris"
            date="29 June 2021"
            imageRounded="lg"
          >
            <p className="mb-2">
              Kris is one of our study&apos;s patient representative and he
              shares his story with The Herald{" "}
              <a
                target="_blank"
                className="hover:text-secondary"
                href="https://www.heraldscotland.com/news/19159021.crohns-disease-ordeal-edinburgh-student-thought-food-poisoning/"
              >
                here
              </a>
              . His experience and views help us shape the design and conduct of
              our research.
            </p>
            <p className="mb-4">
              Hear him share his thoughts on the study here:
            </p>
            <AudioPlayer
              id="music_intro_kris"
              src="/static/files/musicintrokris.mp3"
              className="mb-4"
            />
          </NewsCard>
        </div>
      </SectionWrapper>

      <SectionWrapperWhite id="sponsors">
        <SectionHeaderWhite title="Sponsors" />
        <div className="md:flex md:flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <Image
              className="h-40 rounded w-full object-cover object-center mb-6"
              src="/static/images/helmsley.png"
              alt="The Helmsley Charitable Trust"
              height="354"
              width="709"
              priority={true}
            />
          </div>

          <div className="xl:w-1/6 md:w-1/4 p-4 w-1/2 mx-auto md:mx-0">
            <Image
              className="h-40 rounded w-full object-cover object-center mb-6"
              src="/static/images/nhslothian.png"
              alt="NHS Lothian"
              height="354"
              width="354"
            />
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <Image
              className="h-40 rounded w-full object-cover object-center mb-6"
              src="/static/images/cir.png"
              alt="Centre for Inflammation Research"
              height="354"
              width="709"
            />
          </div>
          <div className="xl:w-1/6 md:w-1/4 p-4 w-1/2 mx-auto md:mx-0">
            <Image
              className="h-40 rounded w-full object-cover object-center mb-6"
              src="/static/images/accord.png"
              alt="ACCORD"
              height="354"
              width="354"
            />
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <Image
              className="h-40 rounded w-full object-contain mb-6"
              src="/static/images/ehcc.png"
              alt="Centre for Inflammation Research"
              height="354"
              width="625"
            />
          </div>
        </div>
      </SectionWrapperWhite>
    </main>
  );
}
