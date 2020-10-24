// Augmenting Types 
// Code example from Chapter 4 in JavaScript: The Good parts (O'Reilly) by Douglas Crockford
// kinda like extension methods in C#

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
 };

Number.method('integer', function() {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log((-10 / 3).integer());