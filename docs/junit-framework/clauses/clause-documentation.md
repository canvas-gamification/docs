---
sidebar_position: 2
---

# Basic Clause Documentation

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

A special clause that can have clause(s) "injected" in its place. `PlaceHolder` is the primary way to use injections in
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
