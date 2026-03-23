interface ResetButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const ResetButton = ({ onClick, disabled }: ResetButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2.5 rounded-xl font-headline font-medium text-sm tracking-[0.15em] transition-all duration-150 ${
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
