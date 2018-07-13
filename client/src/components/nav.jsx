import React from 'react';

class Nav extends React.Component {
  
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<nav className="navbar navbar-default">
				 	<a className="navbar-brand" href="#">MVP</a>
			</nav>
			)
	}
}

export default Nav;