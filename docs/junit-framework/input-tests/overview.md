---
sidebar_position: 1
---

# Overview

:::tip
Use this page as a place to get acquainted with the input testing framework.
:::

## [`TestOption`](./test-option)

This class is used to set test options that declare it as a test that will run with inputs.

## [`runWithInput()` and Parameterized Testing](./parameterized-testing)

The `runWithInput()` method is the heartbeat of the input tests and will allow you to run main with various inputs. There are 3 ways to use this function those being:

- With no input (in this case it will run the class using a specified default input)

- With an input from an InputStream (the most likely use case)

- With an input from an InputSteam, as well as injected clauses (used when there are values in the output that depend on the input values)

`runWithInput()` needs to be used within a parameterized test, and should be run within every test method in the test class.

## [Clause Injection](./clause-injection)

This is a feature that is to be used when there are clauses in the output that depend on the input of the program. For example, a program that asks the user for two numbers and then prints the sum will not only need inputs but also the result that depends on the inputs entered. Refer to [this document](./full-example) about how to create a test using Injections for a program that asks the user for input and displays output.
