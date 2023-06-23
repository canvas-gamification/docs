# Custom Assertions

Custom assertions are available for the test writer to provide additional feedback to students and to simplify the amount
of assertions the test writer needs to call. Note that although most assertions can be used in any context, some are
programmed for specific circumstances, such as for use with returned objects from `MethodTest`. 

## Available Assertions

### `public static void _assertTrue(boolean condition, String userMessage, String devMessage)`

- Asserts that the condition passed is true, and if not logs and prints the developer message to the console and prints
the user message to the user

### `public static void _assertEquals(Object expected, Object actual, String userMessage)`

- Asserts that the expected and actual objects have the same underlying type, and if not, prints an error message to the 
user telling them that the expected type was different from the actual type. 
- If they are the same type, it then tests if the objects are equal, and prints the `userMessage` as an error if not.

### `public static void _assertEquals(Object expected, Object actual, double delta, String userMessage)`
- Similar to the one above, this asserts that the two objects are of the same type, but allows a delta value for comparing
double values. As such, this assertion can only be used with double values, and if the expected object is not of type
double, the assertion will fail the test and print that this assertion must be used only with double values. 
- If the values are both of type double, then the test asserts that they are equal within the range of the given delta value.

### `public static void _assertArrayEquals(Object expected, Object actual, String userMessage)`

### `public static void _assertSameTypes(Object expected, Object actual)`

### `public static void _fail(String userMessage, String devMessage)`

### `public static void assertWithinRange(double value, double lower, double upper, String message)`

### `public static void assertWithinRange(int value, int lower, int upper, String message)`