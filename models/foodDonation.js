
const mongoose = require('./connection.js')

const foodDonationModelSchema = new mongoose.Schema({
name: String,
date: Date,
time: String,
foodType: String
})


const FoodDonationCollection = mongoose.model('foodDonation', foodDonationModelSchema)
//getAllfoodDonation
const getAllFoodDonation = () => {
  return FoodDonationCollection.find({})
}

//getOnefoodDonation
const getOneFoodDonation = (id) => {
  return FoodDonationCollection.findById(id)
}

//create
const createFoodDonation = (foodDonationData) => {
  return FoodDonationCollection.create(foodDonationData)
}

//update
const updateFoodDonation = (id, foodDonationData) => {
  return FoodDonationCollection.updateOne({_id: id}, foodDonationData)
}

//delete
const deleteFoodDonation = (id) => {
  return foodDonationCollection.deleteOne({_id: id})
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
  getAllFoodDonation,
  getOneFoodDonation,
  createFoodDonation,
  updateFoodDonation,
  deleteFoodDonation,
  getHelloWorldString
}
