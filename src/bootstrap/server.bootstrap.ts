import { Application } from 'express';
import http from 'http';
import IBootstrap from '@bootstrap/bootstrap.interface';
import yenv from 'yenv';

const env = yenv();

export default class implements IBootstrap {
    constructor(private app: Application) {}

    initialize(): Promise<any> {
        return new Promise((resolve, reject) => {
            const server = http.createServer(this.app);
            server
                .listen(env.PORT)
                .on("listening", () => {
                    console.log(`server is listening on port ${env.PORT}`);
                    resolve("Server is OK");
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }
}