import Loader from "../Loader";
import React from "react";
import { PieChart } from 'react-minimal-pie-chart';

function getPie(data){
    return <Pie data={data}/>
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


class Pie extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            data:<Loader/>,
        };
    }
    componentDidMount() {
        //console.log(this.props.data);
        const data=this.props.data.elements;
        //console.log(data);
        const convData=[];

        data.forEach(ele=>{
            const points={
                title:ele.toString(),
                value:ele,
                color:getRandomColor(),
            };
            convData.push(points);
        });
        //console.log(convData)
        this.setState({data:convData});
    }
    render() {
        return (
            <PieChart
                data={this.state.data}
                label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
            />
        )
    }
}

export {getPie,Pie};
