/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
// import { ads } from "../../constants/functions";

function GroupByApp({ data }) {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setTimer((seconds) => seconds - 1);
    }, 1200);

    if (timer < 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  return (
    <div id="GroupByApp">
      <a
        className="groupCard"
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="groupContent">
          <img src={data.avatar} alt={data.name} />
        </div>
        <h2>{data.name}</h2>
        <div>
          <button
            type="button"
            href={data.url}
            className="groupButton"
            rel="noopener noreferrer"
          >
            {timer < 0 ? "Entrar na conversa " : timer}
          </button>
        </div>
      </a>

      {/* <button className="report">reportar</button> */}
    </div>
  );
}

export default GroupByApp;
