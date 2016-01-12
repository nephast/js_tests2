/*
function mapForEach(arr, fn) {
    
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])   
        )
    };
    
    return newArr;
}

var arr1 = ['0145678765','0176543456','0145678334'];
console.log( arr1);


var arr2 = mapForEach(arr1, function(item) {
   return item + ' ' + 'traduction ici'; 
});
console.log(arr2);

var reponse = 'bleu'

var arr3 = mapForEach(arr1, function(item) {
   return item === reponse; 
});
console.log(arr3);


var checkPastLimit = function(limiter, item) {
    return item > limiter;   
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);


var addDesignator= function(designator) {
    return function(designator, item) {
        if (designator === 33) {
             return 'POUR LA FRANCE COMPOSEZ ' + designator + ' ' + item;   
        } else
        return 'AUTRE PAYS' + ' ' + item;   
    }.bind(this, designator); 
};

var arr5 = mapForEach(arr1, addDesignator(33));
console.log(arr5);
*/



var secret = ['bleu', 'rouge', 'vert', 'jaune'];
console.log('secret is: ' + secret);


var guess1 = ['jaune','rouge','rouge','bleu'];
console.log('guess is : ' + guess1);

function matchArrays(arr, fn) {
    
    var newArray = [];
    for (i= 0; i <secret.length; i++){
        newArray.push(
        fn(arr[i]))
    };
    return newArray;
}


var a = matchArrays(secret, function(item) {
    if (secret[i]===guess1[i]){
   return item + ' ' + 'IDENTIQUE'; 
    }
    else
        { return item + ' ' + 'DIFFERENT'; 
        }
});
console.log(a);
































