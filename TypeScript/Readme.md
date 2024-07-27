## TypeScript Basic Tutorials

- Learn TypeScript Basics with Code Mosh : [🎯 Click Here]()


#### ⚙️ Setup TypeScript Compiler

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

#### 🐜 Debugging TypeScript File

- Go to Run and Debug Section in VS Code
- Click on "Add Configuration"
- Select "Node.js"
- Modify "launch.json" file
- Add "preLaunchTask": "tsc: build - tsconfig.json"
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
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\TypeScript\\src\\Index.ts",
            "preLaunchTask": "tsc: build - TypeScript/tsconfig.json",
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
        }
    ]
}
```
- Now you can Debug TypeScript File
- Set Breakpoints and Run Debug
- Check Variable and Watch Expressions
- Happy Coding 🚀 Enjoy Debugging TypeScript File