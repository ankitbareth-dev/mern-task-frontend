import { Sparkles, Loader2 } from "lucide-react";

interface AnswerNodeProps {
  response: string;
  isLoading: boolean;
}

const AnswerNode = ({ response, isLoading }: AnswerNodeProps) => {
  return (
    <div className="relative bg-surface-container-low p-4 md:p-6 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-outline-variant/20 w-11/12 md:w-120 transition-all duration-300 hover:border-tertiary/30">
      {/* Header */}
      <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
        <div className="p-1 md:p-1.5 bg-tertiary-container/30 rounded flex items-center justify-center">
          {isLoading ? (
            <Loader2
              size={14}
              className="md:w-5.25 md:h-5.25 text-tertiary animate-spin"
            />
          ) : (
            <Sparkles size={14} className="md:w-5.25 md:h-5.25 text-tertiary" />
          )}
        </div>
        <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.15em] text-on-surface-variant font-semibold">
          AI Response
        </span>
      </div>

      {/* Output Area */}
      <div className="bg-surface-container-high/50 border border-outline-variant/30 rounded-lg min-h-24 md:min-h-36 px-3 md:px-4 py-2 md:py-3 flex items-start">
        {isLoading ? (
          <p className="text-tertiary/80 text-sm md:text-base italic animate-pulse w-full">
            Thinking...
          </p>
        ) : (
          <p className="text-on-surface-variant/80 text-sm md:text-base leading-relaxed">
            {response || (
              <span className="text-on-surface-variant/60 italic">
                AI response will appear here...
              </span>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default AnswerNode;
