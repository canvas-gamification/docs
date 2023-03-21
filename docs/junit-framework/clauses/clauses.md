---
sidebar_position: 1
---

# Intro to Clauses

## What is a Clause?

The core functionality of our framework revolves around the concept of "clauses". Put simply, a clause represents a
segment of the output of a program that you may need to manipulate and test based on.

## Which clauses are available?

`StringLiteral()`
`IntegerLiteral()`
`DoubleLiteral()`
`NewLine()`
`PlaceHolder`

`RandomInteger()`
`RandomDouble()`
`RandomChar()`
`RandomBoolean`

## How do I use clauses?

Clauses are used to define what we will refer to as "Test Sentences". A "Test Sentence" is simply an array of Clauses.
We define this as follows:

> Note: This is only a segment of the total code needed to perform testing.

```java
public Clause[] testSentence() {
    return new Clause[]{
        new StringLiteral("This is a simple test.")
    };
}
```

This example sentence above would test the output of the following program:

```java

public class Example {
    public static void main(String[] args) {
        System.out.println("This is a simple test.");
    }
}
```

## Clause Parameters

Each clause takes parameters in order to let you specify its behaviour during tests. Here are each of the clauses with
links to more information about them specifically.

All clauses allow you to optionally specify a `name` parameter. This helps with retrieving their values later if you
choose to do so.

Here are links to detailed documentation about each Clause:

* Regular Clauses: [Clause Documentation](./clause-documentation.md)
* Random Clauses: [Random Clause Documentation](./random-clause-documentation.md)
