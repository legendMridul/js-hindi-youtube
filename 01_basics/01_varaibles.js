const accountId = 2323
let accountEmail = "mridulmishra@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState;
/*
Prefer not use vr because of issue in block scope nad functional scope
*/
// accountId = 6 //not allowed
console.log(accountId);
accountEmail ="hc@hc.com"
accountPassword="222222"
accountCity="punjab"
console.table([accountEmail,accountPassword,accountCity,accountState])