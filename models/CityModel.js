import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  location: {
    lat: Number,
    long: Number,
  },
  lastModifiedDate: Number,
});

citySchema.pre('save', function setLastModifiedDate(next) {
  this.lastModifiedDate = Date.now();
  next();
});

const CityModel = mongoose.model('City', citySchema);


export default CityModel;
