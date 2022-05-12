import {langType} from "../../consts/langType";

export interface ILang {
	code: string;
	name: string;
}

export interface ITranslatedText {
	translatedText: string;
}

export interface ITranslatedFile {
	translatedFileUrl: string;
}

export type menuType = langType.TARGET | langType.SOURCE;

export type chooseState = {active: boolean; type: menuType | ''};
