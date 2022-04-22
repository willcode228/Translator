import {langType} from "../../consts/langType";

export interface ILang {
	code: string;
	name: string;
}

export interface ITranslated {
	translatedText: string;
}

export type menuType = langType.TARGET | langType.SOURCE;

export type chooseState = {active: boolean; type: menuType | ''};
