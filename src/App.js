import { UIProvider } from "./components/UI-context";
import Home from "./screens/home";

function App() {
  return (
    <UIProvider>
      <Home />
    </UIProvider>
  );
}

export default App;
