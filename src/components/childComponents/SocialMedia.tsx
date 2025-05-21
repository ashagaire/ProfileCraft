import { FaLinkedin, FaGithub } from "react-icons/fa";

interface SocialMediaProps {
  textCss: string;
}

export default function SocialMedia({ textCss }: SocialMediaProps) {
  return (
    <div className="flex space-x-4">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/arjun-paudel-a39378318/"
        className={` hover:scale-110 transition-transform text-xl ${textCss}`}
      >
        {FaLinkedin({ className: "text-xl" })}
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/arjunspaudel"
        className={` hover:scale-110 transition-transform text-xl ${textCss}`}
      >
        {FaGithub({ className: "text-xl" })}
      </a>
    </div>
  );
}
