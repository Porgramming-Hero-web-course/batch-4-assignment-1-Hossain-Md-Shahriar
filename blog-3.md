## Necessity of Type Guards
Type Guards are necessary in TypeScript because they provide a way to handle types dynamically at runtime, and it also ensures type safety. TypeScript's static typing helps catch many issues during compilation, but in real-world applications, you often encounter scenarios where the type of a variable could vary. Type guards help you check and handle these types properly, avoiding runtime errors. Let’s discuss the types of type guards and their use cases.
### `typeof` Type Guard
The typeof type guard is used to check primitive types, such as string, number, boolean, and symbol. This is one of the simplest ways to narrow down a variable’s type.
```
type Alphanumeric = string | number;

const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
};

console.log(add("3", 4)); // 34
```
### `in` Operator Type Guard
The in operator checks if a property exists in an object. This type guard is especially useful with interfaces and optional properties.
```
type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

const getUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`My name is ${user.name} and my role is ${user.role}`);
  } else {
    console.log(`My name is ${user.name}`);
  }
};

const normalUser: NormalUser = {
  name: "normal vai",
};

const adminUser: AdminUser = {
  name: "admin vai",
  role: "admin",
};

getUser(adminUser); // My name is admin vai and my role is admin
```
### `instanceof` Type Guard
The instanceof type guard is used to check if an object is an instance of a particular class or constructor function. This is helpful when working with custom classes or objects.
```
class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeBark() {
    console.log("I am barking");
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeMeow() {
    console.log("I am meowing");
  }
}

const isDog = (animal: Animal): animal is Dog => {
  return animal instanceof Dog;
};

const isCat = (animal: Animal): animal is Cat => {
  return animal instanceof Cat;
};

const getAnimal = (animal: Animal) => {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeow();
  } else {
    animal.makeSound();
  }
};

const dog = new Dog("Tommy", "dog");
const cat = new Cat("Tom", "cat");

getAnimal(dog); // I am barking
```