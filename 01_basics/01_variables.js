const accountId = 123455
/***
 * let and var
 * var -- older one. Not used now.
 * There used to be scope issues in JS. something called BlockScope.
 * var used to not follow scoping issues and used to change all instances irrespective of scope.
 * Hence, let was introduced.
 * SO prefer not to use var because of block scope and functional scope.
 */
let accountEmail = "testemail@gmail.com"
var accountPassword = "123456"

// No type...
/**
 * Dont use this as well, it is possible but dont use.
 */
accountCity = "Jaipur"

// accountId = 2    TypeError: Assignment to const -- not allowed

// can declare without initialising, takes undefined as default.
let accountState

accountEmail = "hc@hc.com"
accountPassword ="123123"

accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])