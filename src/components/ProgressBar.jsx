import { useEffect, useState } from 'react';

export default function ProgressBar({ timer }) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('INTERVAL')
            setRemainingTime(prevTime => prevTime - 50);
        }, 50);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return  <progress value={remainingTime} max={timer} />
}