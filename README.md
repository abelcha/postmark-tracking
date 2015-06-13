# Postmark-Tracking

Postmark Tracking is a wrapper for the postmark tracking API.
Find more details on the [official documentation]

 Installation
--------
```shell
npm install postmark-tracking --save
```

 Documentation
--------
#### Track message with a unique id

```javascript
var Postmark = require('postmark-tracking');
var tracker = new Postmark('xxx-xxx-xxx-xxx') //Postmark token

tracker.search('my-message-id-xxx', function(err, resp) {
    console.log(err, resp);
});

```
====
### Track message with a unique id and options

**Options:**

* count : *Limit the number of message opens to return per request, max of 500. (default: 10)*
* offset : *Specify the number of messages to skip.(default: 0)*

```javascript
 ...
tracker.search({
    count: 42,
    offset: 12
}, function(err, resp) {
    console.log(err, resp);
});

```
====
### Track messages with filters

**Options:**
* recipient: *Filter by the value of the To, Cc, or Bcc fields.*
* tag: *Filter by tag.*
* client_name: *Filter by the client name, i.e. Outlook, Gmail.*
* client_company: *Filter by the client company, i.e. Microsoft, Apple, Google.*
* client_family: *Filter by the client family, i.e. OS X, Chrome.*
* os_name: *Filter by the full OS name and specific version, i.e. OS X 10.9 Mavericks*
* os_family: *Filter by the kind of OS used without specific version, i.e. OS X, Windows.*
* os_company: *Filter by the company which produced the OS, i.e. Apple Computer, Inc., Microsoft Corporation.*
* platform: *Filter by the platform, i.e. webmail, desktop, mobile.*
* country: *Filter by the country messages were opened in, i.e. Denmark, Russia.*
* region: *Filter by the full name of region messages were opened in, i.e. Hauts-de-Seine, Pennsylvania.*
* city: *Filter by the full name of city messages were opened in, i.e. Minneapolis, Philadelphia.*

```javascript
 ...
tracker.search({
  recipient: 'darkmichel78@laposte.net',
  tag: 'welcome-user',
  count: 25
}, function(err, resp) {
    console.log(err, resp);
});

```
====
####Using promises

```javascript
...
tracker.search('my-message-id-xxx')
.then(function(resp) {
     console.log(err, resp);
}, function(err) {
     console.error(err);
});

```

### Version
1.0.0

### Todo's

Write Test

License
----

MIT


**Free Software, Hell Yeah!**

[official documentation]:http://developer.postmarkapp.com/
