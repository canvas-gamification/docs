# MethodTest Example

## Question File

```java
import java.util.Scanner;

public class MethodClause {
    public static void main(String[] args) {
        System.out.println("This is the main method.");
        int x = 5;
        int y = return15();
        int sum = sum(x, y);
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a double: ");
        double d = input.nextDouble();
        double area = area(d, sum);
        printMessage("The area of the rectangle is: " + area);
    }

    public static int sum(int x, int y){
        /*
            This method calculates the sum of two integers, and prints out both those integers and what the sum is.
            Using method test, the value which is returned and the value which is printed in the output can be tested
            independently of each other and of the main method.
         */
        int sum = x + y;
        System.out.printf("The sum of %d and %d is %d\n", x, y, sum);
        return sum;
    }

    public static double area(double x, double y){
        /*
            This method prints a message and calculates the area of a rectangle. The message and output can be tested
            independently using MethodTest.
         */
        System.out.println("Calculating the area of a rectangle: ");
        return x * y;
    }

    public static void printMessage(String message){
        // This method prints whatever is passed in the String message parameter, and can be tested using MethodTest
        System.out.println(message);
    }

    public static int return15(){
        // This method returns the number 15
        return 15;
    }
}
```
## MainTest File

```java
public class MethodClauseTest extends BaseTest {

    public Clause[] testSentence() {
        TestOption.isInputTest = true;
        TestOption.defaultInput = "5.30";
        return new Clause[]{
                new StringLiteral("This is the main method\\."),
                new NewLine(),
                new StringLiteral("The sum of "),
                new IntegerLiteral("x"),
                new StringLiteral(" and "),
                new IntegerLiteral("y"),
                new StringLiteral(" is "),
                new IntegerLiteral("sum"),
                new NewLine(),
                new StringLiteral("Enter a double: "),
                new NewLine(),
                new StringLiteral("Calculating the area of a rectangle: "),
                new NewLine(),
                new StringLiteral("The area of the rectangle is: "),
                new DoubleLiteral("area")
        };
    }

    public void runMain() {
        MethodClause.main(new String[0]);
    }

    static Stream<Arguments> mainMethodInputProvider() {
        return Stream.of(
                Arguments.of(0.00, 0.00),
                Arguments.of(1.5, 30.0),
                Arguments.of(3.14, 62.8)
        );
    }

    static Stream<Arguments> sumInputProvider() {
        return Stream.of(
                Arguments.of(4, 7, 11),
                Arguments.of(0, 0, 0),
                Arguments.of(-35, 35, 0),
                Arguments.of(497, -221, 276)
        );
    }

    static Stream<Arguments> areaInputProvider() {
        return Stream.of(
                Arguments.of(3.14, 2.84, 8.9176),
                Arguments.of(45.87, 124.92, 5730.0804),
                Arguments.of(4.2958, 0.00, 0.00)
        );
    }

    static Stream<Arguments> printMessageInputProvider() {
        return Stream.of(
                Arguments.of("Hello, how are you doing?", "Hello, how are you doing\\?"),
                Arguments.of("Hello world!", "Hello world!"),
                Arguments.of("[]-*?$", "\\[\\]\\-\\*\\?\\$")
        );
    }

    @ParameterizedTest
    @MethodSource("mainMethodInputProvider")
    public void printsCorrectOutput(double x, double area) {
        runWithInput(String.valueOf(x));
        assertEquals(5, Integer.parseInt(getItemByName("x")),
                "Your program does not correctly print the first number that is being summed.");
        assertEquals(15, Integer.parseInt(getItemByName("y")),
                "Your program does not correctly print the second number that is being summed.");
        assertEquals(20, Integer.parseInt(getItemByName("sum")),
                "Your program does not print the correct sum.");
        assertEquals(area, Double.parseDouble(getItemByName("area")), 0.0001,
                "Your program does not correctly print the area.");
    }

    @ParameterizedTest
    @MethodSource("sumInputProvider")
    public void correctSumMethod(int x, int y, int sum) throws Throwable {
        Clause[] methodSentence = new Clause[]{
                new StringLiteral("The sum of "),
                new IntegerLiteral("x"),
                new StringLiteral(" and "),
                new IntegerLiteral("y"),
                new StringLiteral(" is "),
                new IntegerLiteral("sum"),
                new NewLine()
        };
        Object[][] arguments = {
                {x, int.class},
                {y, int.class}
        };
        MethodTest m = new MethodTest(MethodClause.class, "sum", arguments, methodSentence);
        Object output = m.callMethod();
        assertEquals(x, Integer.parseInt(m.getMethodItemByName("x")), "Your sum method does not correctly print the first input number.");
        assertEquals(y, Integer.parseInt(m.getMethodItemByName("y")), "Your sum method does not correctly print the second input number.");
        assertEquals(sum, Integer.parseInt(m.getMethodItemByName("sum")), "Your sum method does not correctly print the sum of the two input integers.");
        CustomAssertions._assertEquals(sum, output, "Your sum method does not correctly return the sum of the two input numbers.");
    }

    @ParameterizedTest
    @MethodSource("areaInputProvider")
    public void correctAreaMethod(double x, double y, double area) throws Throwable {
        Clause[] methodSentence = new Clause[]{
                new StringLiteral("Calculating the area of a rectangle: ")
        };
        Object[][] arguments = {
                {x, double.class},
                {y, double.class}
        };
        MethodTest m = new MethodTest(MethodClause.class, "area", arguments, methodSentence);
        Object output = m.callMethod();
        CustomAssertions._assertEquals(area, output, 0.0001,
                "Your area method does not correctly calculate and return the area of a rectangle.");
    }

    @ParameterizedTest
    @MethodSource("printMessageInputProvider")
    public void correctPrintMessageMethod(String message, String expression) throws Throwable {
        Clause[] methodSentence = new Clause[]{
                new StringLiteral(expression)
        };
        Object[][] arguments = {
                {message, String.class}
        };
        MethodTest m = new MethodTest(MethodClause.class, "printMessage", arguments, methodSentence);
        m.callMethod();
    }

    @RepeatedTest(10)
    public void correctReturn15Method() throws Throwable {
        MethodTest m = new MethodTest(MethodClause.class, "return15");
        Object output = m.callMethod();
        CustomAssertions._assertEquals(15, output, "Your return15 method does not return the correct number.");
    }
}
```