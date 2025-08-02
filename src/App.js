import { Home } from "./website/pages";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
