function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    function pi(){
        return '3.142'
    }
    return pi
}

function returnsAnAnonymousFunction(){
    return function (){
        return '3.142'
    }
}