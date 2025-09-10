let accountId= 14453;
let accountEmail="ravi@gmail.com";
var accountPassword="2344";

accountCity="Jaipur";

accountEmail="text@gmail.com";
accountPassword="8686";

console.log(accountId);

/*
prefer not to use var
because of issue in the block scope and functional scope

*/

let accountState; // output is Undefined

console.table([accountEmail, accountId,accountPassword,accountCity,accountState]);
