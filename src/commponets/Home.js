import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./home.css";
import Card from "./Card";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://api.github.com/users/ali/gists");
      console.log(res);
    }

    fetchData();
  }, []);

  const fatchUserData = async (user) => {
    const { data } = await axios.get(
      `https://api.github.com/users/${user}/gists`
    );
    setData(data);
  };
  return (
    <div className="">
      <Navbar />
      <main className="mainWrapper">
        <div className="innerWrapper">
          <span>
            <input
              type="text"
              onChange={(e) => fatchUserData(e.target.value)}
            />
            <Card data={data} />
          </span>
        </div>
      </main>
    </div>
  );
};

export default Home;
