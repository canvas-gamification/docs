---
sidebar_position: 2
---

# Test Classes
The tests you write will need to be contained within a test class. Using our framework will require you to extend one of our built-in test classes. Currently, that means extending either `BaseTest` or `BaseRandomTest`.

## BaseTest
This is used for all tests.

What it tests:
1. That the output of the program matches the structure defined by the "Test Sentence".

## BaseRandomTest
This is used when your test contains random clauses (i.e. `RandomInteger`).
> Note: `BaseRandomTest` extends `BaseTest` so all functionality from `BaseTest` remains even if you use `BaseRandomTest`.

What it tests:
1. Everything that `BaseTest` does.
2. That random values in the output behave randomly within their boundaries (i.e. Check that a `RandomInteger(1, 10)` is actually random and not just hardcoded).
3. That random values in the output are always within their set ranges (i.e. Check that a `RandomInteger(1, 10)` is within the range `[1-10)`).

## Setting up a test class
Regardless of which test class you extended, there are 2 methods you absolutely *must* specify. Your IDE should warn you if you forget, though. These 2 mandatory methods are:
`public Clause[] testSentence()` and `public void runMain()`

### testSentence()
This should return an array of `Clause` objects specifying the structure of the output the program should create.
Example:
```java
public Clause[] testSentence() {
    return new Clause[]{
        new StringLiteral("This is a random test with retrieval."),
        new NewLine(),
        new RandomInteger(5, 10, "important number"),
    };
}
```

### runMain()
This method should simply call and run the main method of the class you are intending to test. For example, let's say we want to test the output of a class called `Example`:
```java
public void runMain() {
    Example.main(new String[0]);
}
```

