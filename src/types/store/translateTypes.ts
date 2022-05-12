
export interface IInitialTranslate {
	source: string;
	targetText: string,
	targetFile: string,
	loading: boolean;
}

export const enum actionTypes {
	SET_SOURCE_TRANSLATE = 'TRANSLATE/SET_SOURCE_TRANSLATE',
	SET_TARGET_TRANSLATE_TEXT = 'TRANSLATE/SET_TARGET_TRANSLATE_TEXT',
	SET_TARGET_TRANSLATE_FILE = 'TRANSLATE/SET_TARGET_TRANSLATE_FILE',
	SET_TARGET_TRANSLATE_LOADING = 'TRANSLATE/SET_TARGET_TRANSLATE_LOADING'
}

export interface ISetSourceTranslate {
	type: actionTypes.SET_SOURCE_TRANSLATE;
	payload: string;
}
export interface ISetTargetTranslateText {
	type: actionTypes.SET_TARGET_TRANSLATE_TEXT;
	payload: string;
}

export interface ISetTargetTranslateFile {
	type: actionTypes.SET_TARGET_TRANSLATE_FILE;
	payload: string;
}

export interface ISetTargetTranslateLoading {
	type: actionTypes.SET_TARGET_TRANSLATE_LOADING;
	payload: boolean;
}

export type translateAction = ISetSourceTranslate | ISetTargetTranslateFile | ISetTargetTranslateText | ISetTargetTranslateLoading;