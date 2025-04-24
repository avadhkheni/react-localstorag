import React, { useEffect, useState } from 'react';

const Search1 = () => {
  const [search, setSearch] = useState("");
  const [obj, setobj] = useState({ name: "", age: "", city: "", salary: "", post: "" });
  const [arr, setArr] = useState(() => {
    const storedData = localStorage.getItem("User_Data");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, obj]);
    setobj({ name: "", age: "", city: "", salary: "", post: "" });
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

  const sortData = (data) => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key].toString().toLowerCase();
      const bVal = b[sortConfig.key].toString().toLowerCase();
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  };

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = sortData(filteredData);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" value={obj.name} onChange={(e) => setobj({ ...obj, name: e.target.value })} />
        <br /><br />
        <input type="number" placeholder="Enter Age" value={obj.age} onChange={(e) => setobj({ ...obj, age: e.target.value })} />
        <br /><br />
        <input type="text" placeholder="Enter City/villege" value={obj.city} onChange={(e) => setobj({ ...obj, city: e.target.value })} />
        <br /><br />
        <input type="number" placeholder="Enter Salary" value={obj.salary} onChange={(e) => setobj({ ...obj, salary: e.target.value })} />
        <br /><br />
        <input type="text" placeholder="Enter Post" value={obj.post} onChange={(e) => setobj({ ...obj, post: e.target.value })} />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <br /><hr /><br /><hr />

      <input
        type="text"
        placeholder="Search name or age or city or salary or post"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><hr /><br /><hr />

      <table border={2} width={"100%"}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th><button onClick={() => requestSort("name")}>Name</button></th>
            <th><button onClick={() => requestSort("age")}>Age</button></th>
            <th><button onClick={() => requestSort("city")}>City</button></th>
            <th><button onClick={() => requestSort("salary")}>Salary</button></th>
            <th><button onClick={() => requestSort("post")}>Post</button></th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
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

export default Search1;
