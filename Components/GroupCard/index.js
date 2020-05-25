/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import ReactGA from 'react-ga';


function GroupCard({ data }) {
  return (
    <>
      {data.url ? (
        <>
          <a
            className="groupCard"
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => ReactGA.event({
              category: 'card_gruop_details',
              action: 'click',
            })}
          >
            <div className="groupContent">
              <img src={data.avatar} alt={data.name} />
              <div className="groupDescription">
                <h2>{data.name}</h2>
                {data.description && <span>{data.description}</span>}
              </div>
            </div>
            <button type="button" className="groupButton">
              Entrar
            </button>
          </a>
          {/* <button className="report">reportar</button> */}
        </>
      ) : (
          <Link
            href={`/group/${data._id}`}
          >
            <a className="groupCard"
              onClick={() => ReactGA.event({
                category: 'card_gruop_category',
                action: 'click',
              })}>
              <div className="groupContent">
                <img src={data.avatar} alt={data.name} />
                <div className="groupDescription">
                  <h2>{data.name}</h2>
                  {data.description && <span>{data.description}</span>}
                </div>
              </div>
            </a>
          </Link>
        )}
    </>
  );
}

export default GroupCard;
