import { createAsync } from "@solidjs/router";
import { For, Suspense, createSignal } from "solid-js";

interface User {
  readonly id: number;
  readonly firstName: string;
  readonly middleName: string;
  readonly lastName: string;
  readonly username: string;
  readonly email: string;
}

interface ApiResponse {
  readonly total: number;
  readonly skip: number;
  readonly limit: number;
}

interface UsersResponse extends ApiResponse {
  readonly users: ReadonlyArray<User>;
}

const users = async (sortBy: SortBy, order: Order) => {
  "use server";

  const response = await fetch(
    `https://dummyjson.com/users?sortBy=${sortBy}&order=${order}`,
  );

  return (await response.json()) as UsersResponse;
};

type SortBy = "lastName" | "firstName";
type Order = "asc" | "desc";

export default function UsersList() {
  const [sortBy, setSortBy] = createSignal<SortBy>("lastName");
  const [order, setSortDirection] = createSignal<Order>("asc");

  const usersResponse = createAsync(() => users(sortBy(), order()));

  return (
    <>
      <div class="flex mb-5">
        <select
          value={sortBy()}
          onChange={(e) => setSortBy(e.target.value as SortBy)}
          class="flex-initial w-48 p-2 mr-5 rounded-xl bg-neutral-800 border border-neutral-700"
        >
          <option value="lastName">Last Name</option>
          <option value="firstName">First Name</option>
        </select>

        <select
          value={order()}
          onChange={(e) => setSortDirection(e.target.value as Order)}
          class="flex-initial w-48 p-2 rounded-xl bg-neutral-800 border border-neutral-700"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <br />

      <Suspense>
        <ul class="ml-10">
          <For each={usersResponse()?.users}>
            {(user) => (
              <li class="mb-2">
                {user.lastName}, {user.firstName}
              </li>
            )}
          </For>
        </ul>
      </Suspense>
    </>
  );
}
