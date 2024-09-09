import UsersList from "~/components/UsersList";

export default function Home() {
  return (
    <main class="mx-auto py-4 px-48">
      <h1 class="text-3xl text-gray-200 font-semibold mt-5 mb-8">Users</h1>

      <UsersList />
    </main>
  );
}
