import { useState, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";
import InputNode from "./InputNode";
import AnswerNode from "./AnswerNode";
import RunFlowButton from "./RunFlowButton";

function Canvas() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const handleRunFlow = useCallback(async () => {
    if (!inputValue.trim() || isLoading) return;

    setIsLoading(true);
    setOutputValue("");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setOutputValue(`Okay, "${inputValue}" is good.`);
    setIsLoading(false);
  }, [inputValue, isLoading]);

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col bg-surface">
      {/* Dotted Background Layer */}
      <div className="fixed inset-0 dotted-grid pointer-events-none z-0" />

      {/* Theme Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 grow flex flex-col items-center justify-center gap-8 px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {/* InputNode */}
          <InputNode value={inputValue} onChange={handleInputChange} />

          {/* Visual Connector */}
          <div className="hidden md:block h-0.5 w-10 bg-linear-to-r from-primary/30 via-primary to-primary/30 rounded-full" />

          {/* AnswerNode */}
          <AnswerNode response={outputValue} isLoading={isLoading} />
        </div>

        {/* Runflow Button */}
        <RunFlowButton onClick={handleRunFlow} isLoading={isLoading} />
      </main>
    </div>
  );
}

export default Canvas;
