import UsersList from "~/components/UsersList";

export default function Home() {
  return (
    <main class="mx-auto p-4">
      <h1 class="text-center text-3xl font-semibold uppercase mt-5 mb-8">
        Users
      </h1>

      <UsersList />
    </main>
  );
}
