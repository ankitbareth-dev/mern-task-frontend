interface ResetButtonProps {
  onClick: () => void;
  disabled: boolean;
  className?: string;
}

const ResetButton = ({
  onClick,
  disabled,
  className = "",
}: ResetButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-xl font-headline font-medium text-sm tracking-[0.15em] transition-all duration-150 ${className} ${
        disabled
          ? "bg-surface-container-high text-on-surface-variant/30 cursor-not-allowed border border-transparent"
          : "border border-outline-variant text-on-surface-variant hover:bg-surface-container-high"
      }`}
    >
      RESET
    </button>
  );
};

export default ResetButton;
