# Method Test

This class can be instantiated to allow the test writer to test methods written by students without the need to call them 
directly, and provides additional utility. Also, it supports a `Clause[]` system, allowing the test writer to specify what
the console output form a method should be. 

## Constructor Parameters

* `Class<?> methodClass` is the class which the method is located in.
* `String methodName` is the name of the method. It must be exactly how it is declared in the class, otherwise an error
will be thrown.
* `Object[][] arguments` (optional) is a 2D array which holds the parameters and their class which will be used when calling the method.
Each parameter should also be of the form `{paramater_value, parameter_type}`
    * Example: If the method being called is `public static int sum(int x, int y)`, and you wanted to test the numbers 5 and
  7, the argument array would be `Object[][] arguments = { {5, int.class}, {7, int.class} };`
* `Clause[] methodTestSentence` (optional) is a statement of clauses which specify what the console output of the method
should be. By default, if the `Clause[]` is not specified, the test will assume there should be no console output and 
assert that it is empty. Also, the method clause system does not support any random clauses or the `PlaceHolder()` clause.
* `String incorrectMethodStructureErrorMessage` (optional) can be used to specify the error message which is run if the 
console output does not match the specified `Clause[]` structure

## Methods

### `public Object callMethod() throws Throwable`
* This method calls the method specified in the `methoClass` attribute with the name `methodname`, and will
try to pass the method the specified parameters (if there are any). If successful, the method will return an object which 
wraps the returned value from the method, or null of the method return type is void. Otherwise, if the method specified 
does not exist, the student will receive an error message telling them that the method could not be found in their program.
If there is a problem in the students' method, and an error is thrown, `callMethod()` will also throw this error to
the user. 

### `public void setMethodOutput()`
* Sets up the output stream which catches any console output from the method. This should generally not be called by the
test writer, but may need to be in some circumstances.

### `public void setIncorrectMethodStructureErrorMessage(String message)`
* Changes the `incorrectMethodStructureErrorMessage` to `message`

### ` public void setMethodNotFoundErrorMessage(String message)`
* Changes the `methodNotFoundErrorMessage` to `message`. This is usually not necessary as there is a default message based
on the parameters used to initialize `MethodTest`, but may be useful for better messages for some tests.

### `public String getMethodOutput()`
* Returns the console output of the method as a String

### `public void setArguments(Object[][] arguments)`
* Sets the arguments which the method will be called with to those specified in the array. See the constructor parameters
section for details about structuring this array. 

### ` public String getMethodItemAtIndex(int index)`
* Returns the value captured by the clause at `index`. Note that the `Clause[]` is indexed starting at one.

### `public String getMethodItemByName(String name)`
* Returns the value captured by the clause with the name `name`.