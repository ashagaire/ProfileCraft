import { useState } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PDFDialog from "./PDFDialog";

export default function PreviewPDF() {
  const [openPdf, setOpenPdf] = useState(false);
  const hrefThesis =
    "https://1drv.ms/b/c/3cd3ee4c6c17f4cd/EbitFNg3pRpEg6yL9eMWv4QBd16rYpsjzFpcQ4W5YkB7fQ?e=3CyoPU";

  const handleOpenPdf = () => setOpenPdf(true);
  const handleClosePdf = () => setOpenPdf(false);

  return (
    <>
      {/* for screen up to medium size */}
      <div className="block lg:hidden">
        <a
          href={hrefThesis}
          target="_blank"
          rel="noopener noreferrer"
          className="preview-link"
        >
          Preview
          <AutoStoriesIcon className="preview-icon" />
        </a>
      </div>

      {/* for lg screen sizes */}
      <div className="hidden lg:block">
        <a onClick={handleOpenPdf} className="preview-link">
          Preview
          <AutoStoriesIcon className="preview-icon" />
        </a>

        <PDFDialog
          open={openPdf}
          onClose={handleClosePdf}
          downloadHref="/Thesis.pdf"
          iframeSrc="/Thesis.pdf"
          iframeTitle="Thesis Preview"
        />
      </div>
    </>
  );
}
