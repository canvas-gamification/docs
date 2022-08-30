# ArrayUtil

This class contains methods for manipulating and creating arrays used in testing array questions.

## Methods Available

### `public static int[] generateRandomArray(int lower, int upper, int length)`

This method returns an array of random integers with values from `lower` (inclusive) to `upper` (exclusive), with the
array length equal to the `length` parameter.

### `public static double[] generateRandomArray(double lower, double upper, int length)`

This method returns an array of random doubles with values from `lower` (inclusive) to `upper` (exclusive), with the
array length equal to the `length` parameter.

### `public static char[] generateRandomArray(char lower, char upper, int length)`

This method returns an array of random characters with values from `lower` (inclusive) to `upper` (exclusive), with the
array length equal to the `length` parameter.

### `public static String[] generateRandomWordArray(int length)`

This method returns an array of Strings consisting of individual words pulled randomly from a word bank, with the array
length equal to the `length` parameter.

### `public static int sum(int[] arr)`

This method returns the sum of the integers in the array.

### `public static double sum(double[] arr)`

This method returns the sum of the doubles in the array.

### `public static int sum(char[] arr)`

This method returns the integer sum of the ASCII values of the characters in the array.

### `public static String arrayToInput(int[] arr)`

This method converts the input integer array to the String format required for use as scanner input with
`runWithInput()` and `TestOption.defaultInput`.

Example:
`int[] arr = new int[]{1, 2, 3, 4, 5}` becomes the string `"1 2 3 4 5 "`.

### `public static String arrayToInput(double[] arr)`

This method converts the input double array to the String format required for use as scanner input with
`runWithInput()` and `TestOption.defaultInput`.

Example:
`double[] arr = new double[]{12.5, -2.987, 3.0, 4.3, 5.44}` becomes the string `"12.5 -2.987 3.0 4.3 5.44 "`.

### `public static String arrayToInput(char[] arr)`

This method converts the input character array to the String format required for use as scanner input with
`runWithInput()` and `TestOption.defaultInput`.

Example:
`char[] arr = new chat[]{'A', 'B', 'C'}` becomes the string `"A B C "`.

### `public static String arrayToInput(String[] arr)`

This method converts the input String array to the String format required for use as scanner input with
`runWithInput()` and `TestOption.defaultInput`.

Example:
`String[] arr = new String[]{"Hello", "World"}` becomes the string `"Hello World "`.

### `public static int[] increment(int[] arr, int increment)`

This method increments all the values in the integer array by the increment value passed to the method.

### `public static double[] increment(double[] arr, double increment)`

This method increments all the values in the double array by the increment value passed to the method.

### `public static char[] increment(char[] arr, int increment)`

This method increments all the values in the character array by the increment value passed to the method.

### ` public static int[] generateAscendingArray(int start, int length)`

This method returns an integer array of the specified length where the value at index zero is the start parameter, and
each subsequent index is the value in the previous index plus one.

Example: `generateAscendingArray(10, 5)` returns the array `{10, 11, 12, 13, 14}`

### `public static int[] generateAscendingArray(int start, int length, int step)`

This method returns an integer array of the specified length where the value at index zero is the start parameter, and
each subsequent index is the value in the previous index plus the step parameter.

Example: `generateAscendingArray(10, 5, 3)` returns the array `{10, 13, 16, 19, 22}`

### `public static double[] generateAscendingArray(double start, int length)`

This method returns a double array of the specified length where the value at index zero is the start parameter, and
each subsequent index is the value in the previous index plus one.

Example: `generateAscendingArray(6.7, 5)` returns the array `{6.7, 7.7, 8.7, 9.7, 10.7}`

### `generateAscendingArray(double start, int length, double step)`

This method returns a double array of the specified length where the value at index zero is the start parameter, and
each subsequent index is the value in the previous index plus the step parameter.

Example: `generateAscendingArray(6.7, 0.3)` returns the array `{6.7, 7.0, 7.3, 7.6, 7.9}`

### `public static char[] generateAscendingArray(char start, int length)`

This method returns a char array of the specified length where the value at index zero is the start parameter, and each
subsequent index is the value in the previous index plus one (the next character).

Example: `generateAscendingArray('A', 5)` returns the array `{'A', 'B', 'C', 'D', 'E'}`

### `char[] generateAscendingArray(char start, int length, int step)`

This method returns a char array of the specified length where the value at index zero is the start parameter, and each
subsequent index is the value in the previous index plus the step parameter (x characters after the current one).

Example: `generateAscendingArray('A', 5, 3)` returns the array `{'A', 'D', 'G', 'J', 'M'}`

### `public static int[] multiply(int[] arr, int multiply)`

This method takes an integer array, and returns the array with all the variables multiplied by the `multiply` parameter.

Example: `multiply(new int[]{1, 2, 3, 4, 5}, 4)` returns the array `{4, 8, 12, 16, 20}`

### `public static double[] multiply(double[] arr, double multiply`

This method takes a double array, and returns the array with all the variables multiplied by the `multiply` parameter.

Example: `multiply(new double[]{1.2, 2.4, 3.9, 4.3, 5.6}, 2.0)` returns the array `{2.4, 4.8, 7.8, 8.6, 11.2}`

### `public static int[] replicateArray(int number, int length)`

This method returns an integer array of the specified length where every item equals the `number` parameter.

Example: `replicateArray(4, 3)` returns the array `{4, 4, 4}`

### `public static double[] replicateArray(double number, int length)`

This method returns a double array of the specified length where every item equals the `number` parameter.

Example: `replicateArray(2.91, 5)` returns the array `{2.91, 2.91, 2.91, 2.91, 2.91}`

### `public static char[] replicateArray(char character, int length)`

This method returns a char array of the specified length where every item equals the `character` parameter.

Example: `replicateArray('S', 7)` returns the array `{'S', 'S', 'S', 'S', 'S', 'S', 'S'}`

### `public static int[] merge(int[] firstArray, int[] secondArray)`

This method returns a new integer array equal to the first array merged with the second array. Note that the values of the 
first array are placed before the values of the second array. 

Example: `merge(new int[]{1, 2, 3}, new int[]{4, 5, 6})` returns the array `{1, 2, 3, 4, 5, 6}`

### `public static double[] merge(double[] firstArray, double[] secondArray)`

This method returns a new double array equal to the first array merged with the second array. Note that the values of the
first array are placed before the values of the second array.

Example: `merge(new int[]{1.1, 1.2, 1.3}, new int[]{1.4, 1.5, 1.6})` returns the array `{1.1, 1.2, 1.3, 1.4, 1.5, 1.6}`

### `public static char[] merge(char[] firstArray, char[] secondArray)`

This method returns a new char array equal to the first array merged with the second array. Note that the values of the
first array are placed before the values of the second array.

Example: `merge(new int[]{'A', 'B'}, new int[]{'C', 'D', 'E', 'F', 'G'})` returns the array `{'A', 'B', 'C', 'D', 'E', 'F', 'G'}`
