export abstract class StorageRepository {
  static dbInstance: any;
  static getInstance = () => StorageRepository;
}