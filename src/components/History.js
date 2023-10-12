import React, { useEffect } from 'react';
import '../History.css';

const History = ({ historyImg, setHistoryImg }) => {
  useEffect(() => {
    // Retrieve and parse history images from localStorage
    const storedImg = JSON.parse(localStorage.getItem('historyImg'));
    console.log(storedImg);

    // Set the historyImg state with the retrieved images
    if (Array.isArray(storedImg)) {
      setHistoryImg(storedImg);
    }
  }, [setHistoryImg]);

  return (
    <div>
      <h1>History Page</h1>
      <div className='container'>
      <ul>
        {historyImg?.map((img, index) => (
          <div className='historycard' key={index}>
            <img src={img} alt={`Dog ${index}`} />
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default History;
