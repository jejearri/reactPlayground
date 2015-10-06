var React = require('react');
require('./main.scss');


module.exports = React.createClass({
	render: function() {
		console.log("logged");
		return (<h1 className="prop">{this.props.name}</h1>);
	}
});