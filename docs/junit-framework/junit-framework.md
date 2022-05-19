# Overview

Welcome to the documentation for the Gamification JUnit Framework. This page provides a general overview of the framework and its usage.

## What is the Gamification JUnit Framework?

The Gamification JUnit Framework is a framework for writing standardized Java Unit tests for testing student submitted code solutions to programming problems in Java.

## Rationale for the Gamification JUnit Framework

Initially, Java programs had to be graded by hand, and it was difficult to ensure consistency when a large number of students had to be graded by the same evaluator. Java's JUnit 5 framework provides a solution to this problem by giving evaluators the ability to write automatic tests that will ensure the correctness of the solution. This is not exactly the intended use for JUnit testing, since it is meant to test parts of larger Java programs, but our testing is very limited compared to this.

This is where the Gamification JUnit Framework comes in. It provides a wrapper over regular JUnit 5 by allowing evaluators to avoid writing boilerplate code for writing tests, and focus on testing the correctness of a student's solution in a much more effective manner.

## Gamification JUnit Framework Vs. Vanilla JUnit 5

In the context of automatic grading, our framework provides multiple advantages over vanilla JUnit 5:

- **Output Format Definition**: Some of the most common programming questions involve the student having to print some text to the cxonsole in a certain format. For vanilla JUnit 5, the test writer would have to get the output from the stream, and manually compare the strings to expected output. Doing this for every test becomes tedious, so our framework provides a streamlined and hassle-free way to specify the output format.

- **Automatic Test Generation**: Once the test writer specifies the output format, the framework will automatically run the program and determine if the output matches the expected output. This is a very powerful feature, since it allows the test writer to focus on the logic of the program, and not needing to check the ouput of the program every time they write a test.

- **Multiple Input Tests**: The test writer can specify a stream of multiple input cases for programs that need `Scanner` input, and the framework will re-run tests for each case. This allows for a wide range of test cases to be tested with minilmal setup code.

- **Automated Random Testing**: Once the test writer defines the output format, if the output format contains random values (integers, doubles, characters), the framework will automatically generate tests to ensure that the random values are being generated correctly.

- **Easy Value Retrieval**: Once the output format is defined, the test write can easily retrieve specific values by referring to them by their index, or the name they assigned the value when they specified the input format.

:::info
The test writer can still write tests in vanilla JUnit 5, since our framework is a wrapper over it. So the test writer can customize their tests for their context.
:::

## Install Instructions

To install the framework simply download the JAR's [latest release.](<https://github.com/canvas-gamification/canvas-gamification-junit-tests/releases/latest>) Then to use the framework, simply add the JAR to your project, and import the necessary classes from the `global` package.

## Implementing Tests using the framework

For a more detailed overview of how to implement tests using the framework refer to [Test Classes](./writing-tests.md).

As a general guide, here are some types of questions and how they can be tested using the framework:

### Basic Output Questions

These are questions that require the user to print some text to the console. These are usually the simplest questions to test.

#### Why is it hard to test this?

Usually these types of questions have specified output patterns, and without the framework, maintaining these patterns and retrieving values from the output stream is difficult.

#### How do I test this?

