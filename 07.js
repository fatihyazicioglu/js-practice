let usernameA="fatih"
const DOMAIN = "12313.org"

let email = usernameA + "@"+ DOMAIN
console.log("Merhaba", username, "welcome to our site", "your mail:",email);

let infoX = `Hello ${usernameA} welcome to our site.. your mail ${email} 
lenght of the mail ${email.length}
you should pay ${(2+3)*10} TL

your name : ${usernameA[0]}.
it is : ${new Date().getHours()}
`
console.log(infoX);

let firstName = "fatih"
firstName = firstName.toUpperCase()
console.log(firstName);

console.log(email.search("@"));

console.log(email.search("dl"));



let DOMAIN1 = email.slice(email.search("@")+1)
console.log(DOMAIN1);


console.log(email.includes("add")
);

email.includes("@")

console.log(email.endsWith("kodluyoruz.org"));

let fullNameA = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}`
console.log(fullNameA);

