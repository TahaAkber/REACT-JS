import axios from "axios";
import React, { useEffect, useState } from "react";

function Getapi() {
  const [users, setusers] = useState([]);

  const getdata = async () => {
    const result = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setusers(res.data));
    console.log(result);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>email</th>
            <th>website</th>
          </tr>
        </thead>

        {users.map((i) => (
          <tbody>
            <tr>
              <th>{i.id}</th>
              <th>{i.name}</th>
              <th>{i.email}</th>
              <th>{i.website}</th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Getapi;
