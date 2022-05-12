import {Dispatch} from "redux";
import {RootState} from "../rootReducer";
import {LangController} from "../../api/langController";
import {translateAction} from "../../types/store/translateTypes";
import {
	setSourceTranslateSuccess,
	setTargetTranslateLoading,
	setTargetTranslateFileSuccess,
	setTargetTranslateTextSuccess
} from "./actions";

export const setTargetTranslate = (q: string | FileList) => async (dispatch: Dispatch<translateAction>, getState: () => RootState) => {

	dispatch(setTargetTranslateLoading(true));

	const {sourcePanelLangs,targetPanelLangs,sourceActiveItem,targetActiveItem} = getState().detectorLang;
	const source = sourcePanelLangs[sourceActiveItem].code, target = targetPanelLangs[targetActiveItem].code;

	if(typeof q === 'string') {
		if(!q.trim()) {
			dispatch(setTargetTranslateTextSuccess(''));
			return;
		}

		const {data} = await LangController.getTranslatedText(q, source, target);
		dispatch(setTargetTranslateTextSuccess(data.translatedText));

	} else {
		const {data} = await LangController.getTranslatedFile(q, source, target);
		dispatch(setTargetTranslateFileSuccess(data.translatedFileUrl));
	}

	dispatch(setTargetTranslateLoading(false));
}

export const setSourceTranslate = (q: string) => async (dispatch: Dispatch<translateAction>) => {
	dispatch(setSourceTranslateSuccess(q));
}

export const setTargetLoading = (isLoading: boolean) => async (dispatch: Dispatch<translateAction>) => {
	dispatch(setTargetTranslateLoading(isLoading));
}