
const mongoose = require('./connection.js')

const CommunityModelSchema = new mongoose.Schema({
 eventName: String,
 date: Date,
 corporatePartner: Boolean,
 localPartner: Boolean,
 religousPartner: Boolean,
 paragraph: String,
})


const CommunityCollection = mongoose.model('Community', CommunityModelSchema)
//getAllCommunity
const getAllCommunity = () => {
  return CommunityCollection.find({})
}

//getOneCommunity
const getOneCommunity = (id) => {
  return CommunityCollection.findById(id)
}

//create
const createCommunity = (communityData) => {
  return CommunityCollection.create(communityData)
}

//update
const updateCommunity = (id, communityData) => {
  return CommunityCollection.updateOne({_id: id}, communityData)
}

//delete
const deleteCommunity = (id) => {
  return CommunityCollection.deleteOne({_id: id})
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
  getAllCommunity,
  getOneCommunity,
  createCommunity,
  updateCommunity,
  deleteCommunity,
  getHelloWorldString
}
