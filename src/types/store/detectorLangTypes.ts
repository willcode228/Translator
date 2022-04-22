import {ILang} from "../common/common";

export interface IInitialDetectorLangs {
	sourcePanelLangs: ILang[];
	targetPanelLangs: ILang[];
	sourceActiveItem: number;
	targetActiveItem: number;
}

export const enum actionTypes {
	SET_SOURCE_PANEL_LANGS = 'DETECTOR_LANG/SET_SOURCE_PANEL_LANGS',
	SET_TARGET_PANEL_LANGS = 'DETECTOR_LANG/SET_TARGET_PANEL_LANGS',
	SET_SOURCE_ACTIVE_ITEM = 'DETECTOR_LANG/SET_SOURCE_ACTIVE_ITEM',
	SET_TARGET_ACTIVE_ITEM = 'DETECTOR_LANG/SET_TARGET_ACTIVE_ITEM',
}

export interface ISetSourcePanelLangs {
	type: actionTypes.SET_SOURCE_PANEL_LANGS;
	payload: ILang[];
}
export interface ISetTargetPanelLangs {
	type: actionTypes.SET_TARGET_PANEL_LANGS;
	payload: ILang[];
}
export interface ISetSourceActiveItem {
	type: actionTypes.SET_SOURCE_ACTIVE_ITEM;
	payload: number;
}
export interface ISetTargetActiveItem {
	type: actionTypes.SET_TARGET_ACTIVE_ITEM;
	payload: number;
}

export type detectorLangAction = ISetSourcePanelLangs | ISetTargetPanelLangs | ISetSourceActiveItem | ISetTargetActiveItem;