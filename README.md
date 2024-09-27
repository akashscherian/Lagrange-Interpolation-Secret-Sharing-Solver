📦 Project: Shamir's Secret Sharing - Polynomial Constant Term Finder

This project implements a simplified version of Shamir's Secret Sharing algorithm, where the goal is to find the constant term `c` of an unknown polynomial of degree `m`. Using Lagrange interpolation, the program reads encoded polynomial roots from a JSON file, decodes the values based on their base, and computes the constant term.

🔧 Features:
- Polynomial Interpolation**: Solves for the constant term `c` of the polynomial using Lagrange interpolation.
- Base Conversion**: Decodes values encoded in different bases (e.g., binary, hexadecimal, etc.).
- JSON Input**: Reads polynomial roots and values from a JSON file.
- Multiple Test Cases**: Supports multiple test cases simultaneously.

 🗂️ Project Structure
 
├── lagrange.js          # Main JavaScript file containing the logic
├── testcases.json       # JSON file containing multiple test cases
└── README.md            # Project documentation


🚀 Getting Started

#### 1. Prerequisites
Ensure you have Node.js installed. You can check if Node.js is installed by running:

bash
node -v


If not installed, download it from [Node.js official website](https://nodejs.org/).

2. Cloning the Repository
Clone this repository to your local machine:

bash
git clone https://github.com/akashscherian/Lagrange-Interpolation-Secret-Sharing-Solver.git
cd Lagrange-Interpolation-Secret-Sharing-Solver


3. Installing Dependencies
There are no external dependencies for this project. The built-in `fs` module of Node.js is used to handle file operations.

 📝 Usage

1. Test Cases: 
   - The testcases.json file contains multiple test cases. Each test case includes a set of polynomial roots, with encoded y values in various bases (e.g., base 10, base 2, base 16, etc.).
   - Example structure of testcases.json:

  json
   {
       "testCases": [
          {
               "keys": {
                   "n": 4,
                   "k": 3
               },
               "1": {
                   "base": "10",
                   "value": "4"
               },
               "2": {
                   "base": "2",
                   "value": "111"
               },
               "3": {
                   "base": "10",
                   "value": "12"
               },
               "6": {
                   "base": "4",
                   "value": "213"
               }
           },
           {
               "keys": {
                   "n": 9,
                   "k": 6
               },
               "1": {
                   "base": "10",
                   "value": "28735619723837"
               },
               "2": {
                   "base": "16",
                   "value": "1A228867F0CA"
               },
               "3": {
                   "base": "12",
                   "value": "32811A4AA0B7B"
               },
               "4": {
                   "base": "11",
                   "value": "917978721331A"
               },
               "5": {
                   "base": "16",
                   "value": "1A22886782E1"
               },
               "6": {
                   "base": "10",
                   "value": "28735619654702"
               },
               "7": {
                   "base": "14",
                   "value": "71AB5070CC4B"
               },
               "8": {
                   "base": "9",
                   "value": "122662581541670"
               },
               "9": {
                   "base": "8",
                   "value": "642121030037605"
               }
           }
       ]
   }
   

2. **Running the Code**:
   To run the program and compute the constant term for each test case, simply execute the `lagrange.js` script:

   bash
   node lagrange.js
   

   Expected Output:
   plaintext
   Constant Term (c) for Test Case 1: -3
   Constant Term (c) for Test Case 2: 479186286674166
   

3. How It Works:
   - The program reads the polynomial roots and encoded values from testcases.json.
   - It converts the y values into base 10, using their provided base.
   - It performs Lagrange interpolation using the first k points (where \( k = m + 1 \)) and computes the constant term \( c \) (the \( y \)-intercept of the polynomial).

---

 📋 Detailed Functionality


convertToBase10(base, value)

Converts a number encoded in any base (binary, hexadecimal, etc.) to base 10.

- Parameters:
  - `base`: The base of the input number (e.g., `2` for binary, `16` for hexadecimal).
  - `value`: The value as a string (e.g., `"111"` in base 2).
  
- Returns: A base-10 integer.

 lagrangeInterpolation(points)
Calculates the constant term \( c \) using Lagrange interpolation for a set of points.

- Parameters: 
  - points: Array of points, each with an `x` and `y` value.
  
- Returns: The constant term \( c \) of the polynomial.

findConstantTerm(testCase)
Processes a test case, decodes the roots, and calculates the constant term.

- Parameters: 
  - testCase: Object containing the test case data from the JSON file.
  
- Returns: The constant term \( c \).

---

🔍 Testing & Validation

You can verify the computed constant term using known methods like Lagrange interpolation. For each test case:
- Decode the base-encoded `y` values.
- Use Lagrange interpolation to manually compute the constant term on paper or with a calculator.
- Compare the results.

 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:
1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

 🙌 Acknowledgements

- Inspired by Shamir's Secret Sharing Scheme and Lagrange Interpolation.
- Node.js and its `fs` module for handling file operations.

---

 📞 Contact

If you have any questions or suggestions, feel free to contact me at `akashscherian@gmail.com`.

---
