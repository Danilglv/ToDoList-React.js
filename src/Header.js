import React, { Component } from 'react';
import logo from './img/logo.png';

class Header extends Component {
	
	render() {
		return (
			<div className="container">
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<ul className="main-menu">
					{this.props.items.map((item, index) => 
						<li className="nav-item" key={index}><a href={item.link}>{item.label}</a></li>
					)}
				</ul>
			</div>
			
			);
	}
}

export default Header; 