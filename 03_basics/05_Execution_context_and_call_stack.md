# Javascript Execution context and call stack

- Global execution context
    - Every js code has a global context, which differs depending upon whether it is in the browser, or a runtime like node or bun etc
    - This has access to a `this` keyword which returns a window object in case of browsers and an Empty object in case of a runtime like nodejs

- Function execution context
    - Functions have their own scope, variables declared within this scope has a life span of this scope only. Make sure to use `let` and `const` only. `var` has issues with such scoping and generally messes the code resulting in results that are unexpected at times.

- Eval execution context
    This is a third type of context, generally talked about when using tools like MongoDB. We didn't go over this in detail in this lecture.


## How JS executes code.

1. ### Memory creation phase
    - variables are allocated and initiated to undefined
    - For functions, definitions are written instead of undefined
1. ### Execution phase
    - Values are assigned to variables
    - Functions are executed by putting them in a Call stack

## Call Stack
    - Every function that gets pushed onto the call stack will get a New environment execution context within which the steps for memory creation and execution phase will get repeated for that environment and variables within that function


