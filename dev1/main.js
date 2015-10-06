console.log("loggedd");
var React = require('react');

require('bootstrap-sass!./bootstrap-sass.config.js');
var Test = require('./test');


var tab = ['un', 'deux', 'trois'];
var values = [];
tab.forEach(
	(value)=>{
		values.push(<Test name={value}/>)
	}
);

React.render(<div>{values}</div>, document.getElementById('reactDiv'));