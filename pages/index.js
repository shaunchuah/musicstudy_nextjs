import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
import SectionHeaderWhite from "../components/SectionHeaderWhite";
import SectionWrapper from "../components/SectionWrapper";
import SectionWrapperWhite from "../components/SectionWrapperWhite";
import SectionWrapperHero from "../components/SectionWrapperHero";

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
          charset="utf-8"></script>
      </Head>
      <SectionWrapperHero id="hero">
        <div className="md:grid grid-cols-3 mt-20">
          <div className="col-span-2">
            <div className="flex">
              <div class="text-7xl">MUSIC & Mini-MUSIC</div>
            </div>
            <div className="flex items-center pt-4 lg:pt-8 lg:pb-2">
              <p className="font-merriweather mb-6 leading-relaxed sm:text-2xl text-xl max-w-lg">
                Mitochondrial DAMPs as mechanistic biomarkers of gut mucosal
                inflammation in adults and children.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center  gap-2 mb-4">
              <Link href="/music" legacyBehavior>
                <button className=" border-2 border-[#264653] bg-[#264653] text-white hover:text-[#264653] hover:bg-white py-2 px-6 rounded text-lg">
                  MUSIC (Adults)
                </button>
              </Link>
              <Link href="/mini-music" legacyBehavior>
                <button className="ml-2 border-2 border-[#264653] bg-[#264653] text-white hover:text-[#264653] hover:bg-white py-2 px-6 rounded text-lg">
                  mini-MUSIC (Children)
                </button>
              </Link>
            </div>

            <div className="flex items-center">
              <a
                className="mt-4 text-gray-300 hover:text-white"
                href="https://www.ed.ac.uk/inflammation-research/research/gut-research-unit"
                target="_blank"
                rel="noopener noreferrer">
                <span className="inline-flex">
                  A project by the Gut Research Unit
                  <svg
                    className="ml-1 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
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
              <div className="text-center lg:text-left">
                <div className="flex flex-row items-start gap-4">
                  <div>
                    <Image
                      src="/static/images/ppi.jpg"
                      alt="Molly Halligan shares her experience"
                      width="100"
                      height="100"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl">
                      Molly Halligan, Patient Representative
                    </h2>
                    <p className="mb-6">
                      Listen to her experience in taking part in IBD research.
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
              <div className="text-center lg:text-left">
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
        <SectionHeader title="Updates" />
        <div className="md:grid lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white text-gray-800 border p-6 rounded-lg shadow mb-6">
              <div className="flex flex-row gap-4 justify-center lg:justify-start items-start">
                <div className="w-1/6 flex-none">
                  <Image
                    src="/static/images/ppi2.jpg"
                    alt="Aerin Thompson joins MUSIC PPI group"
                    height="1024"
                    width="1024"
                    priority={true}
                    className="rounded-full"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl mb-4">
                    Welcome to our new PPI member Aerin Thompson
                  </h2>
                  <p className="mb-2">
                    I'm Aerin, a first year PhD student at The University of
                    Edinburgh studying inflammation resolution and tissue
                    repair.
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
              <div className="flex flex-row gap-4 justify-center lg:justify-start items-start">
                <div className="w-1/6 flex-none">
                  <Image
                    src="/static/images/rebeccahall.jpeg"
                    alt="Rebecca Hall presents interim results at the Scottish Society of Gastroenterology"
                    height="1024"
                    width="1024"
                    priority={true}
                    className="rounded-full"
                  />
                </div>
                <div className="text-center lg:text-left">
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
                    className=" hover:text-[#e76f51] pr-1">
                    Download Abstract
                  </a>
                  |
                  <a
                    href="/static/files/ssgslides2022.pptx"
                    target="_blank"
                    className=" hover:text-[#e76f51] pl-1">
                    Download Presentation Slides
                  </a>
                </div>
              </div>
              <div className="flex flex-row-reverse text-gray-700 text-sm mt-6">
                28 December 2022
              </div>
            </div>
            <div className="bg-white text-gray-800 border p-6 rounded-lg shadow mb-6">
              <div className="flex flex-row gap-4 justify-center lg:justify-start items-start">
                <div className="w-1/6 flex-none">
                  <Image
                    src="/static/images/story.jpg"
                    alt="Kris Gourlay sharing his experience"
                    height="1024"
                    width="1024"
                    priority={true}
                    className="rounded-full"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl mb-4">Read and hear from Kris</h2>
                  <p className="mb-2">
                    Kris is one of our study's patient representative and he
                    shares his story with The Herald{" "}
                    <a
                      target="_blank"
                      className=" hover:text-[#e76f51]"
                      href="https://www.heraldscotland.com/news/19159021.crohns-disease-ordeal-edinburgh-student-thought-food-poisoning/">
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

          <div>
            <div>
              <a
                className="twitter-timeline mb-4"
                data-height="600"
                href="https://twitter.com/Edin_IBDScience?ref_src=twsrc%5Etfw">
                Tweets by Edin_IBDScience
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"></script>
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
