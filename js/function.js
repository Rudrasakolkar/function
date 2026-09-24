// 1. Subtract b from a. → Example: subtract(10, 4) → 6
const cl = console.log;
     const  subtract = (b , a)=>{
       return b - a;
	 }
cl(subtract(10,4))	 


// 2. Multiply two numbers. → Example: multiply(3, 5) → 15
const multiply = (a,b) => {
	return a*b;
}
cl(multiply(3,5))
        
// 3. Divide a by b. → Example: divide(20, 4) → 5
   const divide = (a,b) =>{
	   return a/b;
   }
   cl(divide(20,4))

// 4. Find the remainder of a divided by b. → Example: modulus(10, 3) → 1
 modulus = (a,b) =>{
	return a%b;
}
cl(modulus(10,3))

// 5. Return the square of a number. → Example: square(5) → 25
function square(a){
	return a*a;
}
cl(square(5))


// 6. Return the cube of a number. → Example: cube(3) → 27
function cube(a){
	return a*a*a;
}
cl(cube(3))
