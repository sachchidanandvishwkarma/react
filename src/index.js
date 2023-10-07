
import React from "react";
import  ReactDOM  from "react-dom";

const fname ="sachchidanand";

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
     


ReactDOM.render(
<>

<h2>MOhan and is{fname} </h2>

<p> sachchidanand Date is {currDate}</p>

<h3>vishwakarma uesd is {currTime}</h3>,

</>,


document.getElementById("root")
);

