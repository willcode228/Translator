
export interface IInitialTranslate {
	source: string;
	target: string;
	loading: boolean;
}

export const enum actionTypes {
	SET_SOURCE_TRANSLATE = 'TRANSLATE/SET_SOURCE_TRANSLATE',
	SET_TARGET_TRANSLATE = 'TRANSLATE/SET_TARGET_TRANSLATE',
	SET_TARGET_TRANSLATE_LOADING = 'TRANSLATE/SET_TARGET_TRANSLATE_LOADING'
}

export interface ISetSourceTranslate {
	type: actionTypes.SET_SOURCE_TRANSLATE;
	payload: string;
}
export interface ISetTargetTranslate {
	type: actionTypes.SET_TARGET_TRANSLATE;
	payload: string;
}

export interface ISetTargetTranslateLoading {
	type: actionTypes.SET_TARGET_TRANSLATE_LOADING;
	payload: boolean;
}

export type translateAction = ISetSourceTranslate | ISetTargetTranslate | ISetTargetTranslateLoading;