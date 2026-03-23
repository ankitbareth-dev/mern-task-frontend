interface SaveButtonProps {
  onClick: () => void;
  disabled: boolean;
  className?: string;
}

const SaveButton = ({ onClick, disabled, className = "" }: SaveButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-xl font-headline font-medium text-sm tracking-[0.15em] transition-all duration-150 ${className} ${
        disabled
          ? "bg-surface-container-high text-on-surface-variant/30 cursor-not-allowed border border-transparent"
          : "bg-tertiary text-on-tertiary-container hover:bg-tertiary-container shadow-lg active:scale-[0.98]"
      }`}
    >
      SAVE
    </button>
  );
};

export default SaveButton;
