import React, { useEffect, useState } from 'react';

const CurrentDateTime = () => {
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            };
            setDateTime(now.toLocaleString('en-US', options));
        };

        updateDateTime(); // Initial call
        const interval = setInterval(updateDateTime, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div>
            <h6>Checkout Time: 11:00 AM</h6>
            <h6>{dateTime}</h6>
        </div>
    );
};

export default CurrentDateTime;
