import { Toaster } from "sonner";
import Canvas from "./components/Canvas";

function App() {
  return (
    <>
      <Toaster position="bottom-center" richColors />
      <Canvas />
    </>
  );
}

export default App;
