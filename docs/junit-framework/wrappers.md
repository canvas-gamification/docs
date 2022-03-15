---
sidebar_position: 3
---

# Wrappers
Wrappers are containers for clauses that allow for more complex behaviour. Currently, there is only 1:
`Optional`

## Using Wrappers
Wrappers are used while defining test sentences. Here's an example of a test sentence with a wrapper included.
```java
public Clause[] testSentence() {
    return new Clause[]{
        new StringLiteral("This is a random test with retrieval."),
        new NewLine(),
        new Optional(new RandomInteger(0, 10)),
    };
}
```

## Wrappers Documentation
[TODO]

