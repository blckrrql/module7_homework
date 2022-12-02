function foo(obj, keyName) {
    return (keyName in obj);
};

const person = {
    name: "Valeriia", 
    Surname: "Sitka",
    age: 22,
    bestColor: "Pink"
};

console.log(foo(person, "bestColor"));
