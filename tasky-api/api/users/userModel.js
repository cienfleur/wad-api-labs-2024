import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true }
});

const pwdValidator = (password) => {
    return password = regex.test(password);
  }
  UserSchema.path("password").validate(pwdValidator);

export default mongoose.model('User', UserSchema);