import { Pencil } from "lucide-react";

interface InputNodeProps {
  value: string;
  onChange: (value: string) => void;
}

const InputNode = ({ value, onChange }: InputNodeProps) => {
  return (
    <>
      <div className="group relative bg-surface-container-low p-4 md:p-6 rounded-xl border border-outline-variant/20 w-11/12 md:w-120 transition-all duration-300 hover:border-primary/30">
        {/* Header */}
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          <div className="p-1 md:p-1.5 bg-primary-container/30 rounded flex items-center justify-center">
            <Pencil size={14} className="md:w-5.25 md:h-5.25 text-primary" />
          </div>
          <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.15em] text-on-surface-variant font-semibold">
            Input-Node
          </span>
        </div>

        {/* Input Area */}
        <div className="relative">
          <textarea
            className="custom-scrollbar overflow-y-auto w-full bg-surface-container-high/50 border border-outline-variant/30 focus:border-primary focus:bg-surface-container-high focus:outline-none transition-all duration-300 resize-none h-24 md:h-36 text-on-surface placeholder:text-on-surface-variant/30 px-3 md:px-4 py-2 md:py-3 rounded-lg font-body text-sm md:text-base leading-relaxed"
            placeholder="Type your prompt..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />

          {/* Subtle bottom highlight line */}
          <div className="absolute bottom-0 left-2 right-2 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </>
  );
};

export default InputNode;
