import axios from "axios";
import React, { useState, useEffect } from "react";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");

  function getdata() {
    axios
      .get("https://63bba1a5cf99234bfa5fced5.mockapi.io/curd/api/crud-react")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  useEffect(() => {
    getdata();
  }, []);

  function handleDelete(id) {
    axios
      .delete(
        `https://63bba1a5cf99234bfa5fced5.mockapi.io/curd/api/crud-react/${id}`
      )
      .then(() => {
        getdata();
      });
  }

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") {
              setTableDark(" ");
            } else setTableDark("table-dark");
          }}
        />
      </div>
      <h1>Read page</h1>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>

        {data.map((eachdata) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachdata.id}</th>
                  <td>{eachdata.name}</td>
                  <td>{eachdata.email}</td>
                  <td>
                    <button className="btn btn-success">Edit</button>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachdata.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
