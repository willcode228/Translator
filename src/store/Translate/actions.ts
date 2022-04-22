import {
	actionTypes,
	ISetSourceTranslate,
	ISetTargetTranslate,
	ISetTargetTranslateLoading
} from "../../types/store/translateTypes";

export const setSourceTranslateSuccess = (payload: string): ISetSourceTranslate => ({
	type: actionTypes.SET_SOURCE_TRANSLATE, payload
})
export const setTargetTranslateSuccess = (payload: string): ISetTargetTranslate => ({
	type: actionTypes.SET_TARGET_TRANSLATE, payload
})
export const setTargetTranslateLoading = (payload: boolean): ISetTargetTranslateLoading => ({
	type: actionTypes.SET_TARGET_TRANSLATE_LOADING, payload
})