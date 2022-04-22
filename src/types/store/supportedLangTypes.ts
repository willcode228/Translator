import {ILang} from "../common/common";


export interface IInitialSupportedLang {
	langs: ILang[];
	error: null | string;
}

export const enum actionTypes {
	SET_SUPPORTED_LANG_SUCCESS = 'SUPPORTED_LANG/SET_SUPPORTED_LANG_SUCCESS',
	SET_SUPPORTED_LANG_ERROR = 'SUPPORTED_LANG/SET_SUPPORTED_LANG_ERROR',
}

export interface ISetSupportedLangSuccess {
	type: actionTypes.SET_SUPPORTED_LANG_SUCCESS;
	payload: ILang[];
}

export interface ISetSupportedLangError {
	type: actionTypes.SET_SUPPORTED_LANG_ERROR;
	payload: null | string;
}

export type supportedLangAction = ISetSupportedLangSuccess | ISetSupportedLangError;