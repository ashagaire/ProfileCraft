import { Button } from "@mui/material";
import { useState } from "react";
import PDFDialog from "./PDFDialog";

export default function CV() {
  const [openCV, setOpenCV] = useState(false);

  const handleOpenCV = () => setOpenCV(true);
  const handleCloseCV = () => setOpenCV(false);

  return (
    <>
      <Button
        className="custom-button"
        variant="contained"
        onClick={handleOpenCV}
      >
        Preview CV
      </Button>

      <PDFDialog
        open={openCV}
        onClose={handleCloseCV}
        downloadHref="/ArjunPaudelCV.pdf"
        iframeSrc="/ArjunPaudelCV.pdf"
        iframeTitle="CV Preview"
      />
    </>
  );
}
