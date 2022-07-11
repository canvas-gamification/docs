---
sidebar_position: 6
---

# Full Examples

## Sample Input Test

### Question Class

```java
import java.util.Scanner;

/*
Write a program that will ask the user for two numbers and print the sum of the two numbers
 Sample Output:
 This is a program to add two numbers.
 Enter a number: 
 5
 Enter another number: 
 3
 The sum is 8
*/

public class Example {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("This is a program to add two numbers.");
        System.out.println("Enter a number: ");
        int num1 = input.nextInt();
        System.out.println("Enter another number: ");
        int num2 = input.nextInt();
        int sum = num1 + num2;
        System.out.println("The sum is " + sum);
    }
}
```

### Test Class

```java
import global.BaseTest;
import global.tools.TestOption;
import global.variables.Clause;
import global.variables.clauses.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

public class ExampleTest extends BaseTest {
    public Clause[] testSentence() {
        TestOption.isInputTest = true;
        TestOption.defaultInput = joinInputs("1", "1");

        return new Clause[]{
                new StringLiteral("This is a program to add two numbers."),
                new NewLine(),
                new StringLiteral("Enter a number: "),
                new NewLine(),
                new StringLiteral("Enter another number: "),
                new NewLine(),
                new StringLiteral("The sum is "),
                new IntegerLiteral("sum")
        };
    }

    public void runMain() {
        Example.main(new String[0]);
    }

    // Set up custom inputs
    static Stream<Arguments> inputProvider() {
        return Stream.of(Arguments.of("5", "3"), Arguments.of("-1", "40"));
    }

    @ParameterizedTest
    @MethodSource("inputProvider")
    void testWithInput(String num1, String num2) throws InvalidClauseException {
        // run the class with input
        runWithInput( num1 + System.lineSeparator() + num2 );

        int sum = Integer.parseInt(num1) + Integer.parseInt(num2);

        assertEquals(getItemByName("sum"), String.valueOf(sum));
    }
}
```

## Sample Test with Clause Injection

### Question Class

```java
import java.util.Scanner;

/*
Write a program that will ask the user for a number and print whether it is a prime number or not.
    Sample Output:
    Enter a number: 
    6
    The number 6 is not a prime number.
*/

public class IsPrime {
    public static boolean isPrime(int n) {
        if (n < 2) {
            return false;
        }
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number:");
        int n = sc.nextInt();
        if (isPrime(n)) {
            System.out.println("The number " + n + " is a prime number.");
        } else {
            System.out.println("The number " + n + " is not a prime number.");
        }
    }
}

```

### Test Class

```java
import global.BaseTest;
import global.exceptions.InvalidClauseException;
import global.tools.TestOption;
import global.variables.Clause;
import global.variables.clauses.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.stream.Stream;

public class IsPrimeTest extends BaseTest {
    public Clause[] testSentence() {
        TestOption.isInputTest = true;
        TestOption.defaultInput = "1";

        return new Clause[]{
                new StringLiteral("Enter a number:"),
                new NewLine(),
                new StringLiteral("The number "),
                new PlaceHolder(), // For the number
                new StringLiteral(" is "),
                new PlaceHolder(), // For the prime status
        };
    }

    public void runMain() {
        IsPrime.main(new String[0]);
    }

    static Stream<Integer> inputProviderPrime() {
        return Stream.of(2, 3, 5, 7, 11, 13, 17, 19);
    }

    static Stream<Integer> inputProviderComposite() {
        return Stream.of(4, 6, 8, 9, 10, 12, 14, 15);
    }

    @ParameterizedTest
    @MethodSource("inputProviderPrime")
    void worksWithPrimeNumbers(int input) throws InvalidClauseException {
        String message = "a prime number.";
        TestOption.incorrectStructureErrorMessage = "Your program did not correctly identify a prime number.";
        runWithInput(String.valueOf(input), new Clause[]{
                new IntegerLiteral(input, "injected"),
                new StringLiteral(message)
        });
    }

    @ParameterizedTest
    @MethodSource("inputProviderComposite")
    void worksWithCompositeNumbers(int input) throws InvalidClauseException {
        String message = "not a prime number.";
        TestOption.incorrectStructureErrorMessage = "Your program did not correctly identify a non-prime number.";
        runWithInput(String.valueOf(input), new Clause[]{
                new IntegerLiteral(input, "injected"),
                new StringLiteral(message)
        });
    }
}
```

:::info Changing the default error message
In the test above, we use the `incorrectStructureErrorMessage` property of `TestOption` to change the error message displayed to the user based on the case. By default, the error message is: "Your code's output did not follow the correct structure/syntax.", which might not be helpful for the user, so we can change it to something more helpful based on the question.
:::

