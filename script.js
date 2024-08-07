function fibonacci(num) {
    if (num < 0) {
        throw new Error("Input should be a non-negative integer.");
    }
    
    // Handle base cases
    if (num === 0) return 0;
    if (num === 1) return 1;
    
    // Initialize the first two Fibonacci numbers
    let a = 0; // F(0)
    let b = 1; // F(1)
    
    // Compute Fibonacci numbers iteratively
    for (let i = 2; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    
    // The nth Fibonacci number is stored in b
    return b;
}
