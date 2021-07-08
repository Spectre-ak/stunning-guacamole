import {Bar,getBar} from "./Bar";
import {Pie, getPie} from "./Pie";
import ReactDOM from "react-dom";


function init(data){
    const chartsComponents=[];
    data.forEach(element => {
       // console.log(element);
       if(element.type==="Bar"){
        chartsComponents.push(<Bar data={element}/>);
       }
       else{
        chartsComponents.push(<Pie data={element}/>);
       }
    });

    return chartsComponents;
}

export {init};
