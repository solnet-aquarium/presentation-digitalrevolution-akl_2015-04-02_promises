var db = require('./db/callbackPromise');

db.set('key1', 'value1').then(function(key) {
    return db.set('key2', 'value2');
}).then(function() {
    return db.set('key3', 'value3');
}).then(function() {
    return db.get('key1');
}).then(function(value) {
    console.log('key1 - ' + value);
}).catch(function(err) {
    console.log('An exception was thrown in one of the above promises');
    console.log(JSON.stringify(err));
});

// Example adapted from http://survivejs.com/common_problems/pyramid.html

// Can easily re-order execution as required or on a client's whim
// Error handling does not require copy-paste
// Very little indententation - in JS generally, indentation = bad 
//  "If you need more than 3 levels of indentation, you're screwed 
//  anyway, and should fix your program." -- Linus
