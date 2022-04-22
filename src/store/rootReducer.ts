import {combineReducers} from "redux";
import {supportedLangReducer} from "./SupportedLang/reducer";
import {detectorLangReducer} from "./DetectorLang/reducer";
import {translateReducer} from "./Translate/reducer";

export const rootReducer = combineReducers({
	supportedLang: supportedLangReducer,
	detectorLang: detectorLangReducer,
	translate: translateReducer
});

export type RootState = ReturnType<typeof rootReducer>;