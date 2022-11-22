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
        TestOption.defaultInput = "1 1 ";

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