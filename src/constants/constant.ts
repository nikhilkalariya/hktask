import { environment } from "../enviroments/enviroments";

export const API_Posts = environment.BASE_URL + environment.API_Posts;
export const API = {

    login: API_Posts + 'login', 
}