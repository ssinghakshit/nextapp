type mockUser = {
  id: number;
  name: string;
};

export default async function mockUsers() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://681a320c1ac11556350830eb.mockapi.io/users");
  const users = await res.json();
  console.log("Server rendered");
  return (
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
  );
}
