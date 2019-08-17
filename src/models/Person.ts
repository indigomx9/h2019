import mongoose from "mongoose";

export interface IPerson extends mongoose.Document {
    name: string;
    phone: string;
    street: string;
    city: string;
};

const personSchema: mongoose.Schema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, minlength: 5 },
    phone: { type: String, minlength: 5 },
    street: { type: String, required: true, minlength: 5 },
    city: { type: String, required: true, minlength: 3 },
});

export default mongoose.model<IPerson>("Person", personSchema);

