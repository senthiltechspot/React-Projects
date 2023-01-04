import React, { useState } from "react";

const ControlledForm = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    Dept: "",
    gender: "",
    about: "",
  });
  const [displayEmployee, setDisplayEmployee] = useState(false);

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setDisplayEmployee(true);
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="border mx-auto mt-3 p-3">
        {/* Name */}
        <div className="mb-3 row ">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={value.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* Email */}
        <div className="mb-3 row ">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={value.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* Department */}
        <br />
        <div className="mb-3 row ">
          <label className="col-sm-2 col-form-label">Department</label>
          <div className="col-sm-10">
            <select
              className="form-select"
              aria-label="Default select example"
              name="Dept"
              value={value.Dept}
              onChange={handleChange}
              required
            >
              <option value="">---</option>
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
        </div>

        {/* gender */}
        <div className="mb-3 row ">
          <label className="col-sm-2 col-form-label">Gender</label>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="flexRadioDefault1"
                name="gender"
                value="male"
                checked={value.gender === "male"}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="flexRadioDefault2"
                name="gender"
                value="female"
                checked={value.gender === "female"}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mb-3 row ">
          <label className="col-sm-2 col-form-label">About</label>
          <div className="col-sm-10">
            <textarea
              type="text"
              name="about"
              className="form-control"
              value={value.about}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>
        {displayEmployee && (
          <table className="table mx-auto mt-3 p-3  table-hover table-bordered border-dark" >
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>{value.name}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>{value.email}</td>
              </tr>
              <tr>
                <th scope="row">Department</th>
                <td>{value.Dept}</td>
              </tr>
              <tr>
                <th scope="row">Gender</th>
                <td>{value.gender}</td>
              </tr>
              <tr>
                <th scope="row">About</th>
                <td>{value.about}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ControlledForm;
