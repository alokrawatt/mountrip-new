import  { useEffect } from 'react';
import '/src/Gallery.css';

const Gallery = () => {
    useEffect(() => {
        // Initialize Instagram embeds
        if (window && window.instgrm) {
            window.instgrm.Embeds.process();
        }
    }, []);

    return (
        <div className="gallery-container">
            <h1>Instagram Gallery</h1>
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DANmsBGvfk4/?igsh=MWF2eGIyNWE3bnNzOQ/" data-instgrm-version="12">
                <a href="https://www.instagram.com/reel/DANmsBGvfk4/?igsh=MWF2eGIyNWE3bnNzOQ">View this post on Instagram</a>
            </blockquote>
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/POST_ID_2/" data-instgrm-version="12">
                <a href="https://www.instagram.com/p/POST_ID_2/">View this post on Instagram</a>
            </blockquote>
        </div>
    );
};

export default Gallery;