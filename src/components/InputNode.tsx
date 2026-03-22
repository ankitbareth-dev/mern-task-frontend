import { Pencil } from "lucide-react";

interface InputNodeProps {
  value: string;
  onChange: (value: string) => void;
}

const InputNode = ({ value, onChange }: InputNodeProps) => {
  return (
    <div className="group relative bg-surface-container-low p-3 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-outline-variant/20 w-64 transition-all duration-300 hover:border-primary/30">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1 bg-primary-container/30 rounded flex items-center justify-center">
          <Pencil size={12} className="text-primary" />
        </div>
        <span className="font-body text-[10px] uppercase tracking-[0.15em] text-on-surface-variant font-semibold">
          Input-Node
        </span>
      </div>

      {/* Input Area */}
      <div className="relative">
        <textarea
          className="w-full bg-surface-container-high/50 border border-outline-variant/30 focus:border-primary focus:bg-surface-container-high focus:outline-none transition-all duration-300 resize-none h-16 text-on-surface placeholder:text-on-surface-variant/30 px-2.5 py-1.5 rounded-lg font-body text-xs leading-relaxed"
          placeholder="Type your prompt..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        {/* Subtle bottom highlight line */}
        <div className="absolute bottom-0 left-2 right-2 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default InputNode;
