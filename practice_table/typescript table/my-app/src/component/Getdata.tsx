import axios from "axios";
import React, { useEffect, useState } from "react";

interface props {
  name: string;
  id: string;
  website: string;
  email: string;
}

function Getdata() {
  const [data, getdata] = useState<props[]>([]);
  const fetchdata = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => getdata(res.data));
  };
  useEffect(() => {
    fetchdata();
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

        {data.map((i) => (
          <tbody>
            <tr>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.website}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Getdata;
