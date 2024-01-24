import React, { useEffect, useState } from "react";
import "./Form.css";

const Form = () => {
  const [user, setUser] = useState("users");
  const [person, setPerson] = useState([]);
  localStorage.setItem("users", JSON.stringify(person));
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${user}`)
      .then((response) => response.json())
      .then((json) => setPerson(json));
  }, [user]);

  return (
    <>
      <div>
        <div>
          <button className="button" onClick={() => setUser("users")}>add users</button>
          <button 
          className="button"
            onClick={() => {
              setPerson([]);
              setUser("");
            }}
          >
            delete users
          </button>
        </div>
        <div className="items">
          {person.map((item) => {
            return (
              <div className="inner" key={item.id}>
                <h2>{item.name}</h2>
                <h3>{item.username}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Form;
