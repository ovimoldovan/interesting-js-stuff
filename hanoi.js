// Recursion 
// Code example from Chapter 4 in JavaScript: The Good parts (O'Reilly) by Douglas Crockford
// The Towers of Hanoi: https://www.cs.cmu.edu/~cburch/survey/recurse/hanoiimpl.html

var hanoi = function hanoi(disc, src, aux, dst){
    if(disc > 0){
        hanoi(disc - 1, src, dst, aux);
        console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst + '\n');
        hanoi(disc - 1, aux, src, dst);
    }
}

hanoi(3, "Source", "Auxiliary", "Destination");