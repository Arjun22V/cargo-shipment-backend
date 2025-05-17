const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  containerID: String,
  route: [String],
  currentLocation: String,
  ETA: String,
  status: String
}, { timestamps: true });

module.exports = mongoose.model('Shipment', shipmentSchema);
