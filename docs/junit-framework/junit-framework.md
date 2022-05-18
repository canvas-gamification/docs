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

#### Why is it hard to test this?

#### Objective

#### How do I test this?

- Framework constructs that can help with this (links to implementation further reading)

#### Example

##### Question

- What to test
- Common mistakes
- How the student could cheat the system

##### Test Class

### Questions requiring input from the user

### `Random` Questions

### Conditional Questions

### Class/Object Oriented Programming Questions

- for implementation docs on how the framework was written and how to extend it.
