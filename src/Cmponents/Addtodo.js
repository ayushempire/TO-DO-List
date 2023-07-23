import React from "react";

export default function Addtodo() {
  return (
    <div className="container my-3">
      <form>
        <div className="mb-3">
          <h3>Add a Todo</h3>
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="desc" />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}
