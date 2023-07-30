export default function FooterLink({text, href}) {
  return (
    <a
      className="py-1 md:py-0 underline underline-offset-2 md:no-underline hover:text-[#e76f51] mb-2 md:mb-0"
      href={href}
      target="_blank"
      rel="noopener noreferrer">
      {text}
    </a>
  );
}
