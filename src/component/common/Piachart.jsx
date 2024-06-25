import React, { useEffect, useRef } from 'react';

const PieChart = ({ percent, title, color }) => {
    const canvasRef = useRef(null);
    const size = 120; // Default size of the canvas
    const lineWidth = 8; // Thickness of the pie chart

    useEffect(() => {
        const drawPieChart = () => {
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d');
                const half = canvas.width / 2;
                const rad = percent / 100 * 2 * Math.PI;

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Draw the background arc
                ctx.beginPath();
                ctx.strokeStyle = '#5A5A5A'; // Bar background color
                ctx.lineWidth = lineWidth;
                ctx.arc(half, half, half - lineWidth / 2, 0, 2 * Math.PI);
                ctx.stroke();

                // Draw the pie chart arc
                ctx.beginPath();
                ctx.strokeStyle = color; // Pie chart color
                ctx.arc(half, half, half - lineWidth / 2, -Math.PI / 2, rad - Math.PI / 2);
                ctx.stroke();

                // Draw the center text
                ctx.fillStyle = color;
                ctx.font = 'bold 24px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(`${percent}%`, half, half);
            }
        };

        drawPieChart();

        // Redraw the pie chart on window resize
        window.addEventListener('resize', drawPieChart);

        return () => {
            window.removeEventListener('resize', drawPieChart);
        };
    }, [percent, color]);

    return (
        <div className="colorful-chart piechart max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
            <canvas ref={canvasRef} height={size} width={size}></canvas>
            <h2 className="ekit-piechart-title text-center text-white">{title}</h2>
        </div>
    );
};

export default PieChart;
