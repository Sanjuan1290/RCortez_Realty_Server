const mongoose = require('mongoose')

const propertiesSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['highend', 'townhome'],
    required: true
  },
  category: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const allowed = {
          highend: ['condominium', 'seaside', 'leisure'],
          townhome: ['eco-friendly', 'affordable', 'accessible']
        }
        return allowed[this.type]?.includes(value)
      },
      message: props => `${props.value} is not a valid category for ${props.instance.type}`
    }
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
  available: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('properties', propertiesSchema)


