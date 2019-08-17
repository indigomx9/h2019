import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    username: string;
    friends: mongoose.Schema.Types.ObjectId;
};
const userSchema: mongoose.Schema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, minlength: 3 },
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Person"
        }
    ],
});

export default mongoose.model("User", userSchema);

