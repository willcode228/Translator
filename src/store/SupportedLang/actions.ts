import {actionTypes, ISetSupportedLangError, ISetSupportedLangSuccess} from "../../types/store/supportedLangTypes";
import {ILang} from "../../types/common/common";

export const setSupportedLangSuccess = (payload: ILang[]): ISetSupportedLangSuccess => ({
	type: actionTypes.SET_SUPPORTED_LANG_SUCCESS, payload
});
export const setSupportedLangError = (payload: string): ISetSupportedLangError => ({
	type: actionTypes.SET_SUPPORTED_LANG_ERROR, payload
});