const Url = require('../../models/url')

async function randomUrl(length) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const collection = lowerCaseLetters + upperCaseLetters + numbers

  let url = ''
  for (let i = 0; i < length; i++) {
    const randomChar = collection[Math.floor(Math.random() * collection.length)]
    url += randomChar
  }

  const _url = await Url.findOne({ shorten_url: url })
  if (!_url) {
    return url
  }
  return randomUrl(length)
}

module.exports = randomUrl