import { useCallback, useState } from "react";
import { shuffle } from "../utils.ts";
import Search from "../components/useCallback/Search.tsx";

const allUsers = ["alen", "mark", "oliver", "nolan", "eve"];

export default function useCallbackPage() {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text: string) => {
    const filteredUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  }, []);

  return (
    <>
      <h1>useCallback</h1>
      <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
      <Search onChange={handleSearch} />
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  );
}
