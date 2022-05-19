# `ClassUtil`

This class contains utility methods for working with classes and testing Object Oriented Programming questions.

## Methods Available

### `classHasAttribute(Class<?> testClass, String attribute)`

Checks whether the passed attribute is defined in `testClass`. Returns `true` if the attribute is defined, `false` otherwise.

Usage:
for the class:

```java
public class Bubble {
    private int x;
}
```

```java
classHasAttribute(Bubble.class, "private int x"); // returns true
classHasAttribute(Bubble.class, "private int y"); // returns false
```

### `classHasAttributes(Class<?> testClass, String... attributes)`

Checks whether all of the passed attributes are defined in `testClass`. Returns `true` if **ALL** of the attributes are defined, `false` otherwise.

Usage:
for the class:

```java
public class Bubble {
    private int x;
    private int y;
}
```

```java
classHasAttributes(Bubble.class, "private int x", "private int y"); // returns true
classHasAttributes(Bubble.class, "private int x"); // returns false
```

### `classHasMethod(Class<?> testClass, String method)`

Checks whether the passed method is defined in `testClass`. Returns `true` if the method is defined, `false` otherwise.

Usage:
for the class:

```java
public class Bubble {
    private int x;

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }
}
```

```java
classHasMethod(Bubble.class, "public int getX()"); // returns true
classHasMethod(Bubble.class, "public int setX(int)"); // returns true
classHasMethod(Bubble.class, "public int getY()"); // returns false
```

:::caution Method Signatures
When you write method signatures to compare with the class, you shopuld omit parameter names. So a method with the signature `public int setXY(int x, int y)` should be written as `public int setXY(int, int)`. The signature is **CASE SENSITIVE**.
:::

### `classHasMethods(Class<?> testClass, String... methods)`

Checks whether all of the passed methods are defined in `testClass`. Returns `true` if **ALL** of the methods are defined, `false` otherwise.

Usage:
for the class:

```java
public class Bubble {
    private int x;
    private int y;

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }
}
```

```java
classHasMethods(Bubble.class, "public int getX()", "public void setX(int)"); // returns true
classHasMethods(Bubble.class, "private int getY()"); // returns false
```

### `classHasConstructor(Class<?> testClass, String constructor)`

Checks whether the passed constructor is defined in `testClass`. Returns `true` if the constructor is defined, `false` otherwise.

Usage:
for the class:

```java
public class Bubble {
    private int x;

    public Bubble(int x) {
        this.x = x;
    }
}
```

```java
classHasConstructor(Bubble.class, "public Bubble(int)"); // returns true
classHasConstructor(Bubble.class, "public Bubble()"); // returns false
```

:::info Constructor Signatures
Constructor signatures follow the same pattern as shown in the `classHasMethod` method above.
:::

### `classHasConstructors(Class<?> testClass, String... constructors)`

Checks whether all of the passed constructors are defined in `testClass`. Returns `true` if **ALL** of the constructors are defined, `false` otherwise.

Usage:
for the class:

```java
public class Bubble {
    private int x;
    private int y;

    public Bubble(int x) {
        this.x = x;
        this.y = 0
    }

    public Bubble(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
```

```java
classHasMethods(Bubble.class, "public Bubble(int)", "public Bubble(int, int)"); // returns true
classHasMethods(Bubble.class, "public Bubble()"); // returns false
```
