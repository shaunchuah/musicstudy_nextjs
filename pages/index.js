import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
import SectionHeaderWhite from "../components/SectionHeaderWhite";
import SectionWrapper from "../components/SectionWrapper";
import SectionWrapperWhite from "../components/SectionWrapperWhite";
import SectionWrapperHero from "../components/SectionWrapperHero";
import MaxWidthControl from "../components/MaxWidthControl";

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
      <Head>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Head>
      <SectionWrapperHero id="hero">
        <div className="md:grid grid-cols-3 mt-20">
          <div className="col-span-2">
            <div className="flex mb-2 md:mb-0">
              <div class="text-5xl md:text-7xl md:-ml-1">
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
                <button className="  border-[#264653] bg-[#264653] text-white hover:text-[#264653] hover:bg-white py-2 px-6 rounded text-lg">
                  MUSIC (Adults)
                </button>
              </Link>
              <Link href="/mini-music" legacyBehavior>
                <button className="md:ml-2 border-[#264653] bg-[#264653] text-white hover:text-[#264653] hover:bg-white py-2 px-6 rounded text-lg">
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
                Centre for Inflammation Research
                <br />
                University of Edinburgh
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white text-gray-800 border p-6 rounded-lg shadow flex flex-wrap gap-4 justify-center lg:justify-start items-start mb-6">
              <div>
                <div className="md:flex flex-row items-start gap-4">
                  <div className="flex w-full md:w-1/3">
                    <div className="mx-auto md:mx-0 mb-4 md:mb-0">
                      <Image
                        src="/static/images/ppi.jpg"
                        alt="Molly Halligan shares her experience"
                        width="100"
                        height="100"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl">
                      Molly Halligan, Patient Representative
                    </h2>
                    <p className="mb-6">
                      Listen to her experience on taking part in IBD research.
                    </p>
                  </div>
                </div>

                <audio id="marvel_intro" controls className="mb-4">
                  <source
                    src="/static/files/musicintromolly.mp3"
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
            <div className="bg-white text-gray-800 border p-6 rounded-lg shadow flex flex-wrap gap-4 justify-center lg:justify-start items-start mb-6">
              <div>
                <h2 className="text-xl">
                  John Rysdale, Patient Representative
                </h2>
                <p className="mb-6">
                  on what this study is about and why you should consider taking
                  part.
                </p>
                <audio id="marvel_intro" controls className="mb-4">
                  <source
                    src="/static/files/musicintrojon.mp3"
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
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
          <div className="bg-white text-gray-800 border p-6 rounded-lg shadow mb-6">
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
                <blockquote class="twitter-tweet">
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
                <p className="mb-2">We've also included a transcript of the thread for accessibility:</p>
                <details>
                  <summary className="cursor-pointer font-semibold text-[#264653] hover:text-[#e76f51]">
                    Click to view full thread transcript
                  </summary>
                                    <div className="mt-3 ml-4 pl-3 border-l-2 border-gray-300">
                    <p className="mb-2">
                      What happens if patients take the lead in an IBD project?
                    </p>
                    <p className="mb-2">
                      Result: A wholly patient-led paper on ''What it means to live with IBD'.
                    </p>
                    <p className="mb-2">
                      🧵on how our patient-public involvement (PPI) #IBD came about....
                    </p>
                    
                    <p className="mb-2">
                      In 2023, 1315 patients with IBD in UK and across the world took part in our work, aided by 
                      <a href="https://x.com/CMF_UK" target="_blank" className=" hover:text-[#e76f51] pl-1 underline underline-offset-2">@CMF_UK</a>,
                      <a href="https://x.com/CrohnsColitisC3" target="_blank" className=" hover:text-[#e76f51] pl-1 underline underline-offset-2">@CrohnsColitisC3</a>, and
                      <a href="https://x.com/CrohnsColitisR" target="_blank" className=" hover:text-[#e76f51] pl-1 underline underline-offset-2">@CrohnsColitisR</a>.
                      They left 415 specific comments about IBD and their lives.
                    </p>
                    
                    <p className="mb-2">
                      Precious data to analyse and study. But how to capture, analyse and present this?
                    </p>
                    
                    <p className="mb-2">
                      Our IBD PPI volunteers, Molly 
                      <a href="https://x.com/halligan_molly" target="_blank" className=" hover:text-[#e76f51] pl-1 underline underline-offset-2">@halligan_molly</a> and Tricia
                      <a href="https://x.com/Patricia_EKelly" target="_blank" className=" hover:text-[#e76f51] pl-1 underline underline-offset-2">@Patricia_EKelly</a> came out with the idea of a 'Patient-led' effort. We handed over the reins, 100% to our fab patient group.
                    </p>
                    
                    <p className="mb-2">
                      They met, discussed and wrote up this paper over 6 months with 
                      <a href="https://x.com/emmapryde7" target="_blank" className=" hover:text-[#e76f51] pl-1 underline underline-offset-2">@emmapryde7</a>,
                      <a href="https://x.com/AerinET" target="_blank" className=" hover:text-[#e76f51] pl-1 underline underline-offset-2">@AerinET</a> and Destiny.
                    </p>
                    
                    <p className="mb-2">
                      The result is a radiant, fresh, empowering and positive perspective. Produced by the patients. But lessons for all. With no input from analytical tools, clinicians, pharma input, KOLs, researchers.
                    </p>
                    
                    <p className="mb-2">
                      The paper is a great read, note 24 pages...(with a cup of tea?).
                    </p>
                    
                    <p className="mb-2">
                      'This was an incredibly rewarding process and an opportunity to represent people living with IBD in a totally new way'
                    </p>
                    
                    <p className="mb-2">
                      Molly led this group effort and originally introduced this at CCUK Patient Day in 2024.
                    </p>
                    
                    <p className="mb-2">
                      Thank you to all our IBD patients, also our clinicians 
                      <a href="https://x.com/GwoTzerHo" target="_blank" className=" hover:text-[#e76f51] pl-1 underline underline-offset-2">@GwoTzerHo</a>,
                      <a href="https://x.com/chershiong" target="_blank" className=" hover:text-[#e76f51] pl-1 underline underline-offset-2">@chershiong</a>,
                      <a href="https://x.com/reb_hal" target="_blank" className=" hover:text-[#e76f51] pl-1 underline underline-offset-2">@reb_hal</a>,
                      <a href="https://x.com/EdinUni_IRR" target="_blank" className=" hover:text-[#e76f51] pl-1 underline underline-offset-2">@EdinUni_IRR</a>
                    </p>
                    
                    <p className="mb-2">
                      Next steps? Watch this space!
                    </p>
                    
                    <p className="mb-2">
                      Long form paper also available at www.musicstudy.uk
                    </p>
                    
                    <p className="mb-2">
                      And 
                      < a href="https://x.com/HelmsleyTrust" target="_blank" className=" hover:text-[#e76f51] pl-1 underline underline-offset-2">@HelmsleyTrust</a> for funding the main research allowing this PPIE work to be done!
                    </p>
      
                  </div>
                </details>
              </div>
            </div>
            <div className="flex flex-row-reverse text-gray-700 text-sm mt-6">
              28 March 2025
            </div>
          </div>

          <div className="bg-white text-gray-800 border p-6 rounded-lg shadow mb-6">
            <div className="md:flex flex-row gap-8 justify-center lg:justify-start items-start">
              <div>
                <h2 className="text-2xl mb-4">Our Lives with IBD</h2>
                <p className="mb-2">
                  Watch 'Our Lives with IBD', a short documentary film by Hugo
                  Hemmati. The film features people involved with the MUSIC study discussing their experiences with IBD, while
                  offering viewers a behind-the-scenes look at laboratory
                  research in action.
                </p>
                <a
                  href="https://media.ed.ac.uk/media/Our+Lives+with+IBD/1_13bc6268"
                  target="_blank"
                  className=" hover:text-[#e76f51] pr-1 underline underline-offset-2"
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
              </div>
            </div>
            <div className="flex flex-row-reverse text-gray-700 text-sm mt-6">
              28 March 2025
            </div>
          </div>

          <div className="bg-white text-gray-800 border p-6 rounded-lg shadow mb-6">
            <div className="md:flex flex-row gap-8 justify-center lg:justify-start items-start">
              <div className="w-1/3 md:w-1/4 flex-none mx-auto md:mx-0 mb-4 md:mb-0">
                <Image
                  src="/static/images/initial_results.png"
                  alt="Initial Results"
                  height="1024"
                  width="1024"
                  priority={true}
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-2xl mb-4">
                  You've told us that fatigue is one of the key things we should
                  study
                </h2>
                <p className="mb-2">
                  We performed an online survey last year and are now pleased to
                  present the initial results of a joint effort between patients
                  and clinicians to study fatigue in IBD.
                </p>

                <p className="mb-2">
                  Our patient-public involvement group summarises the full
                  findings of the online survey and we have built an initial
                  machine learning pipeline to better understand fatigue in IBD.
                </p>

                <Link
                  href="/results"
                  className=" hover:text-[#e76f51] pr-1 underline underline-offset-2"
                >
                  Read more
                </Link>
              </div>
            </div>
            <div className="flex flex-row-reverse text-gray-700 text-sm mt-6">
              20 January 2025
            </div>
          </div>
          <div className="bg-white text-gray-800 border p-6 rounded-lg shadow mb-6">
            <div className="md:flex flex-row gap-8 justify-center lg:justify-start items-start">
              <div className="w-1/3 md:w-1/4 flex-none mx-auto md:mx-0 mb-4 md:mb-0">
                <Image
                  src="/static/images/microscope.jpg"
                  alt="CCUK Patient Involvement in Research Day"
                  height="1024"
                  width="1024"
                  priority={true}
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-2xl mb-4">
                  How Patients Shape Our Research
                </h2>
                <p className="mb-2">
                  We recently presented on how patients influence our research
                  at the Crohn's and Colitis UK Patient Involvement in Research
                  Day.
                </p>
                <div class="mb-2">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/GhqFOjJuYE0?si=-2cVmp37o4rLHhAz&amp;start=4642"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                <a
                  href="/static/files/ccuk_patient_day_talk_nov_2024.pptx"
                  target="_blank"
                  className=" hover:text-[#e76f51] pr-1 underline underline-offset-2"
                >
                  Download Presentation Slides
                </a>
                |
                <a
                  href="https://crohnsandcolitis.org.uk/get-involved/want-to-get-involved-in-research/patient-involvement-in-research-day/ibd-patient-involvement-in-research-day-2024"
                  target="_blank"
                  className=" hover:text-[#e76f51] pl-1 underline underline-offset-2"
                >
                  CCUK Page
                </a>
              </div>
            </div>
            <div className="flex flex-row-reverse text-gray-700 text-sm mt-6">
              20 December 2024
            </div>
          </div>

          <div className="bg-white text-gray-800 border p-6 rounded-lg shadow mb-6">
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
              <div className="text-left">
                <h2 className="text-2xl mb-4">
                  End of 2023 Patient-Public Involvement Group Meeting
                </h2>
                <p className="mb-2">
                  A fantastic afternoon with our Patient Engagement group! We
                  discussed co-production of our IBD wellbeing paper, new work
                  with paediatric IBD, our upcoming Edinburgh Science Festival
                  show 'Our Lives and IBD'; and welcoming Ola, our new parent
                  patient representative!
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse text-gray-700 text-sm mt-6">
              29 December 2023
            </div>
          </div>

          <div className="bg-white text-gray-800 border p-6 rounded-lg shadow mb-6">
            <div className="md:flex flex-row gap-8 justify-center lg:justify-start items-start">
              <div className="w-1/3 md:w-1/4 flex-none mx-auto md:mx-0 mb-4 md:mb-0">
                <Image
                  src="/static/images/fringe_cropped.jpg"
                  alt="Dr Ho and Dr Hall engaging the public at the Edinburgh Fringe Festival"
                  height="1024"
                  width="1024"
                  priority={true}
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-2xl mb-4">
                  Engaging the public at the Edinburgh Fringe Festival 2023
                </h2>
                <p className="mb-2">
                  As part of engaging the public in research, Dr Rebecca Hall &
                  Dr Gwo-Tzer Ho recently put on a show at the Edinburgh Fringe
                  Festival in August 2023. Peter Ranscombe, writing for the
                  Lancet Gastroenterology & Hepatology, summarises the event.
                  Read more about it below.
                </p>
                <a
                  href="/static/files/taking_colonoscopies_to_the_stage_at_the_edinburgh_fringe.pdf"
                  target="_blank"
                  className=" hover:text-[#e76f51] pr-1 underline underline-offset-2"
                >
                  Taking colonoscopies to the stage at the Edinburgh Fringe
                </a>
              </div>
            </div>
            <div className="flex flex-row-reverse text-gray-700 text-sm mt-6">
              19 October 2023
            </div>
          </div>

          <div className="bg-white text-gray-800 border p-6 rounded-lg shadow mb-6">
            <div className="md:flex flex-row gap-8 justify-center lg:justify-start items-start">
              <div className="w-1/3 md:w-1/4 flex-none mx-auto md:mx-0 mb-4 md:mb-0">
                <Image
                  src="/static/images/ppi2.jpg"
                  alt="Aerin Thompson joins MUSIC PPI group"
                  height="1024"
                  width="1024"
                  priority={true}
                  className="rounded-full"
                />
              </div>
              <div className="text-left">
                <h2 className="text-2xl mb-4">
                  Welcome to our new PPI member Aerin Thompson
                </h2>
                <p className="mb-2">
                  I'm Aerin, a first year PhD student at The University of
                  Edinburgh studying inflammation resolution and tissue repair.
                </p>
                <p className="mb-2">
                  I was diagnosed with Ulcerative Colitis back in 2014 under
                  paediatric care. I was experiencing severe symptoms before
                  being admitted to hospital through A&E where I was monitored
                  for four weeks.
                </p>
                <p>
                  I like to be active and row for the university high
                  performance team alongside my studies. Originally from
                  Nottingham, I am enjoying the views that Edinburgh and
                  Scotland have to offer.
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse text-gray-700 text-sm mt-6">
              8 March 2023
            </div>
          </div>

          <div className="bg-white text-gray-800 border p-6 rounded-lg shadow mb-6">
            <div className="md:flex flex-row gap-8 justify-center lg:justify-start items-start">
              <div className="w-1/3 md:w-1/4 flex-none mx-auto md:mx-0 mb-4 md:mb-0">
                <Image
                  src="/static/images/rebeccahall.jpeg"
                  alt="Rebecca Hall presents interim results at the Scottish Society of Gastroenterology"
                  height="1024"
                  width="1024"
                  priority={true}
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-2xl mb-4">
                  Scottish Society of Gastroenterology Winter Meeting December
                  2022
                </h2>
                <p className="mb-2">
                  Dr Rebecca Hall recently presented our work linking
                  patient-reported well-being as a potential marker for our
                  scientific biomarker studies
                </p>
                <a
                  href="/static/files/ssgabstract2022.pdf"
                  target="_blank"
                  className=" hover:text-[#e76f51] pr-1 underline underline-offset-2"
                >
                  Download Abstract
                </a>
                |
                <a
                  href="/static/files/ssgslides2022.pptx"
                  target="_blank"
                  className=" hover:text-[#e76f51] pl-1 underline underline-offset-2"
                >
                  Download Presentation Slides
                </a>
              </div>
            </div>
            <div className="flex flex-row-reverse text-gray-700 text-sm mt-6">
              28 December 2022
            </div>
          </div>
          <div className="bg-white text-gray-800 border p-6 rounded-lg shadow mb-6">
            <div className="md:flex flex-row gap-8 justify-center lg:justify-start items-start">
              <div className="w-4/6 md:w-1/4 flex-none mx-auto md:mx-0 mb-4 md:mb-0">
                <Image
                  src="/static/images/story.jpg"
                  alt="Kris Gourlay sharing his experience"
                  height="1024"
                  width="1024"
                  priority={true}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl mb-4">Read and hear from Kris</h2>
                <p className="mb-2">
                  Kris is one of our study's patient representative and he
                  shares his story with The Herald{" "}
                  <a
                    target="_blank"
                    className=" hover:text-[#e76f51]"
                    href="https://www.heraldscotland.com/news/19159021.crohns-disease-ordeal-edinburgh-student-thought-food-poisoning/"
                  >
                    here
                  </a>
                  . His experience and views help us shape the design and
                  conduct of our research.
                </p>
                <p className="mb-4">
                  Hear him share his thoughts on the study here:
                </p>
                <audio id="marvel_intro" controls className="mb-4">
                  <source
                    src="/static/files/musicintrokris.mp3"
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
            <div className="flex flex-row-reverse text-gray-700 text-sm mt-6">
              29 June 2021
            </div>
          </div>
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
