import { Chart } from "react-google-charts";
import React from "react";

import Loader from "../Loader";

function getBar(data){
    return <Bar data={data}/>
}

class Bar extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            data:[],
            label:[],
        };
    }
    componentDidMount() {
        //console.log(this.props.data);
        const data=this.props.data.elements;
        //console.log(data);
        data.unshift("Data");
        
        const label=[];
        data.forEach(element => {
            label.push(element.toString());
        });

        label[0]="";

        //console.log(data,label);
        this.setState({
            data:data, 
            label:label
        });

    }
    render() {
        return (
            <Chart
                width={'auto'}
                height={'300px'}
                chartType="Bar"
                loader={<Loader/>}
                data={[
                    this.state.label,
                    this.state.data,
                ]}

            />
        )
    }
}

export {getBar,Bar};
