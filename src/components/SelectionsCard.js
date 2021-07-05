import React from 'react';
import imgURL from "../images/dummy.jpg";
import "../styles/SelectionsCard.css";  

const SelectionsCard = () => {
    return (
        <div className="selections-card-container">
            <span className="selections-header-text">Selections</span>
            <div className="selections-img-container">
                <img src={imgURL} alt="dummy" />
            </div>
            <div className="selections-header-container">
            <span className="selections-header">Peering into Yugoslavian New Wave & Punk</span>
            </div>
            <p className="selections-text">A conversation with the music writer and acclaimed author of Capitalist Realism and Ghosts of My Life on music and mainstream culture, Popular Modernism, the struggle for time and the dizzying prospects of a political “new.”</p>
            <button className="read-more-btn">Read More</button>
        </div>
    )
}

export default SelectionsCard;
