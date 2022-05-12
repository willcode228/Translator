import {
	actionTypes,
	ISetSourceTranslate,
	ISetTargetTranslateText,
	ISetTargetTranslateFile,
	ISetTargetTranslateLoading,
} from "../../types/store/translateTypes";

export const setSourceTranslateSuccess = (payload: string): ISetSourceTranslate => ({
	type: actionTypes.SET_SOURCE_TRANSLATE, payload
})
export const setTargetTranslateTextSuccess = (payload: string): ISetTargetTranslateText => ({
	type: actionTypes.SET_TARGET_TRANSLATE_TEXT, payload
})
export const setTargetTranslateFileSuccess = (payload: string): ISetTargetTranslateFile => ({
	type: actionTypes.SET_TARGET_TRANSLATE_FILE, payload
})
export const setTargetTranslateLoading = (payload: boolean): ISetTargetTranslateLoading => ({
	type: actionTypes.SET_TARGET_TRANSLATE_LOADING, payload
})