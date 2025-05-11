// components/Countdown.js
'use client';
import { useEffect, useState } from 'react';

export default function Countdown() {
  const targetDate = new Date("2025-07-14T00:00:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-white space-y-2 p-4 bg-pink-600 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold">Menuju Hari Bahagia</h2>
      <div className="flex justify-center gap-4 text-lg font-mono">
        <div><span className="text-2xl font-bold">{timeLeft.days}</span> hari</div>
        <div><span className="text-2xl font-bold">{timeLeft.hours}</span> jam</div>
        <div><span className="text-2xl font-bold">{timeLeft.minutes}</span> menit</div>
        <div><span className="text-2xl font-bold">{timeLeft.seconds}</span> detik</div>
      </div>
    </div>
  );
}
