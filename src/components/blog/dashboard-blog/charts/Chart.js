import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';

import "./Chart.css"

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      reactionsChartData:props.reactionsChartData,
      newBloggersChartData: props.newBloggersChartData
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
            data={this.state.reactionsChartData}
            height={300}
            width={500}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              title:{
              display:this.props.displayTitle,
              text:"Numbers Of Reactions & Comments per day",
              fontSize:23
              },
              legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition

            }}
            }
            />
          </div>
          
          <div className="myChart">
              <Line
                data={this.state.newBloggersChartData}
                height={300}
                width={500}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  title:{
                  display:this.props.displayTitle,
                  text:"New Bloggers Per Month",
                  fontSize:23
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

