import {routePathes} from "../../routes/consts";
import {ReactElement} from "react";

export type IRoutePathes = routePathes.TEXT | routePathes.FILES | routePathes.NOT_FOUND;

export interface ILink {
	title: string,
	Icon: any,
	path: IRoutePathes
}

export interface IRoute {
	key: IRoutePathes,
	path: IRoutePathes,
	Element: () => ReactElement
}