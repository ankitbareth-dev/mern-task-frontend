import { Loader2 } from "lucide-react";

interface SaveButtonProps {
  onClick: () => void;
  disabled: boolean;
  isLoading: boolean;
  className?: string;
}

const SaveButton = ({
  onClick,
  disabled,
  isLoading,
  className = "",
}: SaveButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`px-6 py-3 rounded-xl font-headline font-medium text-sm tracking-[0.15em] transition-all duration-150 flex items-center justify-center gap-2 ${className} ${
        disabled || isLoading
          ? "bg-surface-container-high text-on-surface-variant/30 cursor-not-allowed border border-transparent"
          : "bg-tertiary text-on-tertiary-container hover:bg-tertiary-container shadow-lg active:scale-[0.98]"
      }`}
    >
      {isLoading && <Loader2 size={16} className="animate-spin" />}
      {isLoading ? "SAVING..." : "SAVE"}
    </button>
  );
};

export default SaveButton;
