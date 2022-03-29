let username="fatih"
const DOMAIN = "12313.org"

let email = username + "@"+ DOMAIN
console.log("Merhaba", username, "welcome to our site", "your mail:",email);

let info = `Hello ${username} welcome to our site.. your mail ${email} 
lenght of the mail ${email.length}
you should pay ${(2+3)*10} TL

your name : ${username[0]}.
it is : ${new Date().getHours()}
`
console.log(info);

let firstName = "fatih"
firstName = firstName.toUpperCase()
console.log(firstName);


