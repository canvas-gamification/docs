---
sidebar_position: 2
---

# Clause Documentation

## Literal Clauses
### `IntegerLiteral`
This clause is intended to be used when there is an integer that is part of the program's output that you want to separate from the rest of the sentence.

**Constructor:**

```java
public IntegerLiteral(int value, [String name]) {
    ...
}
```

**Parameters:**

| Name | Type | Description
| :--- | --- | --- |
| `value` | `int` | The integer that needs to be matched in the final sentence|
| `name` (optional) | `String` | Name that can be used to retrieve the value during testing|

**Usage:**

```java
public Clause[] testSentence() {
    return new Clause[]{
        new IntegerLiteral(42),
        new IntegerLiteral(365, "second number")  // with name
    };
}
```

### `StringLiteral`
This clause is intended to be used when there is a constant section of text that is part of the program's output that you want to separate from the rest of the sentence.

**Constructor:**
```java
public StringLiteral(String text, [String name]) {
    ...
}
```
**Parameters:**

| Name | Type | Description
| :--- | --- | --- |
| `text` | `String` | The case-sensitive regex text that needs to be matched in the final sentence|
| `name` (optional) | `String` | Name that can be used to retrieve the value during testing|

**Usage:**

```java
public Clause[] testSentence() {
    return new Clause[]{
        new StringLiteral("This is a simple test."),
        new StringLiteral("This is a simple test.", "exampleText")  // with name
    };
}
```

## Random Clauses
### `RandomInteger`
This clause is used in instances where an integer's value is determined randomly. Used with `BaseRandomTest`, the
randomness of this value and its range will be automatically tested.

**Constructor:**
```java
public RandomInteger(int lower, int upper, [String name]) {
    ...
}
```
**Parameters:**

| Name | Type | Description
| :--- | --- | --- |
| `lower` | `int` | The lower bound (inclusive) of values that this random integer can equal|
| `upper` | `int` | The lower bound (exclusive) of values that this random integer can equal|
| `name` (optional) | `String` | Name that can be used to retrieve the value during testing|

**Usage:**

```java
public Clause[] testSentence() {
    return new Clause[]{
        new RandomInteger(1, 5),  // a random integer that could equal 1, 2, 3, or 4
        new RandomInteger(25, 75, "random integer")  // another example using the name parameter
    };
}
```

## Utility Clauses
### `NewLine`
This clause simply allows you to specify new lines in the tested program's expected output.

**Constructor:**
```java
public NewLine([String name]) {
    ...
}
```
**Parameters:**

| Name | Type | Description
| :--- | --- | --- |
| `name` (optional) | `String` | Name that can be used to retrieve the value during testing|

> While the optional `name` parameter is supported, it is largely irrelevant for this utility class.

**Usage:**

```java
public Clause[] testSentence() {
    return new Clause[]{
        new StringLiteral("Foo"),
        new NewLine(),
        new StringLiteral("Bar"),
    };
}
```
