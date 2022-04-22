import {AxiosResponse} from "axios";
import {IDetectionLang} from "../types/api/apiTypes";
import {ILang, ITranslated} from "../types/common/common";
import {rootApi} from "./rootApi";

export class LangController {
	static async getDetectedLang(q: string): Promise<AxiosResponse<IDetectionLang[]>> {
		return rootApi.post<IDetectionLang[]>(`/detect`, {q});
	}

	static async getSupportedLang(): Promise<AxiosResponse<ILang[]>> {
		return rootApi.get<ILang[]>('/languages');
	}

	static async getTranslatedText(q: string, source: string, target: string): Promise<AxiosResponse<ITranslated>> {
		return rootApi.post<ITranslated>('/translate', {q, source, target});
	}

	// static async getTranslatedFile(): Promise<AxiosResponse> {
	// 	return rootApi.get('saf')
	// }
}