// Create a new Promise that simulates an age-based eligibility check
const myPromise = new Promise((resolve, reject) => {
    let age = 5;
    // Condition to check if age is greater than 18
    if (age > 18) {
        resolve("eligible for vote"); // Successfully resolves if eligible
    } else {
        reject("Not eligible for vote"); // Rejects if not eligible
    }
})

// Handling the promise results
myPromise
    .then((msg) => console.log(msg))        // Log success message if resolved
    .catch((error) => console.log(error))    // Log error message if rejected
    .finally(() => console.log("final block")) // Code that runs regardless of outcome

