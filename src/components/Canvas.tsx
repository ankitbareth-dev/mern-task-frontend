import ThemeToggle from "./ThemeToggle";
import InputNode from "./InputNode";

function Canvas() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col bg-surface">
      {/* Dotted Background Layer */}
      <div className="fixed inset-0 dotted-grid pointer-events-none z-0" />

      {/* Theme Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 grow flex items-center justify-center">
        <InputNode data={{ value: "" }} />
      </main>
    </div>
  );
}

export default Canvas;
