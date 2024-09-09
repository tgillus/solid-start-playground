import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button
      type="button"
      class="w-[200px] rounded-full bg-blue-300 text-neutral-900 font-semibold hover:bg-blue-200 px-[2rem] py-[1rem] m-24"
      onClick={() => setCount(count() + 1)}
    >
      Clicks: {count()}
    </button>
  );
}
