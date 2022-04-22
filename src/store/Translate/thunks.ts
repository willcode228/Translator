import {actionTypes, ISetSourceTranslate, ISetTargetTranslate, translateAction} from "../../types/store/translateTypes";
import {Dispatch} from "redux";
import {RootState} from "../rootReducer";
import {LangController} from "../../api/langController";
import {setTargetTranslateLoading} from "./actions";

export const setSourceTranslateSuccess = (payload: string): ISetSourceTranslate => ({
	type: actionTypes.SET_SOURCE_TRANSLATE, payload
})
export const setTargetTranslateSuccess = (payload: string): ISetTargetTranslate => ({
	type: actionTypes.SET_TARGET_TRANSLATE, payload
})

export const setTargetTranslate = (q: string) => async (dispatch: Dispatch<translateAction>, getState: () => RootState) => {

	if(!q.trim()) {
		dispatch(setTargetTranslateSuccess(''));
		return;
	}

	dispatch(setTargetTranslateLoading(true));

	const {sourcePanelLangs,targetPanelLangs,sourceActiveItem,targetActiveItem} = getState().detectorLang;

	const source = sourcePanelLangs[sourceActiveItem].code,
		target = targetPanelLangs[targetActiveItem].code;

	const {data} = await LangController.getTranslatedText(q, source, target);
	dispatch(setTargetTranslateSuccess(data.translatedText));
	dispatch(setTargetTranslateLoading(false));
}

export const setSourceTranslate = (q: string) => async (dispatch: Dispatch<translateAction>) => {
	dispatch(setSourceTranslateSuccess(q));
}

export const setTargetLoading = (isLoading: boolean) => async (dispatch: Dispatch<translateAction>) => {
	dispatch(setTargetTranslateLoading(isLoading));
}