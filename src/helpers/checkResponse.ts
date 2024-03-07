import { IData } from "../types";

interface IResponse {
    ok: boolean;
    json: () => Promise<IData>;
}

export const checkResponse = (response: IResponse) => {
    if (!response.ok) {
        throw new Error("Ответ сети был не ok.");
    }
    return response.json();
}


