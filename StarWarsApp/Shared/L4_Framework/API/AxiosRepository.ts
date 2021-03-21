import axios from "axios";
import {ApiRepository} from "../../L3_InterfaceAdapters/API/ApiRepository";

export class AxiosRepository implements ApiRepository {
    public get(url: string, config?: any): Promise<any> {
        return axios.get(url, config);
    }
}