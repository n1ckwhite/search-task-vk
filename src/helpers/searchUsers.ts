import { checkResponse } from "./checkResponse.ts";
import { API } from "../contstatns/endpoint.ts";

export const searchUsers = async (name: string) => {
    const response = await fetch(`${API}=${name || ""}`);
    if (response) {
        return checkResponse(response).then((data) => data);
    }
}
