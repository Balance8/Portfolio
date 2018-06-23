matrixMultiplication

Difficulty: Medium

Prompt

Write a function called matrixMultiplication that accepts a single n-dimensional, square matrix (in the form of JS arrays) and a number, multiplies the number and the matrix together and returns the resulting array.

A matrix is represented by a multi-dimensional array. A square matrix is an array of length c that is comprised of arrays of length c.

For example below is a square matrix:

[                             
    [1, 2],                
    [3, 5] 
]                       

To multiply a constant number times a matrix simply multiply the constant to each element in the matrix. See this tutorial for a more in-depth explanation: 

http://www.purplemath.com/modules/mtrxmult.htm

Example
```
matrixMultiplication( 2, [ [4,2], [1,3] ] ) //=> [ [8,4], [2,6] ]
matrixMultiplication( 3, [ [5] ] ) //=> [ [15] ]