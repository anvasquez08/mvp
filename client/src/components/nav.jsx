import React from 'react';

class Nav extends React.Component {
  
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<nav  className="p-3 mb-2 bg-info text-white">
				 	<a className="navbar-brand" >MVP</a>
			</nav>
			)
	}
}

export default Nav;//float:right;