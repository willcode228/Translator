import {
	actionTypes,
	ISetSourceActiveItem, ISetSourcePanelLangs, ISetTargetActiveItem, ISetTargetPanelLangs
} from "../../types/store/detectorLangTypes";
import {ILang} from "../../types/common/common";

export const setSourcePanelLangsSuccess = (payload: ILang[]): ISetSourcePanelLangs => ({
	type: actionTypes.SET_SOURCE_PANEL_LANGS, payload
});
export const setTargetPanelLangsSuccess = (payload: ILang[]): ISetTargetPanelLangs => ({
	type: actionTypes.SET_TARGET_PANEL_LANGS, payload
});
export const setSourceActiveItemSuccess = (payload: number): ISetSourceActiveItem => ({
	type: actionTypes.SET_SOURCE_ACTIVE_ITEM, payload
});
export const setTargetActiveItemSuccess = (payload: number): ISetTargetActiveItem => ({
	type: actionTypes.SET_TARGET_ACTIVE_ITEM, payload
});
