import {routePathes} from "./consts";
import {IRoute} from "../types/routes/routesTypes";
import {TextTranslation} from "../components/common/TextTranslation/TextTranslation";
import {FilesTranslation} from "../components/common/FilesTranslation/FilesTranslation";

const DefaultElement = (props: string) => () => (<h1>Hello world {props}</h1>);

export const routes: IRoute[] = [
	{
		key: routePathes.TEXT,
		path: routePathes.TEXT,
		Element: TextTranslation
	},

	{
		key: routePathes.FILES,
		path: routePathes.FILES,
		Element: FilesTranslation
	},

	{
		key: routePathes.NOT_FOUND,
		path: routePathes.NOT_FOUND,
		Element: DefaultElement('Not found')
	}
];