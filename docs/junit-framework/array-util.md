# ArrayUtil

This class contains methods for manipulating and creating arrays used in testing array questions.

## Methods Available

### `public static int[] generateRandomIntArray(int lower, int upper, int length)`

This method returns an array of random integers with values from `lower` (inclusive) to `upper` (exclusive), with 
the array length equal to the `length` parameter. 

### `public static double[] generateRandomDoubleArray(double lower, double upper, int length)`

This method returns an array of random doubles with values from `lower` (inclusive) to `upper` (exclusive), with
the array length equal to the `length` parameter. 

### `public static char[] generateRandomCharArray(char lower, char upper, int length)`

This method returns an array of random characters with values from `lower` (inclusive) to `upper` (exclusive), with the 
array length equal to the `length` parameter.

### `public static String[] generateRandomWordArray(int length)`

This method returns an array of Strings consisting of individual words pulled randomly from a word bank, with the array 
length equal to the length parameter. 

### `public static int sum(int[] arr)`

This method returns the sum of the integers in the array. 

### `public static double sum(double[] arr)`

This method returns the sum of the doubles in the array.

### `public static String intArrayToInput(int[] arr)`

This method converts the input integer array to the format required to be input as individual numbers for use with 
`runWithInput()` and `TestOption.defaultInput`.

Example: 
`int[] arr = new int[]{1, 2, 3, 4, 5}` becomes the string `"1 2 3 4 5 "`.

### `public static String doubleArrayToInput(double[] arr)`

This method converts the input double array to the format required to be input as individual numbers for use with
`runWithInput()` and `TestOption.defaultInput`.

Example:
`double[] arr = new double[]{12.5, -2.987, 3.0, 4.3, 5.44}` becomes the string `"12.5 -2.987 3.0 4.3 5.44 "`.

### `public static String charArrayToInput(char[] arr)`

This method converts the input character array to the format required to be input as individual characters for use with
`runWithInput()` and `TestOption.defaultInput`.

Example:
`char[] arr = new chat[]{'A', 'B', 'C'}` becomes the string `"A B C "`.

### `public static String stringArrayToInput(String[] arr)`

This method converts the input string array to the format required to be input as individual strings for use with
`runWithInput()` and `TestOption.defaultInput`.

Example:
`String[] arr = new String[]{"Hello", "World"}` becomes the string `"Hello World "`.
