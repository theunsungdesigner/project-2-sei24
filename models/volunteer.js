
const mongoose = require('./connection.js')

const VolunteerModelSchema = new mongoose.Schema({
name: String,
date: Date,
time: time,
eventType: String,
})


const VolunteerCollection = mongoose.model('Volunteer', VolunteerModelSchema)
//getAllVolunteer
const getAllVolunteer = () => {
  return VolunteerCollection.find({})
}

//getOneVolunteer
const getOneVolunteer = (id) => {
  return VolunteerCollection.findById(id)
}

//create
const createVolunteer = (VolunteerData) => {
  return VolunteerCollection.create(VolunteerData)
}

//update
const updateVolunteer = (id, VolunteerData) => {
  return VolunteerCollection.updateOne({_id: id}, VolunteerData)
}

//delete
const deleteVolunteer = (id) => {
  return VolunteerCollection.deleteOne({_id: id})
}

function getHelloWorldString() {
  return 'hello world'
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllVolunteer,
  getOneVolunteer,
  createVolunteer,
  updateVolunteer,
  deleteVolunteer,
  getHelloWorldString
}
