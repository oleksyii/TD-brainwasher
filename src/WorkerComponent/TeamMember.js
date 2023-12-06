import React, { useState } from 'react';
import './TeamMember.css';

const TeamMember = ({ name, surname, position, photoUrl, color }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const dynamicStyle = {
        color: color || 'black',
    };

    const handleCardClick = () => {
        setIsFullscreen(!isFullscreen);
    };
    const cardClassName = `worker-info border p-3 bg-light m-2${isFullscreen ? ' fullscreen' : ''}`;

    return (
        <div className={cardClassName} onClick={handleCardClick}>
            <div className="name-surname">
                <p className={"Name"}>{name} {surname}</p>
            </div>
            <p className={"position"} style={dynamicStyle}>{position}</p>
            <div className="photo mt-2">
                <img src={photoUrl} alt={`${name} ${surname}`} />
            </div>
        </div>
    );
};

export default TeamMember;
