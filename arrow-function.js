function hello(firstName) {
    console.log(`Merhaba ${firstName}`);
}
hello ("Javascript")
const helloFunV1 = (firstName) => {    console.log(`Merhaba ${firstName}`);
}
helloFunV1("xd")

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}

helloFuncV4 ("helloFuncV4", "Other INfo")