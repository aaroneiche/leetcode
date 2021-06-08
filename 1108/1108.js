/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
/* 
    //original attempt.
    let cleanAddress = "";
    cleanAddress = address.replace(/\./g,"[.]");

    return cleanAddress; 
*/
/* 
    //Second attempt
    let octals = address.split(".");
    return octals.join("[.]");
 */
    let cleanAddress = "";
    for(i = 0; i < address.length; i++) {
        if(address[i] == ".") {
            cleanAddress += "[.]"
        }else{
            cleanAddress += address[i];
        }
    }
    return cleanAddress;
};


console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));
