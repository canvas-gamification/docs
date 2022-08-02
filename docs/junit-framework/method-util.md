# MethodUtil

This class contains utility methods for working with static methods and testing questions involving methods.

## Methods Available

### `Object invokeIfMethodExists(Class<?> methodClass, String methodName, Object[] arguments, Class<?>... methodArgumentTypes) throws Throwable`

Checks if the specified class contains a method called `methodName`. If the method exists, this method will invoke it with the parameters in the `arguments` array and return an object containing the item returned by method. If the method does not exist, the method will fail the current test with the message `methodClass does not contain method methodName`.
Any errors caused by the method being invoked will be thrown. 

Notes:
* The fail message can be customized using `TestOption.invalidMethodMessage`
* To provide Scanner input to a method, use `provideInput()`
* This method does not check the method return type (see checking return types below)

Example: 

```java
public class maximumProblem {
    public static int max(int x, int y){
        return Math.max(x, y);
    }
}
```
```java
Object max = invokeIfMethodExists(max.class, "max", 
        new Object[]{3, 5}, int.class, int.class)
```

### `invokeIfMethodExists(Class<?> methodClass, String methodName`

This method is the same as the one above and implements the same features, but is used for calling methods which have no parameters.

Example:

```java
import java.util.Random;
public class generateRandom {
    public static int generateRandomInt(){
        Random gen = new Random();
        return gen.nextInt();
    }
}
```
```java
Object random = invokeIfMethodExists(generateRandom.class , "generateRandomInt")
```
### `getMethodOutput()`

Returns a String of any console output printed by the method.

Example:

```java
public class greetings {
    public static void hello(){
        System.out.println("Hello World!");
    }
}
```
```java
invokeIfMethodExists(greetings.class, "hello");
// output will be equal to "Hello World!"
String output = getMethodOutput();
```

## Checking Return Types

In addition to the features in MethodUtil, two assertions in `CustomAssertions` are available to check the return type from a method. Note that although JUnit's `assertEquals()` will fail a test if the inputs are of different types, the custom 
assertions are preferable as they have messages tailored for better student feedback.

### `_assertEquals(Object expected, Object actual, String userMessage)`

This assertion first checks that `actual` have the same underlying type as `expected`, and if else fails the test with 
the message: `Received x type, but expected y type.`,  with x being the type of actual and y the type of expected. The 
object `expected` should be the correct output of the desired type and `actual` the value the student returned. If the 
first assertion passes, the regular `assertEquals()` method is called, with the `userMessage` printed as the fail message if the two
objects are not equal.

### `_assertEquals(Object expected, Object actual, double delta, String userMessage)`

This assertion is the same as the one above, but it also includes a place to specify a delta value for comparison of double
values. Note that this assertion assumes the desired type to be double, and the objects are cast to double after checking 
that they are the same type. As such, this assertion must **only** be used for cases where a method should return a double.  
