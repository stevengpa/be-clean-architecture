export interface ApiRepository {
    get(url: string, config?: any): Promise<any>;
}