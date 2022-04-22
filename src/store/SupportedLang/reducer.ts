import {
	actionTypes,
	IInitialSupportedLang,
	supportedLangAction
} from "../../types/store/supportedLangTypes";

const initialState: IInitialSupportedLang = {
	langs: [],
	error: null
}

export const supportedLangReducer = (state = initialState, action: supportedLangAction): IInitialSupportedLang => {
	switch (action.type) {
		case actionTypes.SET_SUPPORTED_LANG_ERROR:
			return {
				...state,
				error: action.payload
			}
		case actionTypes.SET_SUPPORTED_LANG_SUCCESS:
			return {
				...state,
				langs: action.payload
			}
		default:
			return state;
	}
}