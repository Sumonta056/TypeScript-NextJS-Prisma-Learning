import React, { cache } from "react";

// Defining the User interface
interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  // Fetching data from an API
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-cache" } // fresh data no caching
    //{ next: { revalidate: 10 } } // revalidate data every 10 seconds
    // if caching on it will think this a static page and cache it for everything like fix time
  );
  // Parsing the JSON data
  const users: User[] = await res.json();
  return (
    <div>
      <h1 className="text-black">Hello I am Users</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
      <div className="flex flex-wrap">
        {users.map((user) => (
          <div key={user.id} className="border-2 border-black p-4 m-2">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto w-1/3 border-2">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={index % 2 === 1 ? "hover" : ""}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
