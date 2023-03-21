import { useEffect, useState } from "react";
import { getAll } from "../models/UserModel";

function UserItemSmall() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAll().then((users) => setUsers(users));
  }, []);

  return <div>{users}</div>;
}

export default UserItemSmall;
