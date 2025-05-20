import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

interface PreviewButtonProps {
  href: string;
  label?: string;
  download?: boolean;
  size?: "small" | "medium" | "large";
}

export default function PreviewButton({
  href,
  label = "Preview CV",
  download = false,
  size = "small",
}: PreviewButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      component="a"
      href={href}
      download={download || undefined}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      startIcon={download ? <DownloadIcon /> : undefined}
      className="custom-button "
      size={size}
    >
      {label}
    </Button>
  );
}
