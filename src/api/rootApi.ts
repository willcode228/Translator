import axios from "axios";

const URL = process.env.REACT_APP_BASE_URL,
			KEY = process.env.REACT_APP_API_KEY;

export const rootApi = axios.create({
	baseURL: URL,
	params: {
		'accept': 'application/json',
		'api_key': KEY,
	}
});