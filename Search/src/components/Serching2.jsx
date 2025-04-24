import React, { useEffect, useState } from 'react';

const Serching2 = () => {
  const [search, setSearch] = useState("");
  const [obj, setObj] = useState({ name: "", age: "", city: "", salary: "", post: "" });

  const [arr, setArr] = useState(() => {
    const storedData = localStorage.getItem("User_Data");
    return storedData ? JSON.parse(storedData) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, obj]);
    setObj({ name: "", age: "", city: "", salary: "", post: "" });
    e.target.reset();
  };

  useEffect(() => {
    localStorage.setItem("User_Data", JSON.stringify(arr));
  }, [arr]);

  const filteredData = arr.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.age.toString().includes(search.toLowerCase()) ||
    e.city.toLowerCase().includes(search.toLowerCase()) ||
    e.salary.toString().includes(search.toLowerCase()) ||
    e.post.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={obj.name}
          onChange={(e) => setObj({ ...obj, name: e.target.value })}
        /><br /><br />

        <input
          type="number"
          placeholder="Enter Age"
          value={obj.age}
          onChange={(e) => setObj({ ...obj, age: e.target.value })}
        /><br /><br />

        <input
          type="text"
          placeholder="Enter City/Village"
          value={obj.city}
          onChange={(e) => setObj({ ...obj, city: e.target.value })}
        /><br /><br />

        <input
          type="number"
          placeholder="Enter Salary"
          value={obj.salary}
          onChange={(e) => setObj({ ...obj, salary: e.target.value })}
        /><br /><br />

        <input
          type="text"
          placeholder="Enter Post"
          value={obj.post}
          onChange={(e) => setObj({ ...obj, post: e.target.value })}
        /><br /><br />

        <button type="submit">Submit</button>
      </form>

      <br /><hr /><br /><hr />

      {/* Search */}
      <input
        type="text"
        placeholder="Search name, age, city, salary or post"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><hr /><br /><hr />

      {/* Table */}
      <table border={2} width={"100%"}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th><button>Name</button></th>
            <th><button>Age</button></th>
            <th><button>City</button></th>
            <th><button>Salary</button></th>
            <th><button>Post</button></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>{item.salary}</td>
              <td>{item.post}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Serching2;
