# Collatz Conjecture Grapher

This application visualizes the Collatz Conjecture, also known as the 3n + 1 problem. It generates and graphs the sequence of numbers that follow the Collatz rules starting from any positive integer.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The **Collatz Conjecture Grapher** is a tool to visualize the famous unsolved problem in mathematics. Given any positive integer `n`, the program computes the Collatz sequence and generates a graph showing the trajectory of the sequence until it reaches 1. 

The Collatz rules are:
1. If the number is even, divide it by 2.
2. If the number is odd, multiply it by 3 and add 1.

This sequence eventually converges to 1, but the number of steps and the values in the sequence can vary significantly.

## Features

- Graphical representation of the Collatz sequence.
- Handles any positive integer as input.
- Interactive UI to visualize the progression of the sequence.
- Customizable graph style (e.g., color, scale).
- Shows the number of steps and the highest value reached by the sequence.

## Installation

### Prerequisites

- Make sure you have the following installed:
  - [Node.js](https://nodejs.org/) (for web-based apps or JS projects)
  - [npm](https://www.npmjs.com/) or other package managers if needed

### Steps

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/collatz-conjecture-grapher.git
   ```
2. Navigate into the project directory:

   ```bash
   cd collatz-conjecture-grapher
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm start
   ```
