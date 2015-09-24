var React = require('react');
var Test = require('./test.jsx');

var tab = ['un', 'deux', 'trois'];
var values = [];
tab.forEach((value)=>{values.push(<Test name={value}/>);});
React.render(
	<div>{values}</div>,
	document.body
);