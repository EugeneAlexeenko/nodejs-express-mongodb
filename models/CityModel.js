import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
  city: String,
  country: String,
  capital: Boolean,
  location: {
    lat: Number,
    long: Number,
  },
});

const CityModel = mongoose.model('City', citySchema);

export default CityModel;
