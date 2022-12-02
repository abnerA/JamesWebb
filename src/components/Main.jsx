import React, { useEffect, useState } from "react";
import styles from "./Main.module.css"

const myHeaders = new Headers();
myHeaders.append("X-API-KEY", "0142718b-94e2-426d-af4b-cf41a69668e7");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const url = "https://api.jwstapi.com/all/type/jpg?page=1&perPage=25";

function Main() {
  const [todos, setTodos] = useState();

  const fetchApi = async () => {
    const response = await fetch(url, requestOptions);
    const responseJSON = await response.json();
    setTodos(responseJSON.body);
    console.log(responseJSON.body);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <main className={styles}>
      <div className={styles.container} >
        <ul className={styles} >
          { !todos ? <h3>Loading...</h3> : todos.map((value) => {
              return (
                  <li className={styles} key={value.id}>
                    <img className={styles.img} width={200} src={value.location} alt={value.details.description} />
                    <strong>Description: </strong>{value.details.description}
                    <br />
                  </li>
              );
            })}
        </ul>
      </div>
    </main>
  );
}

export default Main;