import CloseIcon from "@mui/icons-material/Close";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import ScoreCounterTable from "./ScoreCounterTable";

interface GameScoreDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function GameScoreDialog({
  open,
  onClose,
}: GameScoreDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <div className="flex flex-col max-h-[90vh]">
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Game Score
          <IconButton onClick={onClose} size="small" aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className="!p-0 flex-grow overflow-hidden">
          <div className="w-full h-[80vh]">
            <ScoreCounterTable />
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}
