import mongoose from 'mongoose';

// 스키마 정의
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// 모델 생성
const User = mongoose.model('user', UserSchema);
export default User;
