import * as React from "react";

import './ToTop.scss';

const ToTop = () => {
    const handleToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const interval = () => {
        setInterval(() => {
            let mybutton = document.querySelector(".ToTop");

            // When the user scrolls down 600px from the top of the document, show the button
            window.onscroll = () => {
                if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                    mybutton.style.display = "block";
                } else {
                    mybutton.style.display = "none";
                }
            };
        }, 400);
    };

    React.useEffect(() => {
        interval();
    }, []);

    React.useEffect(() => {
        return () => {
            clearInterval(interval());
        };
    }, []);

    return (
        <div className="ToTop">
            <button onClick={handleToTop}>GO TO TOP</button>
        </div>
    )
}

export default ToTop;