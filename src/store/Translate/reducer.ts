import {actionTypes, IInitialTranslate, translateAction} from "../../types/store/translateTypes";

const initialState: IInitialTranslate = {
	source: '',
	target: '',
	loading: false,
}

export const translateReducer = (state = initialState, action: translateAction): IInitialTranslate => {
	switch (action.type) {
		case actionTypes.SET_SOURCE_TRANSLATE:
			return {
				...state,
				source: action.payload
			}
		case actionTypes.SET_TARGET_TRANSLATE:
			return {
				...state,
				target: action.payload
			}
		case actionTypes.SET_TARGET_TRANSLATE_LOADING:
			return {
				...state,
				loading: action.payload
			}
		default:
			return state;
	}
}