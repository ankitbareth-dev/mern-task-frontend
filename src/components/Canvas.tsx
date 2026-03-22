import ThemeToggle from "./ThemeToggle";
import InputNode from "./InputNode";
import AnswerNode from "./AnswerNode";

function Canvas() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col bg-surface">
      {/* Dotted Background Layer */}
      <div className="fixed inset-0 dotted-grid pointer-events-none z-0" />

      {/* Theme Toggle  */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 grow flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4 py-20">
        <InputNode data={{ value: "" }} />

        {/* Visual Connector  */}
        <div className="hidden md:block h-0.5 w-10 bg-linear-to-r from-primary/30 via-primary to-primary/30 rounded-full" />

        <AnswerNode />
      </main>
    </div>
  );
}

export default Canvas;
