---
sidebar_position: 5
---

# Full Examples

## Sample Input Test

A test class for the following class:

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

would look like:

```java
import global.BaseTest;
import global.tools.TestOption;
import global.variables.Clause;
import global.variables.clauses.*;
import org.junit.jupiter.params.ParameterizedTest;
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

    // Helper method to join all inputs with line separator
    public static String joinInputs(String... inputs) {
        StringBuilder builder = new StringBuilder();
        for (String input : inputs) {
            builder.append(input).append(System.lineSeparator());
        }
        return builder.toString();
    }

    // Set up custom inputs
    static Stream<String> inputProvider() {
        return Stream.of(joinInputs("5", "3"), joinInputs("-1", "40"));
    }

    @ParameterizedTest
    @MethodSource("inputProvider")
    void testWithInput(String input) {
        // run the class with input
        runWithInput(input);

        // get individual inputs and calculate sum
        String[] inputs = input.split(System.lineSeparator());

        int sum = Integer.parseInt(inputs[0]) + Integer.parseInt(inputs[1]);

        assertEquals(getItemByName("sum"), String.valueOf(sum));
    }
}
```
