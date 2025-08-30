const express = require('express')
const urlRouter = express.Router()
const {handleGenerateShortUrl,handleGetAnalytics} = require("../controllers/url")

urlRouter.post('/',handleGenerateShortUrl);

urlRouter.get('/analytics/:shortid',handleGetAnalytics)

module.exports = urlRouter;