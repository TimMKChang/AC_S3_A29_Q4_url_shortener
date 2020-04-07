const express = require('express')
const router = express.Router()
const Url = require('../models/url')
const randomUrl = require('../public/javascripts/randomUrl')

// homepage
router.get('/', (req, res) => {
  return res.render('index')
})

router.post('/', async (req, res) => {

  // random shorten url
  const shorten_url = await randomUrl(5)

  const url = new Url({
    original_url: req.body.url,
    shorten_url
  })

  const full_shorten_url = req.protocol + '://' + req.get('host') + '/' + shorten_url

  url.save(err => {
    if (err) {
      return console.error(err)
    }
    return res.render('index', { url, original_url: req.body.url, full_shorten_url })
  })
})

router.get('/:shorten_url', (req, res) => {
  Url.findOne({ shorten_url: req.params.shorten_url })
    .lean()
    .then(url => {
      if (!url) {
        return res.status(404).render('error404');
      }
      return res.redirect(`${url.original_url}`)
    })
    .catch(err => {
      return console.error(err)
    })
})

module.exports = router
