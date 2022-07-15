---
sidebar_position: 4
---
# JUnit Testing Style Guide

This style guide outlines the general expectations and chosen stylistic choices for all tests written for the Canvas Gamification project.

## General Conventions

- All questions should be on their own branch. This prevents a single question holding up several others from being merged due to a bug or other issue. 
- All questions should have their own folder based on the question number on the category question document. Each question 
should have two files: one for the question text and solution code, and one for the JUnit test
- All question text must be proofread and should be grammatically correct. If the question text is changed, the question
document text must also be updated. 

## Naming Conventions

- Branches must be named in the format `<category>-<sub_category>-<difficulty>-<question_number>` and if the category or subcategory 
has multiple words, it must be in snake case
  (`arrays-programs_involving_data_sequences-hard-q3`).
- All variables and methods must be named in camelCase, and both must be specific and relevant names. For example, some good
  names are `int sumOfArrayValues` and `String greetingMessage` 
- The JUnit test file must be named `MainTest` to work and the Canvas Gamefication website and the question file must match the given class name on the question document, and
be in BigCamelCase (`ClassName`)
- Names for test methods must be related to what the method is testing and should make grammatical sense, as they are part of the
output the student will see. For example, if the test is for a method the student wrote called sum, a good name would be
`correctSumMethod`.

## MainTest File

- This file contains the JUnit test, and should have the class declaration `class MainTest extends BaseTest` (unless the 
question involves randomness, which it should then extend `BaseRandomTest` )
- All JUnit test files should have a tag indicating what type of question it is testing. This will be `// Parons`,
    `// Parsons with distractors`, or `// Java` and should be located on the line immediately after the class declaration
- Any tests written in this file should **never** be reliant on any methods written by the student in question file. Generally, 
any input/output tests should be hardcoded, and if a method is required to compute a value for a test, it should be 
coded by the test writer and not copied from the solution code. This helps catch any issues or discrepancies in the question.
If a student method needs to be called, use the functions in `MethodUtil`
- All tests must have error/fail messages, and they must be complete, grammatically correct sentences with proper punctuation. 
They should be relevant to the question, but the message should also not completely give away the answer to the student.

### MainTest Example

```java
class MainTest extends BaseTest{
    // Question type
    public Clause[] testSentence(){
        return new Clause[]{
                // Clauses for question
                new IntegerLiteral("sum")
        };
    }
    
    public void runMain(){
        ClassName.main(new String[0]);
    }
    
    @Test
    void sampleSumTest(){
        assertEquals(Integer.parseInt(getItemByName("sum")), 5, 
                "Your program does not correctly computer the sum of two numbers.");
    }
}
```

## Question File
- This file contains the solution code and question information
- `// Parsons with distractors` questions must have the distractors in the question file
- `// Java` questions **must** have a sample output so the student knows how we expect them to format their output. For the
  other types of questions, a sample output is helpful, but not required. 
- The format is the question text in a comment block, followed by the sample output and distractors if needed for the question. 
This is followed by the solution code to the question. 

### Question File Example

```java
/*
        This is where the question text goes.
        
        Sample Output: 
            Hello world!
            
        Distractors:
            int a = 7;     
 */

public class SampleQuestion{
    public static void main(String[] args) {
        // Solution code
    }
}
```

