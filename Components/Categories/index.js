import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ReactGA from 'react-ga';
import api from '../../services/api';
import { Container } from './style';

function Categories({ categories }) {
  const [slowDown, setSlowDown] = useState(false);


  return (
    <Container active={slowDown} className="category">
      <ul className=" container">
        {categories.map((item) => (
          <Link
            href={`/category/${item.categoryName}`}
            key={item._id}

          >
            <a>
              <li onClick={() => ReactGA.event({
                category: `card_category_${item.categoryName}`,
                action: 'click',
              })}>
                <img className="icon" src='/logowpp.png' alt={item.categoryName} />
                {item.categoryName}
              </li>
            </a>
          </Link>
        ))}
      </ul>
      <button type="button" onClick={() => setSlowDown(!slowDown)}>
        {!slowDown ? 'ver mais' : 'ver menos'}
      </button>
    </Container>
  );
}

export default Categories;