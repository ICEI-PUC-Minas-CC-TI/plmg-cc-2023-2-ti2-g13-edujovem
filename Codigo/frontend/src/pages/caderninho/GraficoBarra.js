import React from 'react'
import {Chart as ChartJS, BarElement} from 'chart.js'
import {Bar} from 'react-chartjs-2'

ChartJS.register(
    BarElement
)

const BarChart = () =>{

    var data = {
        label: ['Red','Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        data:[12,19,3,5,2,3],
        datasets:[{
            backgroundColor: [
                'rgba(255,99,132,0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(255,206,86,0.2',
                'rbga(75,192,192,0.2)',
                'rbga(153,102,255,0.2)',
                'rbga(255,159,64,0.2)'

            ],
            borderColor:[
                'rgba(255,99,132,0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(255,206,86,0.2',
                'rbga(75,192,192,0.2)',
                'rbga(153,102,255,0.2)',
                'rbga(255,159,64,0.2)'            ],
            borderWidth:1
        }]
    }
    
    var options = {
        maintainAspectRatio:false,
        scales: {
            y:{
                beginAtZero:true
            }
        },
        legend:{
            labels:{
                fontSize:26
            }
        }
    }


    return (
        <div>
            <Bar
            data={data}
            height={400}
            options = {options}
            
            
            />
        </div>
    )
}

export default BarChart
