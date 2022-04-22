import React from 'react';
import {links} from "../../../routes/links";
import RouteLink from "../../shared/RouteLink/RouteLink";
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles['nav']}>
			{links.map(({title, path, Icon}) =>
				<RouteLink key={path} title={title} Icon={Icon} path={path}/>
			)}
		</nav>
	);
};

export default Navbar;