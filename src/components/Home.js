import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Home.css';

function Home({ addToCart }) {
    const [image, setImage] = useState(null);
    const [historyImg, setHistoryImg] = useState([]);

    const fetchRandomImage = async () => {
        try {
            // Fetch the image from url
            const respImg = await axios.get('https://dog.ceo/api/breeds/image/random');
            const imgUrl = respImg.data.message;
            // Set the dogImg state with the fetched image URL
            setImage(imgUrl);
            // Store images for history page
            const updatedHistoryImg = [...historyImg, imgUrl];
            setHistoryImg(updatedHistoryImg);
            localStorage.setItem('historyImg', JSON.stringify(updatedHistoryImg));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={fetchRandomImage}>Fetch Image</button>
            {image && (
                <div>
                    <div className='newimage'>
                        <img src={image} alt="Dog" />
                    </div>
                    <div>
                        <button onClick={() => addToCart(image)}>Add to Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
