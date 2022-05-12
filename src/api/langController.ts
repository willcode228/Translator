import {AxiosResponse} from "axios";
import {IDetectionLang} from "../types/api/apiTypes";
import {ILang, ITranslatedFile, ITranslatedText} from "../types/common/common";
import {rootApi} from "./rootApi";

export class LangController {
	static async getDetectedLang(q: string): Promise<AxiosResponse<IDetectionLang[]>> {
		return rootApi.post<IDetectionLang[]>(`/detect`, {q});
	}

	static async getSupportedLang(): Promise<AxiosResponse<ILang[]>> {
		return rootApi.get<ILang[]>('/languages');
	}

	static async getTranslatedText(q: string, source: string, target: string): Promise<AxiosResponse<ITranslatedText>> {
		return rootApi.post<ITranslatedText>('/translate', {q, source, target});
	}

	static async getTranslatedFile(q: FileList, source: string, target: string): Promise<AxiosResponse<ITranslatedFile>> {
		const formData = new FormData();
		formData.append('file', q[0]);
		formData.append('source', source);
		formData.append('target', target);

		return rootApi.post<ITranslatedFile>('/translate_file', formData);
	}
}