async function simpleAdd(a, b) {
    return a + b;
}

// Expose the function to be executed by the server
mainFunction = simpleAdd;
