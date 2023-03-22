import React, { useEffect, useState } from 'react';
import './BackToTopBtn.css'


const BackToTopBtn = () => {

    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 500) {
                setBackToTopBtn(true)
            } else {
                setBackToTopBtn(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTopBtn && (
                <button className='scrollBtn'
                onClick={scrollUp}>
                    <svg width="23" height="34" viewBox="0 0 23 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.90111 41.7803C9.90111 42.6299 10.5899 43.3187 11.4396 43.3187C12.2892 43.3187 12.978 42.6299 12.978 41.7803L9.90111 41.7803ZM12.5274 1.13198C11.9266 0.53117 10.9525 0.53117 10.3517 1.13198L0.561011 10.9227C-0.0397965 11.5235 -0.0397965 12.4976 0.561011 13.0984C1.16182 13.6992 2.13592 13.6992 2.73672 13.0984L11.4396 4.39555L20.1424 13.0984C20.7432 13.6992 21.7173 13.6992 22.3181 13.0984C22.9189 12.4976 22.9189 11.5235 22.3181 10.9227L12.5274 1.13198ZM12.978 41.7803L12.978 2.21983L9.90112 2.21983L9.90111 41.7803L12.978 41.7803Z" fill="#F1F6FF"/>
                    </svg>
                </button>
            )}
        </div>
    );
};

export default BackToTopBtn;