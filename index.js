function receivesAFunction(callback) {
    return callback();
}


function returnsANamedFunction(){
    var fn = returnsANamedFunction;
    return fn 
}



const returnsAnAnonymousFunction = function() {
    return function(){ 
    }
}