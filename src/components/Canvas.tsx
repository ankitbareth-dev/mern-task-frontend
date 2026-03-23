import { useState, useCallback } from "react";
import { toast } from "sonner";
import ThemeToggle from "./ThemeToggle";
import InputNode from "./InputNode";
import AnswerNode from "./AnswerNode";
import RunFlowButton from "./RunFlowButton";
import ResetButton from "./ResetButton";
import SaveButton from "./SaveButton";
import { generateAIResponse, saveFlow } from "../services/aiService";

function Canvas() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const handleRunFlow = useCallback(async () => {
    if (!inputValue.trim() || isLoading) return;

    setIsLoading(true);
    setOutputValue("");

    try {
      const responseText = await generateAIResponse(inputValue);
      setOutputValue(responseText);
    } catch (error) {
      console.error("Error running flow:", error);
      toast.error("Failed to generate response.");
      setOutputValue("Error: Could not connect to the AI server.");
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, isLoading]);

  const handleReset = useCallback(() => {
    setInputValue("");
    setOutputValue("");
  }, []);

  const handleSave = useCallback(async () => {
    if (!outputValue) return;

    setIsSaving(true);
    try {
      const result = await saveFlow(inputValue, outputValue);
      if (result.success) {
        toast.success("Flow saved successfully!");
      }
    } catch (error) {
      console.error("Error saving flow:", error);
      toast.error("Failed to save flow.");
    } finally {
      setIsSaving(false);
    }
  }, [inputValue, outputValue]);

  const isResetDisabled = !inputValue.trim() || isLoading;

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col bg-surface">
      <div className="fixed inset-0 dotted-grid pointer-events-none z-0" />

      <div className="absolute top-4 md:top-6 right-4 md:right-6 z-20">
        <ThemeToggle />
      </div>

      <main className="relative z-10 grow flex flex-col items-center justify-center gap-10 md:gap-16 px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 w-full max-w-5xl">
          <InputNode
            value={inputValue}
            onChange={handleInputChange}
            onSubmit={handleRunFlow}
            isLoading={isLoading}
          />

          {/* Visual Connector */}
          <div className="hidden md:block h-0.5 w-12 bg-linear-to-r from-primary/30 via-primary to-primary/30 rounded-full" />

          <AnswerNode response={outputValue} isLoading={isLoading} />
        </div>

        {/* Buttons Container  */}
        <div className="flex flex-row w-full justify-center gap-3 md:gap-6 max-w-md md:max-w-none">
          <div className="flex-1 md:flex-initial">
            <ResetButton
              onClick={handleReset}
              disabled={isResetDisabled}
              className="w-full md:w-auto"
            />
          </div>
          <div className="flex-1 md:flex-initial">
            <RunFlowButton
              onClick={handleRunFlow}
              isLoading={isLoading}
              className="w-full md:w-auto"
            />
          </div>
          <div className="flex-1 md:flex-initial">
            <SaveButton
              onClick={handleSave}
              disabled={!outputValue}
              isLoading={isSaving}
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Canvas;
