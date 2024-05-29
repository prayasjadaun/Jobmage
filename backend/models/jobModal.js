// jobModel.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  type: String,
  status: String,
  postedOn: Date,
  description: String,
  apply: String
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
