import React from "react";
import Forks from "./Forks";
import "./home.css";
const Card = ({ data }) => {
  return (
    <div className="card-group">
      {data.map((item, index) => (
        <div className="assignCol" key={index}>
          <div className="cardData">
            <span className="cardDataWrapper">
              <h5 className="cardHeading">Owner {item.owner.login}</h5>
              <p className="">
                File Name:
                {Object.values(item.files).map((file, index) => {
                  return (
                    <button key={index} className="fileName">
                      {file.filename}
                    </button>
                  );
                })}
              </p>
              <p>
                File Type:
                {Object.values(item.files).map((file, index) => {
                  return (
                    <button className="fileType" key={index}>
                      {file.type}
                    </button>
                  );
                })}
              </p>

              <p className="">
                <small className="">
                  Forks
                  {/*
                <td>{item.forks_url}</td>*/}
                  3 or more forks
                  {data !== [] ? <Forks forkss={item} /> : null}
                </small>
              </p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
