import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', function setLastModifiedDate(next) {
  this.lastModifiedDate = Date.now();
  next();
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
