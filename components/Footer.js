import Image from "next/legacy/image";
import Link from "next/link";
import FooterLink from "./FooterLink";
import MaxWidthControl from "./MaxWidthControl";

export default function Footer() {
  return (
    <footer className="text-white text-lg lg:text-base border-t-2">
      <MaxWidthControl>
      <div className="px-5 2xl:px-0 pt-10">
        <div className="flex flex-wrap lg:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              USEFUL LINKS
            </h2>
            <div className="flex flex-col">
              <FooterLink text="G-Trac" href="https://samples.musicstudy.uk/" />
              <FooterLink
                text="RedCap"
                href="https://ecrf.igmm.ed.ac.uk/index.php?action=myprojects"
              />
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              ADDRESS
            </h2>

            <p className="mb-3">
              Gut Research Unit
              <br />
              Institute for Regeneration and Repair
              <br />
              Edinburgh BioQuarter
              <br />
              4-5 Little France Drive
              <br />
              Edinburgh EH16 4UU
            </p>
            <p>
              School of Infection and Immunity
              <br />
              College of Medical, Veterinary and Life Sciences
              <br />
              University of Glasgow
              <br />
              Sir Graeme Davis Building
              <br />
              120 University Place
              <br />
              Glasgow G12 8TA
            </p>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              LEGAL
            </h2>
            <div className="flex flex-col">
              <FooterLink
                text="Trial Registration"
                href="https://clinicaltrials.gov/ct2/show/NCT04760964"
              />
              <FooterLink
                text="Terms and Conditions"
                href="https://www.ed.ac.uk/about/website/website-terms-conditions"
              />
              <FooterLink
                text="Data Protection"
                href="https://www.ed.ac.uk/data-protection"
              />
              <FooterLink
                text="Privacy Policy"
                href="https://www.ed.ac.uk/about/website/privacy"
              />
              <FooterLink
                text="Accessibility"
                href="https://www.ed.ac.uk/about/website/accessibility"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-5 py-6 flex items-center lg:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center lg:justify-start justify-center text-gray-900">
            <Image
              src="/static/images/musicicon.png"
              alt="MUSIC Logo"
              height="50"
              width="56"
              priority={true}
              className="border border-white rounded-xl"
            />
          </Link>
          <p className="text-center lg:text-left text-sm text-gray-300 lg:ml-4 lg:mt-0 mt-4">
            © 2023 MUSIC &amp; mini-MUSIC Research Team <br />
            Last Updated January 2025
          </p>
        </div>
      </div>
      </MaxWidthControl>
    </footer>
  );
}
