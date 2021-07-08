import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CompleteCharts from './components/charts';
import NavBar from './components/NavBar';


fetch("/dataset").

  then(response => response.json()).then(res => {
    //console.log(res);
    const data2=res;
    ReactDOM.render(

      <div className="container">
        <NavBar/>
        <br/>
         <CompleteCharts data={data2} />
      </div>

      ,document.getElementById('root')
    );
  });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
