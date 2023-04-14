import React, { useState, useEffect, useRef } from "react";
import "./Test.css";

function Test() {
  const arr1 = ["h1", "h2", "h3", "h4"];
  const arr2 = ["11", "22", "33", "44"];
  const [data1, setData1] = React.useState(arr1);
  const [data2, setData2] = React.useState(arr2);
  const [className, setClassName] = useState("");
  const [date, setDate] = useState("");
  const tableRef = useRef(null);

  //Date

  // const formattedDate = currentDate.toLocaleString("en-US", {
  //   year: "numeric",
  //   month: "2-digit",
  //   day: "2-digit",
  // });

  const currentDate = new Date();
  const getDate = () => {
    setDate(currentDate.getDate());
  };

  const handleLeft = () => {
    if (tableRef.current) {
      tableRef.current.scroll({
        left: tableRef.current.scrollLeft - 290,
        behavior: "smooth",
      });
    }
  };

  const handleRight = () => {
    if (tableRef.current) {
      tableRef.current.scroll({
        left: tableRef.current.scrollLeft + 290,
        behavior: "smooth",
      });
    }
  };
  const Add = () => {
    setData1([...data1, "h5"]);
    setData2([...data2, "55"]);
  };
  const Delete = () => {
    const index = 4;
    setData1([...data1.slice(0, index), ...data1.slice(index + 1)]);
    setData2([...data2.slice(0, index), ...data2.slice(index + 1)]);
  };
  useEffect(() => {
    if (data1.length > 5 && data2.length > 5) {
      if (className !== "scroll") {
        setClassName("scroll");
      }
    } else {
      setClassName("");
    }
  }, [data1, data2]);

  return (
    <div>
      <div className="d-flex gap-3 px-4 py-2 w-50">
        <button className="btn btn-primary fs-3 " onClick={Add}>
          Add new column
        </button>
        <button className="btn btn-danger fs-3" onClick={Delete}>
          Delete column
        </button>
      </div>
      <div className="d-flex gap-4 px-4 py-2 w-50">
        <button className="btn btn-success fs-3" onClick={handleLeft}>
          Scroll to left
        </button>
        <button className="btn btn-success fs-3" onClick={handleRight}>
          Scroll to right
        </button>
      </div>
      <h5 className="w-25 mx-4">
        If you want to see how scroll-Y bar works, just decrease the max-height.
        of table-container
      </h5>
      <div className={`table-container ${className}`} ref={tableRef}>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Name, Surname</th>
              {data1.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Person1</td>
              {data2.map((item, index) => {
                return <td key={index}>{item}</td>;
              })}
            </tr>
            <tr>
              <td>2</td>
              <td>Person 2</td>
              {data2.map((item, index) => {
                return <td key={index}>{item}</td>;
              })}
            </tr>
            <tr>
              <td>3</td>
              <td>Person 3</td>
              {data2.map((item, index) => {
                return <td key={index}>{item}</td>;
              })}
            </tr>
            <tr>
              <td>4</td>
              <td>Person 4</td>
              {data2.map((item, index) => {
                return <td key={index}>{item}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="date w-25 border border-dark p-2 mt-5 mx-4 d-flex align-items-center ">
        <button className="btn btn-secondary w-50" onClick={getDate}>
          Get a current - day:
        </button>
        <span className="mx-3 bg-light w-50">Date:{date}</span>
      </div>
    </div>
  );
}

export default Test;
