import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import styles from './RouteLink.module.css';
import {ILink} from "../../../types/routes/routesTypes";

const RouteLink: FC<ILink> = ({path, Icon, title}) => {
	return (
		<NavLink
			to={path}
			className={({isActive}) =>
				isActive ? `${styles['active']} ${styles['route']}` : styles['route']}
		>
			<Icon className={styles['icon']}/>
			<h2 className={styles['title']}>{title}</h2>
		</NavLink>
	);
};

export default RouteLink;