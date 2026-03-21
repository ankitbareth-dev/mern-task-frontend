function Canvas() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col bg-surface">
      {/* Dotted Background Layer */}
      <div className="fixed inset-0 dotted-grid pointer-events-none z-0" />

      {/* Main Content Area */}
      <main className="relative z-10 grow flex items-center justify-center">
        <p className="text-on-surface-variant font-body text-sm uppercase tracking-widest opacity-50">
          Canvas Ready
        </p>
      </main>
    </div>
  );
}

export default Canvas;
