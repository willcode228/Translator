import {actionTypes, detectorLangAction, IInitialDetectorLangs} from "../../types/store/detectorLangTypes";

const initialState: IInitialDetectorLangs = {
	sourcePanelLangs: [],
	targetPanelLangs: [],
	sourceActiveItem: 0,
	targetActiveItem: 1,
}

export const detectorLangReducer = (state = initialState, action: detectorLangAction): IInitialDetectorLangs => {
	switch (action.type) {
		case actionTypes.SET_SOURCE_ACTIVE_ITEM:
			return {
				...state,
				sourceActiveItem: action.payload
			}
		case actionTypes.SET_TARGET_ACTIVE_ITEM:
			return {
				...state,
				targetActiveItem: action.payload
			}
		case actionTypes.SET_SOURCE_PANEL_LANGS:
			return {
				...state,
				sourcePanelLangs: action.payload
			}
		case actionTypes.SET_TARGET_PANEL_LANGS:
			return {
				...state,
				targetPanelLangs: action.payload
			}
		default:
			return state;
	}
}