import mongoose from 'mongoose';

//describing how user data will be stored in mongodb Database
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }
});

//"User" is the name of the collection that will be saved in mongodb and it will be based on "userSchema"
const userModel = mongoose.model("User", userSchema);

export default userModel;   
