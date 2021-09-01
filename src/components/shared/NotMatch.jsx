import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/error.png.png';

export const NotMatch = () => {
    return (
        <div className="_main-page-not-found">
            <div className="info-page-404">
                <img src={notFound} alt="pic-notFound" className="_img-404" />
                <p>You did not break the internet, but you can not find what you are looking for</p>
                <Link to="/" className="_404-button">Go Back</Link>
            </div>
        </div>
    )
}



