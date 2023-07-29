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
          charset="utf-8"
        ></script>
      </Head>
      <SectionWrapperHero id="hero">
        <div>
          <div className="flex mt-20">
            <div class="text-7xl">
              MUSIC & Mini-MUSIC
            </div>
          </div>
          <div className="flex items-center pt-4 lg:pt-8 lg:pb-2">
            <p className="font-merriweather mb-6 leading-relaxed sm:text-2xl text-xl max-w-lg">
              Mitochondrial DAMPs as mechanistic biomarkers of gut mucosal inflammation in adults and children.
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
      </SectionWrapperHero>
  
      <SectionWrapper id="overview">
        <SectionHeader title="Updates" />
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="lg:col-span-2">
            
            <div>
              <div className="bg-white border p-6 rounded-lg shadow flex flex-wrap gap-4 justify-center lg:justify-start items-start">
                <div className="w-1/3 flex-none">
                  <Image
                    src="/static/podcast.jpg"
                    alt="Lisa Derr introducing MARVEL"
                    height="1024"
                    width="1024"
                    priority={true}
                    className="rounded-lg"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-xl">Introducing MARVEL</h2>
                  <p className="mb-6 text-sm">By Lisa Derr, Trial Manager</p>
                  <audio id="marvel_intro" controls className="mb-4">
                    <source
                      src="/static/marvel_introduction.mp4"
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
          </div>
          <div>
          
            <div>
              <a
                className="twitter-timeline mb-4"
                data-height="600"
                href="https://twitter.com/MarvelTrial?ref_src=twsrc%5Etfw"
              >
                Tweets by MarvelTrial
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </div>
          </div>
        </div>
      </SectionWrapper>
     

      <SectionWrapperWhite id="sponsors">
        <SectionHeaderWhite title="Sponsors" />
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <Image
              className="h-40 rounded w-full object-cover object-center mb-6"
              src="/static/jonmoulton.png"
              alt="Jon Moulton Charity Trust"
              height="354"
              width="709"
              priority={true}
            />
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <Image
              className="h-40 rounded w-full object-cover object-center mb-6"
              src="/static/cir.png"
              alt="Centre for Inflammation Research"
              height="354"
              width="709"
            />
          </div>

          <div className="xl:w-1/6 md:w-1/4 p-4 w-1/2">
            <Image
              className="h-40 rounded w-full object-cover object-center mb-6"
              src="/static/nhslothian.png"
              alt="NHS Lothian"
              height="354"
              width="354"
            />
          </div>
          <div className="hidden md:w-1/4 md:block xl:hidden"></div>
          <div className="xl:w-1/6 md:w-1/4 p-4 w-1/2">
            <Image
              className="h-40 rounded w-full object-cover object-center mb-6"
              src="/static/accord.png"
              alt="ACCORD"
              height="354"
              width="354"
            />
          </div>
        </div>
      </SectionWrapperWhite>

    </main>
  );
}