- **Test Class**: Create a class that extends the `BaseTest` class.
- **Test Sentence**: Create the [`testSentence()`](./writing-tests.md#testsentence) method with the output format as an array of [`Clause`](./clauses/clauses.md) objects.
- **Call Main**: Call the main method of the test class by implementing the [`runMain()`](./writing-tests.md#runmain) method.
- **Retrieve Values**: Retrieve output values based on the format. See [Retrieving Values](./retrieving-values.md) for more information.
- **Additional Tests**: Depending on the question, you may need to create additional tests to ensure values are calculated correctly.

#### Example

##### Question

Make a program that calculates and prints the body mass index (BMI) of a person given their weight in kilograms and height in metres. The formula for BMI is `BMI = weigth/(height * height)`. In the same program, set the height to 1.65 and the weight to 77.

Sample Output:

```
Height: 1.75
Weight: 70.0
BMI: 24.9
```

Answer:

```java
public class BMICheck {
    public static void main(String[] args) {
        double height = 1.75;
        double weight = 70;
        double bmi = weight / (height * height);
        System.out.println("Height: " + height);
        System.out.println("Weight: " + weight);
        System.out.println("BMI: " + bmi);
    }
}
```

- **What to test**: Output follows the correct format.
- **Common mistakes**: Not setting the variables correctly, and having the wrong data types.
- **How the student could cheat the system**: The student might cheat the system by simply printing the sample output to the console. Questions like these are usually Parsons questions, which ensure that the student cannot manually print the solution.

##### Test Class

```java
public class BMICheckTest extends BaseTest {
    public Clause[] testSentence() {
        return new Clause[] {
            new StringLiteral("Height: "),
            new DoubleLiteral("height"),
            new NewLine(),
            new StringLiteral("Weight: "),
            new DoubleLiteral("weight"),
            new NewLine(),
            new StringLiteral("BMI: "),
            new DoubleLiteral("bmi"),
        };
    }

    public void runMain() {
        BMICheck.main(new String[0]);
    }

    @Test
    public void bmiCalculatedCorrectly(){
        double height = 1.75;
        double weight = 70;
        double bmi = weight / (height * height);
        double outputBMI = Double.parseDouble(getItemByName("bmi"))
        assertEquals(outputBMI, bmi, "Your BMI has not been calculated correctly.");
    }
}
```

### Questions requiring input from the user

These questions require Scanner input from the user and use the inputted values to calculate/print the correct output.

#### Why is it hard to test this?

Not only do these questions require output format checking, but they also require input values, where the output values calculated might change depending on the input values. This is why multiple cases need to be tested, which is extremely tedious and redundant when working with Vanilla JUnit 5. With the framework, this is no longer necessary, and we can re-run the same test multiple times with different input values.

#### How do I test this?

- **Test Class**: Create a class that extends the `BaseTest` class.
- **Test Sentence**: Create the [`testSentence()`](./writing-tests.md#testsentence) method with the output format as an array of [`Clause`](./clauses/clauses.md) objects.
- **Setup Test Options**: For any test that takes in input, the test writer must specify two values available in the [`TestOption`](./input-tests/test-option.md) class. These options also include setting the default input.
- **Call Main**: Call the main method of the test class by implementing the [`runMain()`](./writing-tests.md#runmain) method.
- **Set up input cases**: Write input providers that are a stream of input values used to run the code with multiple input. Refer to [Parameterized Testing](./input-tests/parameterized-testing.md) for more information.
- **Retrieve Values**: Retrieve output values based on the format. See [Retrieving Values](./retrieving-values.md) for more information.
- **Additional Tests**: Depending on the question, you may need to create additional tests to ensure values are calculated correctly.

#### Example

Refer to [Sample Input Test](./input-tests/full-example.md#sample-input-test) for an example of how to write an input test.

### Conditional Questions

These questions usually require Scanner input from the user and use the inputted values to conditionally change the output printed.

#### Why is it hard to test this?

These types of questions not only require input values but also change the output based on the input, so multiple cases and multiple input values need to be handled.
#### How do I test this?

- **Test Class**: Create a class that extends the `BaseTest` class.
- **Test Sentence**: Create the [`testSentence()`](./writing-tests.md#testsentence) method with the output format as an array of [`Clause`](./clauses/clauses.md) objects.
- **Setup Test Options**: For any test that takes in input, the test writer must specify two values available in the [`TestOption`](./input-tests/test-option.md) class. These options also include setting the default input.
- **Call Main**: Call the main method of the test class by implementing the [`runMain()`](./writing-tests.md#runmain) method.
- **Set up input cases**: Write input providers that are a stream of input values used to run the code with multiple input. Refer to [Parameterized Testing](./input-tests/parameterized-testing.md) for more information. Make an input provider for each case.
- **Inject Clauses**: Since the output changes, the test sentence needs to be modified. Add `PlaceHolder` clauses to the test sentence that will be replaced with the correct output based on the input case. See [Clause Injection](./input-tests/clause-injection.md) for more information.
- **Retrieve Values**: Retrieve output values based on the format. See [Retrieving Values](./retrieving-values.md) for more information.
- **Additional Tests**: Depending on the question, you may need to create additional tests to ensure values are calculated correctly.

#### Example

Refer to [Sample Input Test with Injections](./input-tests/full-example.md#sample-test-with-clause-injection) for an example of how to write a test with conditionals.

### `Random` Questions

These questions involve random values and require the use of the `Random` class or `Math.random()` method in Java.

#### Why is it hard to test this?

These types of questions usually have varying output and the output depends on the random values generated. This means that both output format and randomness of the values need to be tested.

#### How do I test this?

- **Test Class**: Create a class that extends the **`BaseRandomTest` class**.
- **Test Sentence**: Create the [`testSentence()`](./writing-tests.md#testsentence) method with the output format as an array of [`Clause`](./clauses/clauses.md) objects, including random clauses where necessary with the appropriate limits and names.
- **Call Main**: Call the main method of the test class by implementing the [`runMain()`](./writing-tests.md#runmain) method.
- **Retrieve Values**: Retrieve output values based on the format. See [Retrieving Values](./retrieving-values.md) for more information.
- **Additional Tests**: Depending on the question, you may need to create additional tests to ensure values are calculated correctly.

Once you extend the `BaseRandomTest` class, the framework automatically looks for Random clauses in the test sentence and checks whether each clause is within the specified range, and whether the clause is randomly generated. It does this by running the program multiple times and evaluating the distribution of random values in the output.

#### Example

##### Question

Make a program that calculates and prints the body mass index (BMI) of a person given their weight in kilograms and height in metres. The formula for BMI is `BMI = weigth/(height * height)`. In the same program, set the height to a random value between 1.0 and 2.5 and the weight to a random value between 65 and 105.

Sample Output:

```
Height: 1.75
Weight: 70.0
BMI: 24.9
```

Answer:

```java
public class BMICheck {
    public static void main(String[] args) {
        double height = (Math.random() * 2.5) + 1.0;
        double weight = (Math.random() * (40)) + 65;
        double bmi = weight / (height * height);
        System.out.println("Height: " + height);
        System.out.println("Weight: " + weight);
        System.out.println("BMI: " + bmi);
    }
}
```

- **What to test**: Output follows the correct format. Random Values are generated and used to calculate the BMI properly.
- **Common mistakes**: Not setting the variables correctly, and having the wrong data types. Not generating random values correctly in the specified range.
- **How the student could cheat the system**: The student might cheat the system by simply printing the sample output to the console, thereby bypassing the need for random value generation.

##### Test Class

```java
public class BMICheckTest extends BaseRandomTest {
    public Clause[] testSentence() {
        return new Clause[] {
            new StringLiteral("Height: "),
            new RandomDouble(1.5, 2.5, "height"),
            new NewLine(),
            new StringLiteral("Weight: "),
            new RandomDouble(65, 105, "weight"),
            new NewLine(),
            new StringLiteral("BMI: "),
            new DoubleLiteral("bmi"),
        };
    }

    public void runMain() {
        BMICheck.main(new String[0]);
    }

    @Test
    public void bmiCalculatedCorrectly(){
        double height = Double.parseDouble(getItemByName("height"));
        double weight = Double.parseDouble(getItemByName("weight"));
        double bmi = weight / (height * height);
        double outputBMI = Double.parseDouble(getItemByName("bmi"))
        assertEquals(outputBMI, bmi, "Your BMI has not been calculated correctly.");
    }
}
```

### Class/Object Oriented Programming Questions

These questions involve creating specific classes with properties mentioned in the question. While they can have output, they usually just have the student write the class definition.
#### Why is it hard to test this?

Usually when we create objects in Java, we have to assume certain properties exist in the class. In the context of a student answer, we cannot assume that their answer has any of the proper properties defined correctly, so one naiive approach is to create objects and assume methods/properties already exist, then if our program encounters exceptions, we know that the student has not implemented the methods correctly. This is not very efficient, and relying on triggerring exceptions is not optimal, so the framework provides utilities that will check whether methods/properties exist and return boolean values instead of throwing exceptions.

#### How do I test this?

- **Test Class**: The test class does not need to extend any class unless there is output/input involved. Do note that to use any of the methods mentioned below, the test class should inport `global.utils.ClassUtil`. For more information on the available methods see [ClassUtil](./class-util.md).
- **Tests**: Using the methods from `ClassUtil`, you can write tests that check whether the class has the correct methods and properties.

#### Example

##### Question

 Write a class called Bubble with the following properties:

- 3 private integer variables called radius, x, and y
- A parameterized constructor that takes in one integer variable for the radius, and sets the radius to that value.
x and y should be set to 0.
- Another parameterized constructor that takes two integer values for x and y and sets them accordingly. The radius
should be initialized to 1.
- Another parameterized constructor that takes in 3 integers for the radius, x and y
- Getters and setters for all 3 values
- A method called `getArea()` that returns the area of the circle

Answer:

```java
public class Bubble {
    private int radius;
    private int x;
    private int y;

    public Bubble(int radius) {
        this.radius = radius;
        this.x = 0;
        this.y = 0;
    }

    public Bubble(int x, int y) {
        this.radius = 1;
        this.x = x;
        this.y = y;
    }

    public Bubble(int radius, int x, int y) {
        this.radius = radius;
        this.x = x;
        this.y = y;
    }

    public int getRadius() {
        return radius;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public void setRadius(int radius) {
        this.radius = radius;
    }

    public void setX(int x) {
        this.x = x;
    }

    public void setY(int y) {
        this.y = y;
    }

    public double getArea() {
        return Math.PI * radius * radius;
    }
}
```

- **What to test**: Whether the correct variables and methods are defined.
- **Common mistakes**: Not setting the variables correctly. Not setting default values in constructors. Not calculating area correctly.
- **How the student could cheat the system**: The student could make minimal constructors and omit some methods if they know which methods are being tested, so it is important to test the whole class.

##### Test Class

```java
mport global.utils.ClassUtil;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

public class BubbleTest {
    @Test
    public void testBubbleAttr() {
        assertTrue(ClassUtil.classHasAttribute(Bubble.class, "private int radius"), "Bubble class should have a radius attribute");
    }

    @Test
    public void testBubbleMethods() {
        assertTrue(ClassUtil.classHasMethods(Bubble.class, "public double getArea()", "public void setRadius(int)"), "Bubble class should have a getArea method");
    }

    @Test
    public void testBubbleConstructors() {
        assertTrue(ClassUtil.classHasConstructor(Bubble.class, "Bubble(int,int)"), "Bubble class should have a two parameter constructor");
    }

    // Other tests as necessary
}
```
