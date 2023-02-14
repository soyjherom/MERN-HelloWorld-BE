import * as mongoose from 'mongoose';
import { Model } from 'mongoose';

type HelloType = HelloModel & mongoose.Document;

export interface HelloModel {
  hello: string
}

const GreetingSchema = new mongoose.Schema({
  hello: String,
});

const Greetings: Model<HelloType> = mongoose.model<HelloType>
('Greetings', GreetingSchema, 'Greetings');

export default Greetings;