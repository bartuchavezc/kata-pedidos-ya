import * as mongoose from 'mongoose';
import { Connection } from "mongoose";

export class MongodbConnectionMannager {

    private readonly _connection: Connection;

    constructor(){
        this._connection = mongoose.createConnection(process.env.MONGODB_URI as string, {});
    }

    public get connection(): Connection {
        return this._connection;
    }
    
}