import React from "react";

export default function Item() {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sapiente esse necessitatibus neque.
          </p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  );
}
