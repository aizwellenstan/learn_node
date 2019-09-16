const crypto = require('crypto')

var data = 'example'
console.log(crypto.createHash('md5').update(data).digest('hex'))