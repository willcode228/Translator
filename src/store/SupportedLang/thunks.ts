import {LangController} from "../../api/langController";
import {Dispatch} from "redux";
import {setSupportedLangError, setSupportedLangSuccess} from "./actions";
import {setInitialPanelsLangs} from "../DetectorLang/thunks";

export const setSupportedLang = () => async (dispatch: Dispatch<any>) => {
	try {
		const {data} = await LangController.getSupportedLang();
		dispatch(setSupportedLangSuccess(data));
		dispatch(setInitialPanelsLangs(data.slice(0, 3)));
	} catch (error: any) {
		dispatch(setSupportedLangError(error));
	}
}