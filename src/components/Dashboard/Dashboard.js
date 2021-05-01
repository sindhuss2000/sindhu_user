import React, { useEffect, useState } from "react";
import { makeAPI } from "../API/api";
import Preferences from "../Preferences/Preferences";

export default function Dashboard() {
  const [userList, setList] = useState([{ name: "abc" }]);
  const [selectedselected, setSelected] = useState();
  useEffect(async () => {
    console.log("good");
    //alert("hi");
    let a = await makeAPI("https://jsonplaceholder.typicode.com/users");
    console.log(a);
    //alert(a);
    if (a !== null) setList(a);
  }, []);
  console.log(userList);
  return (
    <div>
      <h2> User info</h2>
      {selectedselected === undefined ? (
        userList?.map((user) => (
          <li
            key={user.id}
            onClick={() => {
              console.log("hi");
              setSelected(user.id);
            }}
          >
            {user.name}
          </li>
        ))
      ) : (
        <Preferences id={selectedselected} />
      )}
    </div>
  );
}
