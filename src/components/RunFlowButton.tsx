interface RunFlowButtonProps {
  onClick: () => void;
  isLoading: boolean;
  className?: string;
}

const RunFlowButton = ({
  onClick,
  isLoading,
  className = "",
}: RunFlowButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`px-8 py-3 rounded-xl font-headline font-bold text-sm tracking-[0.2em] shadow-lg active:scale-[0.98] transition-all duration-150 bg-linear-to-r from-primary to-primary-dim text-on-primary ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {isLoading ? "RUNNING..." : "RUN FLOW"}
    </button>
  );
};

export default RunFlowButton;
