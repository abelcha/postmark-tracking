var Postmark = require('./postmark.js')
var tracker = new Postmark('xxx-xxx-xxx');
tracker.search('xxx-xxx-xxx').then(function(resp) {
    console.log(resp && resp.TotalCount)
})
tracker.search('xxx-xxx-xxx', {
    count: 5
}, function(err, resp) {
    console.log(err, resp && resp.TotalCount)
})

tracker.search({
    recipient: "test@test.me",
    count: 66
}, function(err, resp) {
    console.log(err, resp && resp.TotalCount)
})
