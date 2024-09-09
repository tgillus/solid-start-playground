import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="text-center mx-auto py-4 px-48">
      <h1 class="max-6-xs text-6xl text-gray-200 font-semibold my-16">
        Not Found
      </h1>

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
        <A href="/about" class="text-blue-400 font-semibold hover:underline">
          About
        </A>
      </p>
    </main>
  );
}
