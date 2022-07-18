import React from "react";
import { Link } from "react-router-dom";
import drug from "./../File/drug1.json";
import drugs from "./../File/drug2.json";
import "./FetchingData.css";

const FetchingData = () => {
  const pathName = window.location.pathname;

  const a = pathName === "/form1" ? drug.fields : drugs.fields;

  return (
    <>
      <div className="container">
        <Link
          style={{
            border: "1px solid black",
            textDecoration: "none",
            padding: "10px 10px",
            marginTop: "100px",
          }}
          to="/"
        >
          Home
        </Link>
        {a.map((ele) => {
          return (
            <div key={ele.key}>
              <h3>{ele.label}</h3>
              {ele.type !== "dropdown" ? (
                <div className="inputFeild">
                  <input
                    type={ele.type}
                    label={ele.label}
                    required={ele.isRequired}
                  />
                  <h4> {ele.unit}</h4>
                </div>
              ) : (
                <select name="sex" id="sex">
                  {ele.items.map((b) => (
                    <option key={b.value} value={b.value}>
                      {b.text}
                    </option>
                  ))}
                </select>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FetchingData;
