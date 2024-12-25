# Node.js Server Port Already in Use

This repository demonstrates a common issue in Node.js where a server fails to start because the specified port is already in use.  It also shows a solution for handling this error gracefully.

## Bug

The `bug.js` file contains a simple HTTP server that attempts to listen on port 8080. If this port is already in use (e.g., by another application), the server will fail to start and throw an error. 

## Solution

The `bugSolution.js` file addresses this issue by:

1. **Attempting to listen on a specific port:** If the specified port is already in use, the program will look for an available port.
2. **Handling the `EADDRINUSE` error:** If the port is in use, the program handles this error and logs an appropriate message instead of crashing.

## How to run

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `node bug.js` (to see the error).
4. Run `node bugSolution.js` (to see the working solution).