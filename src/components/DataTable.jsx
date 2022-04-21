import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Datatable.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/action/dataAction";
// import { useNavigate } from "react-router-dom";

const DataTable = () => {
  const { loading, items } = useSelector((state) => state.allData);
  // console.log(items)

  const dispatch = useDispatch();
  // const history = useNavigate();

  const [searchText, setsearchText] = useState("");
  const [todo, setTodo] = useState(items);
  console.log("todo");
  console.log(todo);
  const [isFetch, setisFetch] = useState(false);
  const [checkedloading, setcheckedLoading] = useState(false);
  const [isChecked, setisChecked] = useState(false);
  console.log(isChecked);

  useEffect(() => {
    const setDataToState = () => {
      if (loading === false) {
        setTodo(items);
      }
    };
    setDataToState();
  }, [loading]);

  useEffect(() => {
    //  const fetchData = async()=>{

    //      const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos")
    //      console.log("data")
    //      console.log(data)
    //      setTodo(data)
    //      setisFetch(true)

    //  }
    //  fetchData()
    dispatch(getData());
    // setTodo(items)
    // console.log(items)
  }, [dispatch]);
  //etTodo(items)
  const handleSearch = (event) => {
    //let value = event.target.value.toLowerCase();
    setsearchText(event.target.value);
  };

  const onChangeHandler = (e, item) => {
    console.log(e.target.checked);
    console.log(item);

    if (e.target.checked === true) {
      // const item = todo.filter(x=> x.id === id)
      console.log("added")
      console.log(item)

      for (let index = 0; index < todo.length; index++) {
        if (todo[index].id === item.id) {
          console.log(todo[index]);
          console.log("deleting");
          todo.splice(index, 1);
          console.log("deleted");
          const newObject = {
            userId: item.userId,
            id: item.id,
            title: item.title,
            completed: true,
          };
          console.log("adding updated object");
          todo.splice(index, 0, newObject);
          console.log("added");

          console.log(todo);
        }
      }
    } else {
      // const item = todo.filter(x=> x.id === id)
      // console.log("removed")
      // console.log(item)
      for (let index = 0; index < todo.length; index++) {
        if (todo[index].id === item.id) {
          console.log(todo[index]);
          console.log("deleting");
          todo.splice(index, 1);
          console.log("deleted");
          const newObject = {
            userId: item.userId,
            id: item.id,
            title: item.title,
            completed: false,
          };
          console.log("adding updated object");
          todo.splice(index, 0, newObject);
          console.log("added");

          console.log(todo);
        }
      }
    }
  };

  const onSubmitHandler = () => {
    localStorage.setItem("items", JSON.stringify(todo));
  };
  const getItem = () => {
    const items = localStorage.getItem("items");
    console.log("local storage items");
    console.log(JSON.parse(items));
  };

  const checkAllHandler = async (e) => {
    const { checked } = e.target;
    console.log(checked);
    setTodo((todos) =>
      todos.map((todo) => ({
        ...todo,
        completed: checked,
      }))
    );
    // let val = e.target.checked;
    // console.log(val);
    // let allTodoList = [];

    // if (val === true) {
    //   setisChecked(true);
    //   if (todo.length > 0) {
    //     for (let index = 0; index < todo.length; index++) {
    //       const newObject = {
    //         userId: todo[index].userId,
    //         id: todo[index].id,
    //         title: todo[index].title,
    //         completed: true,
    //       };
    //       allTodoList.push(newObject);
    //     }
    //     setTodo(allTodoList);
    //     setisChecked(false);
    //     // history("/");
    //   }
    // } else if (val === false) {
    //   setisChecked(true);
    //   if (todo.length > 0) {
    //     for (let index = 0; index < todo.length; index++) {
    //       const newObject = {
    //         userId: todo[index].userId,
    //         id: todo[index].id,
    //         title: todo[index].title,
    //         completed: false,
    //       };
    //       allTodoList.push(newObject);
    //     }
    //     setTodo(allTodoList);
    //     setisChecked(false);
    //   }
    // }
  };

  return (
    <>
      {console.log("todo in render")}
      {console.log(todo)}
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.search_bar}>
            <input
              type="text"
              onChange={(e) => handleSearch(e)}
              placeholder="search by name"
            />
          </div>
        </div>

        <div className={styles.btn_container}>
          <button onClick={onSubmitHandler}>Submit</button>
        </div>

        <div className={styles.data_table_container}>
          {checkedloading === false ? (
            <>
              <div className={styles.data_table}>
                {loading || todo === null || todo === undefined ? (
                  <>
                    <p>Loading!!</p>
                  </>
                ) : (
                  <>
                    <table>
                      <tr>
                        <th>ID</th>
                        <th>userId</th>
                        <th>Title</th>
                        <th>
                          <>
                            Completed
                            <input type="checkbox" onChange={checkAllHandler} />
                          </>
                        </th>
                      </tr>
                      <tbody>
                        {todo
                          .filter((val) => {
                            if (searchText === "") {
                              return val;
                            } else if (
                              val.title.toLowerCase().includes(searchText)
                            ) {
                              return val;
                            }
                          })
                          .map((item) => (
                            <>
                              <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.userId}</td>
                                <td>{item.title}</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    defaultChecked={item.completed}
                                    onClick={(e) => onChangeHandler(e, item)}
                                  />
                                  {/* {item.completed ? (
                                    <>
                                      <input
                                        type="checkbox"
                                        checked={item.completed}
                                        onClick={(e) =>
                                          onChangeHandler(e, item)
                                        }
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <input
                                        type="checkbox"
                                        checked={item.completed}
                                        onClick={(e) =>
                                          onChangeHandler(e, item)
                                        }
                                      />
                                    </>
                                  )} */}
                                </td>
                                {/* <td>
                                  {isChecked === false ? (
                                    <>
                                      <input
                                        type="checkbox"
                                        defaultChecked={
                                          item.completed === true ? true : false
                                        }
                                        onChange={(e) =>
                                          onChangeHandler(e, item)
                                        }
                                      />
                                    </>
                                  ) : (
                                    <>
                                      {item.completed === true ? (
                                        <input
                                          type="checkbox"
                                          checked
                                          onChange={(e) =>
                                            onChangeHandler(e, item)
                                          }
                                        />
                                      ) : (
                                        <input
                                          type="checkbox"
                                          onChange={(e) =>
                                            onChangeHandler(e, item)
                                          }
                                        />
                                      )}
                                    </>
                                  )}
                                </td> */}
                              </tr>
                            </>
                          ))}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            </>
          ) : (
            <>Loading</>
          )}
        </div>
      </div>
    </>
  );
};

export default DataTable;
