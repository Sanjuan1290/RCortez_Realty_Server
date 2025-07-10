const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['farmlots'],
    required: true
  },
  location: {
    region: { type: String, required: true },
    province: { type: String, required: true },
    city: { type: String, required: true }
  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Enter a description (min 10 characters)']
  },
  images:{
    type: String,
    required: true
  },
  googleMap: {
    type: String,
    require: true
  },
  available: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Listing', listingSchema)
