import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, surname, position, photoUrl, color }) => {
    const dynamicStyle = {
        color: color || 'black',
    };

    return (
        <div className="worker-info">
            <div className="name-surname">
                <p className={"Name"}>{name} {surname}</p>
            </div>
            <p className={"position"} style={dynamicStyle}>{position}</p>
            <div className="photo">
                <img src={photoUrl} alt={`${name} ${surname}`} />
            </div>
        </div>
    );
};

export default TeamMember;