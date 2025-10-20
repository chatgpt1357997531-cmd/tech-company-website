import React from 'react';
import './TeamCard.css';

interface TeamMember {
    name: string;
    role: string;
    photo: string;
}

const TeamCard: React.FC<TeamMember> = ({ name, role, photo }) => {
    return (
        <article className="team-card">
            <img src={photo} alt={`صورة ${name}`} className="team-card__photo" loading="lazy" />
            <h3 className="team-card__name">{name}</h3>
            <p className="team-card__role">{role}</p>
        </article>
    );
};

export default TeamCard;
