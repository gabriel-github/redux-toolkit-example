import { useSelector } from "react-redux";
import { RootState } from "../store";

export function Count() {
  const { count } = useSelector((state: RootState) => state.counter);

  return (
    <div className="w-40 flex flex-col items-center justify-center mb-4">
      <h2 className="text-8xl text-zinc-700 font-semibold">{count}</h2>
      <p className="text-2xl text-zinc-700 font-semibold">counter</p>
    </div>
  );
}
