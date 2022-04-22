import {ReactComponent as TextIcon} from '../assets/txt-translate.svg';
import {ReactComponent as FileIcon} from '../assets/file-translate.svg';
import {routePathes} from "./consts";
import {ILink} from "../types/routes/routesTypes";

export const links: ILink[] = [
	{
		title: 'Text',
		Icon: TextIcon,
		path: routePathes.TEXT
	},

	{
		title: 'Files',
		Icon: FileIcon,
		path: routePathes.FILES
	}
];
