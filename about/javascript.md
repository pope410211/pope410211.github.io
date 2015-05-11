### **Getting Some Java!** :coffee:
##### *What is Java Script?*
  A dynamic scripting language that supports object-oriented, imperative, and functional programming styles. Sometimes referred to as *JS* (for the purpose of this resource we will use *JS* instead of Javascript). [Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

  Now that we have an idea of what *JS* is, lets learn some BASIC commands and what they do!
###### *Basic*
1. [`Argument`](https://developer.mozilla.org/en-US/docs/Glossary/Argument)
    * An argument is a value (primitive or object) passed as input to a function.
2. [`Variable`](https://developer.mozilla.org/en-US/docs/Glossary/Variable)
    * A variable is a named location for storing a value. That way an unpredictable value can be accessed through a predetermined name.
3. [`Function`](https://developer.mozilla.org/en-US/docs/Glossary/Function)
    * A function is a code snippet that can be called by other code or by itself, or a variable that refers to the function. When a function is called, arguments are passed to the function as input, and the function can optionally return an output. A function in JavaScript is also an object. An example of a function are **`()`** & **`{}`**.
    ```
    function toNumber("one", "one");
    
    function (plus(A, B){
      return toNumber(A) + toNumber(B)
    }
    ```
4. [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)The typeof operator returns a string indicating the type of the unevaluated operand. (it is **_1_** word!!!)
    * EX: `typeof 1 // 'number';` or `typeof "one" // 'string';`
5. [`length Property`]()
    * Returns the length of a String object.
6. [`console.log`]()
    * Outputs a message to the Web Console. (Non standard and should not be used in production) But for the purpose of making some examples easier to follow we will use it
      * EX: `if("We Rock".length * 10 >  5) {
... console.log("YES!")
... }
// YES!` In english this is what happened; We said : IF the length of We Rock multiplied by 10 is greater than 5 our console will show yes. Since `"We Rock"` is 7 and 7 * 10 is 70, 70 is > 5 it followed it's function and returned the proper response.

###### *Basic Literal Types*
1. [*`null`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
    * The value null  is a *JS* literal representing null or "empty value", i.e. no object value is present. It's one *JS's* primitive values.
2. [*`Boolean`*](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/boolean)
    * Evaluates and expression and returns as true or false. (anything with a value is true)
3. [*`Number`*](https://developer.mozilla.org/en-US/docs/Glossary/Number)
    * Is the numeric type in the [double-precision 64-bit floating point format (IEE 754)](http://en.wikipedia.org/wiki/Double-precision_floating-point_format). (We'll get more into that later!).
4. [*`String`*](https://developer.mozilla.org/en-US/docs/Glossary/String)
    * Sequence of characters used to to represent text. In *JS* it is a primitive value and the String object is a wrapper around a String primitive.


###### *Built-In Constants*
1. [*`Undefined`*](https://developer.mozilla.org/en-US/docs/Glossary/undefined)
    * A primitive value automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments.
2. [*`NaN`*](https://developer.mozilla.org/en-US/docs/Glossary/NaN)
    * NaN (not a number) is a numeric data type that means an undefined value or value that cannot be represented, especially results of floating-point calculations.
3. [*`Infinity`*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)
    * The global Infinity property is a numeric value representing infinity.

###### [*Basic Arithmetic*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
1. `+` The addition operator produces the sum of numeric operands or string concatenation.
    * Numerical EX: `1 + 1 // 2`
    * String EX: `'I Will Learn to' + ' love Javascript' // 'I Will Learn to love Javascript'`
2. `-` The addition operator produces the sum of numeric operands or string concatenation. It is Uniary and will only work on numericals.
    * Numerical EX 1: `30 - 27 // 3`  EX 2: `27 - 30 // -3`
    * String EX: `"two" - "o" // NaN` (remember NaN = Not a Number)
3. `/` The division operator produces the quotient of its operands where the left operand is the dividend and the right operand is the divisor.
    * Numerical EX 1: `1 / 2 // 0.5 (in Javascript)` EX 2: `1 / 2 // 0 (in Java)`
    * String EX: `"two" / "o" // NaN`
4. `*` The multiplication operator produces the product of the operands.
    * Numerical EX: `2 * 2 // 4` EX 2: `-2 * 2 // -4` EX 3: ` Infinity * Infinity // Infinity`

##### *Javascript Objects*
1. [`array`](https://developer.mozilla.org/en-US/docs/Glossary/array)
    * An array is an ordered collection of data (either primitive or object). Based on its place in the array, each data item has a numeric index through which you can access the corresponding value. In JavaScript, arrays are also objects that can be manipulated with various methods.
2. [`unshift array`]() 
    * The unshift method inserts elements into the start of an array, so they appear in the same order in which they appear in the argument list.
3. [`push Method`]()
    * The push method appends elements in the order in which they appear. If one of the arguments is an array, it is added as a single element. Use the concat method to join the elements from two or more arrays

##### *Loops*
1. [`Loops`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
    * Loops repeat an action some number of times.
   ``` * 
    * var step
    * for (step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}
```
##### *Statements*
1. [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
    * Executes a statement if a specified condition is true. If the condition is false, another statement can be executed using `else`.
    * EX:
    ```
    if (word === "zero"){
      return 0;
    }
    ```
