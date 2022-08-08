import { Actions } from "./components/Actions";
import { AddAmount } from "./components/AddAmount";
import { Count } from "./components/Count";

function App() {
  return (
    <div className="h-screen w-screen bg-zinc-900 flex items-center justify-center">
      <div>
        <Count />
        <Actions />
        <AddAmount />
      </div>
    </div>
  );
}

export default App;
