---
sidebar_position: 2
---

# Clause Documentation

## Literal Clauses

### `IntegerLiteral`

This clause is intended to be used when there is an integer that is part of the program's output that you want to
separate from the rest of the sentence.

**Constructor:**

```java
public IntegerLiteral(int value, [String name]) {
    ...
}
```

**Parameters:**

| Name              | Type     | Description                                                |
|:------------------|----------|------------------------------------------------------------|
| `value`           | `int`    | The integer that needs to be matched in the final sentence |
| `name` (optional) | `String` | Name that can be used to retrieve the value during testing |

**Usage:**

```java
public Clause[] testSentence() {
    return new Clause[]{
        new IntegerLiteral(42),
        new IntegerLiteral(365, "second number")  // with name
    };
}
```

### `DoubleLiteral`

This clause is intended to be used when there is a double/float that is part of the program's output that you want to
separate from the rest of the sentence.

**Constructor:**

```java
public DoubleLiteral(double lower, double upper, [String name]) {
    ...
}
```

**Parameters:**

| Name              | Type     | Description                                                            |
|:------------------|----------|------------------------------------------------------------------------|
| `lower`           | `double` | The lower bound (inclusive) of values that this double value can equal |
| `upper`           | `double` | The upper bound (exclusive) of values that this double value can equal |
| `name` (optional) | `String` | Name that can be used to retrieve the value during testing             |

**Usage:**

```java
public Clause[] testSentence() {
    return new Clause[]{
        new DoubleLiteral("first double"), // matches any double
        new DoubleLiteral(1, 10, "second double")  // matches within range [1, 10)
    };
}
```

### `StringLiteral`

This clause is intended to be used when there is a constant section of text that is part of the program's output that
you want to separate from the rest of the sentence.

**Constructor:**

```java
public StringLiteral(String text, [String name]) {
    ...
}
```

**Parameters:**

| Name              | Type     | Description                                                                  |
|:------------------|----------|------------------------------------------------------------------------------|
| `text`            | `String` | The case-sensitive regex text that needs to be matched in the final sentence |
| `name` (optional) | `String` | Name that can be used to retrieve the value during testing                   |

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

| Name              | Type     | Description                                                              |
|:------------------|----------|--------------------------------------------------------------------------|
| `lower`           | `int`    | The lower bound (inclusive) of values that this random integer can equal |
| `upper`           | `int`    | The upper bound (exclusive) of values that this random integer can equal |
| `name` (optional) | `String` | Name that can be used to retrieve the value during testing               |

**Usage:**

```java
public Clause[] testSentence() {
    return new Clause[]{
        new RandomInteger(1, 5),  // a random integer that could equal 1, 2, 3, or 4
        new RandomInteger(25, 75, "random integer")  // another example using the name parameter
    };
}
```

### `RandomChar`

This clause is used in instances where a character's value is determined randomly. Used with `BaseRandomTest`, the
randomness of this value and its range will be automatically tested.

**Constructor:**

```java
public RandomChar(char lower, char upper, [String name], [boolean inclusiveUpper]) {
    ...
}
```

**Parameters:**

| Name              | Type      | Description                                                                                   |
|:------------------|-----------|-----------------------------------------------------------------------------------------------|
| `lower`           | `char`    | The lower bound (inclusive) of values that this random character can equal                    |
| `upper`           | `char`    | The  upper (exclusive) of values that this random character can equal                         |
| `name` (optional) | `String`  | Name that can be used to retrieve the value during testing                                    |
| `inclusiveUpper`  | `boolean` | Specifies if the upper bound should be included in the values this random character can equal |

**Usage:**

```java
public Clause[] testSentence() {
    return new Clause[]{
        new RandomChar('a', 'z'),  // a random character that could equal anything between 'a'(inclusive) and 'z'(exclusive)
        new RandomChar('A', 'Z', "random char")  // another example using the name parameter
    };
}
```

### `RandomDouble`

This clause is used in instances where a double/float's value is determined randomly. Used with `BaseRandomTest`, the
randomness of this value and its range will be automatically tested.

**Constructor:**

```java
public RandomDouble(double lower, double upper, [int precision], [String name]) {
    ...
}
```

**Parameters:**

| Name                                      | Type     | Description                                                             |
|:------------------------------------------|----------|-------------------------------------------------------------------------|
| `lower`                                   | `double` | The lower bound (inclusive) of values that this random double can equal |
| `upper`                                   | `double` | The upper bound (exclusive) of values that this random double can equal |
| `precision` (optional) [WORK-IN-PROGRESS] | `int`    | The number of decimal places that this random double should have        |
| `name` (optional)                         | `String` | Name that can be used to retrieve the value during testing              |

**Usage:**

```java
public Clause[] testSentence() {
    return new Clause[]{
        new RandomDouble(11.9, 23.6),  // a random double that could equal anything between 11.9(inclusive) and 23.6(exclusive)
        new RandomDouble(25, 899.9, "random double")  // another example using the name parameter
    };
}
```

### `RandomBoolean`

This clause is used in instances where a binary value (true/false, 'O'/'X', 0/1, etc.) is determined randomly. Used
with `BaseRandomTest`, this checks if both items appear equally.

**Constructor:**

```java
public RandomBoolean([String output1], [String output2], [String name]) {
    ...
}
```

**Parameters:**

| Name                 | Type     | Description                                                                                  |
|:---------------------|----------|----------------------------------------------------------------------------------------------|
| `output1` (optional) | `String` | The first binary value which the output may equal. This defaults to true if not specified.   |
| `output2` (optional) | `String` | The second binary value which the output may equal. This defaults to false if not specified. |
| `name` (optional)    | `String` | Name that can be used to retrieve the value during testing                                   |

**Usage:**

```java
public Clause[] testSentence() {
    return new Clause[]{
        new RandomBoolean(),  // a random boolean that equals either true or false
        new RandomDouble("O", "X")  // a random boolean that equals either "O" or "X"
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

| Name              | Type     | Description                                                |
|:------------------|----------|------------------------------------------------------------|
| `name` (optional) | `String` | Name that can be used to retrieve the value during testing |

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

### `PlaceHolder`

A special clause that can have clause(s) "injected" in it's place. `PlaceHolder` is the primary way to use injections in
the tested program.

**Constructor:**

```java
public PlaceHolder() {
    ...
}
```

**Parameters:**

| Name | Type | Description |
|:-----|------|-------------|
| N/A  | N/A  | N/A         |

**Usage:**

For a detailed description of how to use this clause, see the [injection guide](../input-tests/clause-injection.md).

```java
public Clause[] testSentence() {
    return new Clause[]{
        new StringLiteral("Foo"),
        new PlaceHolder(),  //an example of where the placeholder would go
        new StringLiteral("Bar"),
    };
}
```
