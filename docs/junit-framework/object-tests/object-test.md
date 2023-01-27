# Object Test

This class can be used to instantiate a class written by a student without calling the class directly. This is
advantageous to avoid compilation errors if the student misnames or does not code the class, is missing a method, etc.
through the use of the Java reflections API. Features include calling any constructors, methods and fields in the class, 
testing their modifiers, fetching any field values, and more.

## Attributes

### `private Class<?> objectClass`

* This is the class which you are currently testing.

## Constructors

### `public ObjectTest(String objectClass)`

* The constructor for this method takes the String of the class name, and uses Java reflections to find the class
associated with that class name. Note that the class name is dependent on the package, so if you are trying to find a
class called "House" in the package "test.object", the String would be "test.object.House".

## Methods

###  `public boolean hasSuperclass(Class<?> superClass)`

* Checks if the `objectClass` class is a subclass of the `superClass` class. If it is, the method returns true, and if
not returns false.

###  `public boolean implementsInterface(Class<?> interfaceClass)`

* Checks if `objectClass` implements the interface `interfaceClass` and returns true if it does, and false if not.

### `public boolean implementsInterfaces(Class<?>[] interfaces)`

* Checks if `objectClass` implements every interface in `interfaces`, and returns true if it does, and false id not.

### `public boolean hasConstructor(Class<?>[] argsClass)`

* Checks if `objectClass` has a constructor where the parameter classes are the classes in `argsClass`. Note that order
matters, so the parameter `{int.class, String.class}` is not the same as `{String.class, int.class}`, as these could be
different constructors.

### `public boolean hasConstructor(Class<?>[] argsClass, String[] modifiers)`

### `public Object createInstance(Object[][] arguments) throws Throwable`

### `public Object createInstance() throws Throwable`

### `public boolean hasField(String fieldName, Class<?> fieldClass)`

### `public boolean hasField(String fieldName, Class<?> fieldClass, String[] modifiers)`

### `public boolean hasMethod(String methodName, Class<?>[] argsClass, Class<?> methodReturnType)`

### `public boolean hasMethod(String methodName, Class<?>[] argsClass, Class<?> methodReturnType, String[] modifiers)`

### `public boolean hasModifier(Field field, String modifier)`

### `public boolean hasModifier(String fieldName, String modifier)`

### `public boolean hasModifier(Class<?>[] argsClass, String modifier)`

### `public boolean hasModifier(Constructor<?> constructor, String modifier)`

### `public boolean hasModifier(String modifier)`

### `public boolean hasModifier(String methodName, Class<?>[] argsClass, String modifier)`

### `public boolean hasModifier(Method method, String modifier`

### `public Object getFieldValue(Object testObject, String fieldName)`

### `public void setFieldValue(Object testObject, Object value, String fieldName)`

### `public Object callMethod(String methodName, Object[][] arguments, String[] modifiers, Object object, Clause[] methodTestSentence, String incorrectMethodStructureErrorMessage) throws Throwable`

### `public Class<?> getObjectClass()`

### `public Class<?> getObjectArrayClass()`

### `public Object createArray(int length)`

### `public Object createArray(int length, Object[][][] arguments)`
