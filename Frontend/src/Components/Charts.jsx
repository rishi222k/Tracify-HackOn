import React from 'react'
import ReactApexChart from 'react-apexcharts'

const Charts = () => {
    const series= [
        {
        name: 'Vaccinated',
        data: [59603, 42180,69603, 79603, 49603, 99603, 89603]
        },
        {
        name: 'Tested',
        data: [78158, 81158, 43791, 63791, 58791,73721, 33481]
        },{
        name: 'Confirmed',
        data: [27180, 35180,18180, 25180,27180,17180,9180]
      }, 
      ]
    
    const options = {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'dates',
          categories: [
            "15/5/21","16/5/21","20/5/21","21/5/21","25/5/21","26/5/21","29/5/21"
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      }
    return (
        <div className="Charts">
            <h1>Live Charts</h1>
            <ReactApexChart 
            options={options} 
            series={series} 
            type="area" 
            className="Apexcharts"
            height={500} />
        </div>
    )
}



export default Charts
