interface RunFlowButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const RunFlowButton = ({ onClick, isLoading }: RunFlowButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`px-8 py-3 rounded-xl font-headline font-bold text-sm tracking-[0.2em] shadow-lg active:scale-[0.98] transition-all duration-150 bg-linear-to-r from-primary to-primary-dim text-on-primary cursor-pointer ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? "RUNNING..." : "RUN FLOW"}
    </button>
  );
};

export default RunFlowButton;
