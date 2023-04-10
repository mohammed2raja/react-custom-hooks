import "./styles.css";
import AsyncComponent from "./useAsync/asynComponents";
import ToggleComponent from "./useToggle/toggleComponent";

export default function App() {
  return (
    <div className="App">
      <h1>Most used React custom hooks</h1>
      <h2>Toggle</h2>
      <ToggleComponent />
      <h2>UseAsync</h2>
      <AsyncComponent />
    </div>
  );
}
