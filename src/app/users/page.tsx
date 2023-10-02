import React from "react";

interface User {
  id: number;
  name: string;
}

const pageUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const users: User[] = await res.json();

  return (
    <div>
      {users.map((item, index) => {
        return <div key={index}>{item.name}</div>;
      })}
    </div>
  );
};

export default pageUsers;
