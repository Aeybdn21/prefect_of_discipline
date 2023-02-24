import React, { useEffect } from 'react';  
import Chart from 'chart.js/auto';
import {months} from './Utils';

export default function Index() { 
   
  useEffect(() => {
    handleChart();
  },[])
  const handleChart = () => { 
      const labels = months({count: 7});
      const data = {
        labels: labels,
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };
      new Chart(document.getElementById('acquisitions'),{
        type: 'line',
        data: data
      })
      new Chart(document.getElementById('acquisitions1'),{
        type: 'line',
        data: data
      })
  }
  
  return (
      <section className="home-section mx-3 bg-light rounded shadow overflow-hidden">
        <div className="flex flex-row flex-1 flex-wrap">
          <div className="flex-1 p-9">
            <div className="relative w-full h-96 items-center flex flex-col justify-center">
              <canvas id="acquisitions"></canvas>
              <div className="absolute text-red-500 text-7xl">
                10
              </div>
              <div className="text-3xl mt-3">
                Daily Report
              </div>
            </div>
          </div>
          <div className="flex-1 p-9">
            <div className="w-full h-96 items-center flex flex-col justify-center">
              <canvas id="acquisitions1"></canvas>
              <div className="absolute text-red-500 text-7xl">
                30
              </div>
              <div className="text-3xl mt-3">
                Monthly Report
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}


 