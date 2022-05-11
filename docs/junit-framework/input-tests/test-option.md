---
sidebar_position: 2
---

# Test Options

This is a class that is used to designate tests so that they run with inputs.

## The `TestOption` class

`TestOption` has two options that are needed for denoting input tests, namely: `isInputTest` and `defaultInput.`

### Parameters

| Name | Type | Description
| :--- | --- | --- |
| `isInputTest` | `boolean` | When set to `true` the tests will run for inputs|
| `defaultInput` | `String` | default input for the program to run with|
| `incorrectStructureErrorMessage` | `String` | message to print when the user output doesn't match the test sentence  |

:::caution Note
For an input test to be configured properly, both `isInputTest` **and** `defaultInput` must be defined!
:::

### Usage

If we were writing a test that needed input it would look something like this:

```java
public class Example extends BaseTest {
    public Clause[] testSentence() {
        TestOption.isInputTest = true;
        TestOption.defaultInput = "something";

        return new Clause[]{
                new StringLiteral("...")
                //...test sentence definition
        };
    }
    //...other test methods
```

In the example above, this test class is an input test class that will run with a default input of `"something"` passed to the program.

To change the error message that is printed when the user output doesn't match the test sentence, you can change the option inside each test like so:

```java
@ParameterizedTest
@MethodSource("inputProvider")
void runsCorrectlyWithInput(int input) throws InvalidClauseException {
    TestOption.incorrectStructureErrorMessage = "Your program did not correctly run with input";
    //...test code/assert statements
}
```
