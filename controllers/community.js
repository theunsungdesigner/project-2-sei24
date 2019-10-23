
const express = require('express')

const communityApi = require('../models/community.js')
const volunteerRouter = require('../models/volunteer.js')

const communityRouter = express.Router()


/* Step 4
 * 
 * TODO: Put all request handlers here
 */

communityRouter.get('/community/test',(req, res) => {
  res.render('community/hello')
})

communityRouter.get('/community/new', (req,res)=>{
  res.render('community/createCommunityForm')
})

communityRouter.get('/community/edit/:id',(req,res)=>{
  communityApi.getOneCommunity(req.params.id)
  .then((singleCommunity)=>{
    res.render('movie/editCommunityForm',{singleCommunity})
  })
})

// getAll
communityRouter.get('/community', (req, res) => {
  movieApi.getAllCommunity()
    .then((allCommunity) => {
      res.render('community/allCommunity',{allCommunity})
    })
})

// getOne
communityRouter.get('/community/:id', (req, res) => {
  communityApi.getOneCommunity(req.params.id)
    .then((singleCommunity) => {
     res.render('community/singleCommunity',{singleCommunity})
      // res.json(singleMovie)
    })
})

//update
communityRouter.put('/community/:id', (req, res) => {
  communityApi.updateCommunity(req.params.id, req.body)
    .then((updatedCommunity) => {
      res.json(updatedCommunity)
      // res.redirect(`/community/${req.params.id}`)
    })
})
//delete
communityRouter.delete('/community/:id', (req, res) => {
  communityApi.deleteCommunity(req.params.id)
    .then((deletedCommunity) => {
      res.redirect('/community')
      // res.json(deletedIssue)
    })
})


/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
communityRouter.get('/', (req, res) => {
  res.send(templateApi.getHelloWorldString())
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  communityRouter,
  volunteerRouter
}
