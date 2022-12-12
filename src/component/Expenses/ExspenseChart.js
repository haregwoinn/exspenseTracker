import Chart from "../chart/Chart";


const ExspenseChart = (props) => {
    const ChartDataPoints = [
        {label:'Jan', value: 0},
        {label:'Feb', value:0},
        {label:'Mar', value:0},
        {label:'Apr', value:0},
        {label:'May', value:0},
        {label:'Jun', value:0},
        {label:'Jul', value:0},
        {label:'Agu', value:0},
        {label:'Seb', value:0},
        {label:'Oct', value:0},
        {label:'Nov', value:0},
        {label:'Dec', value:0}
    ];

    for (const Expense of props.Expens){
        const ExspenseMonth = Expense.date.getMonth();
        ChartDataPoints[ExspenseMonth].value += Expense.amount;
    }
    return <Chart  dataPoints = {ChartDataPoints}/>
};

export default ExspenseChart;