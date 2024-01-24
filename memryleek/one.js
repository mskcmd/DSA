// Example with a memory leak

function createClosure() {
    let data = "This is a closure";
  
    // Incorrect usage of closure
    // The anonymous function captures 'data', creating a closure
    // The closure is assigned to the global variable 'leakedClosure'
    leakedClosure = function() {
      console.log(data);
    };
  }
  
  createClosure();
  
  // Calling the closure
  leakedClosure(); // This will work and log "This is a closure"
  
  // However, the closure keeps a reference to 'data', preventing it from being garbage collected
  // This leads to a memory leak because 'data' will not be released, even if it's no longer needed
  