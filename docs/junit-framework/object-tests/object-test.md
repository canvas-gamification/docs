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
matters, so the parameter `{int.class, String.class}` is not the same as `{String.class, int.class}`, as these would be
different constructors.

### `public boolean hasConstructor(Class<?>[] argsClass, String[] modifiers)`

* Checks if `objectClass` has a constructor where the parameter classes are the classes in `argsClass`, and checks that
the constructor has the correct modifiers. For example, the calling the methods with the arguments 
`{int.class, String.class}, {"public"}`, checks that the object has a public constructor with the parameters of int and 
String.

### `public Object createInstance(Object[][] arguments) throws Throwable`

* Creates an instance of the `objectClass` class using the parameters in the `arguments` array. where the `arguments` 
array is a 2D array where each inner array has the form `{parameterValue, paramaterType}`. `createInstance` tries to
match the parameter types to a constructor, and if a match is found, it calls the constructor with the parameter values.
If no match is found, the method fails the test stating that a required constructor could not be found.
* Throws any underlying errors in the constructor it tries to call, or an error if the constructor is not callable.

### `public Object createInstance() throws Throwable`

* Creates an instance of the `objectClass` class using the default constructor
* Throws any underlying errors as a result of calling the default constructor, and an error if the default constructor
cannot be called.

### `public boolean hasField(String fieldName, Class<?> fieldClass)`

* Checks if the `objectClass` class has a field with the name `fieldName` and class `fieldClass`. Returns true if a
match is found and false if not.

### `public boolean hasField(String fieldName, Class<?> fieldClass, String[] modifiers)`

* Checks if the `objectClass` class has a field with the name `fieldName`, class `fieldClass`, and all of the modifiers
in the `modifiers` array. It returns true is a match is found, and false if not.
* For example, calling `hasField(name, String.class, new String[]{"public", "static"})` would
return true if `objectClass` has the field `public static String name`.

### `public boolean hasMethod(String methodName, Class<?>[] argsClass, Class<?> methodReturnType)`

* Checks if the `objectClass` class has a method with the name `methodName`, the parameters specified in `argsClass`,
and the return type of `methodReturnType`. If there is a match, it returns true, and false if not. 
* For example, `hasMethod` would return true if `hasMethod("add", new Class[]{int.class, int.class}, int.class)` was
called and `objectClass` contains the method `int add(int x, int y)`.

### `public boolean hasMethod(String methodName, Class<?>[] argsClass, Class<?> methodReturnType, String[] modifiers)`

* Checks if the `objectClass` class has a method with the name `methodName`, the parameters specified in `argsClass`,
the return type of `methodReturnType`, and all the modifiers in the `modifiers` array. If there is a match, it returns 
true, and false if not.
* For example, `hasMethod` would return true if `hasMethod("add", new Class[]{int.class, int.class}, int.class, new String[]{"public", "static"})` was
called and `objectClass` contains the method `public static int add(int x, int y)`.

### `public boolean hasModifier(Field field, String modifier)`

* Checks if `field` has the modifier passed in the `modifier` parameter. If it does, it returns true, and if not it 
returns false. 

### `public boolean hasModifier(String fieldName, String modifier)`

* Checks if the field called `fieldName` has the modifier `modifier`. Note that the method first checks if the field
exists in the `objectClass` class, and then if the field has the correct modifier. If the field has the modifier, it
returns true, and false if not. 

### `public boolean hasModifier(Class<?>[] argsClass, String modifier)`

* Checks if the `objectClass` constructor matching the passed `argsClass` array has the modifier `modifier`. Note that
the method first checks if there is a constructor which matches the `argsClass` array, and then checks if the
constructor has the correct modifier. If it has the modifier, it returns true, and false if not.

### `public boolean hasModifier(Constructor<?> constructor, String modifier)`

* Checks if the passed `constructor` has the modifier `modifier`. Returns true if it does and false if not.

### `public boolean hasModifier(String modifier)`

* Checks if the `objectClass` class has the modifier `modifier`. The method returns true if it does and false if not.

### `public boolean hasModifier(String methodName, Class<?>[] argsClass, String modifier)`

* Checks if the method called `methodName` in `objectClass` with the parameters `argsClass` has the modifier `modifier`.
The method returns true if it does, and false if it does not. Note that it also returns false if it fails to find a
match for the method.

### `public boolean hasModifier(Method method, String modifier`

* Checks if the method `method` has the modifier `modifier`. Returns true if it does and false if not.

### `public Object getFieldValue(Object testObject, String fieldName)`

* Attempts to find the field `fieldName` in `testObject`. If the field is found, the
value is returned in an Object wrapper. If the field is not found or is inaccessible, the test is failed.  

### `public void setFieldValue(Object testObject, Object value, String fieldName)`

* Attempts to find the field `fieldName` in `testObject`. If successful, it sets the value of the field to `value`.
If the field is not found, the test is failed. Note that the test will fail if the field is of the wrong type. 

### `public Object callMethod(String methodName, Object[][] arguments, String[] modifiers, Object object, Clause[] methodTestSentence, String incorrectMethodStructureErrorMessage) throws Throwable`

* 

### `public Class<?> getObjectClass()`

* Returns the `objectClass` field.

### `public Class<?> getObjectArrayClass()`

* Returns the array class for the `objectClass` class.

### `public Object createArray(int length)`

* Creates an empty array of length `length` of the type `objectClass`.

### `public Object createArray(int length, Object[][][] arguments)`

* Creates an array of length `length` of the type `objectClass`. Each item is initialized using the values in the 
`arguments` array,

### `public Object createArray(int length, Object[][] arguments) throws Throwable`

* Creates an array of length `length` of the type `objectClass`. Each item in the array is created using the 
`objectClass` constructor that matches the specified parameter classes in `arguments`, and initialized to the value in
`arguments`. Note that `agurments` is of the form `{paramaterValue, paramaterClass}`.
