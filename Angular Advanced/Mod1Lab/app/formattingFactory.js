angular.module('app').factory('formattingFactory', [formatFactory]);

function formatFactory(){
 function format(value){
    if(value.length !== 0 && value.length % 2 == 0){
        return value.toUpperCase();
    }
    else{
        return value.toLowerCase();
    }
 }
 return {
     format:format
 }
}