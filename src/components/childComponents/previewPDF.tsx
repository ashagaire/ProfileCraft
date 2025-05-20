import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import PreviewButton from "./PreviewButton";

export default function PreviewPDF() {
  const [openPdf, setOpenPdf] = useState(false);
  const hrefCV =
    "https://1drv.ms/b/c/3cd3ee4c6c17f4cd/EQ766Q1omRJIsYrqHi3lvJQBEGWmJ0Zi00JQwosbw7xiQg?e=eP2WT7";

  const handleOpenPdf = () => setOpenPdf(true);
  const handleClosePdf = () => setOpenPdf(false);

  return (
    <>
      {/* for screen up to medium size */}
      <PreviewButton href={hrefCV} />

      {/* for lg screen sizes */}

      <Button
        className="custom-button"
        variant="contained"
        onClick={handleOpenPdf}
      >
        Preview CV
      </Button>

      <Dialog open={openPdf} onClose={handleClosePdf} maxWidth="md" fullWidth>
        <div className="flex flex-col max-h-[90vh]">
          <DialogTitle>
            <div className="flex justify-end gap-4 md:gap-8 items-center w-full">
              <PreviewButton
                href="/ArjunPaudelCV.pdf"
                download={true}
                label="Download"
              />

              <IconButton
                aria-label="close"
                onClick={handleClosePdf}
                sx={{
                  color: "white",
                  borderRadius: "5px",
                  background: "#f10808",
                  transition: "background 0.2s, color 0.2s",
                  "&:hover": {
                    background: "#880404",
                    color: "#fff",
                  },
                }}
                size="small"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent className="!p-0 flex-grow overflow-hidden">
            <div className="w-full h-[80vh] ">
              <iframe
                src="/ArjunPaudelCV.pdf"
                className="w-full h-full border-none"
                title="CV Preview"
              />
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
}
