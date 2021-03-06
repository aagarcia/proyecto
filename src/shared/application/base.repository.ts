import Result from '@shared/application/result.interface';


export interface BaseRepository<T> {
    list(where: object, relations: string[], order: object): Promise<Result<T>>;
    getOne(where: object, relations: string[]): Promise<Result<T>>;
    getPage(page: number, pageSize: number, where: object, relations: string[], order: object): Promise<Result<T>>;
    insert(entity: T): Promise<Result<T>>;
    update(entity: Partial<T>, where: object, relations: string[]): Promise<Result<T>>;
    delete(where: object): Promise<Result<T>>;
}