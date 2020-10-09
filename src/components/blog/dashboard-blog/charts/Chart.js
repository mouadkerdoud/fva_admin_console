import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

import "./Chart.css"

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
  }

  render(){
    return (
      <div className="chart-container">

          <div className="myChart">
            <Bar
            data={this.state.chartData}
            options={{
                responsive: true,
                title:{
                display:this.props.displayTitle,
                text:"Numbers Of Reactions & Comments per day",
                fontSize:25
                },
                legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
                }
            }}
            />
          </div>
          
         
      </div>
    )
  }
}

export default Chart;