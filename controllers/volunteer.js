const express = require('express')

const volunteerApi = require('../models/volunteer.js')


const volunteerRouter = express.Router()


/* Step 4
 * 
 * TODO: Put all request handlers here
 */

volunteerRouter.get('/volunteer/test',(req, res) => {
  res.render('volunteer/hello')
})

volunteerRouter.get('/volunteer/new', (req,res)=>{
  res.render('volunteerViews/createVolunteerForm')
})

volunteerRouter.get('/volunteer/edit/:id',(req,res)=>{
  volunteerApi.getOneVolunteer(req.params.id)
  .then((singleVolunteer)=>{
    res.render('volunteerViews/editVolunteerForm',{singleVolunteer})
  })
})

// getAll
volunteerRouter.get('/volunteer', (req, res) => {
  volunteerApi.getAllVolunteer()
    .then((allVolunteer) => {
      res.render('volunteerViews/allVolunteer',{allVolunteer})
    })
})

// getOne
volunteerRouter.get('/volunteer/:id', (req, res) => {
  volunteerApi.getOneVolunteer(req.params.id)
    .then((singleVolunteer) => {
     res.render('volunteerViews/singleVolunteer',{singleVolunteer})
      // res.json(singleVolunteer)
    })
})

//update
volunteerRouter.put('/volunteer/:id', (req, res) => {
  volunteerApi.updateVolunteer(req.params.id, req.body)
    .then((updatedVolunteer) => {
      res.json(updatedVolunteer)
      // res.redirect(`/volunteer/${req.params.id}`)
    })
})

// create
volunteerRouter.post('/volunteer', (req, res) => {
  volunteerApi.createVolunteer(req.body)
    .then((createdVolunteer) => {
      res.redirect("/volunteer")
    })
})

//delete
volunteerRouter.delete('/volunteer/:id', (req, res) => {
  volunteerApi.deleteVolunteer(req.params.id)
    .then((deletedVolunteer) => {
      res.redirect('/volunteer')
      // res.json(deletedVolunteer)
    })
})


/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
volunteerRouter.get('/', (req, res) => {
  res.send(volunteerApi.getHelloWorldString())
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  volunteerRouter,
  
}