import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";

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

      <Dialog open={openCV} onClose={handleCloseCV} maxWidth="md" fullWidth>
        <div className="flex flex-col max-h-[90vh]">
          <DialogTitle>
            <div className="flex justify-end gap-4 md:gap-8 items-center w-full">
              <Button
                variant="contained"
                color="primary"
                component="a"
                href="/ArjunPaudelCV.pdf"
                download
                startIcon={<DownloadIcon />}
                className="custom-button "
                size="small"
              >
                Download
              </Button>
              <IconButton
                aria-label="close"
                onClick={handleCloseCV}
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
            <div className="w-full h-[60vh] sm:h-[70vh] md:h-[75vh]">
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
