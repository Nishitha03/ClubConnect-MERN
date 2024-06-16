/*import React from 'react';
import { data } from '../restApi.json';
import { Link } from 'react-router-dom';

const Clubs = () => {
  return (
    <>
      <section className='clubs' id='clubs'>
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR CLUBS</h1>
            <p>Explore a diverse range of college clubs and organizations. Join clubs that match your interests and get involved in their activities.</p>
          </div>
          <div className="clubs_container">
            {
              data[0].clubs.map(element => (
                <Link to={`/${element.title.replace(/\s+/g, '').toLowerCase()}`} key={element.id}>
                  <div className="card">
                    <img src={element.image} alt={element.title} />
                    <h3>{element.title}</h3>
                    
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Clubs;*/

import React from 'react';
import { data } from '../restApi.json';
import { Link } from 'react-router-dom';

const Clubs = () => {
  return (
    <>
      <section className='clubs' id='clubs'>
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR CLUBS</h1>
            <p>Explore a diverse range of college clubs and organizations. Join clubs that match your interests and get involved in their activities.</p>
          </div>
          <div className="clubs_container">
            {
              data[0].clubs.map(club => (
                <Link to={`/${club.title.replace(/\s+/g, '').toLowerCase()}`} key={club.id}>
                  <div className="card">
                    <img src={club.image} alt={club.title} />
                    <h3>{club.title}</h3>
                    
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Clubs;
