import React, { useEffect, useState } from "react";
import axios from "axios";
const Forks = (item) => {
  const [forku, setforku] = useState([]);
  useEffect(() => {
    const fatchForks = async () => {
      if (item.forkss.forks_url !== "") {
        try {
          const res = await axios.get(item.forkss.forks_url);
          setforku(res.data);
        } catch (e) {
          console.log(e);
        }
      } else {
        console.log("featch url empty");
      }
    };
    fatchForks();
  }, [item]);
  return (
    <div>
      <div className="forksBox">
        {forku && forku.lenght !== "undefined" && forku.length !== 0 ? (
          forku.map((fork, i) => (
            <ul key={i}>
              <li>
                <a
                  href={`https://gist.github.com/${fork.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Forks :{fork?.user}
                  {fork.avatar_url}
                </a>
              </li>
            </ul>
          ))
        ) : (
          <p>No forks yet.</p>
        )}
      </div>
    </div>
  );
};

export default Forks;
