import {Dispatch} from "redux";
import {ILang, menuType} from "../../types/common/common";
import {
	setSourceActiveItemSuccess,
	setSourcePanelLangsSuccess,
	setTargetActiveItemSuccess,
	setTargetPanelLangsSuccess
} from "./actions";
import {RootState} from "../rootReducer";
import {langType} from "../../consts/langType";

export const setInitialPanelsLangs = (langs: ILang[]) => (dispatch:IDispatch) => {
	dispatch(setSourcePanelLangsSuccess(langs));
	dispatch(setTargetPanelLangsSuccess(langs));
}

export const isActiveLangsDifferent = (type: menuType) => (dispatch: IDispatch, getState: IGetState) => {
	const {
		sourcePanelLangs, sourceActiveItem,
		targetActiveItem, targetPanelLangs
	} = getState().detectorLang;

	if(sourcePanelLangs[sourceActiveItem].code !== targetPanelLangs[targetActiveItem].code) {
		return;
	}

	const newNumber = (n: number) => (n + 1) > 2 ? 0 : n + 1;

	type === langType.TARGET
		? dispatch(setTargetActiveItem(newNumber(sourceActiveItem)))
		: dispatch(setSourceActiveItem(newNumber(targetActiveItem)));
}

export const setNewSourcePanelLangs = (lang: ILang) => (dispatch: IDispatch, getState: IGetState) => {
	const {sourcePanelLangs, sourceActiveItem} = getState().detectorLang;

	const isPresent = sourcePanelLangs.findIndex(panelLang => panelLang.code === lang.code);
	if(isPresent > 0) {
		return;
	}

	const newSourcePanelLangs = [...sourcePanelLangs];
	newSourcePanelLangs.splice(sourceActiveItem, 1, lang);

	dispatch(setSourcePanelLangsSuccess(newSourcePanelLangs));
	dispatch(isActiveLangsDifferent(langType.TARGET));
}

export const setNewTargetPanelLangs = (lang: ILang) => (dispatch: IDispatch, getState: IGetState) => {
	const {targetPanelLangs, targetActiveItem} = getState().detectorLang;

	const isPresent = targetPanelLangs.findIndex(panelLang => panelLang.code === lang.code);
	if(isPresent > 0) {
		return;
	}

	const newTargetPanelLangs = [...targetPanelLangs];
	newTargetPanelLangs.splice(targetActiveItem, 1, lang);

	dispatch(setTargetPanelLangsSuccess(newTargetPanelLangs));
	dispatch(isActiveLangsDifferent(langType.SOURCE));
}

export const setSourceActiveItem = (newSourceActive: number) => (dispatch: IDispatch) => {
	dispatch(setSourceActiveItemSuccess(newSourceActive));
	dispatch(isActiveLangsDifferent(langType.TARGET));
}

export const setTargetActiveItem = (newTargetActive: number) => (dispatch: IDispatch) => {
	dispatch(setTargetActiveItemSuccess(newTargetActive));
	dispatch(isActiveLangsDifferent(langType.SOURCE));
}

type IDispatch = Dispatch<any>;
type IGetState = () => RootState
