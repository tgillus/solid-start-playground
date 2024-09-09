import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function About() {
  return (
    <main class="mx-auto py-4 px-48">
      <h1 class="text-3xl text-gray-200 font-semibold mt-5 mb-8">About</h1>

      <div class="text-center">
        <Counter />

        <p class="mt-8">
          Visit{" "}
          <a
            href="https://solidjs.com"
            target="_blank"
            class="text-blue-400 font-semibold hover:underline"
            rel="noreferrer"
          >
            solidjs.com
          </a>{" "}
          to learn how to build Solid apps.
        </p>

        <p class="my-4">
          <A href="/" class="text-blue-400 font-semibold hover:underline">
            Users
          </A>
          {" - "}
          <span>About</span>
        </p>
      </div>
    </main>
  );
}
