import { Sparkles } from "lucide-react";

const AnswerNode = () => {
  return (
    <div className="relative bg-surface-container-low p-3 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-outline-variant/20 w-64 transition-all duration-300 hover:border-tertiary/30">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1 bg-tertiary-container/30 rounded flex items-center justify-center">
          <Sparkles size={12} className="text-tertiary" />
        </div>
        <span className="font-body text-[10px] uppercase tracking-[0.15em] text-on-surface-variant font-semibold">
          AI Response
        </span>
      </div>

      {/* Output Area */}
      <div className="bg-surface-container-high/50 border border-outline-variant/30 rounded-lg min-h-16 px-2.5 py-1.5">
        <p className="text-on-surface-variant/60 text-xs italic leading-relaxed">
          AI response will appear here...
        </p>
      </div>
    </div>
  );
};

export default AnswerNode;
