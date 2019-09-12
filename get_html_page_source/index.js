var request = require('request')

request({
    uri: 'http://example.com'
}, function(err, res, body) {
    console.log(body)
})