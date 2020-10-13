import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
        monthlyProfit:props.monthlyProfit,
        newCustomersChartData: props.newCustomersChartData
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
              <Line
                data={this.state.monthlyProfit}
                height={300}
                width={500}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  title:{
                  display:this.props.displayTitle,
                  text:"Sales Revenue (DH)",
                  fontSize:23
                  },
                  legend:{
                  display:this.props.displayLegend,
                  position:this.props.legendPosition
                  }
                }}
            />
          </div>

          <div className="myChart">
              <Line
                data={this.state.newCustomersChartData}
                height={300}
                width={500}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  title:{
                  display:this.props.displayTitle,
                  text:"New Customers",
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

