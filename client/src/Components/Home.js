import React from 'react';

const Home = () => {
  return (
    <>
      <style>
        {`
          body, html {
            overflow: hidden;
          }
          .home-page {
            background-color: #f0f0f0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-y: auto; /* Add this to enable vertical scrolling if content exceeds viewport */
          }
          .home-div {
            text-align: center;
          }
          .pt-5 {
            padding-top: 5rem;
          }
          h1 {
            font-size: 2.5rem;
            color: #333;
          }
        `}
      </style>
      <div className='home-page'>
        <div className='home-div'>
          <p className='pt-5'>WELCOME</p>
          <h1>We are the MERN Developer</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
