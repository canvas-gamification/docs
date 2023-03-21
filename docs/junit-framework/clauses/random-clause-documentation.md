# Random Clauses

Random clauses check if a set of outputs is uniformly distributed and can be used both in and out of Test Sentences.

### Random Clauses Outside Test Sentences

Random clauses can be used to check the randomness of a set of input values from anywhere in a test. This is done by
declaring the random clause as you normally
would, but then calling the `validateRandom(ArrayList)`  method receives an `ArrayList` of values of the same type as
the clause, and
executes the random check on this set of values. Note that to use this, the test writer must generate this `ArrayList`,
and it must have **at least** 1000 values to ensure the check is accurate.

Example:

```java
        ArrayList<Integer> randomValues = new ArrayList();
        // Add random values to arrayList to test
        RandomInteger randomInteger = new RandomInteger(0, 100) // Checking for values in range from 0 to 100
        randomInteger.validateRandom(randomValues);
```

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
