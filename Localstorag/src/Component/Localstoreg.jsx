
import React, { useEffect, useState } from "react";

export default function Localstoreg() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [arr, setArr] = useState(() => {
    const storedData = localStorage.getItem("User_Data");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [editIndex, setEditIndex] = useState(null);


  const handleFormSubmit = (e) => {
    e.preventDefault();
   

    if (editIndex === null) {
      const obj = { name, pass };
      setArr([...arr, obj]);
    } else {
      const updatedData = arr.map((ele, index) =>
        editIndex === index ? { name: name, pass: pass } : ele
      );
      setArr(updatedData);
    }

    setName("");
    setPass("");
  };

 
  const handleDelete = (index) => {
   
    const updatedData = arr.filter((_, i) => i !== index);
    
    setArr(updatedData);
  };

  
  const handleEdit = (index) => {
   
    setEditIndex(index);
    setName(arr[index].name);
    setPass(arr[index].pass);
  };

  
  useEffect(() => {
    
    localStorage.setItem("User_Data", JSON.stringify(arr));
  }, [arr]);

  return (
    <div>
      <h2>
        <u>User Form</u>
      </h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">
          {editIndex === null ? "Submit" : "Update"}
        </button>
      </form>
      <br />
      <br />
      <table border={2} width="100%">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((ele, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.pass}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
}