## Sample Test with Methods

### Question Class
```java
/*
Write a Java Program that asks the user for the radius of a circle as a double and then determines the area and
circumference of the circle. Create two methods, one for the area called areaCalc, and one for the circumference called
circCalc. Make sure the methods check if the parameter passed in is greater than 0, and return 0 if it is not. The
main method of the program should also output the calculated area and circumference to two decimal places using printf.
Ensure that your output matches the sample.
Sample Output:
    Enter the radius of the circle:
    5
    The area of the circle is: 78.54
    The circumference of the circle is: 31.42
 */

import java.util.Scanner;

public class RadOfCircle {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the radius of the circle:");
        double radius = input.nextDouble();
        System.out.printf("The area of the circle is: %.2f\n", areaCalc(radius));
        System.out.printf("The circumference of the circle is: %.2f\n", circCalc(radius));
    }

    public static double areaCalc(double a) {
        if (!(a > 0))
            return 0;
        double x = Math.PI * Math.pow(a, 2);
        return x;
    }

    public static double circCalc(double a) {
        if (!(a > 0))
            return 0;
        double x = Math.PI * 2 * a;
        return x;
    }
}
```

### Test Class

```java
import global.BaseTest;
import global.tools.TestOption;
import global.variables.Clause;
import global.variables.clauses.DoubleLiteral;
import global.variables.clauses.NewLine;
import global.variables.clauses.StringLiteral;
import global.variables.wrappers.Optional;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

public class MainTest extends BaseTest {
    // Java
    public Clause[] testSentence() {
        TestOption.isInputTest = true;
        TestOption.defaultInput = "5.0";
        return new Clause[]{
                new StringLiteral("Enter the radius of the circle:"),
                new Optional(new StringLiteral(" ")),
                new NewLine(),
                new StringLiteral("The area of the circle is:"),
                new Optional(new StringLiteral(" ")),
                new DoubleLiteral("area"),
                new NewLine(),
                new StringLiteral("The circumference of the circle is:"),
                new Optional(new StringLiteral(" ")),
                new DoubleLiteral("circumference")
        };
    }

    public void runMain() {
        RadOfCircle.main(new String[0]);
    }

    static Stream<Arguments> inputProviderArea() {
        return Stream.of(Arguments.of(5, 78.53981633974483), Arguments.of(0, 0.0), Arguments.of(-45.96, 0.0),
                Arguments.of(429.83, 580421.2715948255));
    }

    static Stream<Arguments> inputProviderCircumference() {
        return Stream.of(Arguments.of(5, 31.41592653589793), Arguments.of(0, 0.0), Arguments.of(-45.96, 0.0),
                Arguments.of(429.83, 2700.7015405850016));
    }

    static Stream<Arguments> inputProviderOutputTest() {
        return Stream.of(Arguments.of(5, 78.54, 31.42), Arguments.of(0, 0.0, 0.0), Arguments.of(-45.96, 0.0, 0.0),
                Arguments.of(429.83, 580421.27, 2700.70));
    }

    @ParameterizedTest
    @MethodSource("inputProviderArea")
    void correctAreaCalcMethod(double radius, double area) {
        String failMessage = "Your program does not have a method for calculating the area of a circle.";
        double result = (double) invokeIfMethodExists(RadOfCircle.class, "areaCalc", failMessage, new Object[]{radius}, double.class);
        assertEquals(result, area, 0.000001, "Your method does not correctly calculate the area of a circle.");
    }

    @ParameterizedTest
    @MethodSource("inputProviderCircumference")
    void correctCircCalcMethod(double radius, double circumference) {
        String failMessage = "Your program does not have a method for calculating the circumference of a circle.";
        double result = (double) invokeIfMethodExists(RadOfCircle.class, "circCalc", failMessage, new Object[]{radius}, double.class);
        assertEquals(result, circumference, 0.000001, "Your method does not correctly calculate the circumference of a circle.");
    }

    @ParameterizedTest
    @MethodSource("inputProviderOutputTest")
    void printsCorrectOutput(double radius, double area, double circumference) {
        runWithInput(String.valueOf(radius));
        assertEquals(Double.parseDouble(getItemByName("area")), area, 0.01, "Your program does not correctly output the area of a circle.");
        assertEquals(Double.parseDouble(getItemByName("circumference")), circumference, 0.01, "Your program does not correctly output the circumference of a circle.");
    }

    public static Object invokeIfMethodExists(Class<?> methodClass, String methodName, String failMessage, Object[] arguments, Class<?>... methodArgumentTypes) {
        try {
            Method m = methodClass.getMethod(methodName, methodArgumentTypes);
            return m.invoke(null, arguments);
        } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
            fail(failMessage);
            return null;
        }
    }

}
```