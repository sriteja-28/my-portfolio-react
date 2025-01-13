import React from 'react';


const Achievements = () => {
    const achievements = [
        {
            title: '1st Prize in HR Event',
            description: 'Won first prize at the UDBHAV Fest organized by Vignan College, demonstrating leadership and strategic thinking.'
        },
       
    ];


    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '20px' }}>
            <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '5px' }}>Achievements</h2>
                <ul>
                    {achievements.map((achievement, index) => (
                        <li key={index}><strong>{achievement.title}:</strong> {achievement.description}</li>
                    ))}
                </ul>

        </div>
    );
};

export default Achievements;

