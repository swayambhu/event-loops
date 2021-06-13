# event-loops

In this code the first step is:

1. main() is pushed into call stack
2. for loop is pushed into call stack
3. for loop is executed and numbers between 0 - 5 are printed
4. console.log("Hello") is pushed into call stack and the "hello" is printed
5. setTimeout is pushed into call back and the transfered into node-api
6. after waiting for the desired time in node-api the setTimout function is transfered into event loop and then pushed into call stack and then the result is being printed.
