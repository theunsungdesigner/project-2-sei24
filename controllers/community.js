
const express = require('express')

const communityApi = require('../models/community.js')

const communityRouter = express.Router()


/* Step 4
 * 
 * TODO: Put all request handlers here
 */

communityRouter.get('/community/test',(req, res) => {
  res.render('hello')
})

communityRouter.get('/community/new', (req,res)=>{
  res.render('createCommunityForm')
})

communityRouter.get('/community/edit/:id',(req,res)=>{
  communityApi.getOneCommunity(req.params.id)
  .then((singleCommunity)=>{
    res.render('editCommunityForm',{singleCommunity})
  })
})

// getAll
communityRouter.get('/community', (req, res) => {
  communityApi.getAllCommunity()
    .then((allCommunity) => {
      res.render('allCommunity',{allCommunity})
    })
})

// getOne
communityRouter.get('/community/:id', (req, res) => {
  communityApi.getOneCommunity(req.params.id)
    .then((singleCommunity) => {
     res.render('singleCommunity',{singleCommunity})
      // res.json(singleCommunity)
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

// create
communityRouter.post('/community', (req, res) => {
  communityApi.createCommunity(req.body)
    .then((createdCommunity) => {
      res.redirect("/community")
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




module.exports = {
  communityRouter
}
