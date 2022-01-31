const { Schema, model } = require('mongoose');

const apodSchema = new Schema(
  {
    apod: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Apod = model('Apod', apodSchema);

module.exports = Apod;
