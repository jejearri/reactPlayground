var React = require('react');

module.exports = React.createClass({
	render: function() {
		console.log("logged");
		return (<h1>{this.props.name}</h1>);
	}
});