import * as mongoose from 'mongoose';

export class MyMongoDB {

  public static async initDB() {
    return mongoose.connect('mongodb://localhost:27017/helloWorldDB');
  }

  public static async closeCon() {
    return mongoose.connection.close(true);
  }

}