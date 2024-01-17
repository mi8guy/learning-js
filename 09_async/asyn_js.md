# Async JS

## Things to know like in a general sense.

- Js is a synchronous language unlike many modern languages.
Meaning, code executes one after the other in a linear manner

- It is a single threaded language. Everything executes on a single same thread. Hence, the language is slow comparative to other good languages having multiple threads. But JS never lets you feel like it is single threaded because a lot of tasks are delegated effieciently. It is no doubt that performance and execution may choke from time to time due to JS engine being single threaded, but the good thing is you will never find a standalone JS engine any where. Everywhere it will be with a runtime environment be it a Browser or NodeJs.

The aboove is a default JS beahviour.

But defalut is not enough, which is why we have certain things first of which is `Execution Context` 

We had talked about execution context before in detail, stuff about memory, call stack, global exec context, how function creates a different context and so on...

## Execution context
-execute one line of code at a time

`Each operation waits for the last one to complete before ecxecution`

We also know that we have a call stack and memory heap


## Blocking code vs. Non-Blocking code

### Blocking code :

- Blocks the flow of the Program  
  - eg:  Read file sync.  
        Whenever program wants to read files. Context needs to be passed to the kernel, then kernel accesses the file, reads it and then gives back to the program.  
        However, the kernel doesn't wait for you, might put you on a halt/ queue. And until the kernel does this task your program cannot go to further operations

### Non - Blocking code :

- Does not block the excution.
  -  eg: Read File Async  
        Does not block the execution of following operations while the file is being read.

  Many a times you might feel that non - blocking code is the best. Consider a scenario, we got user data that we want to store in the database and notify the user upon successful registration.  
  Now if we use Non- blocking code we will notify the user before fully writing to the DB. It might so happen that the DB write failed but we have already notified the user about successful register.  
  So in such a case, a Blocking code is a better choice.  





    