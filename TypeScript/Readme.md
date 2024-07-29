## 👩‍💻 TypeScript Basic Tutorials + Concept

### 📃 What is TypeScript?

TypeScript is a superset of JavaScript, meaning that it does everything that JavaScript does, but with some added features.

The main reason for using **TypeScript is to add static typing** to JavaScript. Static typing means that the type of a variable cannot be changed at any point in a program. It can prevent a LOT of bugs!

On the other hand, **JavaScript is a dynamically typed language**, meaning variables can change type. Here's an example:

- JavaScript

```JavaScript
let foo = "hello";
foo = 55;
```

✅ foo has changed type from a string to a number - no problem

- TypeScript

```TypeScript
let foo = "hello";
foo = 55;
```

❌ ERROR - foo cannot change from string to number
TypeScript cannot be understood by browsers, so it has to be compiled into JavaScript by the TypeScript Compiler (TSC)

#### Why you should use TypeScript

- **Static Typing** - TypeScript can help you catch bugs before you even run your code
- **Bug Finding** - Research has shown that TypeScript can spot 15% of common bugs.
- **Readability** - It is easier to see what the code it supposed to do. And when working in a team, it is easier to see what the other developers intended to.

#### Drawbacks of TypeScript

- TypeScript takes longer to write than JavaScript, as you have to specify types, so for smaller solo projects it might not be worth using it.
- TypeScript has to be compiled – which can take time, especially in larger projects.

### 📃 Variable Declaration in TypeScript

TypeScript, we can set the type we want a variable to be be adding `: type` (called a "type annotation" or a "type signature") after declaring a variable. Examples:

```typescript
let id: number = 5;
let firstname: string = "danny";
let hasDog: boolean = true;

let unit: number; // Declare variable without assigning a value
unit = 5;
```

But it's usually best to not explicitly state the type, as TypeScript automatically infers the type of a variable (type inference):

```typescript
let id = 5; // TS knows it's a number
let firstname = "danny"; // TS knows it's a string
let hasDog = true; // TS knows it's a boolean

hasDog = "yes"; // ERROR
```

We can also set a variable to be able to be a union type. **A union type** is a variable that can be assigned more than one type:

```typescript
let age: string | number;
age = 26;
age = "26";
```

### 📃 Arrays in TypeScript

A TypeScript array is an ordered list of data. To declare an array that holds values of a specific type, you use the following syntax:

```typescript
let arrayName: type[];
```

For example, the following declares an array of strings:

```typescript
let skills: string[] = [];
```

In this example, TypeScript infers the skills array as an array of strings. It is equivalent to the following:

```typescript
let skills: string[];
skills = ["Problem Sovling", "Software Design", "Programming"];
```

**Once you define an array of a specific type, TypeScript will prevent you from adding incompatible values to it**. For example :

```typescript
skills.push(5);
```

The following will cause an error because we’re trying to add a number to the string array.

#### Storing values of mixed types

The following illustrates how to declare an array that holds both strings and numbers: In this case, TypeScript infers the scores array as an array of string | number.

```typescript
let scores: (string | number)[];
scores = ["Programming", 5, "Software Design", 4];
```

### 📃 Objects in TypeScript
Objects in TypeScript must have all the correct properties and value types:

Declare a variable called person with a specific object type annotation
```typescript
let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
};
```
Assign person to an object with all the necessary properties and value types
```typescript
person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

// ERROR: should be a boolean
person.isProgrammer = 'Yes'; 

// ERROR: missing the isProgrammer property
person = {
  name: 'John',
  location: 'US',
};
```
### 📃 Functions in TypeScript

In TypeScript, you can specify the type of the parameters and the return value of a function. Here’s an example:

```typescript
function add(num1: number, num2: number): number {
  return num1 + num2;
}
```

In this example, the add function takes two parameters, num1 and num2, both of which are numbers. The function returns a number.

### 📃 TypeScript Interfaces

An interface is a way to define a contract in your code. It defines the syntax for classes to follow. In other words, an interface defines the syntax that any entity must adhere to.

```typescript
interface Person {
  name: string;
  age: number;
  location: string;
  isProgrammer: boolean;
}
```

In this example, we define an interface called Person. It has four properties: name, age, location, and isProgrammer. Each property has a specific type.





### ⚙️ Setup TypeScript Compiler

- Install TypeScript

```
npm i -g typescript
```

- Check TypeScript Version

```
tsc -v
```

- Run a TypeScript File

```
tsc index.ts
```

- Configure TypeScript Compiler

```
tsc --init
```

- Modify Some Lines in "tsconfig.json"

- Now Run TypeScript File with updated configuration

```
tsc
```

### 🐜 Debugging TypeScript File

- Go to Run and Debug Section in VS Code
- Click on `Add Configuration`
- Select `"Node.js`
- Modify `"launch.json"` file
- Add "preLaunchTask": `"tsc: build - tsconfig.json"`

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}\\TypeScript\\src\\Index.ts",
      "preLaunchTask": "tsc: build - TypeScript/tsconfig.json",
      "outFiles": ["${workspaceFolder}/**/*.js"]
    }
  ]
}
```

- Now you can Debug TypeScript File
- Set Breakpoints and Run Debug
- Check Variable and Watch Expressions
- Happy Coding 🚀 Enjoy Debugging TypeScript File

### 📚 TypeScript Clean Sheet

![](<./assets/TypeScript%20Cheat%20Sheet%20(LIGHT).jpg>)

### 🌿 Learning Resources

- Learn TypeScript Basics with Code Mosh : [🎯 Click Here](https://www.youtube.com/watch?v=d56mG7DezGs&t=199s&pp=ygUgdHlwZXNyaXB0IGNyYXNoIGNvdXJzZSB3aXRoIG1vc2g%3D)
- Learn TypeScript – The Ultimate Beginners Guide : [🎯 Click Here](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/)
- TypeScript Tutorial for Beginners : [🎯 Click Here](https://www.typescripttutorial.net/)