import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";

type mockUser = {
  id: number;
  name: string;
};

export default async function mockUsers() {
  const authObject = await auth();
  const userObject = await currentUser();
  console.log("Auth object", authObject);
  console.log("User object", userObject);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://681a320c1ac11556350830eb.mockapi.io/users");
  const users = await res.json();
  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const res = await fetch(
      "https://681a320c1ac11556350830eb.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    const newUser = await res.json();
    revalidatePath("/mock-users");
    console.log("new user", newUser);
  }
  console.log("Server rendered");
  return (
    <div className="py-10">
      <form action={addUser} className="mb-4">
        <input
          type="text"
          name="name"
          required
          className="bg-white border p-2 mr-2 rounded text-gray-900"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add user
        </button>
      </form>
      <ul className="space-y-4 p-4">
        {users.map((user: mockUser) => (
          <li
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            {user.name} ({user.id})
          </li>
        ))}
      </ul>
    </div>
  );
}
