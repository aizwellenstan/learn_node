var obj = { "key": "value" }
console.log(JSON.stringify(obj))

var string = '{ "key": "value" }'
var obj = JSON.parse(string)
console.log(obj.key)