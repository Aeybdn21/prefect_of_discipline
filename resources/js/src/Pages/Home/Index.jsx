import React, { useEffect } from 'react';  
import Chart from 'chart.js/auto';
import {months} from './Utils';

export default function Index() {  

  useEffect(() => {
    
    handleChart();

  },[]);

  const handleChart = () => { 
      const labels = months({count: 7});
      const data = {
        labels: labels,
        datasets: [{
          label: '',
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
        <div className="grid md:grid-cols-2 ">
          <div className="gap-2">
            <div className="relative w-full items-center">
              <canvas id="acquisitions"></canvas> 
              <div className="text-3xl mt-3">
                Daily Report
              </div>
            </div>
          </div>
          <div className="gap-2">
            <div className="w-full items-center">
              <canvas id="acquisitions1"></canvas> 
              <div className="text-3xl mt-3">
                Monthly Report
              </div>
            </div>
          </div>
        </div> 
  );
}


 