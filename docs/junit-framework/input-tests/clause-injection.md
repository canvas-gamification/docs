---
sidebar_position: 5
---

# Clause Injection

Often, you will come across a program whose output contains the input given by the user, or whose output needs to change conditionally based on the input. This is where clause injection comes in. By setting up your test sentence with "placeholders", you can dynamically "inject" clauses when the test is run.

The two main use cases for clause injection are:

- **Including the input in the output**
- **Changing the output based on the input**
  - This is useful for testing programs that have a conditional output.

## Placeholder Setup

The first step in running a test is to set up the test sentence, with `PlaceHolder` clauses inserted at the positions where the output varies and clauses need to be injected. For example a test sentence for a question that takes input and requires clause injection might look like this:

```java
public Clause[] testSentence() {
        TestOption.isInputTest = true;
        TestOption.defaultInput = "something";

        return new Clause[]{
                new StringLiteral("This is a test with retrieval."),
                new NewLine(),
                new PlaceHolder(),
        };
    }
```

:::info `PlaceHolder`
You can have _**as many**_ `PlaceHolder` clauses as you want in your test sentence, and you can vary the number of `PlaceHolder` clauses that you have based on the requirements of your test. Multiple placeholders are useful when multiple separate parts of the output need to be injected. For example:

```java
    return new Clause[]{
                new StringLiteral("This is a test with retrieval."),
                new NewLine(),
                new PlaceHolder(),
                new StringLiteral("This is a static part of the output sandwiched between the two placeholders."),
                new PlaceHolder(),
        };
```

:::

## Clause Injection at Test Runtime

Now that we have a test sentence with `PlaceHolder` clauses, we need to inject the actual clauses into the test sentence. We can only know which clauses to inject based on the input case that is being tested. To illustrate how this works, assume we want to write a test for a program that asks the user for a number and prints out whether the number is a prime number. The sample output for this test would look like this:

```java
Enter a Number: 
6
The number 6 is not a prime number.
```

We can set up out test sentence with two `PlaceHolder` clauses like so:

```java
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
```

So then we can test multiple cases by setting up two input providers, one for each case like so:

```java
static Stream<Integer> inputProviderPrime() {
        return Stream.of(2, 3, 5, 7, 11, 13, 17, 19);
}

static Stream<Integer> inputProviderComposite() {
        return Stream.of(4, 6, 8, 9, 10, 12, 14, 15);
}

```

The final step is writing our parameterized tests for each case with injected clauses like so:

```java
@ParameterizedTest
@MethodSource("inputProviderPrime")
void worksWithPrimeNumbers(int input) throws InvalidClauseException {
    String message = "a prime number.";
    runWithInput(String.valueOf(input), new Clause[]{
            new IntegerLiteral(input, "injected"),
            new StringLiteral(message)
    });
}

@ParameterizedTest
@MethodSource("inputProviderComposite")
void worksWithCompositeNumbers(int input) throws InvalidClauseException {
    String message = "not a prime number.";
    runWithInput(String.valueOf(input), new Clause[]{
            new IntegerLiteral(input, "injected"),
            new StringLiteral(message)
    });
}
```

To understand how this works, let's take a look at the resulting test sentence after injecting the clauses:

- For the prime case:

```java
return new Clause[]{
        new StringLiteral("Enter a number:"),
        new NewLine(),
        new StringLiteral("The number "),
        new IntegerLiteral(input, "injected"), // For the number
        new StringLiteral(" is "),
        new StringLiteral("a prime number."), // For the prime status
        };
```

- For the composite case:

```java
return new Clause[]{
        new StringLiteral("Enter a number:"),
        new NewLine(),
        new StringLiteral("The number "),
        new IntegerLiteral(input, "injected"), // For the number
        new StringLiteral(" is "),
        new StringLiteral("not a prime number."), // For the prime status
        };
```

So as we can see the injected clauses replace the `PlaceHolder` clauses in the test sentence in the order that they are defined. For this case, the first `PlaceHolder` clause is replaced with the input, and the second `PlaceHolder` clause is replaced with the prime status. This is an example with two `PlaceHolder` clauses, but usually you will only have one. Determine the number of `PlaceHolder` clauses in your test sentence and the number of input providers you need based on the question.

For a full example of a test with injections look at [Full Examples](../full-example#sample-test-with-clause-injection).
