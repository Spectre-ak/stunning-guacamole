import React from "react";
import  Loader from "../Loader";
import {init} from './ChartInit';

function ChartsInRow(props){
    return(
        <div className="row">
            <br/>
            <div className="col">
                {props.d1}
                <br/>
            </div>
            <br/>
            <div className="col">
            
                {props.d2}
                <br/>
            </div>
            
        </div>
    )
}

class CompleteCharts extends React.Component{
    constructor(props){
        super(props);
        this.state={toBeRendered:<Loader/>}
    }
    componentDidMount(){
        //console.log(this.props.data);
        const data=this.props.data;
        const chartsComponents=init(data);
        const renderCharts=[];
        for(var i=0;i<chartsComponents.length;i++){
            renderCharts.push(<ChartsInRow d1={chartsComponents[i]} d2={chartsComponents[i+1]} />);
            renderCharts.push(<br/>);renderCharts.push(<br/>);
            i++;    
        }
        this.setState({toBeRendered:renderCharts});
    }
    render(){
        return(
            this.state.toBeRendered
        )
    }
}

export default CompleteCharts;