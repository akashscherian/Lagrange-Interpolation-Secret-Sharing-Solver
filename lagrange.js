const fs = require('fs');

// Function to convert a given value from its specified base to base-10
function convertToBase10(base, value) {
    return parseInt(value, base); // Convert value to base-10 using parseInt
}

// Function to perform Lagrange Interpolation and find the constant term c
function lagrangeInterpolation(points) {
    const k = points.length;
    let c = 0; // The constant term (P(0))

    // Loop through each point (xi, yi)
    for (let i = 0; i < k; i++) {
        let xi = points[i].x;
        let yi = points[i].y;

        // Calculate the Lagrange basis polynomial L_i(0)
        let li = 1;
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let xj = points[j].x;
                li *= (0 - xj) / (xi - xj); // L_i(0) = product of (0 - xj) / (xi - xj)
            }
        }

        // Add the contribution of yi * L_i(0) to the constant term
        c += yi * li;
    }

    return c;
}

// Function to process the test case, decode roots, and calculate the constant term
function findConstantTerm(testCase) {
    const n = testCase.keys.n;
    const k = testCase.keys.k;
    let points = [];

    // Decode the points from the test case
    for (let i = 1; i <= n; i++) {
        if (testCase[i]) {
            let base = parseInt(testCase[i].base);
            let value = testCase[i].value;
            let x = i; // Use the key as x
            let y = convertToBase10(base, value); // Decode the y value
            points.push({ x, y });
        }
    }

    // Use only the first k points for interpolation (as m+1 = k points are required)
    let subsetPoints = points.slice(0, k);

    // Calculate the constant term c using Lagrange Interpolation
    let c = lagrangeInterpolation(subsetPoints);

    return c;
}

// Function to read the JSON file
function readJsonFile(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading JSON file:', err);
        return null;
    }
}

// Main logic
function main() {
    const testCaseFilename = 'testcases.json';
    
    // Read test cases from JSON file
    const data = readJsonFile(testCaseFilename);

    if (data && data.testCases) {
        // Process each test case
        data.testCases.forEach((testCase, index) => {
            const c = findConstantTerm(testCase);
            console.log(`Constant Term (c) for Test Case ${index + 1}:`, c);
        });
    }
}

// Run the main function
main();
