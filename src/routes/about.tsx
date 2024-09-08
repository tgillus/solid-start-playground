import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function About() {
  return (
    <main class="text-center mx-auto p-4">
      <h1 class="text-3xl font-semibold uppercase mt-5 mb-8">About Page</h1>

      <Counter />

      <p class="mt-8">
        Visit{" "}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-cyan-600 hover:underline"
          rel="noreferrer"
        >
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>

      <p class="my-4">
        <A href="/" class="text-cyan-600 hover:underline">
          Home
        </A>
        {" - "}
        <span>About Page</span>
      </p>
    </main>
  );
}
