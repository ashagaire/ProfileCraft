import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

interface SocialMediaProps {
  textCss: string;
}

export default function SocialMedia({ textCss }: SocialMediaProps) {
  return (
    <div className="flex space-x-4">
      <a
        href="#"
        className={` hover:scale-110 transition-transform text-xl ${textCss}`}
      >
        {FaLinkedin({ className: "text-xl" })}
      </a>
      <a
        href="#"
        className={` hover:scale-110 transition-transform text-xl ${textCss}`}
      >
        {FaGithub({ className: "text-xl" })}
      </a>
      <a
        href="#"
        className={` hover:scale-110 transition-transform text-xl ${textCss}`}
      >
        {FaTwitter({ className: "text-xl" })}
      </a>
      <a
        href="#"
        className={` hover:scale-110 transition-transform text-xl ${textCss}`}
      >
        {FaInstagram({ className: "text-xl" })}
      </a>
    </div>
  );
}
