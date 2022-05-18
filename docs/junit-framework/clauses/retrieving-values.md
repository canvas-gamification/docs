---
sidebar_position: 3
---

# Retrieving Values

While writing any additional test functions, you may find the need to retrieve the values of clauses in your test sentence. Our framework provides 2 ways to do this.

:::info
Whenever you retrieve a value from a clause, you will get the value as a string, so you will need to convert it to the type you want manually if you want to use it.
:::

## Retrieve clause value by index

Within your test class, you may call `getItemAtIndex(int index)`. `index` is a 1-indexed value representing the clause's position in the test sentence. `getItemAtIndex()` returns the value of that clause in the test sentence as a string. You'll need to cast it the data type you require.

Example test sentence:

```java
public Clause[] testSentence() {
    return new Clause[]{
        new StringLiteral("This is a random test with retrieval."),
        new NewLine(),
        new RandomInteger(5, 10, "important number"),
    };
}
```

Retrieve by index example:

```java
int randomIntegerValue = Integer.parseInt(getItemAtIndex(3));
```

## Retrieve clause value by name

You may also call `getItemByName(String name)`. This will search the test sentence and return the first clause with the name specified.
> Recall that clauses can be given names to make retrieval easier.

Retrieve by name example: *(using the same example test sentence from above)*

```java
int randomIntegerValue = Integer.parseInt(getItemByName("important number"));
```
