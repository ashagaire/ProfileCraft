import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PreviewButton from "./PreviewButton";

interface PDFDialogProps {
  open: boolean;
  onClose: () => void;
  downloadHref: string;
  iframeSrc: string;
  iframeTitle: string;
}

export default function PDFDialog({
  open,
  onClose,
  downloadHref,
  iframeSrc,
  iframeTitle,
}: PDFDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <div className="flex flex-col max-h-[90vh]">
        <DialogTitle>
          <div className="flex justify-end gap-4 md:gap-8 items-center w-full">
            <PreviewButton
              href={downloadHref}
              download={true}
              label="Download"
            />
            <IconButton
              aria-label="close"
              onClick={onClose}
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
          <div className="w-full h-[80vh]">
            <iframe
              src={iframeSrc}
              className="w-full h-full border-none"
              title={iframeTitle}
            />
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}
