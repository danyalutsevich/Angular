import React from 'react';

interface PersonalPageProps {
    fullName: string;
    phone: string;
    email: string;
    city: string;
    workExperience: string;
    skills: string[];
}

const PersonalPage: React.FC<PersonalPageProps> = ({fullName, phone, email, city, workExperience, skills}) => {
    return (
        <div>
            <h2>{fullName}</h2>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>City: {city}</p>
            <p>Work Experience: {workExperience}</p>
            <p>Skills: {skills.join(', ')}</p>
        </div>
    );
};

export default PersonalPage;