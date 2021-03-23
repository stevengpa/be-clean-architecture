import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

import {StorageRepository} from "../../L3_InterfaceAdapters/Gateways/StorageRepository";


export class JsonStorageRepository implements StorageRepository {
  static dbInstance: JsonDB;

  constructor() {}

  static getInstance(filePath: string): StorageRepository  {
    if (!JsonStorageRepository.dbInstance) {
      JsonStorageRepository.dbInstance = new JsonDB(
        new Config(filePath, true, true, '/')
      );
    }

    return JsonStorageRepository.dbInstance;
  }

  // save<T>(payload: T): void {
  //   const { dataPath, value }: { dataPath: string, value: T } = payload;
  //   JsonStorageRepository.dbInstance.push(dataPath, value);
  // }
}