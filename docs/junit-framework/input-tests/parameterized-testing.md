---
sidebar_position: 3
---

# Parameterized Testing

Parameterized Tests are a feature of JUnit5 that allow us to run tests with variable input. To achieve this there are three main components (other than the usual implemented methods from `BaseTest` like `runMain()`) a test class needs to run tests with input:

## `inputProvider()`

To run a test with multiple inputs, a set of inputs needs to be defined that the tests can run with. This takes the form of a `Stream` of `String` values that represent the various cases to run the test with exactly as they should be entered into the question.

:::note
You also need to make sure you add an import for `Stream` in your test class like so:

```java
import java.util.stream.Stream;
```

:::

An example of how this could be used is:

```java
public class InputExample extends BaseTest {
    //...other implemented methods
    static Stream<String> inputProvider() {
        return Stream.of(new String[]{"a", "b"});
    }
}
```

The parameter passed to `Stream.of()` can either be a String array, or simply the elements of the array separated by a comma, so an equivalent call to `Stream.of()` would be:

```java
static Stream<String> inputProvider() {
        return Stream.of("a", "b");
    }
```

The stream of inputs should **always** be Strings, and for multiple inputs, the inputs should be joined with `System.lineSeparator().`

:::tip Modularize
To have cleaner code, you could make a method in your test class that might generate the required formatted strings as an array and put the generated array into the `Stream.of()` method.
:::

## A Parameterized Test

Now that you have an input provider, you can create tests that use these inputs using JUnit5's `ParameterizedTest` decorator and a `MethodSource`. Assuming you have a method called `inputProvider()` that returns an object of type `Stream<String>`, a parameterized test would look like so:

```java
    @ParameterizedTest
    @MethodSource("inputProvider")
    void testWithInput(String input) throws InvalidClauseException {
        //...call main and then assert statements
    }
```

:::caution `InvalidClauseException`
Make sure your method throws `InvalidClauseException` since this is an error that will bubble up through your method!
:::

The way the `MethodSource` decorator works is that it runs `testWithInput` multiple times and passes each element of the `Stream` into `testWithInput` as the parameter `input`, which can be used to access the input value that is currently being tested.

## `runWithInput()`

This is the final piece of the puzzle and is needed to actually execute the program class with the various inputs. It will also run the default framework tests that check for the output's format as well.

To run a simple program with input that doesn't have output that includes the input (for the case where the input is included in the output look at [Clause Injections](./clause-injection)), add the following code to your parameterized tests:

```java
    @ParameterizedTest
    @MethodSource("inputProvider")
    void testWithInput(String input) throws InvalidClauseException {
        runWithInput(input); //This will run main with input and set the output
        //...assert statements (like any other test)
    }
```

For a full example of an input test look at [Full Examples](./full-example).
