const express = require('express')

const foodDonationApi = require('../models/foodDonation.js')


const foodDonationRouter = express.Router()


/* Step 4
 * 
 * TODO: Put all request handlers here
 */

foodDonationRouter.get('/foodDonation/test',(req, res) => {
  res.render('foodDonation/hello')
})

foodDonationRouter.get('/foodDonation/new', (req,res)=>{
  res.render('foodDonationViews/createFoodDonationForm')
})

foodDonationRouter.get('/foodDonation/edit/:id',(req,res)=>{
  foodDonationApi.getOneFoodDonation(req.params.id)
  .then((singleFoodDonation)=>{
    res.render('foodDonationViews/editFoodDonationForm',{singleFoodDonation})
  })
})

// getAll
foodDonationRouter.get('/foodDonation', (req, res) => {
  foodDonationApi.getAllFoodDonation()
    .then((allFoodDonation) => {
      res.render('foodDonationViews/allFoodDonation',{allFoodDonation})
    })
})

// getOne
foodDonationRouter.get('/foodDonation/:id', (req, res) => {
  foodDonationApi.getOneFoodDonation(req.params.id)
    .then((singleFoodDonation) => {
     res.render('foodDonationViews/singleFoodDonation',{singleFoodDonation})
      // res.json(singlefoodDonation)
    })
})

//update
foodDonationRouter.put('/foodDonation/:id', (req, res) => {
  foodDonationApi.updateFoodDonation(req.params.id, req.body)
    .then((updatedFoodDonation) => {
      res.json(updatedFoodDonation)
      // res.redirect(`/foodDonation/${req.params.id}`)
    })
})

// create
foodDonationRouter.post('/foodDonation', (req, res) => {
  foodDonationApi.createFoodDonation(req.body)
    .then((createdFoodDonation) => {
      res.redirect("/foodDonation")
    })
})

//delete
foodDonationRouter.delete('/foodDonation/:id', (req, res) => {
  foodDonationApi.deleteFoodDonation(req.params.id)
    .then((deletedFoodDonation) => {
      res.redirect('/foodDonation')
      // res.json(deletedfoodDonation)
    })
})


/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
foodDonationRouter.get('/', (req, res) => {
  res.send(foodDonationApi.getHelloWorldString())
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  foodDonationRouter
}