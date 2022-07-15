# MethodUtil

This class contains utility methods for working with static methods and testing questions involving methods.

## Methods Available

### `Object invokeIfMethodExists(Class<?> methodClass, String methodName, Object[] arguments, Class<?>... methodArgumentTypes) throws Throwable`

Checks if the specified class contains a method called `methodName`. If the method exists, this method will invoke it with the parameters in the `arguments` array and return an object containing the item returned by method. If the method does not exist, the method will fail the current test with the message `methodClass does not contain method methodName`.
Any errors caused by the method being invoked will be thrown. 

Notes:
* The fail message can be customized using `TestOption.invalidMethodMessage`
* To provide Scanner input to a method, use `provideInput()`

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