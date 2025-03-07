import "./styles.css";
import { Counter } from "./components/counter/counter";
import { Summary } from "./components/summary/summary";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter />
      <Summary />
    </div>
  );
}
