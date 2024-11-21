import { ColorProvider } from "./context/ColorContext";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <ColorProvider>
      <Dashboard/>
    </ColorProvider>
  )
}
