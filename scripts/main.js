const DEFAULT = {
    BANK: [
        {
            field:'software engineering',
             questions: [
                {
                    question: "WHAT IS THE PRIMARY PURPOSE OF A VARIABLE IN PROGRAMMING?",
                    correct_answer: "To store a value that can be accessed and modified",
                    options: [
                        "To execute a program automatically",
                        "To store a value that can be accessed and modified",
                        "To connect a computer to the internet",
                        "To compile source code"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A DATA TYPE?",
                    correct_answer: "A classification that defines the kind of value a variable can hold",
                    options: [
                        "A programming language",
                        "A database table",
                        "A classification that defines the kind of value a variable can hold",
                        "A method of executing code"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH OF THE FOLLOWING IS A BOOLEAN VALUE?",
                    correct_answer: "true",
                    options: ["42", "hello", "3.14", "true"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF A CONDITIONAL STATEMENT?",
                    correct_answer: "To execute different code depending on whether a condition is satisfied",
                    options: [
                        "To repeat code indefinitely",
                        "To execute different code depending on whether a condition is satisfied",
                        "To declare a variable",
                        "To define a database schema"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES A LOOP DO IN PROGRAMMING?",
                    correct_answer: "Repeats a block of instructions",
                    options: [
                        "Deletes unused variables",
                        "Converts source code into machine code",
                        "Repeats a block of instructions",
                        "Creates a network connection"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH OPERATOR IS COMMONLY USED TO CHECK EQUALITY BETWEEN TWO VALUES?",
                    correct_answer: "==",
                    options: ["=", "==", "+", "%"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF A FUNCTION?",
                    correct_answer: "To group reusable instructions into a callable unit",
                    options: [
                        "To permanently store data",
                        "To create an operating system",
                        "To group reusable instructions into a callable unit",
                        "To increase processor speed"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A PARAMETER IN A FUNCTION?",
                    correct_answer: "A named input defined in a function declaration",
                    options: [
                        "A value returned by the operating system",
                        "A named input defined in a function declaration",
                        "A type of database index",
                        "A variable that cannot change"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS AN ARGUMENT IN A FUNCTION CALL?",
                    correct_answer: "A value supplied to a function when it is called",
                    options: [
                        "A value supplied to a function when it is called",
                        "The name of the function",
                        "A function's return type",
                        "A programming language keyword"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES A RETURN STATEMENT DO?",
                    correct_answer: "Sends a result back from a function and normally ends its execution",
                    options: [
                        "Restarts the entire application",
                        "Prints a message to the terminal",
                        "Sends a result back from a function and normally ends its execution",
                        "Declares a global variable"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS AN ARRAY?",
                    correct_answer: "A data structure used to store an ordered collection of elements",
                    options: [
                        "A command used to compile programs",
                        "A data structure used to store an ordered collection of elements",
                        "A type of operating system",
                        "A function that always returns a number"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A STRING?",
                    correct_answer: "A sequence of characters represented as text",
                    options: [
                        "A sequence of characters represented as text",
                        "A mathematical operator",
                        "A type of loop",
                        "A network protocol"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE RESULT OF 10 % 3 IN MOST PROGRAMMING LANGUAGES?",
                    correct_answer: "1",
                    options: ["0", "1", "3", "3.33"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES THE INCREMENT OPERATOR DO?",
                    correct_answer: "Increases a numeric value by one",
                    options: [
                        "Divides a value by two",
                        "Increases a numeric value by one",
                        "Converts a value to a string",
                        "Decreases a value by one"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A SYNTAX ERROR?",
                    correct_answer: "An error caused by violating the grammatical rules of a programming language",
                    options: [
                        "An error caused by a slow internet connection",
                        "An error caused by incorrect database permissions",
                        "An error caused by violating the grammatical rules of a programming language",
                        "An error caused by insufficient RAM only"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF A COMMENT IN SOURCE CODE?",
                    correct_answer: "To provide explanations or notes that are not executed as program instructions",
                    options: [
                        "To execute instructions faster",
                        "To provide explanations or notes that are not executed as program instructions",
                        "To encrypt source code",
                        "To create additional variables"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS TYPE CASTING?",
                    correct_answer: "Converting a value from one data type to another",
                    options: [
                        "Copying a program to another computer",
                        "Converting a value from one data type to another",
                        "Deleting a variable",
                        "Repeating a function call"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE DIFFERENCE BETWEEN AN INTEGER AND A FLOATING-POINT NUMBER?",
                    correct_answer: "An integer represents whole numbers while a floating-point number represents values with fractional parts",
                    options: [
                        "An integer stores text while a float stores numbers",
                        "An integer is always larger than a float",
                        "An integer represents whole numbers while a floating-point number represents values with fractional parts",
                        "There is no difference between them"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES THE TERM NULL GENERALLY REPRESENT?",
                    correct_answer: "The absence of a value or an explicitly empty reference, depending on the language",
                    options: [
                        "The number zero in every programming language",
                        "An empty string",
                        "The absence of a value or an explicitly empty reference, depending on the language",
                        "A Boolean value meaning true"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF A SWITCH STATEMENT?",
                    correct_answer: "To select one execution path from multiple possible cases",
                    options: [
                        "To repeat a function",
                        "To select one execution path from multiple possible cases",
                        "To allocate memory",
                        "To terminate the operating system"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES THE BREAK STATEMENT COMMONLY DO INSIDE A LOOP?",
                    correct_answer: "Terminates the nearest enclosing loop",
                    options: [
                        "Skips the current iteration only",
                        "Restarts the loop",
                        "Terminates the nearest enclosing loop",
                        "Pauses the program permanently"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES THE CONTINUE STATEMENT COMMONLY DO INSIDE A LOOP?",
                    correct_answer: "Skips the rest of the current iteration and proceeds to the next iteration",
                    options: [
                        "Terminates the entire program",
                        "Skips the rest of the current iteration and proceeds to the next iteration",
                        "Restarts the computer",
                        "Deletes the loop variable"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS VARIABLE SCOPE?",
                    correct_answer: "The region of a program where a variable can be accessed",
                    options: [
                        "The amount of memory a variable occupies",
                        "The region of a program where a variable can be accessed",
                        "The number of times a variable changes",
                        "The data type of a variable"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A LOCAL VARIABLE?",
                    correct_answer: "A variable declared within a particular function or block and accessible within its scope",
                    options: [
                        "A variable accessible from every application on a computer",
                        "A variable stored permanently on a hard drive",
                        "A variable declared within a particular function or block and accessible within its scope",
                        "A variable that cannot be modified"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A GLOBAL VARIABLE?",
                    correct_answer: "A variable declared in a scope that makes it accessible from multiple parts of a program, subject to language rules",
                    options: [
                        "A variable that exists only inside a loop",
                        "A variable declared in a scope that makes it accessible from multiple parts of a program, subject to language rules",
                        "A variable that stores geographical coordinates",
                        "A variable that cannot be changed"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS RECURSION?",
                    correct_answer: "A technique where a function calls itself directly or indirectly",
                    options: [
                        "A technique where a function calls itself directly or indirectly",
                        "A technique for deleting arrays",
                        "A method of declaring constants",
                        "A way to compile multiple files"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A BASE CASE IN RECURSION?",
                    correct_answer: "A condition that stops further recursive calls",
                    options: [
                        "The first variable declared in a program",
                        "A condition that stops further recursive calls",
                        "The largest possible input",
                        "A function that calls another function"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS AN INFINITE LOOP?",
                    correct_answer: "A loop that continues executing without reaching its termination condition",
                    options: [
                        "A loop that executes exactly once",
                        "A loop that contains multiple variables",
                        "A loop that continues executing without reaching its termination condition",
                        "A loop that always executes ten times"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A CONSTANT IN PROGRAMMING?",
                    correct_answer: "A named value that cannot be reassigned after its definition under the language's rules",
                    options: [
                        "A variable that changes on every iteration",
                        "A named value that cannot be reassigned after its definition under the language's rules",
                        "A value that must always be zero",
                        "A function without parameters"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE DIFFERENCE BETWEEN COMPILATION AND INTERPRETATION?",
                    correct_answer: "Compilation translates code before execution, while interpretation executes code through an interpreter",
                    options: [
                        "Compilation always uses the internet while interpretation does not",
                        "Compilation translates code before execution, while interpretation executes code through an interpreter",
                        "Compilation is only used for databases",
                        "Interpretation always produces machine code before running"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS SOURCE CODE?",
                    correct_answer: "Human-readable instructions written in a programming language",
                    options: [
                        "The physical processor of a computer",
                        "Human-readable instructions written in a programming language",
                        "A compiled executable only",
                        "A collection of network packets"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS AN ALGORITHM?",
                    correct_answer: "A finite sequence of well-defined steps for solving a problem",
                    options: [
                        "A programming language",
                        "A computer's physical memory",
                        "A finite sequence of well-defined steps for solving a problem",
                        "A database management system"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES PSEUDOCODE REPRESENT?",
                    correct_answer: "An informal, language-independent description of an algorithm",
                    options: [
                        "A programming language executable by every computer",
                        "An informal, language-independent description of an algorithm",
                        "A database query",
                        "A compiled machine instruction"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A FLOWCHART?",
                    correct_answer: "A diagram that visually represents the steps and decisions in a process or algorithm",
                    options: [
                        "A diagram that visually represents the steps and decisions in a process or algorithm",
                        "A collection of source code files",
                        "A type of programming language",
                        "A tool for compressing data"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS DEBUGGING?",
                    correct_answer: "The process of identifying, analyzing, and correcting defects in software",
                    options: [
                        "The process of writing documentation only",
                        "The process of installing an operating system",
                        "The process of identifying, analyzing, and correcting defects in software",
                        "The process of converting code into HTML"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A RUNTIME ERROR?",
                    correct_answer: "An error that occurs while a program is executing",
                    options: [
                        "An error that occurs while a program is executing",
                        "An error that occurs only while designing a user interface",
                        "An error caused exclusively by incorrect spelling",
                        "An error that happens before source code is written"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A LOGICAL ERROR?",
                    correct_answer: "A defect where a program executes but produces an incorrect result because its logic is wrong",
                    options: [
                        "A missing semicolon in every language",
                        "A defect where a program executes but produces an incorrect result because its logic is wrong",
                        "A hardware failure",
                        "A syntax error detected by a compiler"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS AN EXPRESSION IN PROGRAMMING?",
                    correct_answer: "A combination of values, variables, and operators that evaluates to a result",
                    options: [
                        "A file containing comments only",
                        "A combination of values, variables, and operators that evaluates to a result",
                        "A database connection",
                        "A function that cannot return a value"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A STATEMENT IN PROGRAMMING?",
                    correct_answer: "An instruction that performs an action in a program",
                    options: [
                        "An instruction that performs an action in a program",
                        "A computer's physical memory",
                        "A type of network cable",
                        "A collection of unrelated programming languages"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS OPERATOR PRECEDENCE?",
                    correct_answer: "The rules that determine the order in which operators are evaluated",
                    options: [
                        "The number of operators in a program",
                        "The rules that determine the order in which operators are evaluated",
                        "The order in which files are saved",
                        "The speed at which a processor executes instructions"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS SHORT-CIRCUIT EVALUATION?",
                    correct_answer: "An evaluation strategy where the second operand is skipped when the first operand determines the logical result",
                    options: [
                        "Executing all conditions regardless of their results",
                        "An evaluation strategy where the second operand is skipped when the first operand determines the logical result",
                        "Running a program without a processor",
                        "Evaluating mathematical expressions from right to left in every language"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF EXCEPTION HANDLING?",
                    correct_answer: "To detect and manage exceptional situations during program execution",
                    options: [
                        "To prevent all possible bugs automatically",
                        "To make every function asynchronous",
                        "To detect and manage exceptional situations during program execution",
                        "To convert every error into a warning"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF A TRY-CATCH STRUCTURE?",
                    correct_answer: "To execute potentially failing code and handle exceptions that occur",
                    options: [
                        "To repeat code until a condition becomes false",
                        "To execute potentially failing code and handle exceptions that occur",
                        "To declare a new data type",
                        "To create a database table"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES THE TERM IDE STAND FOR?",
                    correct_answer: "Integrated Development Environment",
                    options: [
                        "Internal Data Engine",
                        "Integrated Development Environment",
                        "Internet Design Extension",
                        "Instruction Deployment Executor"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF A COMPILER?",
                    correct_answer: "To translate source code into another form, often machine code or an intermediate representation",
                    options: [
                        "To manage network traffic",
                        "To store application data",
                        "To translate source code into another form, often machine code or an intermediate representation",
                        "To design user interfaces"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A LIBRARY IN SOFTWARE DEVELOPMENT?",
                    correct_answer: "A collection of reusable code that a program can use",
                    options: [
                        "A physical storage device",
                        "A collection of reusable code that a program can use",
                        "A type of programming error",
                        "A computer's boot sequence"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS AN APPLICATION PROGRAMMING INTERFACE (API)?",
                    correct_answer: "A defined interface through which software components communicate or use one another's functionality",
                    options: [
                        "A programming language used only for websites",
                        "A defined interface through which software components communicate or use one another's functionality",
                        "A physical network port",
                        "A database backup format"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS MODULAR PROGRAMMING?",
                    correct_answer: "Organizing a program into separate components with defined responsibilities",
                    options: [
                        "Writing an entire application in one large function",
                        "Organizing a program into separate components with defined responsibilities",
                        "Avoiding functions and variables",
                        "Writing code without using data structures"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS CODE REUSABILITY?",
                    correct_answer: "The ability to use existing code in multiple parts of a program or across projects",
                    options: [
                        "The ability to execute code without testing",
                        "The ability to use existing code in multiple parts of a program or across projects",
                        "The ability to prevent all runtime errors",
                        "The ability to make every variable global"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS REFACTORING?",
                    correct_answer: "Improving the internal structure of code without changing its externally observable behavior",
                    options: [
                        "Adding new features to a program",
                        "Deleting all comments from source code",
                        "Improving the internal structure of code without changing its externally observable behavior",
                        "Changing a programming language to another language"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES DRY STAND FOR IN SOFTWARE ENGINEERING?",
                    correct_answer: "Don't Repeat Yourself",
                    options: [
                        "Develop Rapidly Yourself",
                        "Don't Repeat Yourself",
                        "Design Reliable Yields",
                        "Data Requires YAML"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE MAIN IDEA BEHIND THE KISS PRINCIPLE?",
                    correct_answer: "Keep designs and solutions as simple as reasonably possible",
                    options: [
                        "Always use the newest programming language",
                        "Keep designs and solutions as simple as reasonably possible",
                        "Avoid writing automated tests",
                        "Combine all software components into one module"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES YAGNI MEAN IN SOFTWARE DEVELOPMENT?",
                    correct_answer: "You Aren't Gonna Need It",
                    options: [
                        "Your Application Gets New Interfaces",
                        "You Always Generate New Instructions",
                        "You Aren't Gonna Need It",
                        "Your Algorithms Generate Network Input"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE MAIN PURPOSE OF VERSION CONTROL?",
                    correct_answer: "To track changes to files and coordinate work over time",
                    options: [
                        "To execute code faster",
                        "To track changes to files and coordinate work over time",
                        "To prevent every possible software defect",
                        "To replace a database"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A REPOSITORY IN VERSION CONTROL?",
                    correct_answer: "A storage location containing project files and their version history",
                    options: [
                        "A storage location containing project files and their version history",
                        "A function that returns a Boolean",
                        "A database query",
                        "A programming language compiler"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF A UNIT TEST?",
                    correct_answer: "To verify the behavior of a small, isolated unit of software",
                    options: [
                        "To test an entire production network",
                        "To verify the behavior of a small, isolated unit of software",
                        "To measure a computer's physical dimensions",
                        "To automatically deploy an application"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF ASSERTIONS IN TESTING?",
                    correct_answer: "To verify that a condition or expected result is true",
                    options: [
                        "To encrypt application data",
                        "To verify that a condition or expected result is true",
                        "To create new user accounts",
                        "To allocate memory dynamically"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE DIFFERENCE BETWEEN AN ARRAY AND A LINKED LIST?",
                    correct_answer: "Arrays store elements in indexed contiguous storage in typical implementations, while linked lists connect nodes through references",
                    options: [
                        "Arrays only store numbers while linked lists only store text",
                        "Arrays cannot contain duplicate values",
                        "Arrays store elements in indexed contiguous storage in typical implementations, while linked lists connect nodes through references",
                        "Linked lists always use less memory than arrays"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A STACK DATA STRUCTURE?",
                    correct_answer: "A data structure that follows the Last In, First Out principle",
                    options: [
                        "A data structure that follows the First In, First Out principle",
                        "A data structure that follows the Last In, First Out principle",
                        "A structure that stores only unique values",
                        "A structure that automatically sorts all values"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A QUEUE DATA STRUCTURE?",
                    correct_answer: "A data structure that generally follows the First In, First Out principle",
                    options: [
                        "A structure that follows Last In, First Out",
                        "A structure that stores only key-value pairs",
                        "A data structure that generally follows the First In, First Out principle",
                        "A structure that always sorts values alphabetically"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A HASH TABLE?",
                    correct_answer: "A data structure that uses a hash function to map keys to storage locations",
                    options: [
                        "A data structure that stores only ordered integers",
                        "A data structure that uses a hash function to map keys to storage locations",
                        "A structure used exclusively for sorting arrays",
                        "A type of recursive algorithm"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A HASH COLLISION?",
                    correct_answer: "When two different keys produce the same hash value or map to the same hash table location",
                    options: [
                        "When a variable is declared twice",
                        "When two different keys produce the same hash value or map to the same hash table location",
                        "When a function returns null",
                        "When two files have different names"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS TIME COMPLEXITY?",
                    correct_answer: "A description of how an algorithm's running time grows with input size",
                    options: [
                        "The exact time an algorithm takes on every computer",
                        "A description of how an algorithm's running time grows with input size",
                        "The amount of disk space used by source code",
                        "The time required to write a program"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES O(1) TIME COMPLEXITY MEAN?",
                    correct_answer: "The operation takes constant time with respect to input size",
                    options: [
                        "The operation takes one second",
                        "The operation takes constant time with respect to input size",
                        "The operation takes time proportional to the input size",
                        "The operation always runs exactly once per program"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES O(N) TIME COMPLEXITY REPRESENT?",
                    correct_answer: "Linear growth in execution time relative to input size",
                    options: [
                        "Constant execution time",
                        "Quadratic execution time",
                        "Linear growth in execution time relative to input size",
                        "Logarithmic execution time"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES O(N²) TIME COMPLEXITY GENERALLY INDICATE?",
                    correct_answer: "Execution time grows quadratically with input size",
                    options: [
                        "Execution time remains constant",
                        "Execution time grows linearly",
                        "Execution time grows logarithmically",
                        "Execution time grows quadratically with input size"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS SPACE COMPLEXITY?",
                    correct_answer: "A measure of how an algorithm's memory requirements grow with input size",
                    options: [
                        "The physical size of a computer",
                        "A measure of how an algorithm's memory requirements grow with input size",
                        "The number of files in a repository",
                        "The time required to execute a program"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF A POINTER IN LANGUAGES SUCH AS C?",
                    correct_answer: "To store a memory address",
                    options: [
                        "To store only floating-point values",
                        "To store a memory address",
                        "To compile source code",
                        "To create a database connection"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A MEMORY LEAK?",
                    correct_answer: "A situation where allocated memory is no longer needed but remains unavailable for reuse because it has not been released or reclaimed",
                    options: [
                        "A situation where a program loses its source code",
                        "A situation where allocated memory is no longer needed but remains unavailable for reuse because it has not been released or reclaimed",
                        "A hardware problem that always causes a computer to shut down",
                        "A network connection that sends too much data"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A DANGLING POINTER?",
                    correct_answer: "A pointer that refers to memory that is no longer valid",
                    options: [
                        "A pointer that stores the value zero",
                        "A pointer that refers to memory that is no longer valid",
                        "A pointer that references a global variable",
                        "A pointer that always points to an array"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS GARBAGE COLLECTION?",
                    correct_answer: "Automatic identification and reclamation of memory that is no longer reachable or needed",
                    options: [
                        "Deleting unused source code files",
                        "Compressing application logs",
                        "Automatic identification and reclamation of memory that is no longer reachable or needed",
                        "Removing syntax errors from a program"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE DIFFERENCE BETWEEN PASS-BY-VALUE AND PASS-BY-REFERENCE?",
                    correct_answer: "Pass-by-value supplies a copy of a value, while pass-by-reference allows access to the original object or storage through a reference-like mechanism",
                    options: [
                        "Pass-by-value always modifies the original variable",
                        "Pass-by-reference always creates a new independent object",
                        "Pass-by-value supplies a copy of a value, while pass-by-reference allows access to the original object or storage through a reference-like mechanism",
                        "They are identical in every programming language"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS POLYMORPHISM IN OBJECT-ORIENTED PROGRAMMING?",
                    correct_answer: "The ability to use a common interface with different underlying implementations",
                    options: [
                        "The ability to create variables without types",
                        "The ability to use a common interface with different underlying implementations",
                        "The process of deleting inherited methods",
                        "The ability to execute multiple programs on one computer"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS ENCAPSULATION?",
                    correct_answer: "Bundling data and related behavior while controlling access to an object's internal state",
                    options: [
                        "Copying an entire application into another application",
                        "Bundling data and related behavior while controlling access to an object's internal state",
                        "Making every property publicly accessible",
                        "Writing all functions inside one file"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS INHERITANCE IN OBJECT-ORIENTED PROGRAMMING?",
                    correct_answer: "A mechanism that allows one class or type to derive behavior or properties from another",
                    options: [
                        "A mechanism that allows one class or type to derive behavior or properties from another",
                        "A process that converts strings into integers",
                        "A method of allocating disk storage",
                        "A way to prevent all classes from communicating"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS ABSTRACTION IN SOFTWARE DESIGN?",
                    correct_answer: "Hiding unnecessary implementation details while exposing essential functionality",
                    options: [
                        "Removing all documentation from code",
                        "Hiding unnecessary implementation details while exposing essential functionality",
                        "Making every implementation detail public",
                        "Converting a program into machine code"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A CLASS IN OBJECT-ORIENTED PROGRAMMING?",
                    correct_answer: "A blueprint or definition describing the state and behavior of objects",
                    options: [
                        "A database connection",
                        "A blueprint or definition describing the state and behavior of objects",
                        "A function that cannot be called",
                        "A type of network protocol"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS AN OBJECT IN OBJECT-ORIENTED PROGRAMMING?",
                    correct_answer: "An instance of a class or another object type",
                    options: [
                        "An instance of a class or another object type",
                        "A collection of unrelated source files",
                        "A programming language compiler",
                        "A variable that must be global"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A CONSTRUCTOR?",
                    correct_answer: "A special mechanism used to initialize a newly created object",
                    options: [
                        "A method that always destroys an object",
                        "A special mechanism used to initialize a newly created object",
                        "A function that compiles a program",
                        "A command that starts a database server"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS METHOD OVERLOADING?",
                    correct_answer: "Defining multiple methods with the same name but different parameter signatures, where supported",
                    options: [
                        "Calling the same method repeatedly",
                        "Defining multiple methods with the same name but different parameter signatures, where supported",
                        "Changing a method's return value at runtime",
                        "Deleting a method from a class"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS METHOD OVERRIDING?",
                    correct_answer: "Providing a new implementation of an inherited method in a derived type",
                    options: [
                        "Providing a new implementation of an inherited method in a derived type",
                        "Declaring two unrelated methods with different names",
                        "Calling a method without parameters",
                        "Changing a variable's data type"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS AN INTERFACE IN SOFTWARE DEVELOPMENT?",
                    correct_answer: "A contract that specifies operations or capabilities that an implementation must provide",
                    options: [
                        "A graphical screen displayed to users only",
                        "A contract that specifies operations or capabilities that an implementation must provide",
                        "A database backup",
                        "A type of memory allocation"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF A MODULE?",
                    correct_answer: "To organize related code into a separate unit with a defined interface",
                    options: [
                        "To increase the number of global variables",
                        "To organize related code into a separate unit with a defined interface",
                        "To prevent code reuse",
                        "To replace the programming language compiler"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A DEPENDENCY IN SOFTWARE DEVELOPMENT?",
                    correct_answer: "An external component, library, service, or module that software relies on",
                    options: [
                        "A variable that never changes",
                        "An external component, library, service, or module that software relies on",
                        "A syntax error in a function",
                        "A comment that explains a class"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS DEPENDENCY INJECTION?",
                    correct_answer: "Providing a component with the dependencies it needs instead of having it create them internally",
                    options: [
                        "Installing every available package in a project",
                        "Providing a component with the dependencies it needs instead of having it create them internally",
                        "Copying dependencies directly into every function",
                        "Removing all external libraries from an application"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHY IS LOOSE COUPLING GENERALLY DESIRABLE IN SOFTWARE DESIGN?",
                    correct_answer: "It reduces how strongly components depend on one another, making changes easier to isolate",
                    options: [
                        "It guarantees that software will never fail",
                        "It reduces how strongly components depend on one another, making changes easier to isolate",
                        "It eliminates the need for testing",
                        "It forces every component to use the same implementation"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES HIGH COHESION MEAN IN SOFTWARE DESIGN?",
                    correct_answer: "A component's responsibilities are closely related and focused",
                    options: [
                        "A component contains many unrelated responsibilities",
                        "A component's responsibilities are closely related and focused",
                        "Every component depends on every other component",
                        "A component has no public interface"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A PURE FUNCTION?",
                    correct_answer: "A function that produces the same output for the same inputs and has no observable side effects",
                    options: [
                        "A function that can only return numbers",
                        "A function that produces the same output for the same inputs and has no observable side effects",
                        "A function that always modifies global state",
                        "A function that cannot accept parameters"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A SIDE EFFECT IN PROGRAMMING?",
                    correct_answer: "An observable change outside a function's returned value, such as modifying state or performing I/O",
                    options: [
                        "A syntax error caused by an operator",
                        "An observable change outside a function's returned value, such as modifying state or performing I/O",
                        "A function returning an integer",
                        "A variable declared inside a loop"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS IMMUTABILITY?",
                    correct_answer: "The property of data that cannot be changed after it has been created",
                    options: [
                        "The property of data that cannot be changed after it has been created",
                        "The ability to change every variable",
                        "The ability to execute code repeatedly",
                        "The process of removing unused dependencies"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE DIFFERENCE BETWEEN SYNCHRONOUS AND ASYNCHRONOUS EXECUTION?",
                    correct_answer: "Synchronous execution follows a blocking sequence, while asynchronous execution allows work to proceed without waiting for every operation to finish",
                    options: [
                        "Synchronous execution always uses multiple processors",
                        "Asynchronous execution means code executes in reverse order",
                        "Synchronous execution follows a blocking sequence, while asynchronous execution allows work to proceed without waiting for every operation to finish",
                        "They are identical concepts"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A CALLBACK FUNCTION?",
                    correct_answer: "A function passed to another function to be invoked later or when a particular event occurs",
                    options: [
                        "A function that can never return",
                        "A function passed to another function to be invoked later or when a particular event occurs",
                        "A function that automatically deletes variables",
                        "A function used only for mathematical calculations"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A PROMISE IN JAVASCRIPT?",
                    correct_answer: "An object representing the eventual completion or failure of an asynchronous operation",
                    options: [
                        "A function that executes synchronously only",
                        "An object representing the eventual completion or failure of an asynchronous operation",
                        "A variable that stores only strings",
                        "A browser security policy"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES ASYNC/AWAIT PROVIDE IN JAVASCRIPT?",
                    correct_answer: "A syntax for writing promise-based asynchronous code in a more sequential style",
                    options: [
                        "A way to make all functions execute on separate CPU cores",
                        "A syntax for writing promise-based asynchronous code in a more sequential style",
                        "A mechanism for permanently storing data",
                        "A method for disabling error handling"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS EVENT-DRIVEN PROGRAMMING?",
                    correct_answer: "A programming model where execution responds to events such as user actions, messages, or system notifications",
                    options: [
                        "A programming model where execution responds to events such as user actions, messages, or system notifications",
                        "A model where every instruction runs at a fixed time",
                        "A method that prevents functions from communicating",
                        "A programming style that only supports databases"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A CLOSURE IN PROGRAMMING?",
                    correct_answer: "A function together with access to variables from its surrounding lexical environment",
                    options: [
                        "A function that immediately terminates the application",
                        "A function together with access to variables from its surrounding lexical environment",
                        "A variable that cannot be accessed by any function",
                        "A method of closing network ports"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS LEXICAL SCOPE?",
                    correct_answer: "A scope determined by where code is written in the source program",
                    options: [
                        "A scope determined by the order in which functions execute",
                        "A scope determined by where code is written in the source program",
                        "A scope that exists only inside databases",
                        "A scope that allows every variable to be global"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE DIFFERENCE BETWEEN STATIC AND DYNAMIC TYPING?",
                    correct_answer: "Static typing checks types primarily before execution, while dynamic typing checks types during execution",
                    options: [
                        "Static typing means variables cannot change values",
                        "Dynamic typing means a language has no data types",
                        "Static typing checks types primarily before execution, while dynamic typing checks types during execution",
                        "They describe the speed of a programming language"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS STRONG TYPING GENERALLY CONCERNED WITH?",
                    correct_answer: "How strictly a language enforces rules about operations between different types",
                    options: [
                        "How fast a program executes",
                        "How strictly a language enforces rules about operations between different types",
                        "How many variables a program can declare",
                        "How much memory a computer contains"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A RACE CONDITION?",
                    correct_answer: "A situation where the outcome depends on the timing or ordering of concurrent operations",
                    options: [
                        "A program that runs faster than expected",
                        "A situation where the outcome depends on the timing or ordering of concurrent operations",
                        "An algorithm that sorts data",
                        "A network connection that fails during startup"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A CRITICAL SECTION IN CONCURRENT PROGRAMMING?",
                    correct_answer: "A section of code that accesses shared resources and may require synchronization",
                    options: [
                        "A section of code that must always execute first",
                        "A section of code that accesses shared resources and may require synchronization",
                        "A function that handles syntax errors",
                        "A block of code that only contains comments"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A MUTEX?",
                    correct_answer: "A synchronization mechanism that provides mutual exclusion when accessing a shared resource",
                    options: [
                        "A data structure used only for sorting",
                        "A synchronization mechanism that provides mutual exclusion when accessing a shared resource",
                        "A programming language compiler",
                        "A network protocol for sending files"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS DEADLOCK IN CONCURRENT SYSTEMS?",
                    correct_answer: "A condition where two or more operations wait indefinitely for resources held by one another",
                    options: [
                        "A condition where a function returns no value",
                        "A condition where two or more operations wait indefinitely for resources held by one another",
                        "A condition where a program finishes successfully",
                        "A condition where the processor executes instructions too quickly"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF A SEMAPHORE?",
                    correct_answer: "To control access to shared resources through a counter-based synchronization mechanism",
                    options: [
                        "To compress source code",
                        "To control access to shared resources through a counter-based synchronization mechanism",
                        "To store encrypted passwords",
                        "To allocate permanent disk space"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS IDEMPOTENCY IN SOFTWARE OPERATIONS?",
                    correct_answer: "The property that repeating an operation produces the same intended effect as performing it once",
                    options: [
                        "The property that every request creates a new resource",
                        "The property that repeating an operation produces the same intended effect as performing it once",
                        "The property that a function must execute only once per application",
                        "The property that all operations run concurrently"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS DEFENSIVE PROGRAMMING?",
                    correct_answer: "Writing software that anticipates invalid inputs, unexpected conditions, and possible failures",
                    options: [
                        "Writing code that prevents users from accessing every feature",
                        "Writing software that anticipates invalid inputs, unexpected conditions, and possible failures",
                        "Writing code without external dependencies",
                        "Writing code that avoids all conditional statements"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHY SHOULD INPUT VALIDATION BE PERFORMED?",
                    correct_answer: "To ensure incoming data meets expected rules before it is processed",
                    options: [
                        "To make all incoming data trusted automatically",
                        "To ensure incoming data meets expected rules before it is processed",
                        "To reduce the number of functions in an application",
                        "To prevent users from submitting valid data"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE DIFFERENCE BETWEEN VALIDATION AND SANITIZATION?",
                    correct_answer: "Validation checks whether data meets requirements, while sanitization transforms or removes unwanted content",
                    options: [
                        "Validation encrypts data while sanitization decrypts it",
                        "Validation checks whether data meets requirements, while sanitization transforms or removes unwanted content",
                        "Validation stores data while sanitization deletes databases",
                        "They are exactly the same process"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES THE SINGLE RESPONSIBILITY PRINCIPLE RECOMMEND?",
                    correct_answer: "A module or class should have one primary responsibility or one reason to change",
                    options: [
                        "Every class should contain only one method",
                        "A module or class should have one primary responsibility or one reason to change",
                        "Every function should have exactly one parameter",
                        "An application should contain only one module"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE OPEN-CLOSED PRINCIPLE?",
                    correct_answer: "Software entities should be open for extension but closed for modification",
                    options: [
                        "All source code should be publicly available",
                        "Software entities should be open for extension but closed for modification",
                        "Every class should be open to direct modification",
                        "Applications should not use external libraries"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE LISKOV SUBSTITUTION PRINCIPLE?",
                    correct_answer: "Objects of a subtype should be usable wherever objects of their base type are expected without breaking correctness",
                    options: [
                        "Every class must inherit from exactly one parent",
                        "Objects of a subtype should be usable wherever objects of their base type are expected without breaking correctness",
                        "Every method must return the same data type",
                        "Subclasses should never override inherited methods"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE INTERFACE SEGREGATION PRINCIPLE?",
                    correct_answer: "Clients should not be forced to depend on interfaces they do not use",
                    options: [
                        "Every interface should contain as many methods as possible",
                        "Clients should not be forced to depend on interfaces they do not use",
                        "Interfaces should only be used for graphical applications",
                        "Every class should implement every available interface"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE DEPENDENCY INVERSION PRINCIPLE?",
                    correct_answer: "High-level and low-level modules should depend on abstractions rather than concrete implementations",
                    options: [
                        "High-level modules should always depend directly on low-level modules",
                        "Dependencies should be installed in reverse alphabetical order",
                        "High-level and low-level modules should depend on abstractions rather than concrete implementations",
                        "All dependencies should be stored in global variables"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A DATA STRUCTURE?",
                    correct_answer: "A way of organizing and storing data for efficient access and modification",
                    options: [
                        "A programming language",
                        "A way of organizing and storing data for efficient access and modification",
                        "A method of compiling source code",
                        "A type of operating system"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH DATA STRUCTURE FOLLOWS THE LAST IN, FIRST OUT PRINCIPLE?",
                    correct_answer: "Stack",
                    options: ["Queue", "Array", "Stack", "Linked list"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH DATA STRUCTURE FOLLOWS THE FIRST IN, FIRST OUT PRINCIPLE?",
                    correct_answer: "Queue",
                    options: ["Stack", "Queue", "Tree", "Graph"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE OPERATION USED TO ADD AN ELEMENT TO THE TOP OF A STACK?",
                    correct_answer: "Push",
                    options: ["Pop", "Dequeue", "Push", "Peek"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE OPERATION USED TO REMOVE THE TOP ELEMENT FROM A STACK?",
                    correct_answer: "Pop",
                    options: ["Push", "Pop", "Enqueue", "Insert"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES THE PEEK OPERATION DO IN A STACK?",
                    correct_answer: "Returns the top element without removing it",
                    options: [
                        "Removes the top element",
                        "Adds an element to the stack",
                        "Returns the top element without removing it",
                        "Sorts the stack"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH OPERATION ADDS AN ELEMENT TO A QUEUE?",
                    correct_answer: "Enqueue",
                    options: ["Push", "Pop", "Dequeue", "Enqueue"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH OPERATION REMOVES AN ELEMENT FROM A QUEUE?",
                    correct_answer: "Dequeue",
                    options: ["Enqueue", "Dequeue", "Peek", "Push"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE MAIN ADVANTAGE OF A LINKED LIST OVER A FIXED-SIZE ARRAY?",
                    correct_answer: "It can grow and shrink dynamically without requiring a fixed capacity",
                    options: [
                        "It always uses less memory",
                        "It supports constant-time random access",
                        "It can grow and shrink dynamically without requiring a fixed capacity",
                        "It automatically sorts its elements"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE MAIN DISADVANTAGE OF A SINGLY LINKED LIST?",
                    correct_answer: "It does not support direct access to arbitrary elements by index",
                    options: [
                        "It cannot store duplicate values",
                        "It does not support direct access to arbitrary elements by index",
                        "It cannot grow dynamically",
                        "It cannot contain objects"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES EACH NODE IN A SINGLY LINKED LIST TYPICALLY CONTAIN?",
                    correct_answer: "Data and a reference to the next node",
                    options: [
                        "Only a memory address",
                        "Data and a reference to the next node",
                        "Two references and no data",
                        "A sorting algorithm"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT ADDITIONAL REFERENCE DOES A DOUBLY LINKED LIST NODE CONTAIN?",
                    correct_answer: "A reference to the previous node",
                    options: [
                        "A reference to the root node only",
                        "A reference to the previous node",
                        "A reference to the operating system",
                        "A reference to the entire list"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A CIRCULAR LINKED LIST?",
                    correct_answer: "A linked list in which the last node points back to an earlier node, commonly the first node",
                    options: [
                        "A linked list that stores only numbers",
                        "A linked list in which the last node points back to an earlier node, commonly the first node",
                        "A linked list with no nodes",
                        "A linked list that automatically sorts itself"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE TIME COMPLEXITY OF ACCESSING AN ELEMENT BY INDEX IN A TYPICAL ARRAY?",
                    correct_answer: "O(1)",
                    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE TIME COMPLEXITY OF SEARCHING FOR AN UNSORTED ELEMENT IN AN ARRAY USING LINEAR SEARCH?",
                    correct_answer: "O(n)",
                    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE TIME COMPLEXITY OF INSERTING AN ELEMENT AT THE BEGINNING OF A TYPICAL ARRAY?",
                    correct_answer: "O(n)",
                    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE AVERAGE TIME COMPLEXITY OF APPENDING AN ELEMENT TO A DYNAMIC ARRAY?",
                    correct_answer: "O(1) amortized",
                    options: ["O(n²)", "O(1) amortized", "O(log n)", "O(n) always"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES AMORTIZED TIME COMPLEXITY MEASURE?",
                    correct_answer: "The average cost per operation over a sequence of operations",
                    options: [
                        "The worst possible execution time of one operation",
                        "The average cost per operation over a sequence of operations",
                        "The amount of memory used by an algorithm",
                        "The number of instructions in source code"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A HASH FUNCTION USED FOR IN A HASH TABLE?",
                    correct_answer: "To transform a key into a hash value used to determine a storage location",
                    options: [
                        "To sort keys alphabetically",
                        "To encrypt every stored value",
                        "To transform a key into a hash value used to determine a storage location",
                        "To create linked lists automatically"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS SEPARATE CHAINING IN A HASH TABLE?",
                    correct_answer: "A collision-resolution technique that stores multiple entries in a bucket, often using a linked list",
                    options: [
                        "A technique that deletes duplicate keys",
                        "A collision-resolution technique that stores multiple entries in a bucket, often using a linked list",
                        "A technique that sorts all keys",
                        "A method of resizing an array"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS OPEN ADDRESSING IN A HASH TABLE?",
                    correct_answer: "A collision-resolution technique that searches for another available slot within the table",
                    options: [
                        "A technique that stores every collision in a separate database",
                        "A collision-resolution technique that searches for another available slot within the table",
                        "A technique that prevents hash collisions mathematically",
                        "A method of converting keys into strings"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS LINEAR PROBING?",
                    correct_answer: "Checking subsequent table positions until an available slot is found",
                    options: [
                        "Checking random table positions",
                        "Checking subsequent table positions until an available slot is found",
                        "Sorting the hash table after every insertion",
                        "Creating a separate linked list for each key"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES THE LOAD FACTOR OF A HASH TABLE REPRESENT?",
                    correct_answer: "The ratio of occupied entries to available table capacity",
                    options: [
                        "The number of hash functions used",
                        "The ratio of occupied entries to available table capacity",
                        "The average length of stored strings",
                        "The number of collisions in the table"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHY MIGHT A HASH TABLE BE RESIZED?",
                    correct_answer: "To maintain efficient operations when the table becomes too full",
                    options: [
                        "To remove its hash function",
                        "To maintain efficient operations when the table becomes too full",
                        "To convert all keys into integers",
                        "To guarantee that collisions never occur"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A BINARY TREE?",
                    correct_answer: "A tree data structure in which each node has at most two children",
                    options: [
                        "A tree where every node has exactly two children",
                        "A tree data structure in which each node has at most two children",
                        "A tree that stores only binary numbers",
                        "A graph without edges"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE ROOT NODE OF A TREE?",
                    correct_answer: "The topmost node from which the tree originates",
                    options: [
                        "The node with the greatest value",
                        "The node with no children",
                        "The topmost node from which the tree originates",
                        "The final node visited during traversal"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A LEAF NODE IN A TREE?",
                    correct_answer: "A node that has no children",
                    options: [
                        "A node that has no parent",
                        "A node that has no children",
                        "The root node",
                        "A node with exactly two children"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE HEIGHT OF A TREE?",
                    correct_answer: "The number of edges on the longest path from the root to a leaf",
                    options: [
                        "The total number of nodes",
                        "The number of children of the root",
                        "The number of edges on the longest path from the root to a leaf",
                        "The number of leaf nodes"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A BINARY SEARCH TREE?",
                    correct_answer: "A binary tree where values in the left subtree are smaller and values in the right subtree are larger, according to its ordering rule",
                    options: [
                        "A tree in which all nodes have two children",
                        "A binary tree where values in the left subtree are smaller and values in the right subtree are larger, according to its ordering rule",
                        "A tree that stores only sorted arrays",
                        "A tree where every node contains the same value"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE AVERAGE SEARCH TIME COMPLEXITY OF A BALANCED BINARY SEARCH TREE?",
                    correct_answer: "O(log n)",
                    options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE WORST-CASE SEARCH TIME COMPLEXITY OF AN UNBALANCED BINARY SEARCH TREE?",
                    correct_answer: "O(n)",
                    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS AN AVL TREE?",
                    correct_answer: "A self-balancing binary search tree that maintains a height-balance condition",
                    options: [
                        "A tree that stores only strings",
                        "A self-balancing binary search tree that maintains a height-balance condition",
                        "A graph traversal algorithm",
                        "A binary tree without ordering rules"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF ROTATIONS IN AVL TREES?",
                    correct_answer: "To restore the tree's balance after insertions or deletions",
                    options: [
                        "To sort all values alphabetically",
                        "To restore the tree's balance after insertions or deletions",
                        "To delete the root node",
                        "To convert the tree into an array"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A HEAP DATA STRUCTURE?",
                    correct_answer: "A tree-based structure that satisfies a heap-order property",
                    options: [
                        "A structure that stores only unique strings",
                        "A tree-based structure that satisfies a heap-order property",
                        "A graph without vertices",
                        "A linked list that is always sorted"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE ROOT VALUE IN A MAX-HEAP?",
                    correct_answer: "The largest value",
                    options: [
                        "The smallest value",
                        "The average value",
                        "The largest value",
                        "The most recently inserted value"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE ROOT VALUE IN A MIN-HEAP?",
                    correct_answer: "The smallest value",
                    options: [
                        "The largest value",
                        "The smallest value",
                        "The median value",
                        "The first inserted value"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A PRIORITY QUEUE?",
                    correct_answer: "A data structure that removes elements according to their priority rather than insertion order",
                    options: [
                        "A queue that only accepts strings",
                        "A data structure that removes elements according to their priority rather than insertion order",
                        "A queue that follows only LIFO ordering",
                        "A structure that automatically removes duplicate values"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH DATA STRUCTURE IS COMMONLY USED TO IMPLEMENT A PRIORITY QUEUE EFFICIENTLY?",
                    correct_answer: "Binary heap",
                    options: ["Stack", "Binary heap", "Singly linked list only", "Unsorted string"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A GRAPH?",
                    correct_answer: "A data structure consisting of vertices connected by edges",
                    options: [
                        "A collection of sorted arrays",
                        "A data structure consisting of vertices connected by edges",
                        "A tree with exactly two children",
                        "A function that returns multiple values"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A DIRECTED GRAPH?",
                    correct_answer: "A graph whose edges have directions",
                    options: [
                        "A graph where every vertex has two edges",
                        "A graph whose edges have directions",
                        "A graph without vertices",
                        "A graph where all edges have equal weights"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS AN UNDIRECTED GRAPH?",
                    correct_answer: "A graph whose edges represent relationships without a specified direction",
                    options: [
                        "A graph with no edges",
                        "A graph whose edges represent relationships without a specified direction",
                        "A graph where every edge points to the root",
                        "A graph that contains only one vertex"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A WEIGHTED GRAPH?",
                    correct_answer: "A graph whose edges have associated values such as cost, distance, or time",
                    options: [
                        "A graph that stores only large numbers",
                        "A graph whose edges have associated values such as cost, distance, or time",
                        "A graph where every vertex has a weight",
                        "A graph that cannot contain cycles"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS AN ADJACENCY MATRIX?",
                    correct_answer: "A two-dimensional matrix representing connections between graph vertices",
                    options: [
                        "A linked list containing all graph edges",
                        "A two-dimensional matrix representing connections between graph vertices",
                        "A sorted list of vertex names",
                        "A tree used to balance graph nodes"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS AN ADJACENCY LIST?",
                    correct_answer: "A representation that stores the neighboring vertices of each vertex",
                    options: [
                        "A representation that stores the neighboring vertices of each vertex",
                        "A matrix containing only edge weights",
                        "A list of disconnected nodes",
                        "A sorted array of graph paths"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH GRAPH REPRESENTATION IS OFTEN MORE MEMORY-EFFICIENT FOR SPARSE GRAPHS?",
                    correct_answer: "Adjacency list",
                    options: ["Adjacency matrix", "Adjacency list", "Full matrix", "Two-dimensional array of all possible paths"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES A SPARSE GRAPH MEAN?",
                    correct_answer: "A graph with relatively few edges compared with the maximum possible number of edges",
                    options: [
                        "A graph with no vertices",
                        "A graph with relatively few edges compared with the maximum possible number of edges",
                        "A graph where every vertex connects to every other vertex",
                        "A graph containing only weighted edges"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A CYCLE IN A GRAPH?",
                    correct_answer: "A path that starts and ends at the same vertex without repeating intermediate vertices, in a simple cycle",
                    options: [
                        "A path that visits every vertex exactly once",
                        "A path that starts and ends at the same vertex without repeating intermediate vertices, in a simple cycle",
                        "A graph without edges",
                        "A vertex with no neighbors"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A CONNECTED GRAPH?",
                    correct_answer: "An undirected graph in which every pair of vertices has a path between them",
                    options: [
                        "A graph where every vertex has exactly two edges",
                        "An undirected graph in which every pair of vertices has a path between them",
                        "A graph where every edge has a weight",
                        "A graph with only one connected component"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A DIRECTED ACYCLIC GRAPH (DAG)?",
                    correct_answer: "A directed graph containing no directed cycles",
                    options: [
                        "An undirected graph containing no edges",
                        "A directed graph containing no directed cycles",
                        "A graph where all vertices have two parents",
                        "A graph containing only one vertex"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH ALGORITHM IS COMMONLY USED TO TRAVERSE A GRAPH BY EXPLORING NEIGHBORS LEVEL BY LEVEL?",
                    correct_answer: "Breadth-First Search",
                    options: ["Depth-First Search", "Quick Sort", "Binary Search", "Breadth-First Search"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH DATA STRUCTURE IS COMMONLY USED BY BREADTH-FIRST SEARCH?",
                    correct_answer: "Queue",
                    options: ["Stack", "Queue", "Heap", "Hash table"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH ALGORITHM EXPLORES A GRAPH BY GOING AS DEEP AS POSSIBLE BEFORE BACKTRACKING?",
                    correct_answer: "Depth-First Search",
                    options: ["Breadth-First Search", "Dijkstra's algorithm", "Depth-First Search", "Kruskal's algorithm"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH DATA STRUCTURE IS NATURALLY USED IN AN ITERATIVE DEPTH-FIRST SEARCH IMPLEMENTATION?",
                    correct_answer: "Stack",
                    options: ["Queue", "Stack", "Priority queue", "Circular buffer"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE TIME COMPLEXITY OF BFS USING AN ADJACENCY LIST?",
                    correct_answer: "O(V + E)",
                    options: ["O(V²)", "O(E²)", "O(V + E)", "O(log V)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE TIME COMPLEXITY OF DFS USING AN ADJACENCY LIST?",
                    correct_answer: "O(V + E)",
                    options: ["O(V + E)", "O(V²E)", "O(log V)", "O(E log V)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH ALGORITHM FINDS SHORTEST PATHS FROM A SOURCE IN A GRAPH WITH NON-NEGATIVE EDGE WEIGHTS?",
                    correct_answer: "Dijkstra's algorithm",
                    options: [
                        "Depth-First Search",
                        "Kruskal's algorithm",
                        "Dijkstra's algorithm",
                        "Merge Sort"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHY CAN DIJKSTRA'S ALGORITHM FAIL TO PRODUCE CORRECT SHORTEST PATHS WHEN NEGATIVE EDGE WEIGHTS ARE PRESENT?",
                    correct_answer: "Its greedy finalization assumption is not valid for graphs with negative edge weights",
                    options: [
                        "It cannot process directed graphs",
                        "Its greedy finalization assumption is not valid for graphs with negative edge weights",
                        "It only works with adjacency matrices",
                        "It requires every vertex to have exactly two edges"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH ALGORITHM CAN HANDLE NEGATIVE EDGE WEIGHTS AND DETECT NEGATIVE CYCLES REACHABLE FROM THE SOURCE?",
                    correct_answer: "Bellman-Ford algorithm",
                    options: [
                        "Dijkstra's algorithm",
                        "Prim's algorithm",
                        "Bellman-Ford algorithm",
                        "Binary Search"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A MINIMUM SPANNING TREE?",
                    correct_answer: "A spanning tree connecting all vertices with the minimum possible total edge weight",
                    options: [
                        "A tree containing the fewest possible vertices",
                        "A spanning tree connecting all vertices with the minimum possible total edge weight",
                        "A shortest path between two vertices",
                        "A tree where every edge has equal weight"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH ALGORITHM BUILDS A MINIMUM SPANNING TREE BY GROWING A TREE FROM A STARTING VERTEX?",
                    correct_answer: "Prim's algorithm",
                    options: ["Dijkstra's algorithm", "Prim's algorithm", "Bellman-Ford algorithm", "Floyd-Warshall algorithm"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH ALGORITHM BUILDS A MINIMUM SPANNING TREE BY CONSIDERING EDGES IN INCREASING WEIGHT ORDER?",
                    correct_answer: "Kruskal's algorithm",
                    options: ["BFS", "DFS", "Kruskal's algorithm", "Binary Search"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF A DISJOINT SET UNION DATA STRUCTURE?",
                    correct_answer: "To maintain groups of elements and efficiently determine whether elements belong to the same set",
                    options: [
                        "To sort strings alphabetically",
                        "To maintain groups of elements and efficiently determine whether elements belong to the same set",
                        "To store graph weights permanently",
                        "To calculate shortest paths directly"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS PATH COMPRESSION IN DISJOINT SET UNION?",
                    correct_answer: "An optimization that makes nodes point closer to the set representative during find operations",
                    options: [
                        "An optimization that deletes disconnected nodes",
                        "An optimization that makes nodes point closer to the set representative during find operations",
                        "A method for sorting graph edges",
                        "A method for converting a graph into a tree"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS LINEAR SEARCH?",
                    correct_answer: "An algorithm that examines elements one by one until a target is found or the collection ends",
                    options: [
                        "An algorithm that divides a sorted collection repeatedly",
                        "An algorithm that examines elements one by one until a target is found or the collection ends",
                        "An algorithm that sorts values by swapping adjacent elements",
                        "An algorithm that uses a hash function"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS BINARY SEARCH?",
                    correct_answer: "An algorithm that repeatedly halves a sorted search interval to locate a target",
                    options: [
                        "An algorithm that checks every element sequentially",
                        "An algorithm that repeatedly halves a sorted search interval to locate a target",
                        "An algorithm that sorts an array using recursion only",
                        "An algorithm that stores values in a hash table"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A REQUIREMENT FOR USING STANDARD BINARY SEARCH?",
                    correct_answer: "The search range must have an ordering that allows the search interval to be reduced correctly",
                    options: [
                        "The collection must contain only integers",
                        "The collection must contain no duplicate values",
                        "The search range must have an ordering that allows the search interval to be reduced correctly",
                        "The collection must be stored in a linked list"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE TIME COMPLEXITY OF BINARY SEARCH?",
                    correct_answer: "O(log n)",
                    options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE BEST-CASE TIME COMPLEXITY OF LINEAR SEARCH?",
                    correct_answer: "O(1)",
                    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE WORST-CASE TIME COMPLEXITY OF LINEAR SEARCH?",
                    correct_answer: "O(n)",
                    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH SORTING ALGORITHM REPEATEDLY SWAPS ADJACENT ELEMENTS THAT ARE IN THE WRONG ORDER?",
                    correct_answer: "Bubble Sort",
                    options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE WORST-CASE TIME COMPLEXITY OF BUBBLE SORT?",
                    correct_answer: "O(n²)",
                    options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH SORTING ALGORITHM BUILDS A SORTED REGION BY INSERTING EACH NEW ELEMENT INTO ITS CORRECT POSITION?",
                    correct_answer: "Insertion Sort",
                    options: ["Selection Sort", "Insertion Sort", "Heap Sort", "Counting Sort"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE BEST-CASE TIME COMPLEXITY OF INSERTION SORT ON AN ALREADY SORTED ARRAY?",
                    correct_answer: "O(n)",
                    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH SORTING ALGORITHM REPEATEDLY SELECTS THE SMALLEST REMAINING ELEMENT?",
                    correct_answer: "Selection Sort",
                    options: ["Merge Sort", "Selection Sort", "Quick Sort", "Radix Sort"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE WORST-CASE TIME COMPLEXITY OF SELECTION SORT?",
                    correct_answer: "O(n²)",
                    options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH SORTING ALGORITHM DIVIDES AN ARRAY INTO SMALLER PARTS, SORTS THEM, AND MERGES THE RESULTS?",
                    correct_answer: "Merge Sort",
                    options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Linear Search"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE TIME COMPLEXITY OF MERGE SORT IN ITS BEST, AVERAGE, AND WORST CASES?",
                    correct_answer: "O(n log n)",
                    options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A COMMON SPACE COMPLEXITY OF ARRAY-BASED MERGE SORT?",
                    correct_answer: "O(n)",
                    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH SORTING ALGORITHM PARTITIONS ELEMENTS AROUND A PIVOT?",
                    correct_answer: "Quick Sort",
                    options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Counting Sort"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE AVERAGE TIME COMPLEXITY OF QUICK SORT?",
                    correct_answer: "O(n log n)",
                    options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE WORST-CASE TIME COMPLEXITY OF QUICK SORT?",
                    correct_answer: "O(n²)",
                    options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT FACTOR CAN CAUSE QUICK SORT TO REACH ITS WORST-CASE PERFORMANCE?",
                    correct_answer: "Repeatedly choosing highly unbalanced partitions",
                    options: [
                        "Using a sorted array in every implementation",
                        "Repeatedly choosing highly unbalanced partitions",
                        "Using integer values instead of strings",
                        "Having duplicate values in every input"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH SORTING ALGORITHM USES A HEAP TO SELECT ELEMENTS IN ORDER?",
                    correct_answer: "Heap Sort",
                    options: ["Merge Sort", "Bubble Sort", "Heap Sort", "Insertion Sort"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE WORST-CASE TIME COMPLEXITY OF HEAP SORT?",
                    correct_answer: "O(n log n)",
                    options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH SORTING ALGORITHM CAN SORT IN LINEAR TIME UNDER SUITABLE KEY-RANGE CONDITIONS?",
                    correct_answer: "Counting Sort",
                    options: ["Bubble Sort", "Counting Sort", "Quick Sort", "Merge Sort"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A STABLE SORTING ALGORITHM?",
                    correct_answer: "An algorithm that preserves the relative order of equal-key elements",
                    options: [
                        "An algorithm that never uses additional memory",
                        "An algorithm that preserves the relative order of equal-key elements",
                        "An algorithm that always runs in O(1)",
                        "An algorithm that cannot sort duplicate values"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES IT MEAN FOR A SORTING ALGORITHM TO BE IN-PLACE?",
                    correct_answer: "It uses only a small or constant amount of auxiliary memory, under the relevant definition",
                    options: [
                        "It sorts data directly inside a database",
                        "It uses only a small or constant amount of auxiliary memory, under the relevant definition",
                        "It never modifies the original collection",
                        "It always runs faster than O(n log n)"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS RECURSIVE ALGORITHM DESIGN?",
                    correct_answer: "Solving a problem by reducing it into smaller instances of the same problem",
                    options: [
                        "Solving a problem by repeating a loop only",
                        "Solving a problem by reducing it into smaller instances of the same problem",
                        "Solving a problem by using global variables",
                        "Solving a problem by sorting all input values first"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A STACK OVERFLOW IN RECURSIVE EXECUTION?",
                    correct_answer: "An error caused when the call stack exceeds its available capacity",
                    options: [
                        "An error caused by too many database records",
                        "An error caused when the call stack exceeds its available capacity",
                        "An error caused by a failed network connection",
                        "An error caused by an invalid array index only"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF MEMOIZATION?",
                    correct_answer: "To store results of previous function calls so repeated computations can be avoided",
                    options: [
                        "To delete previously calculated results",
                        "To store results of previous function calls so repeated computations can be avoided",
                        "To convert recursive code into machine code",
                        "To increase the number of recursive calls"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS DYNAMIC PROGRAMMING?",
                    correct_answer: "A problem-solving technique that stores and reuses solutions to overlapping subproblems",
                    options: [
                        "A technique that requires every problem to use recursion",
                        "A problem-solving technique that stores and reuses solutions to overlapping subproblems",
                        "A method for dynamically allocating operating system processes",
                        "A sorting algorithm based on random pivots"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT ARE OVERLAPPING SUBPROBLEMS?",
                    correct_answer: "Smaller problems that are solved repeatedly during the computation of a larger problem",
                    options: [
                        "Problems that cannot be solved independently",
                        "Smaller problems that are solved repeatedly during the computation of a larger problem",
                        "Problems that always require sorting",
                        "Problems that contain duplicate input values only"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES OPTIMAL SUBSTRUCTURE MEAN?",
                    correct_answer: "An optimal solution can be constructed from optimal solutions to its subproblems",
                    options: [
                        "An algorithm always uses the least possible memory",
                        "An optimal solution can be constructed from optimal solutions to its subproblems",
                        "Every subproblem must have the same input size",
                        "A problem can only be solved using recursion"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE DIFFERENCE BETWEEN TOP-DOWN AND BOTTOM-UP DYNAMIC PROGRAMMING?",
                    correct_answer: "Top-down uses recursion with caching, while bottom-up solves smaller subproblems iteratively",
                    options: [
                        "Top-down uses sorting while bottom-up uses searching",
                        "Top-down uses recursion with caching, while bottom-up solves smaller subproblems iteratively",
                        "Top-down requires a graph while bottom-up requires a tree",
                        "They are identical in implementation"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A GREEDY ALGORITHM?",
                    correct_answer: "An algorithm that makes a locally optimal choice at each step",
                    options: [
                        "An algorithm that explores every possible solution",
                        "An algorithm that makes a locally optimal choice at each step",
                        "An algorithm that always uses recursion",
                        "An algorithm that stores every intermediate result"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "DOES A GREEDY ALGORITHM ALWAYS PRODUCE A GLOBALLY OPTIMAL SOLUTION?",
                    correct_answer: "No, only when the problem has properties that justify the greedy strategy",
                    options: [
                        "Yes, for every optimization problem",
                        "No, only when the problem has properties that justify the greedy strategy",
                        "Yes, if the input is an array",
                        "No, because greedy algorithms cannot solve optimization problems"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE DIVIDE-AND-CONQUER APPROACH?",
                    correct_answer: "Breaking a problem into smaller subproblems, solving them, and combining their results",
                    options: [
                        "Solving a problem by randomly selecting one input",
                        "Breaking a problem into smaller subproblems, solving them, and combining their results",
                        "Storing every input in a hash table",
                        "Solving all possible subproblems sequentially without combining results"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH OF THESE ALGORITHMS IS A CLASSIC EXAMPLE OF DIVIDE AND CONQUER?",
                    correct_answer: "Merge Sort",
                    options: ["Linear Search", "Bubble Sort", "Merge Sort", "Insertion Sort"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A RECURRENCE RELATION IN ALGORITHM ANALYSIS?",
                    correct_answer: "An equation that describes an algorithm's running time in terms of smaller input sizes",
                    options: [
                        "A formula for allocating memory addresses",
                        "An equation that describes an algorithm's running time in terms of smaller input sizes",
                        "A rule for naming functions",
                        "A database relationship between two tables"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES THE MASTER THEOREM HELP ANALYZE?",
                    correct_answer: "The asymptotic running time of certain divide-and-conquer recurrences",
                    options: [
                        "The memory usage of every possible program",
                        "The asymptotic running time of certain divide-and-conquer recurrences",
                        "The correctness of every sorting algorithm",
                        "The number of nodes in every graph"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE BIG-O NOTATION USED FOR?",
                    correct_answer: "Describing an asymptotic upper bound on growth",
                    options: [
                        "Describing an exact execution time",
                        "Describing an asymptotic upper bound on growth",
                        "Measuring source-code length",
                        "Describing the number of variables in a function"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES BIG-OMEGA NOTATION REPRESENT?",
                    correct_answer: "An asymptotic lower bound on growth",
                    options: [
                        "An exact execution time",
                        "An asymptotic upper bound on growth",
                        "An asymptotic lower bound on growth",
                        "A memory allocation strategy"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES BIG-THETA NOTATION REPRESENT?",
                    correct_answer: "An asymptotically tight bound on growth",
                    options: [
                        "An asymptotic lower bound only",
                        "An asymptotic upper bound only",
                        "An asymptotically tight bound on growth",
                        "The exact number of processor instructions"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH COMPLEXITY GROWS MORE SLOWLY AS INPUT SIZE INCREASES?",
                    correct_answer: "O(log n)",
                    options: ["O(n²)", "O(n)", "O(n log n)", "O(log n)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH OF THE FOLLOWING HAS THE FASTEST ASYMPTOTIC GROWTH?",
                    correct_answer: "O(2^n)",
                    options: ["O(n log n)", "O(n²)", "O(2^n)", "O(n³)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF BACKTRACKING?",
                    correct_answer: "To explore possible solutions and abandon paths that cannot lead to a valid solution",
                    options: [
                        "To sort an array in constant time",
                        "To explore possible solutions and abandon paths that cannot lead to a valid solution",
                        "To store all values in a hash table",
                        "To prevent recursion from being used"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH PROBLEM IS A COMMON APPLICATION OF BACKTRACKING?",
                    correct_answer: "Solving Sudoku puzzles",
                    options: [
                        "Calculating the sum of two numbers",
                        "Solving Sudoku puzzles",
                        "Finding the maximum value in a sorted array",
                        "Printing a string"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS BRANCH AND BOUND?",
                    correct_answer: "An optimization technique that explores candidate solutions while pruning branches that cannot improve the current best solution",
                    options: [
                        "A technique for sorting linked lists",
                        "An optimization technique that explores candidate solutions while pruning branches that cannot improve the current best solution",
                        "A method of creating binary search trees",
                        "A technique for compressing source code"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE TRAVELLING SALESPERSON PROBLEM?",
                    correct_answer: "Finding a minimum-cost tour that visits each required city once and returns to the starting city",
                    options: [
                        "Finding the shortest path between any two nodes in a tree",
                        "Finding a minimum-cost tour that visits each required city once and returns to the starting city",
                        "Finding the largest value in a collection",
                        "Finding all connected components in a graph"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES NP-COMPLETE MEAN?",
                    correct_answer: "A problem is in NP and every problem in NP can be reduced to it in polynomial time",
                    options: [
                        "A problem that cannot be solved by a computer",
                        "A problem that always has a polynomial-time solution",
                        "A problem is in NP and every problem in NP can be reduced to it in polynomial time",
                        "A problem that requires exactly exponential time"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES IT MEAN FOR A PROBLEM TO BE IN CLASS P?",
                    correct_answer: "It can be solved in polynomial time by a deterministic algorithm",
                    options: [
                        "It can only be solved using parallel processors",
                        "It can be solved in polynomial time by a deterministic algorithm",
                        "It cannot be solved efficiently",
                        "It must use a priority queue"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES IT MEAN FOR A DECISION PROBLEM TO BE IN NP?",
                    correct_answer: "A proposed yes-solution can be verified in polynomial time by a deterministic algorithm",
                    options: [
                        "It must be solved in exponential time",
                        "A proposed yes-solution can be verified in polynomial time by a deterministic algorithm",
                        "It cannot be verified by a computer",
                        "It must contain a graph"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A POLYNOMIAL-TIME REDUCTION?",
                    correct_answer: "A transformation of one problem into another that can be performed in polynomial time",
                    options: [
                        "A method for converting arrays into linked lists",
                        "A transformation of one problem into another that can be performed in polynomial time",
                        "A sorting technique based on polynomial values",
                        "A method of reducing source-code size"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF A TRIE DATA STRUCTURE?",
                    correct_answer: "To efficiently store and search strings using shared prefixes",
                    options: [
                        "To store only numerical graphs",
                        "To efficiently store and search strings using shared prefixes",
                        "To sort linked lists in constant time",
                        "To manage operating system processes"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A COMMON ADVANTAGE OF A TRIE OVER A HASH TABLE FOR PREFIX SEARCH?",
                    correct_answer: "It naturally supports prefix-based queries",
                    options: [
                        "It always uses less memory",
                        "It naturally supports prefix-based queries",
                        "It guarantees constant-time searches for all strings",
                        "It prevents duplicate strings automatically in every implementation"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A BLOOM FILTER?",
                    correct_answer: "A probabilistic data structure used to test set membership with possible false positives but no false negatives under its standard assumptions",
                    options: [
                        "A sorting algorithm that uses random pivots",
                        "A probabilistic data structure used to test set membership with possible false positives but no false negatives under its standard assumptions",
                        "A tree that stores every value exactly",
                        "A graph traversal algorithm"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHY MIGHT A BLOOM FILTER BE USED BEFORE QUERYING A DATABASE?",
                    correct_answer: "To quickly determine that an item is definitely absent and avoid an unnecessary database lookup",
                    options: [
                        "To guarantee that every database query succeeds",
                        "To encrypt database records",
                        "To quickly determine that an item is definitely absent and avoid an unnecessary database lookup",
                        "To replace database transactions"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A SEGMENT TREE COMMONLY USED FOR?",
                    correct_answer: "Efficient range queries and updates over an array",
                    options: [
                        "Sorting strings alphabetically",
                        "Efficient range queries and updates over an array",
                        "Managing network connections",
                        "Storing encrypted passwords"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A FENWICK TREE ALSO KNOWN AS?",
                    correct_answer: "Binary Indexed Tree",
                    options: [
                        "Balanced Binary Tree",
                        "Binary Indexed Tree",
                        "Directed Acyclic Tree",
                        "Complete Search Tree"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE MAIN PURPOSE OF A FENWICK TREE?",
                    correct_answer: "To support efficient prefix-sum queries and point updates",
                    options: [
                        "To find shortest paths in weighted graphs",
                        "To support efficient prefix-sum queries and point updates",
                        "To sort arbitrary strings",
                        "To detect deadlocks in operating systems"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A DEQUE?",
                    correct_answer: "A double-ended queue that allows insertion and removal at both ends",
                    options: [
                        "A queue that allows insertion at one end only",
                        "A stack that stores two values",
                        "A double-ended queue that allows insertion and removal at both ends",
                        "A priority queue that sorts values automatically"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A CIRCULAR BUFFER?",
                    correct_answer: "A fixed-size buffer where positions wrap around when the end is reached",
                    options: [
                        "A buffer that grows without limits",
                        "A fixed-size buffer where positions wrap around when the end is reached",
                        "A linked list without a head node",
                        "A queue that permanently deletes its elements"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHY ARE CIRCULAR BUFFERS USEFUL IN STREAMING SYSTEMS?",
                    correct_answer: "They allow efficient reuse of a fixed amount of storage for incoming and outgoing data",
                    options: [
                        "They guarantee that data is never lost",
                        "They allow efficient reuse of a fixed amount of storage for incoming and outgoing data",
                        "They automatically encrypt every message",
                        "They eliminate the need for synchronization"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE TWO-POINTER TECHNIQUE?",
                    correct_answer: "An approach that uses two indices or references to traverse or process a data structure efficiently",
                    options: [
                        "An approach that always requires two separate arrays",
                        "An approach that uses two indices or references to traverse or process a data structure efficiently",
                        "A method of sorting with exactly two comparisons",
                        "A technique for creating two linked lists"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHEN IS THE SLIDING WINDOW TECHNIQUE PARTICULARLY USEFUL?",
                    correct_answer: "When solving problems involving contiguous subarrays or substrings",
                    options: [
                        "When building binary search trees",
                        "When solving problems involving contiguous subarrays or substrings",
                        "When encrypting database passwords",
                        "When compiling source code"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES THE PREFIX SUM TECHNIQUE HELP ACHIEVE?",
                    correct_answer: "Efficient calculation of sums over array ranges after preprocessing",
                    options: [
                        "Constant-time sorting of arrays",
                        "Efficient calculation of sums over array ranges after preprocessing",
                        "Automatic detection of duplicate strings",
                        "Shortest path calculation in every graph"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE TIME COMPLEXITY OF BUILDING A PREFIX SUM ARRAY FOR N ELEMENTS?",
                    correct_answer: "O(n)",
                    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE MAIN IDEA OF THE TWO-SUM PROBLEM?",
                    correct_answer: "Finding two elements whose sum equals a specified target",
                    options: [
                        "Finding two arrays with equal lengths",
                        "Finding two elements whose sum equals a specified target",
                        "Finding the two largest numbers in a matrix",
                        "Sorting an array using two comparisons"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "HOW CAN A HASH MAP IMPROVE THE AVERAGE TIME COMPLEXITY OF SOLVING TWO-SUM?",
                    correct_answer: "By storing previously seen values and checking for the required complement",
                    options: [
                        "By sorting the array repeatedly",
                        "By storing previously seen values and checking for the required complement",
                        "By converting the array into a graph",
                        "By recursively checking every possible pair"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE AVERAGE TIME COMPLEXITY OF THE HASH-MAP APPROACH TO TWO-SUM?",
                    correct_answer: "O(n)",
                    options: ["O(1)", "O(n)", "O(n²)", "O(n log n)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A PALINDROME IN STRING PROCESSING?",
                    correct_answer: "A string that reads the same forward and backward",
                    options: [
                        "A string containing only numbers",
                        "A string that reads the same forward and backward",
                        "A string with no repeated characters",
                        "A string sorted alphabetically"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF THE KMP STRING-MATCHING ALGORITHM?",
                    correct_answer: "To find occurrences of a pattern in text efficiently by reusing information from previous comparisons",
                    options: [
                        "To compress text into binary data",
                        "To sort characters alphabetically",
                        "To find occurrences of a pattern in text efficiently by reusing information from previous comparisons",
                        "To calculate the length of a string in constant time"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES THE LONGEST COMMON SUBSEQUENCE PROBLEM ASK?",
                    correct_answer: "To find the longest sequence appearing in two sequences in the same relative order, not necessarily contiguously",
                    options: [
                        "To find the longest substring in one string only",
                        "To find the longest sequence appearing in two sequences in the same relative order, not necessarily contiguously",
                        "To find the shortest path between two graph vertices",
                        "To find the most frequent character in an array"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE DIFFERENCE BETWEEN A SUBSTRING AND A SUBSEQUENCE?",
                    correct_answer: "A substring consists of contiguous elements, while a subsequence preserves relative order but need not be contiguous",
                    options: [
                        "A substring contains only numbers while a subsequence contains text",
                        "A substring consists of contiguous elements, while a subsequence preserves relative order but need not be contiguous",
                        "A substring is always longer than a subsequence",
                        "There is no difference"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF TOPOLOGICAL SORTING?",
                    correct_answer: "To order vertices of a directed acyclic graph so every directed edge points from an earlier vertex to a later vertex",
                    options: [
                        "To sort vertices by their numerical identifiers",
                        "To order vertices of a directed acyclic graph so every directed edge points from an earlier vertex to a later vertex",
                        "To find the minimum spanning tree",
                        "To find all negative cycles in a graph"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH REAL-WORLD PROBLEM CAN TOPOLOGICAL SORTING HELP SOLVE?",
                    correct_answer: "Determining a valid order for tasks with dependencies",
                    options: [
                        "Finding the largest value in an array",
                        "Determining a valid order for tasks with dependencies",
                        "Encrypting a password",
                        "Calculating the average of a list"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "CAN A DIRECTED GRAPH WITH A CYCLE HAVE A VALID TOPOLOGICAL ORDERING?",
                    correct_answer: "No",
                    options: ["Yes, always", "Yes, if it is weighted", "No", "Only if it has an even number of vertices"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A STRONGLY CONNECTED COMPONENT?",
                    correct_answer: "A maximal set of vertices in a directed graph where every vertex is reachable from every other vertex",
                    options: [
                        "A set of vertices connected by exactly one edge",
                        "A maximal set of vertices in a directed graph where every vertex is reachable from every other vertex",
                        "A collection of disconnected vertices",
                        "A minimum spanning tree"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH ALGORITHMS ARE COMMONLY USED TO FIND STRONGLY CONNECTED COMPONENTS?",
                    correct_answer: "Kosaraju's and Tarjan's algorithms",
                    options: [
                        "Dijkstra's and Prim's algorithms",
                        "Merge Sort and Quick Sort",
                        "Kosaraju's and Tarjan's algorithms",
                        "Bubble Sort and Selection Sort"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE FLOYD-WARSHALL ALGORITHM USED FOR?",
                    correct_answer: "Finding shortest paths between all pairs of vertices",
                    options: [
                        "Finding a minimum spanning tree",
                        "Finding shortest paths between all pairs of vertices",
                        "Sorting a linked list",
                        "Finding the largest element in an array"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE TIME COMPLEXITY OF THE STANDARD FLOYD-WARSHALL ALGORITHM?",
                    correct_answer: "O(V³)",
                    options: ["O(V)", "O(V²)", "O(V³)", "O(V + E)"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A BITSET OR BIT VECTOR?",
                    correct_answer: "A compact structure that represents a collection of Boolean values using individual bits",
                    options: [
                        "A tree that stores only integers",
                        "A compact structure that represents a collection of Boolean values using individual bits",
                        "A graph containing binary edges",
                        "A linked list with fixed-size nodes"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHY CAN BITWISE OPERATIONS BE USEFUL IN ALGORITHM DESIGN?",
                    correct_answer: "They allow efficient manipulation and testing of individual bits",
                    options: [
                        "They automatically reduce every algorithm to O(1)",
                        "They allow efficient manipulation and testing of individual bits",
                        "They replace all data structures",
                        "They prevent integer overflow in every language"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES THE BITWISE AND OPERATOR DO?",
                    correct_answer: "Sets a result bit to 1 only when both corresponding operand bits are 1",
                    options: [
                        "Sets a result bit to 1 when either operand bit is 1",
                        "Sets a result bit to 1 only when both corresponding operand bits are 1",
                        "Inverts every bit",
                        "Shifts every bit to the left"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DOES THE BITWISE XOR OPERATOR DO?",
                    correct_answer: "Sets a result bit to 1 when the corresponding operand bits are different",
                    options: [
                        "Sets a result bit to 1 when both bits are 1",
                        "Sets a result bit to 1 when the corresponding operand bits are different",
                        "Sets every result bit to 0",
                        "Copies only the left operand"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE RESULT OF XORING A NUMBER WITH ITSELF?",
                    correct_answer: "0",
                    options: ["1", "The original number", "0", "The negative number"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE RESULT OF XORING A NUMBER WITH ZERO?",
                    correct_answer: "The original number",
                    options: ["0", "1", "The original number", "The negative number"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF THE FAST AND SLOW POINTER TECHNIQUE IN LINKED LISTS?",
                    correct_answer: "To solve problems such as cycle detection and finding the middle node",
                    options: [
                        "To sort a linked list in constant time",
                        "To solve problems such as cycle detection and finding the middle node",
                        "To remove every duplicate node",
                        "To allocate memory for all nodes at once"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH ALGORITHM USES TWO POINTERS MOVING AT DIFFERENT SPEEDS TO DETECT A CYCLE IN A LINKED LIST?",
                    correct_answer: "Floyd's cycle detection algorithm",
                    options: [
                        "Dijkstra's algorithm",
                        "Floyd's cycle detection algorithm",
                        "Kruskal's algorithm",
                        "Binary Search"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF A MONOTONIC STACK?",
                    correct_answer: "To maintain elements in increasing or decreasing order for efficient nearest-greater or nearest-smaller queries",
                    options: [
                        "To store elements in random order",
                        "To maintain elements in increasing or decreasing order for efficient nearest-greater or nearest-smaller queries",
                        "To implement a FIFO queue",
                        "To store graph vertices permanently"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE MAIN PURPOSE OF A MONOTONIC QUEUE?",
                    correct_answer: "To efficiently maintain candidate minimum or maximum values over a moving window",
                    options: [
                        "To sort all elements using recursion",
                        "To efficiently maintain candidate minimum or maximum values over a moving window",
                        "To find the shortest path in every graph",
                        "To store values in alphabetical order"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE DIFFERENCE BETWEEN A TREE AND A GENERAL GRAPH?",
                    correct_answer: "A tree is a connected acyclic graph, while a general graph may contain cycles or disconnected components",
                    options: [
                        "A tree can contain cycles while a graph cannot",
                        "A tree is a connected acyclic graph, while a general graph may contain cycles or disconnected components",
                        "A graph cannot contain weighted edges",
                        "A tree must contain exactly two vertices"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "HOW MANY EDGES DOES A TREE WITH N VERTICES HAVE?",
                    correct_answer: "n - 1",
                    options: ["n", "n + 1", "2n", "n - 1"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE MAXIMUM NUMBER OF NODES AT LEVEL L OF A PERFECT BINARY TREE, WITH THE ROOT AT LEVEL ZERO?",
                    correct_answer: "2^l",
                    options: ["l²", "2l", "2^l", "l + 1"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A COMPLETE BINARY TREE?",
                    correct_answer: "A binary tree where every level is full except possibly the last, which is filled from left to right",
                    options: [
                        "A binary tree where every node has exactly two children",
                        "A binary tree where every level is full except possibly the last, which is filled from left to right",
                        "A binary tree where every leaf has the same value",
                        "A binary tree that contains no internal nodes"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A FULL BINARY TREE?",
                    correct_answer: "A binary tree in which every node has either zero or two children",
                    options: [
                        "A binary tree where all leaves are at the same level",
                        "A binary tree in which every node has either zero or two children",
                        "A binary tree where every level must be full",
                        "A binary tree containing only one child per node"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A PERFECT BINARY TREE?",
                    correct_answer: "A binary tree where all internal nodes have two children and all leaves are at the same level",
                    options: [
                        "A binary tree where every node has one child",
                        "A binary tree where all internal nodes have two children and all leaves are at the same level",
                        "A binary tree with an arbitrary number of missing nodes",
                        "A binary tree that stores only prime numbers"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF A BALANCED TREE?",
                    correct_answer: "To keep its height relatively small so operations such as searching and insertion remain efficient",
                    options: [
                        "To guarantee that every node has exactly two children",
                        "To keep its height relatively small so operations such as searching and insertion remain efficient",
                        "To ensure every node stores the same value",
                        "To prevent all tree traversals"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PURPOSE OF AN IN-ORDER TRAVERSAL OF A BINARY SEARCH TREE?",
                    correct_answer: "To visit the stored keys in sorted order",
                    options: [
                        "To visit the root before every other node",
                        "To visit the stored keys in sorted order",
                        "To visit only leaf nodes",
                        "To visit nodes in random order"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS PRE-ORDER TREE TRAVERSAL?",
                    correct_answer: "Visit the root, then the left subtree, then the right subtree",
                    options: [
                        "Visit the left subtree, then the root, then the right subtree",
                        "Visit the left subtree, then the right subtree, then the root",
                        "Visit the root, then the left subtree, then the right subtree",
                        "Visit nodes level by level"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS POST-ORDER TREE TRAVERSAL?",
                    correct_answer: "Visit the left subtree, then the right subtree, then the root",
                    options: [
                        "Visit the root, then the left subtree, then the right subtree",
                        "Visit the left subtree, then the right subtree, then the root",
                        "Visit the right subtree, then the root, then the left subtree",
                        "Visit nodes level by level"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH TRAVERSAL IS MOST SUITABLE FOR PROCESSING A TREE LEVEL BY LEVEL?",
                    correct_answer: "Level-order traversal",
                    options: [
                        "Pre-order traversal",
                        "Post-order traversal",
                        "In-order traversal",
                        "Level-order traversal"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE MAIN PURPOSE OF AN INTERVAL TREE OR INTERVAL-BASED DATA STRUCTURE?",
                    correct_answer: "To efficiently store and query intervals, such as finding overlapping ranges",
                    options: [
                        "To sort strings by length",
                        "To efficiently store and query intervals, such as finding overlapping ranges",
                        "To detect memory leaks",
                        "To calculate shortest paths in unweighted graphs"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHY IS CHOOSING THE RIGHT DATA STRUCTURE IMPORTANT?",
                    correct_answer: "It affects the time and memory costs of the operations an application performs",
                    options: [
                        "It determines the programming language used",
                        "It affects the time and memory costs of the operations an application performs",
                        "It guarantees that the program has no bugs",
                        "It removes the need for algorithms"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "A SYSTEM FREQUENTLY LOOKS UP USERS BY UNIQUE ID. WHICH DATA STRUCTURE IS OFTEN SUITABLE FOR FAST AVERAGE-CASE LOOKUPS?",
                    correct_answer: "Hash map",
                    options: [
                        "Stack",
                        "Queue",
                        "Hash map",
                        "Unsorted linked list"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "A SYSTEM MUST PROCESS TASKS IN THE ORDER THEY ARRIVE. WHICH DATA STRUCTURE IS MOST APPROPRIATE?",
                    correct_answer: "Queue",
                    options: [
                        "Stack",
                        "Queue",
                        "Max-heap",
                        "Binary search tree"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "A SYSTEM MUST QUICKLY RETRIEVE THE HIGHEST-PRIORITY TASK. WHICH DATA STRUCTURE IS APPROPRIATE?",
                    correct_answer: "Priority queue",
                    options: [
                        "Unsorted array only",
                        "Stack",
                        "Priority queue",
                        "Circular linked list"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHY MIGHT A DATABASE USE A B-TREE OR B+ TREE INDEX?",
                    correct_answer: "To support efficient searching and ordered range queries with fewer disk accesses",
                    options: [
                        "To guarantee that every query takes constant time",
                        "To support efficient searching and ordered range queries with fewer disk accesses",
                        "To store application source code",
                        "To prevent duplicate records automatically"
                    ],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE MAIN DIFFERENCE BETWEEN A B-TREE AND A B+ TREE?",
                    correct_answer: "In a B+ tree, records or record pointers are typically stored at leaf nodes, while internal nodes primarily guide searches",
                    options: [
                        "A B-tree cannot contain multiple children",
                        "A B+ tree stores all records only in internal nodes",
                        "In a B+ tree, records or record pointers are typically stored at leaf nodes, while internal nodes primarily guide searches",
                        "A B+ tree cannot support range queries"
                    ],
                    creator: "system",
                    status: "undone"
                },
                
                {
                    question: "WHAT IS THE PRIMARY PURPOSE OF SOFTWARE MODULARITY?",
                    correct_answer: "To divide a system into manageable, independent components",
                    options: [
                        "To divide a system into manageable, independent components",
                        "To eliminate the need for testing",
                        "To make every component depend on every other component",
                        "To reduce the number of programming languages used"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES HIGH COHESION MEAN IN SOFTWARE DESIGN?",
                    correct_answer: "A module's responsibilities are closely related",
                    options: [
                        "A module's responsibilities are closely related",
                        "A module depends on many unrelated modules",
                        "A module contains as many functions as possible",
                        "A module communicates directly with every other module"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES LOW COUPLING AIM TO ACHIEVE?",
                    correct_answer: "Minimize dependencies between components",
                    options: [
                        "Minimize dependencies between components",
                        "Maximize communication between all components",
                        "Place all logic in one module",
                        "Prevent components from exchanging data"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH SOFTWARE DESIGN PRINCIPLE STATES THAT A CLASS SHOULD HAVE ONE REASON TO CHANGE?",
                    correct_answer: "Single Responsibility Principle",
                    options: [
                        "Open/Closed Principle",
                        "Single Responsibility Principle",
                        "Dependency Inversion Principle",
                        "Interface Segregation Principle"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES THE OPEN/CLOSED PRINCIPLE REQUIRE?",
                    correct_answer: "Software entities should be open for extension but closed for modification",
                    options: [
                        "Software entities should be open for extension but closed for modification",
                        "Every class should be open to direct modification",
                        "All classes should be closed to inheritance",
                        "Software should not support new features"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE MAIN IDEA OF THE LISKOV SUBSTITUTION PRINCIPLE?",
                    correct_answer: "Subtypes should be usable wherever their base types are expected",
                    options: [
                        "Subtypes should be usable wherever their base types are expected",
                        "Every class must inherit from multiple classes",
                        "Subclasses should remove inherited behavior",
                        "Objects should never be replaced at runtime"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES THE INTERFACE SEGREGATION PRINCIPLE RECOMMEND?",
                    correct_answer: "Prefer small, specific interfaces over large general-purpose interfaces",
                    options: [
                        "Prefer small, specific interfaces over large general-purpose interfaces",
                        "Use one interface for the entire application",
                        "Avoid interfaces completely",
                        "Require every class to implement every available method"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE DEPENDENCY INVERSION PRINCIPLE?",
                    correct_answer: "High-level and low-level modules should depend on abstractions",
                    options: [
                        "High-level and low-level modules should depend on abstractions",
                        "Low-level modules should control all high-level modules",
                        "All dependencies should be global variables",
                        "High-level modules should directly instantiate every dependency"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PRIMARY PURPOSE OF A DESIGN PATTERN?",
                    correct_answer: "To provide a reusable approach to a recurring design problem",
                    options: [
                        "To provide a reusable approach to a recurring design problem",
                        "To guarantee that software has no bugs",
                        "To replace the need for architecture",
                        "To provide a programming language syntax"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH DESIGN PATTERN ENSURES THAT A CLASS HAS ONLY ONE INSTANCE?",
                    correct_answer: "Singleton",
                    options: [
                        "Factory",
                        "Observer",
                        "Singleton",
                        "Strategy"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH DESIGN PATTERN ALLOWS OBJECTS TO NOTIFY SUBSCRIBERS WHEN THEIR STATE CHANGES?",
                    correct_answer: "Observer",
                    options: [
                        "Builder",
                        "Observer",
                        "Singleton",
                        "Adapter"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PURPOSE OF THE FACTORY DESIGN PATTERN?",
                    correct_answer: "To encapsulate object creation",
                    options: [
                        "To encapsulate object creation",
                        "To manage database transactions",
                        "To encrypt network traffic",
                        "To monitor application memory"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT PROBLEM DOES THE ADAPTER DESIGN PATTERN SOLVE?",
                    correct_answer: "It allows incompatible interfaces to work together",
                    options: [
                        "It allows incompatible interfaces to work together",
                        "It prevents objects from communicating",
                        "It creates database indexes",
                        "It automatically handles authentication"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE STRATEGY DESIGN PATTERN USED FOR?",
                    correct_answer: "Making algorithms interchangeable",
                    options: [
                        "Making algorithms interchangeable",
                        "Creating a single global object",
                        "Managing database schemas",
                        "Preventing inheritance"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE MAIN PURPOSE OF THE BUILDER PATTERN?",
                    correct_answer: "Constructing complex objects step by step",
                    options: [
                        "Constructing complex objects step by step",
                        "Managing concurrent database writes",
                        "Connecting unrelated network protocols",
                        "Replacing all object constructors"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS SOFTWARE ARCHITECTURE PRIMARILY CONCERNED WITH?",
                    correct_answer: "The major structures and interactions of a software system",
                    options: [
                        "The major structures and interactions of a software system",
                        "The exact syntax of every function",
                        "The visual appearance of source code",
                        "The number of comments in a project"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT CHARACTERIZES A MONOLITHIC ARCHITECTURE?",
                    correct_answer: "The application is built and deployed as one unit",
                    options: [
                        "The application is built and deployed as one unit",
                        "Every feature runs on a separate physical computer",
                        "The application contains no modules",
                        "Every database operation uses a separate server"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A MICROSERVICE?",
                    correct_answer: "A small, independently deployable service focused on a specific capability",
                    options: [
                        "A small, independently deployable service focused on a specific capability",
                        "A function that cannot communicate over a network",
                        "A database table containing application logs",
                        "A user interface component"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A MAJOR TRADE-OFF OF MICROSERVICE ARCHITECTURE?",
                    correct_answer: "Greater operational and communication complexity",
                    options: [
                        "Greater operational and communication complexity",
                        "Complete elimination of network failures",
                        "Guaranteed simpler debugging",
                        "Elimination of data consistency concerns"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PRIMARY RESPONSIBILITY OF AN API GATEWAY?",
                    correct_answer: "Providing a common entry point for client requests to backend services",
                    options: [
                        "Providing a common entry point for client requests to backend services",
                        "Replacing every database in the system",
                        "Storing all user passwords in plain text",
                        "Compiling application source code"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES THE TERM SCALABILITY MEAN?",
                    correct_answer: "The ability of a system to handle increasing workload",
                    options: [
                        "The ability of a system to handle increasing workload",
                        "The ability to eliminate all software defects",
                        "The ability to run without an operating system",
                        "The ability to avoid using databases"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS HORIZONTAL SCALING?",
                    correct_answer: "Adding more machines or instances to handle workload",
                    options: [
                        "Adding more machines or instances to handle workload",
                        "Increasing the RAM of one machine",
                        "Reducing the number of application servers",
                        "Moving all application logic into one process"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS VERTICAL SCALING?",
                    correct_answer: "Increasing the resources of an existing machine",
                    options: [
                        "Adding more application instances",
                        "Increasing the resources of an existing machine",
                        "Splitting one service into multiple services",
                        "Distributing requests across multiple regions"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS LOAD BALANCING?",
                    correct_answer: "Distributing incoming workload across multiple resources",
                    options: [
                        "Distributing incoming workload across multiple resources",
                        "Encrypting every incoming request",
                        "Backing up a database",
                        "Compressing application source files"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PURPOSE OF A CACHE?",
                    correct_answer: "To store frequently accessed data for faster retrieval",
                    options: [
                        "To store frequently accessed data for faster retrieval",
                        "To permanently replace the primary database",
                        "To prevent all network communication",
                        "To automatically validate user permissions"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS CACHE INVALIDATION?",
                    correct_answer: "Removing or updating cached data when it is no longer valid",
                    options: [
                        "Removing or updating cached data when it is no longer valid",
                        "Encrypting cached data",
                        "Increasing the size of the database",
                        "Preventing users from accessing cached data"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PRIMARY PURPOSE OF A MESSAGE QUEUE?",
                    correct_answer: "To enable asynchronous communication between components",
                    options: [
                        "To enable asynchronous communication between components",
                        "To replace all application programming languages",
                        "To store passwords for authentication",
                        "To eliminate the need for network protocols"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES ASYNCHRONOUS PROCESSING ALLOW?",
                    correct_answer: "A task to proceed without requiring the caller to wait for its completion",
                    options: [
                        "A task to proceed without requiring the caller to wait for its completion",
                        "Every task to execute simultaneously on one CPU core",
                        "A database to ignore transaction rules",
                        "A program to avoid handling errors"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS EVENT-DRIVEN ARCHITECTURE?",
                    correct_answer: "An architecture in which components communicate through events",
                    options: [
                        "An architecture in which components communicate through events",
                        "An architecture where all operations happen in one database transaction",
                        "An architecture that prohibits background processing",
                        "An architecture that uses only synchronous function calls"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A DATABASE TRANSACTION?",
                    correct_answer: "A logical unit of work that is treated as a single operation",
                    options: [
                        "A logical unit of work that is treated as a single operation",
                        "A permanent database backup",
                        "A connection between two web browsers",
                        "A method for formatting SQL queries"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES ACID STAND FOR IN DATABASE SYSTEMS?",
                    correct_answer: "Atomicity, Consistency, Isolation, Durability",
                    options: [
                        "Atomicity, Consistency, Isolation, Durability",
                        "Accuracy, Control, Integrity, Distribution",
                        "Access, Concurrency, Indexing, Deletion",
                        "Atomicity, Caching, Integration, Delivery"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES ATOMICITY GUARANTEE?",
                    correct_answer: "A transaction completes entirely or has no effect",
                    options: [
                        "A transaction completes entirely or has no effect",
                        "Every transaction executes at the same time",
                        "All database records are encrypted",
                        "Every transaction must modify at least one row"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES DURABILITY GUARANTEE?",
                    correct_answer: "Committed changes survive system failures",
                    options: [
                        "Committed changes survive system failures",
                        "Uncommitted changes are always saved",
                        "Every query executes instantly",
                        "A database never requires backups"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS DATABASE NORMALIZATION?",
                    correct_answer: "Organizing data to reduce redundancy and undesirable dependencies",
                    options: [
                        "Organizing data to reduce redundancy and undesirable dependencies",
                        "Encrypting every database column",
                        "Increasing the number of duplicate records",
                        "Converting every table into a single column"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A PRIMARY KEY?",
                    correct_answer: "A column or set of columns that uniquely identifies each row",
                    options: [
                        "A column or set of columns that uniquely identifies each row",
                        "A column that stores only text",
                        "A column used exclusively for sorting",
                        "A column that must contain duplicate values"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A FOREIGN KEY?",
                    correct_answer: "A column or set of columns that references a key in another or the same table",
                    options: [
                        "A column or set of columns that references a key in another or the same table",
                        "A key used to encrypt database backups",
                        "A password required to access a database",
                        "A column that must contain unique values in every case"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PURPOSE OF A DATABASE INDEX?",
                    correct_answer: "To improve the speed of data retrieval",
                    options: [
                        "To improve the speed of data retrieval",
                        "To guarantee that every write operation is faster",
                        "To eliminate the need for primary keys",
                        "To prevent database transactions"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A POSSIBLE DISADVANTAGE OF ADDING TOO MANY DATABASE INDEXES?",
                    correct_answer: "They can increase storage usage and slow down write operations",
                    options: [
                        "They can increase storage usage and slow down write operations",
                        "They automatically delete duplicate records",
                        "They prevent all table scans",
                        "They remove the need for database backups"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A DATABASE DEADLOCK?",
                    correct_answer: "A situation where transactions wait indefinitely for resources held by each other",
                    options: [
                        "A situation where transactions wait indefinitely for resources held by each other",
                        "A database server running out of disk space",
                        "A query returning an empty result",
                        "A connection being closed after a request"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A DATABASE ISOLATION LEVEL?",
                    correct_answer: "A setting that controls how concurrent transactions interact",
                    options: [
                        "A setting that controls how concurrent transactions interact",
                        "A setting that determines the database password",
                        "A setting that controls table naming conventions",
                        "A setting that determines how backups are compressed"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A DIRTY READ?",
                    correct_answer: "Reading data written by another transaction that has not committed",
                    options: [
                        "Reading data written by another transaction that has not committed",
                        "Reading a row with a NULL value",
                        "Reading a table without an index",
                        "Reading data from a database backup"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A NON-REPEATABLE READ?",
                    correct_answer: "Reading the same row twice and getting different committed values",
                    options: [
                        "Reading the same row twice and getting different committed values",
                        "Reading a row that does not exist",
                        "Reading the same database table from two servers",
                        "Reading data without using a transaction"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A PHANTOM READ?",
                    correct_answer: "Repeating a query and finding additional or missing rows that satisfy its conditions",
                    options: [
                        "Repeating a query and finding additional or missing rows that satisfy its conditions",
                        "Reading uncommitted data from another transaction",
                        "Reading the same row with a different value",
                        "Reading data from a corrupted database file"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PURPOSE OF A DATABASE CONNECTION POOL?",
                    correct_answer: "To reuse database connections instead of creating a new one for every operation",
                    options: [
                        "To reuse database connections instead of creating a new one for every operation",
                        "To permanently store database query results",
                        "To prevent multiple users from accessing the database",
                        "To automatically create database tables"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS AN ORM?",
                    correct_answer: "A tool that maps objects in application code to relational database structures",
                    options: [
                        "A tool that maps objects in application code to relational database structures",
                        "A protocol for encrypting network traffic",
                        "A system for managing operating system processes",
                        "A programming language for database servers"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A DATABASE MIGRATION?",
                    correct_answer: "A controlled change to a database schema or structure",
                    options: [
                        "A controlled change to a database schema or structure",
                        "A method for deleting all database records",
                        "A process for encrypting network requests",
                        "A method for compiling application code"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A DATABASE SCHEMA?",
                    correct_answer: "The defined structure and organization of a database",
                    options: [
                        "The defined structure and organization of a database",
                        "A copy of all database records",
                        "A database user's password",
                        "A list of all network connections"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES SQL STAND FOR?",
                    correct_answer: "Structured Query Language",
                    options: [
                        "Structured Query Language",
                        "Standard Question Logic",
                        "System Query Link",
                        "Sequential Quality Language"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH SQL COMMAND IS USED TO RETRIEVE DATA?",
                    correct_answer: "SELECT",
                    options: [
                        "INSERT",
                        "UPDATE",
                        "SELECT",
                        "DELETE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH SQL COMMAND IS USED TO MODIFY EXISTING ROWS?",
                    correct_answer: "UPDATE",
                    options: [
                        "CREATE",
                        "UPDATE",
                        "SELECT",
                        "DROP"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PURPOSE OF THE SQL WHERE CLAUSE?",
                    correct_answer: "To filter rows based on specified conditions",
                    options: [
                        "To filter rows based on specified conditions",
                        "To sort rows alphabetically",
                        "To create a new database",
                        "To define a table's primary key"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES AN INNER JOIN RETURN?",
                    correct_answer: "Rows with matching values in both joined tables",
                    options: [
                        "All rows from the left table",
                        "All rows from both tables regardless of matches",
                        "Rows with matching values in both joined tables",
                        "Only rows containing NULL values"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES A LEFT JOIN RETURN?",
                    correct_answer: "All rows from the left table and matching rows from the right table",
                    options: [
                        "Only rows matching in both tables",
                        "All rows from the left table and matching rows from the right table",
                        "All rows from the right table only",
                        "Only rows that have no matching records"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PURPOSE OF THE SQL GROUP BY CLAUSE?",
                    correct_answer: "To group rows that share values for specified columns",
                    options: [
                        "To group rows that share values for specified columns",
                        "To delete duplicate records",
                        "To define foreign key constraints",
                        "To sort database tables by size"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES THE SQL HAVING CLAUSE FILTER?",
                    correct_answer: "Groups produced by GROUP BY",
                    options: [
                        "Individual rows before grouping",
                        "Groups produced by GROUP BY",
                        "Database users",
                        "Table indexes"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS SQL INJECTION?",
                    correct_answer: "An attack that manipulates SQL queries through untrusted input",
                    options: [
                        "An attack that manipulates SQL queries through untrusted input",
                        "A technique for improving query performance",
                        "A method for backing up a database",
                        "A technique for compressing SQL statements"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "HOW CAN PARAMETERIZED QUERIES HELP PREVENT SQL INJECTION?",
                    correct_answer: "They separate query structure from supplied data",
                    options: [
                        "They separate query structure from supplied data",
                        "They automatically encrypt the entire database",
                        "They prevent users from submitting any input",
                        "They remove the need for database permissions"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS AN API?",
                    correct_answer: "A defined interface through which software components communicate",
                    options: [
                        "A defined interface through which software components communicate",
                        "A physical device used to store source code",
                        "A programming language compiler",
                        "A database backup format"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES REST STAND FOR?",
                    correct_answer: "Representational State Transfer",
                    options: [
                        "Remote Execution Service Technology",
                        "Representational State Transfer",
                        "Reliable Exchange System Transfer",
                        "Resource Execution State Technique"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH HTTP METHOD IS GENERALLY USED TO RETRIEVE A RESOURCE?",
                    correct_answer: "GET",
                    options: [
                        "POST",
                        "PATCH",
                        "GET",
                        "DELETE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH HTTP METHOD IS GENERALLY USED TO CREATE A RESOURCE?",
                    correct_answer: "POST",
                    options: [
                        "GET",
                        "POST",
                        "HEAD",
                        "OPTIONS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH HTTP METHOD IS GENERALLY USED TO REPLACE A RESOURCE?",
                    correct_answer: "PUT",
                    options: [
                        "PATCH",
                        "GET",
                        "PUT",
                        "HEAD"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH HTTP METHOD IS GENERALLY USED FOR PARTIAL RESOURCE UPDATES?",
                    correct_answer: "PATCH",
                    options: [
                        "DELETE",
                        "POST",
                        "PATCH",
                        "OPTIONS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES HTTP STATUS CODE 200 INDICATE?",
                    correct_answer: "The request succeeded",
                    options: [
                        "The request succeeded",
                        "The resource was not found",
                        "The server encountered an error",
                        "The client is unauthorized"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES HTTP STATUS CODE 201 INDICATE?",
                    correct_answer: "A resource was successfully created",
                    options: [
                        "The request was redirected",
                        "A resource was successfully created",
                        "The request was unauthorized",
                        "The server encountered an error"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES HTTP STATUS CODE 400 GENERALLY INDICATE?",
                    correct_answer: "The client sent an invalid request",
                    options: [
                        "The server is unavailable",
                        "The client sent an invalid request",
                        "The resource was created",
                        "The request succeeded"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES HTTP STATUS CODE 401 INDICATE?",
                    correct_answer: "Authentication is required or has failed",
                    options: [
                        "The resource does not exist",
                        "The server encountered an internal error",
                        "Authentication is required or has failed",
                        "The request succeeded"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES HTTP STATUS CODE 403 INDICATE?",
                    correct_answer: "The server understood the request but refuses authorization",
                    options: [
                        "The server understood the request but refuses authorization",
                        "The resource was successfully created",
                        "The client must retry immediately",
                        "The server cannot locate the requested host"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES HTTP STATUS CODE 404 INDICATE?",
                    correct_answer: "The requested resource was not found",
                    options: [
                        "The request succeeded",
                        "The requested resource was not found",
                        "The server encountered an internal error",
                        "The client is authenticated"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES HTTP STATUS CODE 500 INDICATE?",
                    correct_answer: "An internal server error occurred",
                    options: [
                        "The request was permanently redirected",
                        "The client sent invalid data",
                        "An internal server error occurred",
                        "The requested resource was not found"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS IDEMPOTENCY IN API DESIGN?",
                    correct_answer: "Repeating an operation produces the same intended effect as performing it once",
                    options: [
                        "Repeating an operation produces the same intended effect as performing it once",
                        "Every request must produce a different result",
                        "A request can only be sent once",
                        "A request must always create a new database record"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH HTTP METHODS ARE DEFINED AS IDEMPOTENT BY HTTP SEMANTICS?",
                    correct_answer: "GET, PUT, DELETE, HEAD, OPTIONS, and TRACE",
                    options: [
                        "GET, POST, and PATCH only",
                        "POST, PATCH, and CONNECT only",
                        "GET, PUT, DELETE, HEAD, OPTIONS, and TRACE",
                        "POST, PUT, and CONNECT only"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS API VERSIONING USED FOR?",
                    correct_answer: "Managing changes while maintaining compatibility for existing clients",
                    options: [
                        "Managing changes while maintaining compatibility for existing clients",
                        "Increasing database storage automatically",
                        "Preventing all API requests from failing",
                        "Replacing authentication mechanisms"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS RATE LIMITING?",
                    correct_answer: "Restricting how frequently a client can make requests",
                    options: [
                        "Restricting how frequently a client can make requests",
                        "Limiting the number of database tables",
                        "Reducing the size of HTTP headers",
                        "Preventing all concurrent requests"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PURPOSE OF PAGINATION IN AN API?",
                    correct_answer: "To return large result sets in smaller portions",
                    options: [
                        "To return large result sets in smaller portions",
                        "To encrypt API responses",
                        "To prevent clients from sorting results",
                        "To guarantee that records never change"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE DIFFERENCE BETWEEN AUTHENTICATION AND AUTHORIZATION?",
                    correct_answer: "Authentication verifies identity, while authorization determines permitted actions",
                    options: [
                        "Authentication verifies identity, while authorization determines permitted actions",
                        "Authentication grants permissions, while authorization creates accounts",
                        "Both terms mean exactly the same thing",
                        "Authorization verifies identity, while authentication controls database storage"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS MULTI-FACTOR AUTHENTICATION?",
                    correct_answer: "Using two or more different categories of evidence to verify identity",
                    options: [
                        "Using two or more different categories of evidence to verify identity",
                        "Using multiple passwords from the same category",
                        "Using one password on multiple devices",
                        "Allowing several users to share one account"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHY SHOULD PASSWORDS BE HASHED BEFORE STORAGE?",
                    correct_answer: "To avoid storing passwords in directly recoverable form",
                    options: [
                        "To avoid storing passwords in directly recoverable form",
                        "To allow administrators to retrieve user passwords",
                        "To reduce the number of database tables",
                        "To make password comparison unnecessary"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH OF THESE IS DESIGNED SPECIFICALLY FOR PASSWORD HASHING?",
                    correct_answer: "Argon2",
                    options: [
                        "MD5",
                        "SHA-1",
                        "Argon2",
                        "CRC32"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A SALT IN PASSWORD HASHING?",
                    correct_answer: "A unique random value added to a password before hashing",
                    options: [
                        "A unique random value added to a password before hashing",
                        "A secret key used to decrypt passwords",
                        "A database record containing the original password",
                        "A fixed value shared by every user"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PURPOSE OF HTTPS?",
                    correct_answer: "To protect HTTP communication using TLS",
                    options: [
                        "To protect HTTP communication using TLS",
                        "To make every website publicly accessible",
                        "To eliminate the need for authentication",
                        "To compress all application source code"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE MAIN PURPOSE OF TLS?",
                    correct_answer: "To provide confidentiality, integrity, and authentication for communication",
                    options: [
                        "To provide confidentiality, integrity, and authentication for communication",
                        "To store application database records",
                        "To execute background jobs",
                        "To compile encrypted source code"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS CROSS-SITE SCRIPTING (XSS)?",
                    correct_answer: "An attack where malicious scripts execute in a victim's browser",
                    options: [
                        "An attack where malicious scripts execute in a victim's browser",
                        "An attack that physically damages a server",
                        "An attack that deletes database indexes",
                        "A method for improving frontend performance"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS CROSS-SITE REQUEST FORGERY (CSRF)?",
                    correct_answer: "An attack that tricks an authenticated browser into making an unwanted request",
                    options: [
                        "An attack that tricks an authenticated browser into making an unwanted request",
                        "An attack that modifies application source code during compilation",
                        "An attack that guesses database table names",
                        "A method for encrypting browser cookies"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PURPOSE OF INPUT VALIDATION?",
                    correct_answer: "To ensure supplied data satisfies expected rules before processing",
                    options: [
                        "To ensure supplied data satisfies expected rules before processing",
                        "To guarantee that every user is trustworthy",
                        "To eliminate the need for database constraints",
                        "To automatically encrypt all incoming requests"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHY IS OUTPUT ENCODING IMPORTANT?",
                    correct_answer: "It helps prevent untrusted data from being interpreted as executable content",
                    options: [
                        "It helps prevent untrusted data from being interpreted as executable content",
                        "It guarantees that database queries run faster",
                        "It removes the need for authentication",
                        "It prevents users from submitting text"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PRINCIPLE OF LEAST PRIVILEGE?",
                    correct_answer: "Giving each user or component only the permissions it needs",
                    options: [
                        "Giving each user or component only the permissions it needs",
                        "Giving every user administrator access",
                        "Removing all permissions from the system",
                        "Allowing components to access every database table"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS ROLE-BASED ACCESS CONTROL (RBAC)?",
                    correct_answer: "Assigning permissions to roles and assigning roles to users",
                    options: [
                        "Assigning permissions to roles and assigning roles to users",
                        "Giving every user a separate database server",
                        "Granting access based only on network speed",
                        "Assigning passwords to database tables"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS ATTRIBUTE-BASED ACCESS CONTROL (ABAC)?",
                    correct_answer: "Making access decisions using attributes of users, resources, actions, and context",
                    options: [
                        "Making access decisions using attributes of users, resources, actions, and context",
                        "Granting access based only on a user's username",
                        "Assigning every permission to a single administrator",
                        "Using database indexes to determine user identity"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PURPOSE OF A SECURITY AUDIT LOG?",
                    correct_answer: "To record security-relevant events for investigation and accountability",
                    options: [
                        "To record security-relevant events for investigation and accountability",
                        "To store users' plaintext passwords",
                        "To replace application backups",
                        "To automatically approve every user action"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS SOFTWARE TESTING?",
                    correct_answer: "Evaluating software to find defects and assess whether it meets requirements",
                    options: [
                        "Evaluating software to find defects and assess whether it meets requirements",
                        "Writing source code without executing it",
                        "Deploying software to production",
                        "Creating database backups"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS UNIT TESTING?",
                    correct_answer: "Testing a small, isolated unit of software",
                    options: [
                        "Testing a small, isolated unit of software",
                        "Testing an entire organization",
                        "Testing a complete production environment",
                        "Testing only the user interface"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS INTEGRATION TESTING?",
                    correct_answer: "Testing interactions between multiple components",
                    options: [
                        "Testing interactions between multiple components",
                        "Testing only individual functions in isolation",
                        "Testing the appearance of a website",
                        "Testing whether a computer can boot"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS SYSTEM TESTING?",
                    correct_answer: "Testing the complete integrated system against its requirements",
                    options: [
                        "Testing the complete integrated system against its requirements",
                        "Testing only one function",
                        "Testing only the database connection",
                        "Testing individual variables"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS ACCEPTANCE TESTING?",
                    correct_answer: "Checking whether software satisfies user or business acceptance criteria",
                    options: [
                        "Checking whether software satisfies user or business acceptance criteria",
                        "Checking whether source code follows indentation rules",
                        "Checking whether a database index exists",
                        "Checking whether a server has enough RAM"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS REGRESSION TESTING?",
                    correct_answer: "Checking that changes have not broken previously working functionality",
                    options: [
                        "Checking that changes have not broken previously working functionality",
                        "Checking only newly written code",
                        "Measuring the number of users online",
                        "Testing software for the first time"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A TEST DOUBLE?",
                    correct_answer: "A replacement for a real dependency used during testing",
                    options: [
                        "A replacement for a real dependency used during testing",
                        "A second copy of the production database",
                        "A duplicate application deployment",
                        "A test that must always run twice"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A MOCK OBJECT?",
                    correct_answer: "A test double that can simulate behavior and verify interactions",
                    options: [
                        "A test double that can simulate behavior and verify interactions",
                        "A production database backup",
                        "A tool that automatically fixes source code",
                        "A duplicate user account"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A STUB IN SOFTWARE TESTING?",
                    correct_answer: "A replacement dependency that provides predefined responses",
                    options: [
                        "A replacement dependency that provides predefined responses",
                        "A tool that checks source code formatting",
                        "A database transaction that has failed",
                        "A deployment package containing compiled code"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES TEST COVERAGE MEASURE?",
                    correct_answer: "How much of the code or specified behavior is exercised by tests",
                    options: [
                        "How much of the code or specified behavior is exercised by tests",
                        "How many users have installed the software",
                        "How many bugs exist in production",
                        "How much storage the test database uses"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "DOES 100 PERCENT CODE COVERAGE GUARANTEE BUG-FREE SOFTWARE?",
                    correct_answer: "No, executed code can still contain incorrect behavior",
                    options: [
                        "Yes, it guarantees every possible behavior is correct",
                        "No, executed code can still contain incorrect behavior",
                        "Yes, if the tests run successfully once",
                        "No, because code coverage cannot be measured"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS TEST-DRIVEN DEVELOPMENT (TDD)?",
                    correct_answer: "Writing a failing test before implementing the behavior that makes it pass",
                    options: [
                        "Writing a failing test before implementing the behavior that makes it pass",
                        "Writing all application code before considering tests",
                        "Testing only after production deployment",
                        "Replacing automated tests with manual inspection"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT ARE THE THREE COMMON STEPS OF THE TDD CYCLE?",
                    correct_answer: "Red, Green, Refactor",
                    options: [
                        "Plan, Build, Deploy",
                        "Red, Green, Refactor",
                        "Design, Compile, Release",
                        "Create, Execute, Delete"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PURPOSE OF A SMOKE TEST?",
                    correct_answer: "To quickly check whether the major functions of a build work",
                    options: [
                        "To quickly check whether the major functions of a build work",
                        "To test every possible input combination",
                        "To measure the physical temperature of a server",
                        "To verify the application's visual design only"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A LOAD TEST?",
                    correct_answer: "Evaluating system behavior under expected or specified workload",
                    options: [
                        "Evaluating system behavior under expected or specified workload",
                        "Checking whether source code compiles",
                        "Testing whether a database can be backed up",
                        "Verifying user interface colors"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A STRESS TEST?",
                    correct_answer: "Evaluating system behavior beyond normal operating conditions",
                    options: [
                        "Evaluating system behavior beyond normal operating conditions",
                        "Testing only the normal expected workload",
                        "Checking source code formatting",
                        "Testing a single function without dependencies"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A PERFORMANCE BOTTLENECK?",
                    correct_answer: "A component that limits the overall performance of a system",
                    options: [
                        "A component that limits the overall performance of a system",
                        "A component that always improves throughput",
                        "A database table with no records",
                        "A function that has no return value"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS LATENCY?",
                    correct_answer: "The time taken for an operation or request to receive a response",
                    options: [
                        "The total number of requests handled per second",
                        "The time taken for an operation or request to receive a response",
                        "The amount of memory used by a process",
                        "The number of servers in a cluster"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THROUGHPUT?",
                    correct_answer: "The amount of work completed within a given period",
                    options: [
                        "The amount of work completed within a given period",
                        "The time taken for one request to finish",
                        "The number of source files in a project",
                        "The amount of memory available to a process"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PURPOSE OF PROFILING SOFTWARE?",
                    correct_answer: "To identify where a program spends time or consumes resources",
                    options: [
                        "To identify where a program spends time or consumes resources",
                        "To automatically generate user documentation",
                        "To replace the application's compiler",
                        "To create new database records"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A MEMORY LEAK?",
                    correct_answer: "A situation where allocated memory is no longer needed but remains unavailable for reuse",
                    options: [
                        "A situation where allocated memory is no longer needed but remains unavailable for reuse",
                        "A situation where a program uses less memory than expected",
                        "A situation where a database loses a connection",
                        "A situation where a file cannot be opened"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A RACE CONDITION?",
                    correct_answer: "A situation where behavior depends on the timing or ordering of concurrent operations",
                    options: [
                        "A situation where behavior depends on the timing or ordering of concurrent operations",
                        "A situation where a program executes too slowly",
                        "A situation where two variables have the same value",
                        "A situation where a server receives too many HTTP requests"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A MUTEX?",
                    correct_answer: "A synchronization mechanism that provides mutual exclusion",
                    options: [
                        "A synchronization mechanism that provides mutual exclusion",
                        "A database backup mechanism",
                        "A network routing protocol",
                        "A programming language compiler"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A SEMAPHORE?",
                    correct_answer: "A synchronization mechanism that controls access to a limited number of resources",
                    options: [
                        "A synchronization mechanism that controls access to a limited number of resources",
                        "A mechanism for encrypting passwords",
                        "A tool for formatting source code",
                        "A method for storing database schemas"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A THREAD?",
                    correct_answer: "A unit of execution within a process",
                    options: [
                        "A unit of execution within a process",
                        "A separate physical computer",
                        "A database transaction",
                        "A network packet"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A PROCESS?",
                    correct_answer: "An instance of a running program with its own execution context",
                    options: [
                        "An instance of a running program with its own execution context",
                        "A function stored in a source file",
                        "A collection of database tables",
                        "A single HTTP request"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE DIFFERENCE BETWEEN CONCURRENCY AND PARALLELISM?",
                    correct_answer: "Concurrency manages overlapping tasks, while parallelism executes tasks simultaneously",
                    options: [
                        "Concurrency manages overlapping tasks, while parallelism executes tasks simultaneously",
                        "Concurrency always requires multiple CPUs, while parallelism does not",
                        "Both terms mean that tasks must execute sequentially",
                        "Parallelism is only possible in distributed databases"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A DEADLOCK IN CONCURRENT PROGRAMMING?",
                    correct_answer: "A state where tasks wait indefinitely for resources held by one another",
                    options: [
                        "A state where tasks wait indefinitely for resources held by one another",
                        "A state where a thread finishes successfully",
                        "A state where all threads execute at maximum speed",
                        "A state where memory is automatically released"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A DISTRIBUTED SYSTEM?",
                    correct_answer: "A collection of independent computers that coordinate to provide a system",
                    options: [
                        "A collection of independent computers that coordinate to provide a system",
                        "A single computer running several text editors",
                        "A database stored in one memory location",
                        "A program that cannot communicate over a network"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS FAULT TOLERANCE?",
                    correct_answer: "The ability of a system to continue operating when some components fail",
                    options: [
                        "The ability of a system to continue operating when some components fail",
                        "The ability to prevent every possible failure",
                        "The ability to compile code without warnings",
                        "The ability to avoid all network communication"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS REDUNDANCY IN SYSTEM DESIGN?",
                    correct_answer: "Providing duplicate components or resources to reduce single points of failure",
                    options: [
                        "Providing duplicate components or resources to reduce single points of failure",
                        "Storing duplicate source code comments",
                        "Removing all backup systems",
                        "Using only one server for every operation"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A SINGLE POINT OF FAILURE?",
                    correct_answer: "A component whose failure can cause the entire system or a critical part to fail",
                    options: [
                        "A component whose failure can cause the entire system or a critical part to fail",
                        "A component that has multiple independent backups",
                        "A component that handles one request at a time",
                        "A component that has no external dependencies"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES HIGH AVAILABILITY MEAN?",
                    correct_answer: "A system is designed to remain accessible for a high proportion of time",
                    options: [
                        "A system is designed to remain accessible for a high proportion of time",
                        "A system can handle unlimited requests",
                        "A system never requires maintenance",
                        "A system always responds in zero milliseconds"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A CIRCUIT BREAKER PATTERN?",
                    correct_answer: "A pattern that temporarily stops calls to a failing dependency",
                    options: [
                        "A pattern that temporarily stops calls to a failing dependency",
                        "A pattern that permanently deletes failed services",
                        "A pattern that increases database connection counts",
                        "A pattern that encrypts every application request"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A RETRY MECHANISM?",
                    correct_answer: "A strategy that attempts an operation again after a failure",
                    options: [
                        "A strategy that attempts an operation again after a failure",
                        "A strategy that ignores all failures",
                        "A method for deleting failed database records",
                        "A mechanism that prevents users from making requests"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHY IS EXPONENTIAL BACKOFF USED WHEN RETRYING FAILED REQUESTS?",
                    correct_answer: "To progressively increase the delay between retries and reduce pressure on a failing service",
                    options: [
                        "To progressively increase the delay between retries and reduce pressure on a failing service",
                        "To make every retry happen immediately",
                        "To guarantee that the first request succeeds",
                        "To prevent all network timeouts"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS OBSERVABILITY IN SOFTWARE SYSTEMS?",
                    correct_answer: "The ability to understand internal system behavior from its external outputs",
                    options: [
                        "The ability to understand internal system behavior from its external outputs",
                        "The ability to view source code without authentication",
                        "The ability to run software without logs",
                        "The ability to automatically prevent every application failure"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH THREE SIGNALS ARE COMMONLY ASSOCIATED WITH OBSERVABILITY?",
                    correct_answer: "Logs, metrics, and traces",
                    options: [
                        "Routes, controllers, and models",
                        "Logs, metrics, and traces",
                        "Users, passwords, and sessions",
                        "Files, folders, and processes"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A LOG IN SOFTWARE ENGINEERING?",
                    correct_answer: "A recorded event or message describing application activity",
                    options: [
                        "A recorded event or message describing application activity",
                        "A database table used only for authentication",
                        "A list of every variable in memory",
                        "A method for encrypting application source code"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS DISTRIBUTED TRACING USED FOR?",
                    correct_answer: "Following a request as it moves across multiple services",
                    options: [
                        "Following a request as it moves across multiple services",
                        "Tracking only database storage capacity",
                        "Measuring the physical location of servers",
                        "Recording every user's password"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS CONTINUOUS INTEGRATION (CI)?",
                    correct_answer: "Frequently integrating code changes and automatically validating them",
                    options: [
                        "Frequently integrating code changes and automatically validating them",
                        "Deploying every change directly to production without checks",
                        "Manually merging code once per year",
                        "Writing software without version control"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS CONTINUOUS DELIVERY?",
                    correct_answer: "Keeping software in a state where it can be released reliably at any time",
                    options: [
                        "Keeping software in a state where it can be released reliably at any time",
                        "Automatically releasing every change to all users",
                        "Delivering source code only through email",
                        "Running tests only after production failures"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS CONTINUOUS DEPLOYMENT?",
                    correct_answer: "Automatically releasing changes to production after they pass the required pipeline checks",
                    options: [
                        "Automatically releasing changes to production after they pass the required pipeline checks",
                        "Manually approving every production deployment",
                        "Deploying software without running tests",
                        "Creating a new development branch every day"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS VERSION CONTROL?",
                    correct_answer: "A system for tracking and managing changes to files over time",
                    options: [
                        "A system for tracking and managing changes to files over time",
                        "A system for encrypting network traffic",
                        "A system for allocating RAM to processes",
                        "A system for managing database transactions"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A GIT COMMIT?",
                    correct_answer: "A recorded snapshot of changes in a repository's history",
                    options: [
                        "A recorded snapshot of changes in a repository's history",
                        "A command that permanently deletes a repository",
                        "A remote server used to host code",
                        "A programming language package"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A GIT BRANCH?",
                    correct_answer: "A movable reference to a line of development",
                    options: [
                        "A separate physical copy of a computer",
                        "A movable reference to a line of development",
                        "A database table containing commit messages",
                        "A command used to compile source code"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES GIT MERGE DO?",
                    correct_answer: "Combines changes from different development histories",
                    options: [
                        "Combines changes from different development histories",
                        "Deletes all remote branches",
                        "Replaces the repository's commit history with a blank history",
                        "Uploads compiled binaries to a database"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A MERGE CONFLICT?",
                    correct_answer: "A situation where Git cannot automatically reconcile competing changes",
                    options: [
                        "A situation where Git cannot automatically reconcile competing changes",
                        "A situation where a repository has no commits",
                        "A situation where a branch has been renamed",
                        "A situation where Git cannot connect to the internet"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A PULL REQUEST?",
                    correct_answer: "A proposal to review and integrate changes into another branch",
                    options: [
                        "A proposal to review and integrate changes into another branch",
                        "A request to download a programming language",
                        "A command that deletes a remote repository",
                        "A method for running database migrations"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS CODE REVIEW?",
                    correct_answer: "Examining code changes to identify problems and improve quality",
                    options: [
                        "Examining code changes to identify problems and improve quality",
                        "Automatically translating code into another language",
                        "Testing only the application's user interface",
                        "Deploying software without developer approval"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS REFACTORING?",
                    correct_answer: "Improving internal code structure without changing its external behavior",
                    options: [
                        "Improving internal code structure without changing its external behavior",
                        "Adding new features without testing",
                        "Deleting the entire application and rewriting it",
                        "Changing the programming language of a project"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS TECHNICAL DEBT?",
                    correct_answer: "The future cost of maintaining or changing software due to earlier design or implementation decisions",
                    options: [
                        "The future cost of maintaining or changing software due to earlier design or implementation decisions",
                        "Money borrowed to purchase software licenses",
                        "The cost of hosting a production server",
                        "The number of unresolved compiler warnings"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS LEGACY SOFTWARE?",
                    correct_answer: "Existing software that remains in use, often despite being built with older technologies or approaches",
                    options: [
                        "Existing software that remains in use, often despite being built with older technologies or approaches",
                        "Software that has never been deployed",
                        "Software that is always written in assembly language",
                        "Software that contains no external dependencies"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS BACKWARD COMPATIBILITY?",
                    correct_answer: "The ability of a newer version to continue supporting older clients or interfaces",
                    options: [
                        "The ability of a newer version to continue supporting older clients or interfaces",
                        "The ability to execute only older source code",
                        "The ability to reverse every database transaction",
                        "The ability to run software without dependencies"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS FORWARD COMPATIBILITY?",
                    correct_answer: "The ability of an older system to tolerate or work with newer data or components",
                    options: [
                        "The ability of an older system to tolerate or work with newer data or components",
                        "The ability to restore an old database backup",
                        "The ability to execute code in reverse order",
                        "The ability to prevent future software updates"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A SOFTWARE REQUIREMENT?",
                    correct_answer: "A documented need, capability, or constraint that a system must satisfy",
                    options: [
                        "A documented need, capability, or constraint that a system must satisfy",
                        "A programming language syntax rule",
                        "A database backup schedule",
                        "A list of source code comments"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A FUNCTIONAL REQUIREMENT?",
                    correct_answer: "A description of what the system must do",
                    options: [
                        "A description of what the system must do",
                        "A description of how fast the system must respond",
                        "A description of the hardware's physical dimensions",
                        "A description of the developer's preferred editor"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A NON-FUNCTIONAL REQUIREMENT?",
                    correct_answer: "A requirement describing a quality attribute or constraint of the system",
                    options: [
                        "A requirement describing a quality attribute or constraint of the system",
                        "A requirement describing a specific user action only",
                        "A requirement describing a database row",
                        "A requirement describing the order of source code files"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH OF THESE IS AN EXAMPLE OF A NON-FUNCTIONAL REQUIREMENT?",
                    correct_answer: "The API must respond within 200 milliseconds under the specified workload",
                    options: [
                        "Users can reset their passwords",
                        "Administrators can create elections",
                        "The API must respond within 200 milliseconds under the specified workload",
                        "Customers can view their transaction history"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS REQUIREMENTS ELICITATION?",
                    correct_answer: "The process of discovering requirements from stakeholders and other sources",
                    options: [
                        "The process of discovering requirements from stakeholders and other sources",
                        "The process of compiling application code",
                        "The process of deploying software to production",
                        "The process of creating database indexes"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A USE CASE?",
                    correct_answer: "A description of how an actor interacts with a system to achieve a goal",
                    options: [
                        "A description of how an actor interacts with a system to achieve a goal",
                        "A list of programming language keywords",
                        "A database query used to retrieve records",
                        "A deployment script for production servers"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A USER STORY?",
                    correct_answer: "A short description of a feature from the perspective of a user",
                    options: [
                        "A short description of a feature from the perspective of a user",
                        "A detailed description of database indexes",
                        "A record of every developer's daily activities",
                        "A technical specification of network hardware"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS AN ACCEPTANCE CRITERION?",
                    correct_answer: "A condition that must be satisfied for a requirement or feature to be accepted",
                    options: [
                        "A condition that must be satisfied for a requirement or feature to be accepted",
                        "A condition that determines which programming language is used",
                        "A condition that guarantees zero production bugs",
                        "A condition that defines how source files are named"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PURPOSE OF A SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC)?",
                    correct_answer: "To provide a structured process for planning, building, testing, deploying, and maintaining software",
                    options: [
                        "To provide a structured process for planning, building, testing, deploying, and maintaining software",
                        "To define a single programming language for all projects",
                        "To eliminate the need for project management",
                        "To ensure software is developed without documentation"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH DEVELOPMENT MODEL ORGANIZES WORK INTO REPEATED, TIME-BOXED ITERATIONS?",
                    correct_answer: "Agile",
                    options: [
                        "Waterfall",
                        "Big Bang",
                        "Agile",
                        "V-Model"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A SPRINT IN SCRUM?",
                    correct_answer: "A fixed-length period during which a team works toward a defined goal",
                    options: [
                        "A fixed-length period during which a team works toward a defined goal",
                        "A production server restart",
                        "A type of database transaction",
                        "A meeting held only after a project ends"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PURPOSE OF A DAILY SCRUM?",
                    correct_answer: "To inspect progress toward the sprint goal and adapt the team's plan",
                    options: [
                        "To inspect progress toward the sprint goal and adapt the team's plan",
                        "To approve all production deployments",
                        "To replace the sprint review",
                        "To write the project's technical documentation"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A PRODUCT BACKLOG?",
                    correct_answer: "An ordered list of work needed to improve a product",
                    options: [
                        "An ordered list of work needed to improve a product",
                        "A list of all production database records",
                        "A collection of completed application binaries",
                        "A record of every software defect ever reported"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE WATERFALL MODEL?",
                    correct_answer: "A development approach that organizes work into sequential phases",
                    options: [
                        "A development approach that organizes work into sequential phases",
                        "A method where requirements change every hour",
                        "A method that prohibits documentation",
                        "A development approach based entirely on automated deployment"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A FEASIBILITY STUDY IN SOFTWARE DEVELOPMENT?",
                    correct_answer: "An assessment of whether a proposed project is practical and achievable",
                    options: [
                        "An assessment of whether a proposed project is practical and achievable",
                        "A test that measures application response time",
                        "A process for removing unused database tables",
                        "A review of programming language syntax"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS SOFTWARE MAINTAINABILITY?",
                    correct_answer: "How easily software can be modified, corrected, or improved",
                    options: [
                        "How easily software can be modified, corrected, or improved",
                        "How many users can access the software at once",
                        "How quickly the software can be installed",
                        "How much disk space the source code occupies"
                    ],
                    creator: "system",
                    status: 'undone'
                },
             
                {
                    question: "WHAT IS THE PRIMARY PURPOSE OF A COMPILER?",
                    correct_answer: "TO TRANSLATE SOURCE CODE INTO ANOTHER FORM THAT CAN BE EXECUTED",
                    options: [
                        "TO STORE APPLICATION DATA",
                        "TO TRANSLATE SOURCE CODE INTO ANOTHER FORM THAT CAN BE EXECUTED",
                        "TO MANAGE NETWORK CONNECTIONS",
                        "TO DESIGN USER INTERFACES"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE DIFFERENCE BETWEEN A COMPILER AND AN INTERPRETER?",
                    correct_answer: "A COMPILER TRANSLATES CODE BEFORE EXECUTION, WHILE AN INTERPRETER EXECUTES CODE THROUGH A RUNTIME",
                    options: [
                        "A COMPILER ONLY WORKS WITH DATABASES",
                        "AN INTERPRETER ALWAYS PRODUCES MACHINE CODE FILES",
                        "A COMPILER TRANSLATES CODE BEFORE EXECUTION, WHILE AN INTERPRETER EXECUTES CODE THROUGH A RUNTIME",
                        "THERE IS NO DIFFERENCE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS SOURCE CODE?",
                    correct_answer: "HUMAN-WRITTEN INSTRUCTIONS EXPRESSED IN A PROGRAMMING LANGUAGE",
                    options: [
                        "THE FINAL EXECUTABLE MEMORY IMAGE",
                        "HUMAN-WRITTEN INSTRUCTIONS EXPRESSED IN A PROGRAMMING LANGUAGE",
                        "A DATABASE BACKUP",
                        "A NETWORK PACKET"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS BYTECODE?",
                    correct_answer: "AN INTERMEDIATE INSTRUCTION FORMAT EXECUTED BY A VIRTUAL MACHINE OR RUNTIME",
                    options: [
                        "A TYPE OF DATABASE INDEX",
                        "A HUMAN-READABLE DESIGN DOCUMENT",
                        "AN INTERMEDIATE INSTRUCTION FORMAT EXECUTED BY A VIRTUAL MACHINE OR RUNTIME",
                        "A HARDWARE NETWORK ADDRESS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS MACHINE CODE?",
                    correct_answer: "INSTRUCTIONS ENCODED FOR DIRECT EXECUTION BY A PROCESSOR",
                    options: [
                        "INSTRUCTIONS ENCODED FOR DIRECT EXECUTION BY A PROCESSOR",
                        "A PROGRAMMING LANGUAGE USED ONLY FOR WEB DEVELOPMENT",
                        "A DATABASE QUERY LANGUAGE",
                        "A FORM OF DOCUMENTATION"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES STATIC TYPING MEAN?",
                    correct_answer: "TYPE CONSTRAINTS ARE CHECKED BEFORE PROGRAM EXECUTION",
                    options: [
                        "VARIABLES CANNOT BE CHANGED",
                        "TYPE CONSTRAINTS ARE CHECKED BEFORE PROGRAM EXECUTION",
                        "ALL VALUES MUST BE STRINGS",
                        "TYPES ARE DETERMINED ONLY BY DATABASE SCHEMAS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES DYNAMIC TYPING MEAN?",
                    correct_answer: "TYPES ARE ASSOCIATED WITH VALUES AND CHECKED DURING EXECUTION",
                    options: [
                        "THE PROGRAM HAS NO DATA TYPES",
                        "ALL VARIABLES MUST BE DECLARED AS INTEGERS",
                        "TYPES ARE ASSOCIATED WITH VALUES AND CHECKED DURING EXECUTION",
                        "THE COMPILER NEVER CHECKS ANYTHING"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS TYPE SAFETY?",
                    correct_answer: "THE PREVENTION OR DETECTION OF INVALID OPERATIONS ON VALUES OF INCOMPATIBLE TYPES",
                    options: [
                        "THE ABILITY TO ENCRYPT SOURCE CODE",
                        "THE PREVENTION OR DETECTION OF INVALID OPERATIONS ON VALUES OF INCOMPATIBLE TYPES",
                        "THE ABILITY TO RUN WITHOUT AN OPERATING SYSTEM",
                        "THE PRACTICE OF USING ONLY ONE DATA TYPE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PRIMARY ROLE OF A RUNTIME ENVIRONMENT?",
                    correct_answer: "TO PROVIDE SERVICES AND SUPPORT REQUIRED WHILE A PROGRAM EXECUTES",
                    options: [
                        "TO DESIGN DATABASE TABLES",
                        "TO WRITE SOURCE CODE AUTOMATICALLY",
                        "TO PROVIDE SERVICES AND SUPPORT REQUIRED WHILE A PROGRAM EXECUTES",
                        "TO REPLACE THE COMPUTER'S PROCESSOR"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A VIRTUAL MACHINE IN SOFTWARE EXECUTION?",
                    correct_answer: "A SOFTWARE-IMPLEMENTED ENVIRONMENT THAT PROVIDES AN EXECUTION MODEL",
                    options: [
                        "A PHYSICAL SERVER ROOM",
                        "A SOFTWARE-IMPLEMENTED ENVIRONMENT THAT PROVIDES AN EXECUTION MODEL",
                        "A NETWORK ROUTER",
                        "A DATABASE REPLICATION METHOD"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE STACK MEMORY PRIMARILY USED FOR?",
                    correct_answer: "STORING FUNCTION CALL FRAMES AND LOCAL EXECUTION DATA",
                    options: [
                        "STORING PERMANENT DATABASE RECORDS",
                        "STORING FUNCTION CALL FRAMES AND LOCAL EXECUTION DATA",
                        "STORING REMOTE SERVER LOGS",
                        "STORING FILE SYSTEM PERMISSIONS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS HEAP MEMORY PRIMARILY USED FOR?",
                    correct_answer: "DYNAMICALLY ALLOCATED MEMORY DURING PROGRAM EXECUTION",
                    options: [
                        "DYNAMICALLY ALLOCATED MEMORY DURING PROGRAM EXECUTION",
                        "ONLY CPU INSTRUCTIONS",
                        "ONLY FUNCTION RETURN ADDRESSES",
                        "PERMANENT STORAGE ON A HARD DRIVE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS GARBAGE COLLECTION?",
                    correct_answer: "AUTOMATIC RECLAMATION OF MEMORY THAT IS NO LONGER REACHABLE OR NEEDED",
                    options: [
                        "DELETING OLD DATABASE TABLES",
                        "AUTOMATIC RECLAMATION OF MEMORY THAT IS NO LONGER REACHABLE OR NEEDED",
                        "REMOVING UNUSED SOURCE CODE COMMENTS",
                        "COMPRESSING NETWORK PACKETS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A MEMORY LEAK?",
                    correct_answer: "MEMORY THAT IS NO LONGER USEFUL BUT REMAINS ALLOCATED OR UNRECLAIMED",
                    options: [
                        "A FAILED DATABASE CONNECTION",
                        "MEMORY THAT IS NO LONGER USEFUL BUT REMAINS ALLOCATED OR UNRECLAIMED",
                        "A MISSING NETWORK ROUTE",
                        "A SYNTAX ERROR IN A FUNCTION"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A POINTER?",
                    correct_answer: "A VALUE THAT STORES THE MEMORY ADDRESS OF ANOTHER VALUE",
                    options: [
                        "A VALUE THAT STORES THE MEMORY ADDRESS OF ANOTHER VALUE",
                        "A DATABASE PRIMARY KEY",
                        "A FUNCTION THAT RETURNS A STRING",
                        "A NETWORK CONNECTION POOL"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A NULL POINTER?",
                    correct_answer: "A POINTER THAT DOES NOT REFER TO A VALID OBJECT OR MEMORY LOCATION",
                    options: [
                        "A POINTER THAT ALWAYS REFERENCES THE FIRST MEMORY ADDRESS",
                        "A POINTER THAT DOES NOT REFER TO A VALID OBJECT OR MEMORY LOCATION",
                        "A POINTER THAT CONTAINS A DATABASE PASSWORD",
                        "A POINTER THAT AUTOMATICALLY FREES ALL MEMORY"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS IMMUTABILITY IN PROGRAMMING?",
                    correct_answer: "A PROPERTY THAT PREVENTS A VALUE OR OBJECT FROM BEING MODIFIED AFTER CREATION",
                    options: [
                        "THE ABILITY TO CHANGE ANY VARIABLE AT ANY TIME",
                        "A PROPERTY THAT PREVENTS A VALUE OR OBJECT FROM BEING MODIFIED AFTER CREATION",
                        "THE PROCESS OF DELETING OBJECTS",
                        "THE USE OF ONLY GLOBAL VARIABLES"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A PURE FUNCTION?",
                    correct_answer: "A FUNCTION THAT RETURNS THE SAME OUTPUT FOR THE SAME INPUTS WITHOUT SIDE EFFECTS",
                    options: [
                        "A FUNCTION THAT ALWAYS RETURNS NULL",
                        "A FUNCTION THAT USES ONLY GLOBAL VARIABLES",
                        "A FUNCTION THAT RETURNS THE SAME OUTPUT FOR THE SAME INPUTS WITHOUT SIDE EFFECTS",
                        "A FUNCTION THAT CAN NEVER ACCEPT PARAMETERS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A SIDE EFFECT IN PROGRAMMING?",
                    correct_answer: "A CHANGE OR INTERACTION OUTSIDE A FUNCTION'S RETURN VALUE",
                    options: [
                        "A CHANGE OR INTERACTION OUTSIDE A FUNCTION'S RETURN VALUE",
                        "A FUNCTION THAT RETURNS AN INTEGER",
                        "A VARIABLE DECLARED INSIDE A LOOP",
                        "A COMPILER OPTIMIZATION"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS RECURSION?",
                    correct_answer: "A TECHNIQUE WHERE A FUNCTION CALLS ITSELF TO SOLVE A PROBLEM",
                    options: [
                        "A TECHNIQUE WHERE A FUNCTION CALLS ITSELF TO SOLVE A PROBLEM",
                        "A METHOD OF CONNECTING TWO DATABASES",
                        "A WAY OF DECLARING CONSTANTS",
                        "A PROCESS OF COMPILING CODE TWICE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHY DOES A RECURSIVE FUNCTION NEED A BASE CASE?",
                    correct_answer: "TO PROVIDE A CONDITION THAT STOPS FURTHER RECURSIVE CALLS",
                    options: [
                        "TO MAKE THE FUNCTION RUN FASTER IN EVERY CASE",
                        "TO PROVIDE A CONDITION THAT STOPS FURTHER RECURSIVE CALLS",
                        "TO CREATE A DATABASE CONNECTION",
                        "TO ALLOCATE MORE STACK MEMORY"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS TIME COMPLEXITY?",
                    correct_answer: "A DESCRIPTION OF HOW AN ALGORITHM'S RUNNING TIME GROWS WITH INPUT SIZE",
                    options: [
                        "THE EXACT TIME A PROGRAM TAKES ON EVERY COMPUTER",
                        "A DESCRIPTION OF HOW AN ALGORITHM'S RUNNING TIME GROWS WITH INPUT SIZE",
                        "THE AMOUNT OF STORAGE A DATABASE USES",
                        "THE NUMBER OF PROGRAMMING LANGUAGES USED"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES O(1) TIME COMPLEXITY REPRESENT?",
                    correct_answer: "CONSTANT TIME THAT DOES NOT GROW WITH INPUT SIZE",
                    options: [
                        "TIME THAT DOUBLES WITH EVERY INPUT ELEMENT",
                        "TIME THAT GROWS LINEARLY WITH INPUT SIZE",
                        "CONSTANT TIME THAT DOES NOT GROW WITH INPUT SIZE",
                        "TIME THAT GROWS EXPONENTIALLY"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES O(N) TIME COMPLEXITY REPRESENT?",
                    correct_answer: "RUNNING TIME THAT GROWS LINEARLY WITH INPUT SIZE",
                    options: [
                        "RUNNING TIME THAT GROWS LINEARLY WITH INPUT SIZE",
                        "CONSTANT RUNNING TIME",
                        "RUNNING TIME THAT ALWAYS REMAINS ZERO",
                        "RUNNING TIME THAT GROWS ONLY WITH MEMORY SIZE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES O(N SQUARED) TIME COMPLEXITY OFTEN INDICATE?",
                    correct_answer: "RUNNING TIME THAT GROWS PROPORTIONALLY TO THE SQUARE OF INPUT SIZE",
                    options: [
                        "CONSTANT RUNNING TIME",
                        "RUNNING TIME THAT GROWS PROPORTIONALLY TO THE SQUARE OF INPUT SIZE",
                        "RUNNING TIME THAT GROWS LOGARITHMICALLY",
                        "RUNNING TIME THAT IS INDEPENDENT OF INPUT SIZE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS SPACE COMPLEXITY?",
                    correct_answer: "A DESCRIPTION OF HOW AN ALGORITHM'S MEMORY REQUIREMENTS GROW WITH INPUT SIZE",
                    options: [
                        "THE PHYSICAL SIZE OF A COMPUTER",
                        "THE NUMBER OF FILES IN A PROJECT",
                        "A DESCRIPTION OF HOW AN ALGORITHM'S MEMORY REQUIREMENTS GROW WITH INPUT SIZE",
                        "THE NUMBER OF DATABASE SERVERS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH DATA STRUCTURE USES LAST-IN, FIRST-OUT ORDERING?",
                    correct_answer: "STACK",
                    options: [
                        "QUEUE",
                        "STACK",
                        "LINKED LIST",
                        "HASH TABLE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH DATA STRUCTURE USES FIRST-IN, FIRST-OUT ORDERING?",
                    correct_answer: "QUEUE",
                    options: [
                        "STACK",
                        "TREE",
                        "QUEUE",
                        "GRAPH"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A LINKED LIST?",
                    correct_answer: "A SEQUENCE OF NODES WHERE EACH NODE REFERENCES THE NEXT NODE OR OTHER NODES",
                    options: [
                        "A COLLECTION OF DATABASE TABLES",
                        "A SEQUENCE OF NODES WHERE EACH NODE REFERENCES THE NEXT NODE OR OTHER NODES",
                        "A SORTED ARRAY STORED ON DISK",
                        "A NETWORK ROUTING PROTOCOL"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A HASH TABLE?",
                    correct_answer: "A DATA STRUCTURE THAT USES HASHING TO MAP KEYS TO STORAGE LOCATIONS",
                    options: [
                        "A DATA STRUCTURE THAT USES HASHING TO MAP KEYS TO STORAGE LOCATIONS",
                        "A STRUCTURE THAT STORES ONLY SORTED NUMBERS",
                        "A FILE SYSTEM PERMISSION TABLE",
                        "A DATABASE TRANSACTION LOG"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A HASH COLLISION?",
                    correct_answer: "WHEN TWO DIFFERENT KEYS PRODUCE THE SAME HASHED LOCATION OR VALUE",
                    options: [
                        "WHEN A DATABASE SERVER SHUTS DOWN",
                        "WHEN TWO DIFFERENT KEYS PRODUCE THE SAME HASHED LOCATION OR VALUE",
                        "WHEN TWO FUNCTIONS HAVE THE SAME NAME",
                        "WHEN A NETWORK PACKET IS LOST"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A BINARY SEARCH TREE?",
                    correct_answer: "A TREE WHERE VALUES IN EACH NODE'S LEFT SUBTREE ARE SMALLER AND RIGHT SUBTREE VALUES ARE LARGER, UNDER ITS ORDERING RULE",
                    options: [
                        "A TREE THAT STORES ONLY TWO RECORDS",
                        "A TREE WHERE VALUES IN EACH NODE'S LEFT SUBTREE ARE SMALLER AND RIGHT SUBTREE VALUES ARE LARGER, UNDER ITS ORDERING RULE",
                        "A DATABASE TABLE WITH TWO COLUMNS",
                        "A GRAPH WITH EXACTLY TWO EDGES"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A GRAPH DATA STRUCTURE?",
                    correct_answer: "A COLLECTION OF VERTICES CONNECTED BY EDGES",
                    options: [
                        "A COLLECTION OF VERTICES CONNECTED BY EDGES",
                        "A SORTED ARRAY OF STRINGS",
                        "A FUNCTION WITH MULTIPLE PARAMETERS",
                        "A DATABASE WITH NO RELATIONSHIPS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS BREADTH-FIRST SEARCH?",
                    correct_answer: "A GRAPH TRAVERSAL METHOD THAT EXPLORES NEIGHBORING NODES LEVEL BY LEVEL",
                    options: [
                        "A METHOD THAT ALWAYS FOLLOWS THE DEEPEST PATH FIRST",
                        "A GRAPH TRAVERSAL METHOD THAT EXPLORES NEIGHBORING NODES LEVEL BY LEVEL",
                        "A METHOD FOR SORTING DATABASE TABLES",
                        "A METHOD FOR COMPILING SOURCE CODE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS DEPTH-FIRST SEARCH?",
                    correct_answer: "A GRAPH TRAVERSAL METHOD THAT EXPLORES A PATH AS DEEPLY AS POSSIBLE BEFORE BACKTRACKING",
                    options: [
                        "A GRAPH TRAVERSAL METHOD THAT EXPLORES A PATH AS DEEPLY AS POSSIBLE BEFORE BACKTRACKING",
                        "A METHOD THAT ONLY VISITS ROOT NODES",
                        "A METHOD FOR ENCRYPTING GRAPH DATA",
                        "A METHOD FOR SORTING STRINGS ALPHABETICALLY"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PRIMARY PURPOSE OF DNS?",
                    correct_answer: "TO TRANSLATE DOMAIN NAMES INTO IP ADDRESSES",
                    options: [
                        "TO ENCRYPT DATABASE RECORDS",
                        "TO TRANSLATE DOMAIN NAMES INTO IP ADDRESSES",
                        "TO COMPRESS HTTP RESPONSES",
                        "TO MANAGE USER PASSWORDS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS AN IP ADDRESS?",
                    correct_answer: "A LOGICAL ADDRESS USED TO IDENTIFY A NETWORK INTERFACE",
                    options: [
                        "A PASSWORD FOR A ROUTER",
                        "A LOGICAL ADDRESS USED TO IDENTIFY A NETWORK INTERFACE",
                        "A UNIQUE DATABASE TABLE NAME",
                        "A PROGRAMMING LANGUAGE IDENTIFIER"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE MAIN DIFFERENCE BETWEEN TCP AND UDP?",
                    correct_answer: "TCP PROVIDES ORDERED, RELIABLE BYTE-STREAM DELIVERY, WHILE UDP PROVIDES DATAGRAM DELIVERY WITHOUT BUILT-IN DELIVERY GUARANTEES",
                    options: [
                        "UDP IS ALWAYS MORE SECURE THAN TCP",
                        "TCP PROVIDES ORDERED, RELIABLE BYTE-STREAM DELIVERY, WHILE UDP PROVIDES DATAGRAM DELIVERY WITHOUT BUILT-IN DELIVERY GUARANTEES",
                        "TCP WORKS ONLY ON LOCAL NETWORKS",
                        "UDP REQUIRES A DATABASE CONNECTION"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE TCP THREE-WAY HANDSHAKE USED FOR?",
                    correct_answer: "ESTABLISHING A TCP CONNECTION BETWEEN TWO ENDPOINTS",
                    options: [
                        "ENCRYPTING A FILE",
                        "ESTABLISHING A TCP CONNECTION BETWEEN TWO ENDPOINTS",
                        "RESOLVING A DOMAIN NAME",
                        "AUTHENTICATING A DATABASE USER"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHICH TCP FLAGS ARE USED IN THE THREE-WAY HANDSHAKE?",
                    correct_answer: "SYN, SYN-ACK, AND ACK",
                    options: [
                        "GET, POST, AND PUT",
                        "OPEN, READ, AND CLOSE",
                        "SYN, SYN-ACK, AND ACK",
                        "START, STOP, AND RESET"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A NETWORK PORT?",
                    correct_answer: "A NUMBER THAT IDENTIFIES A COMMUNICATION ENDPOINT ON A HOST",
                    options: [
                        "A PHYSICAL CONNECTOR ON EVERY COMPUTER",
                        "A NUMBER THAT IDENTIFIES A COMMUNICATION ENDPOINT ON A HOST",
                        "A DOMAIN NAME",
                        "A DATABASE COLUMN"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A SOCKET IN NETWORK PROGRAMMING?",
                    correct_answer: "AN ENDPOINT USED BY A PROGRAM TO SEND OR RECEIVE NETWORK DATA",
                    options: [
                        "A DATABASE INDEX",
                        "AN ENDPOINT USED BY A PROGRAM TO SEND OR RECEIVE NETWORK DATA",
                        "A FILE COMPRESSION FORMAT",
                        "A CPU SCHEDULING ALGORITHM"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A NETWORK PROTOCOL?",
                    correct_answer: "A SET OF RULES THAT DEFINES HOW DEVICES COMMUNICATE",
                    options: [
                        "A SET OF RULES THAT DEFINES HOW DEVICES COMMUNICATE",
                        "A TYPE OF HARD DRIVE",
                        "A DATABASE NORMALIZATION METHOD",
                        "A PROGRAMMING LANGUAGE COMPILER"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES HTTP DEFINE?",
                    correct_answer: "A PROTOCOL FOR COMMUNICATION BETWEEN HTTP CLIENTS AND SERVERS",
                    options: [
                        "A METHOD FOR STORING FILES ON DISK",
                        "A PROTOCOL FOR COMMUNICATION BETWEEN HTTP CLIENTS AND SERVERS",
                        "A LANGUAGE FOR WRITING DATABASE QUERIES",
                        "A HARDWARE MEMORY STANDARD"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS HTTPS?",
                    correct_answer: "HTTP COMMUNICATION PROTECTED BY TLS",
                    options: [
                        "A FASTER VERSION OF DNS",
                        "HTTP COMMUNICATION PROTECTED BY TLS",
                        "A DATABASE CONNECTION POOL",
                        "A FILE SYSTEM PROTOCOL"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS TLS PRIMARILY USED FOR?",
                    correct_answer: "PROVIDING ENCRYPTION, INTEGRITY, AND AUTHENTICATION FOR COMMUNICATION",
                    options: [
                        "COMPRESSING DATABASE TABLES",
                        "PROVIDING ENCRYPTION, INTEGRITY, AND AUTHENTICATION FOR COMMUNICATION",
                        "ALLOCATING MEMORY TO PROCESSES",
                        "CONVERTING SOURCE CODE INTO BYTECODE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A TLS CERTIFICATE USED TO ESTABLISH?",
                    correct_answer: "A BINDING BETWEEN AN IDENTITY AND A PUBLIC KEY",
                    options: [
                        "A BINDING BETWEEN AN IDENTITY AND A PUBLIC KEY",
                        "A USER'S DATABASE PASSWORD",
                        "A SERVER'S PHYSICAL LOCATION",
                        "THE NUMBER OF CONNECTIONS A SERVER CAN ACCEPT"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A COOKIE IN WEB DEVELOPMENT?",
                    correct_answer: "A SMALL PIECE OF DATA STORED BY A BROWSER AND SENT WITH MATCHING REQUESTS",
                    options: [
                        "A DATABASE TABLE STORED ON THE SERVER",
                        "A SMALL PIECE OF DATA STORED BY A BROWSER AND SENT WITH MATCHING REQUESTS",
                        "A FILE THAT CONTAINS SOURCE CODE",
                        "A NETWORK ROUTING ALGORITHM"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A SESSION IN WEB APPLICATIONS?",
                    correct_answer: "SERVER-MANAGED STATE ASSOCIATED WITH A CLIENT OR USER ACROSS REQUESTS",
                    options: [
                        "A SINGLE HTTP RESPONSE",
                        "SERVER-MANAGED STATE ASSOCIATED WITH A CLIENT OR USER ACROSS REQUESTS",
                        "A DATABASE BACKUP FILE",
                        "A TYPE OF NETWORK PORT"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS CORS?",
                    correct_answer: "A BROWSER-ENFORCED MECHANISM THAT CONTROLS CROSS-ORIGIN RESOURCE ACCESS",
                    options: [
                        "A DATABASE REPLICATION PROTOCOL",
                        "A BROWSER-ENFORCED MECHANISM THAT CONTROLS CROSS-ORIGIN RESOURCE ACCESS",
                        "A METHOD FOR ENCRYPTING PASSWORDS",
                        "A TCP CONNECTION MANAGEMENT SYSTEM"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A WEB SOCKET?",
                    correct_answer: "A PROTOCOL THAT PROVIDES FULL-DUPLEX COMMUNICATION OVER A PERSISTENT CONNECTION",
                    options: [
                        "A METHOD FOR CACHING HTML FILES",
                        "A PROTOCOL THAT PROVIDES FULL-DUPLEX COMMUNICATION OVER A PERSISTENT CONNECTION",
                        "A DATABASE CONNECTION STRING",
                        "A TYPE OF HTTP STATUS CODE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A REVERSE PROXY?",
                    correct_answer: "A SERVER THAT RECEIVES CLIENT REQUESTS AND FORWARDS THEM TO BACKEND SERVERS",
                    options: [
                        "A CLIENT THAT STORES PASSWORDS",
                        "A SERVER THAT RECEIVES CLIENT REQUESTS AND FORWARDS THEM TO BACKEND SERVERS",
                        "A DATABASE THAT STORES NETWORK PACKETS",
                        "A PROGRAM THAT COMPRESSES SOURCE CODE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A FORWARD PROXY?",
                    correct_answer: "A SERVER THAT MAKES REQUESTS ON BEHALF OF CLIENTS TO OTHER SERVERS",
                    options: [
                        "A SERVER THAT MAKES REQUESTS ON BEHALF OF CLIENTS TO OTHER SERVERS",
                        "A SERVER THAT ONLY ACCEPTS DATABASE CONNECTIONS",
                        "A TOOL FOR COMPILING CODE",
                        "A STORAGE SYSTEM FOR BACKUP FILES"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A CONTENT DELIVERY NETWORK?",
                    correct_answer: "A DISTRIBUTED NETWORK OF SERVERS THAT DELIVERS CONTENT FROM LOCATIONS CLOSER TO USERS",
                    options: [
                        "A SINGLE CENTRAL DATABASE",
                        "A DISTRIBUTED NETWORK OF SERVERS THAT DELIVERS CONTENT FROM LOCATIONS CLOSER TO USERS",
                        "A PROGRAMMING LANGUAGE",
                        "A SYSTEM FOR MANAGING SOURCE CODE BRANCHES"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PURPOSE OF DNS CACHING?",
                    correct_answer: "TO TEMPORARILY STORE DNS LOOKUP RESULTS AND REDUCE REPEATED LOOKUPS",
                    options: [
                        "TO STORE USER PASSWORDS",
                        "TO TEMPORARILY STORE DNS LOOKUP RESULTS AND REDUCE REPEATED LOOKUPS",
                        "TO PREVENT ALL NETWORK FAILURES",
                        "TO REPLACE IP ADDRESSES WITH MAC ADDRESSES PERMANENTLY"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS IPV6?",
                    correct_answer: "AN INTERNET PROTOCOL VERSION THAT USES 128-BIT ADDRESSES",
                    options: [
                        "AN INTERNET PROTOCOL VERSION THAT USES 16-BIT ADDRESSES",
                        "AN INTERNET PROTOCOL VERSION THAT USES 32-BIT ADDRESSES",
                        "AN INTERNET PROTOCOL VERSION THAT USES 128-BIT ADDRESSES",
                        "A REPLACEMENT FOR TCP"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE PRIMARY ROLE OF AN OPERATING SYSTEM KERNEL?",
                    correct_answer: "TO MANAGE HARDWARE RESOURCES AND PROVIDE CORE SYSTEM SERVICES",
                    options: [
                        "TO DESIGN WEB PAGES",
                        "TO MANAGE HARDWARE RESOURCES AND PROVIDE CORE SYSTEM SERVICES",
                        "TO STORE APPLICATION BUSINESS RULES",
                        "TO REPLACE ALL APPLICATION LIBRARIES"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A SYSTEM CALL?",
                    correct_answer: "A CONTROLLED REQUEST BY A PROGRAM FOR A SERVICE FROM THE OPERATING SYSTEM",
                    options: [
                        "A FUNCTION THAT ONLY CONNECTS TO THE INTERNET",
                        "A CONTROLLED REQUEST BY A PROGRAM FOR A SERVICE FROM THE OPERATING SYSTEM",
                        "A DATABASE QUERY SENT TO A SERVER",
                        "A CALL BETWEEN TWO WEB FRAMEWORKS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A FILE DESCRIPTOR?",
                    correct_answer: "AN INTEGER HANDLE USED BY A PROCESS TO REFER TO AN OPEN FILE OR OTHER I/O RESOURCE",
                    options: [
                        "A FILE'S HUMAN-READABLE DESCRIPTION",
                        "AN INTEGER HANDLE USED BY A PROCESS TO REFER TO AN OPEN FILE OR OTHER I/O RESOURCE",
                        "A DATABASE PRIMARY KEY",
                        "A NETWORK DOMAIN NAME"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT ARE ENVIRONMENT VARIABLES?",
                    correct_answer: "NAMED VALUES PROVIDED TO A PROCESS THROUGH ITS EXECUTION ENVIRONMENT",
                    options: [
                        "VARIABLES THAT CAN ONLY EXIST INSIDE DATABASES",
                        "NAMED VALUES PROVIDED TO A PROCESS THROUGH ITS EXECUTION ENVIRONMENT",
                        "VALUES THAT ARE ALWAYS STORED IN SOURCE CODE",
                        "A TYPE OF NETWORK PACKET"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A PROCESS IN AN OPERATING SYSTEM?",
                    correct_answer: "AN INSTANCE OF A PROGRAM IN EXECUTION",
                    options: [
                        "A FILE THAT HAS NOT BEEN COMPILED",
                        "AN INSTANCE OF A PROGRAM IN EXECUTION",
                        "A DATABASE TABLE",
                        "A HARDWARE INTERRUPT CONTROLLER"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A THREAD?",
                    correct_answer: "A UNIT OF EXECUTION WITHIN A PROCESS",
                    options: [
                        "A SEPARATE PHYSICAL COMPUTER",
                        "A UNIT OF EXECUTION WITHIN A PROCESS",
                        "A DATABASE RELATIONSHIP",
                        "A NETWORK ADDRESS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A SIGNAL IN UNIX-LIKE OPERATING SYSTEMS?",
                    correct_answer: "A SOFTWARE NOTIFICATION SENT TO A PROCESS TO INDICATE AN EVENT",
                    options: [
                        "A PHYSICAL NETWORK CABLE",
                        "A SOFTWARE NOTIFICATION SENT TO A PROCESS TO INDICATE AN EVENT",
                        "A DATABASE TRANSACTION",
                        "A TYPE OF MEMORY ALLOCATION"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS PROCESS SCHEDULING?",
                    correct_answer: "THE OPERATING SYSTEM'S METHOD OF DECIDING WHICH PROCESS OR THREAD RUNS NEXT",
                    options: [
                        "THE METHOD OF ORGANIZING DATABASE TABLES",
                        "THE OPERATING SYSTEM'S METHOD OF DECIDING WHICH PROCESS OR THREAD RUNS NEXT",
                        "THE METHOD OF COMPILING SOURCE FILES",
                        "THE METHOD OF ROUTING HTTP REQUESTS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A CONTAINER IN SOFTWARE DEPLOYMENT?",
                    correct_answer: "AN ISOLATED ENVIRONMENT THAT PACKAGES AN APPLICATION WITH ITS REQUIRED DEPENDENCIES",
                    options: [
                        "A PHYSICAL SERVER CABINET",
                        "AN ISOLATED ENVIRONMENT THAT PACKAGES AN APPLICATION WITH ITS REQUIRED DEPENDENCIES",
                        "A DATABASE TABLE USED FOR STORAGE",
                        "A NETWORK PROTOCOL"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE MAIN DIFFERENCE BETWEEN A CONTAINER AND A VIRTUAL MACHINE?",
                    correct_answer: "CONTAINERS TYPICALLY SHARE THE HOST KERNEL, WHILE VIRTUAL MACHINES RUN THEIR OWN GUEST OPERATING SYSTEM",
                    options: [
                        "CONTAINERS ALWAYS REQUIRE MORE MEMORY",
                        "CONTAINERS TYPICALLY SHARE THE HOST KERNEL, WHILE VIRTUAL MACHINES RUN THEIR OWN GUEST OPERATING SYSTEM",
                        "VIRTUAL MACHINES CANNOT RUN APPLICATIONS",
                        "THERE IS NO ARCHITECTURAL DIFFERENCE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A DOCKER IMAGE?",
                    correct_answer: "A READ-ONLY TEMPLATE USED TO CREATE CONTAINER INSTANCES",
                    options: [
                        "A RUNNING DATABASE CONNECTION",
                        "A READ-ONLY TEMPLATE USED TO CREATE CONTAINER INSTANCES",
                        "A PHYSICAL SERVER",
                        "A SOURCE CODE VERSION CONTROL BRANCH"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A DOCKER CONTAINER?",
                    correct_answer: "A RUNNING OR CREATED INSTANCE OF A CONTAINER IMAGE",
                    options: [
                        "A RUNNING OR CREATED INSTANCE OF A CONTAINER IMAGE",
                        "A FILE THAT DEFINES DATABASE RELATIONSHIPS",
                        "A NETWORK ROUTER",
                        "A COMPILER OUTPUT FORMAT"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS CONTAINER ORCHESTRATION?",
                    correct_answer: "AUTOMATING THE DEPLOYMENT, SCALING, NETWORKING, AND MANAGEMENT OF CONTAINERS",
                    options: [
                        "WRITING APPLICATION TESTS",
                        "AUTOMATING THE DEPLOYMENT, SCALING, NETWORKING, AND MANAGEMENT OF CONTAINERS",
                        "CONVERTING SOURCE CODE INTO MACHINE CODE",
                        "DESIGNING DATABASE TABLES"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES THE CAP THEOREM DESCRIBE?",
                    correct_answer: "TRADE-OFFS BETWEEN CONSISTENCY, AVAILABILITY, AND PARTITION TOLERANCE IN A DISTRIBUTED DATA SYSTEM",
                    options: [
                        "TRADE-OFFS BETWEEN CPU, MEMORY, AND DISK",
                        "TRADE-OFFS BETWEEN CONSISTENCY, AVAILABILITY, AND PARTITION TOLERANCE IN A DISTRIBUTED DATA SYSTEM",
                        "TRADE-OFFS BETWEEN AUTHENTICATION, AUTHORIZATION, AND ACCOUNTING",
                        "TRADE-OFFS BETWEEN DEVELOPMENT, TESTING, AND DEPLOYMENT"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS EVENTUAL CONSISTENCY?",
                    correct_answer: "A MODEL WHERE REPLICAS CONVERGE TO THE SAME VALUE IF NO NEW UPDATES OCCUR",
                    options: [
                        "A MODEL WHERE EVERY READ ALWAYS RETURNS THE LATEST WRITE",
                        "A MODEL WHERE REPLICAS CONVERGE TO THE SAME VALUE IF NO NEW UPDATES OCCUR",
                        "A MODEL WHERE DATABASES NEVER REPLICATE DATA",
                        "A MODEL WHERE ALL WRITES ARE REJECTED"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS STRONG CONSISTENCY IN A DISTRIBUTED DATA SYSTEM?",
                    correct_answer: "READS OBSERVE WRITES ACCORDING TO A GUARANTEED CONSISTENCY ORDER, OFTEN THE LATEST COMPLETED WRITE",
                    options: [
                        "EVERY SERVER STORES DIFFERENT DATA FOREVER",
                        "READS OBSERVE WRITES ACCORDING TO A GUARANTEED CONSISTENCY ORDER, OFTEN THE LATEST COMPLETED WRITE",
                        "DATA IS NEVER UPDATED",
                        "REPLICAS NEVER COMMUNICATE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS DATA REPLICATION?",
                    correct_answer: "MAINTAINING COPIES OF DATA ON MULTIPLE NODES OR SYSTEMS",
                    options: [
                        "DELETING DUPLICATE DATABASE RECORDS",
                        "MAINTAINING COPIES OF DATA ON MULTIPLE NODES OR SYSTEMS",
                        "CONVERTING DATABASE TABLES INTO JSON",
                        "COMPRESSING NETWORK REQUESTS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS DATABASE SHARDING?",
                    correct_answer: "PARTITIONING DATA ACROSS MULTIPLE DATABASE NODES",
                    options: [
                        "BACKING UP A DATABASE TO ONE FILE",
                        "PARTITIONING DATA ACROSS MULTIPLE DATABASE NODES",
                        "ENCRYPTING ALL DATABASE COLUMNS",
                        "REPLACING DATABASE INDEXES"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A LEADER-FOLLOWER REPLICATION MODEL?",
                    correct_answer: "ONE NODE ACCEPTS OR COORDINATES WRITES WHILE FOLLOWER NODES REPLICATE ITS DATA",
                    options: [
                        "EVERY NODE MUST ACCEPT ALL WRITES INDEPENDENTLY",
                        "ONE NODE ACCEPTS OR COORDINATES WRITES WHILE FOLLOWER NODES REPLICATE ITS DATA",
                        "FOLLOWER NODES DELETE THE LEADER'S DATA",
                        "ALL NODES RUN DIFFERENT APPLICATIONS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A CONSENSUS ALGORITHM USED FOR IN DISTRIBUTED SYSTEMS?",
                    correct_answer: "HELPING DISTRIBUTED NODES AGREE ON A VALUE OR ORDER OF OPERATIONS",
                    options: [
                        "COMPRESSING DATABASE BACKUPS",
                        "HELPING DISTRIBUTED NODES AGREE ON A VALUE OR ORDER OF OPERATIONS",
                        "CONVERTING HTTP INTO TCP",
                        "GENERATING RANDOM USER PASSWORDS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE OUTBOX PATTERN?",
                    correct_answer: "STORING A BUSINESS CHANGE AND ITS PENDING EVENT IN THE SAME DATABASE TRANSACTION",
                    options: [
                        "SENDING EMAILS DIRECTLY FROM A DATABASE TRIGGER ONLY",
                        "STORING A BUSINESS CHANGE AND ITS PENDING EVENT IN THE SAME DATABASE TRANSACTION",
                        "KEEPING ALL APPLICATION DATA IN MEMORY",
                        "REPLACING A MESSAGE BROKER WITH HTTP POLLING"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS THE SAGA PATTERN?",
                    correct_answer: "COORDINATING A DISTRIBUTED BUSINESS TRANSACTION THROUGH LOCAL TRANSACTIONS AND COMPENSATING ACTIONS",
                    options: [
                        "RUNNING ONE LARGE DATABASE QUERY",
                        "COORDINATING A DISTRIBUTED BUSINESS TRANSACTION THROUGH LOCAL TRANSACTIONS AND COMPENSATING ACTIONS",
                        "REPLACING ALL SERVICES WITH ONE PROCESS",
                        "ENCRYPTING A MESSAGE QUEUE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A COMPENSATING TRANSACTION?",
                    correct_answer: "AN ACTION THAT COUNTERACTS THE BUSINESS EFFECT OF AN EARLIER COMPLETED ACTION",
                    options: [
                        "A TRANSACTION THAT ALWAYS RUNS BEFORE A REQUEST",
                        "AN ACTION THAT COUNTERACTS THE BUSINESS EFFECT OF AN EARLIER COMPLETED ACTION",
                        "A TRANSACTION THAT DELETES THE ENTIRE DATABASE",
                        "A QUERY THAT ONLY READS DATA"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHY ARE DISTRIBUTED TRANSACTIONS DIFFICULT?",
                    correct_answer: "MULTIPLE INDEPENDENT SYSTEMS MUST COORDINATE CHANGES DESPITE NETWORK FAILURES AND PARTIAL COMPLETION",
                    options: [
                        "THEY CANNOT USE DATABASES",
                        "MULTIPLE INDEPENDENT SYSTEMS MUST COORDINATE CHANGES DESPITE NETWORK FAILURES AND PARTIAL COMPLETION",
                        "THEY ALWAYS REQUIRE A SINGLE CPU",
                        "THEY DO NOT SUPPORT ERROR HANDLING"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES AT-LEAST-ONCE MESSAGE DELIVERY MEAN?",
                    correct_answer: "A MESSAGE WILL BE DELIVERED ONE OR MORE TIMES, SO DUPLICATES ARE POSSIBLE",
                    options: [
                        "A MESSAGE IS ALWAYS DELIVERED EXACTLY ONCE",
                        "A MESSAGE WILL BE DELIVERED ONE OR MORE TIMES, SO DUPLICATES ARE POSSIBLE",
                        "A MESSAGE IS NEVER RETRIED",
                        "A MESSAGE IS DELIVERED ONLY IF THE USER IS ONLINE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHY IS IDEMPOTENT MESSAGE PROCESSING IMPORTANT?",
                    correct_answer: "IT ALLOWS DUPLICATE MESSAGE PROCESSING ATTEMPTS WITHOUT REPEATING THE BUSINESS EFFECT",
                    options: [
                        "IT MAKES EVERY MESSAGE ARRIVE IN ORDER",
                        "IT ALLOWS DUPLICATE MESSAGE PROCESSING ATTEMPTS WITHOUT REPEATING THE BUSINESS EFFECT",
                        "IT PREVENTS ALL NETWORK FAILURES",
                        "IT REMOVES THE NEED FOR DATABASE TRANSACTIONS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES EXACTLY-ONCE PROCESSING USUALLY REQUIRE AT THE APPLICATION LEVEL?",
                    correct_answer: "COORDINATION OF MESSAGE HANDLING AND BUSINESS EFFECTS, OFTEN USING DEDUPLICATION OR TRANSACTIONAL TECHNIQUES",
                    options: [
                        "DISABLING ALL MESSAGE RETRIES",
                        "COORDINATION OF MESSAGE HANDLING AND BUSINESS EFFECTS, OFTEN USING DEDUPLICATION OR TRANSACTIONAL TECHNIQUES",
                        "USING UDP INSTEAD OF TCP",
                        "STORING EVERY MESSAGE ONLY IN RAM"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A MESSAGE BROKER?",
                    correct_answer: "MIDDLEWARE THAT RECEIVES, STORES, AND ROUTES MESSAGES BETWEEN APPLICATIONS",
                    options: [
                        "A TOOL FOR COMPILING PROGRAMMING LANGUAGES",
                        "MIDDLEWARE THAT RECEIVES, STORES, AND ROUTES MESSAGES BETWEEN APPLICATIONS",
                        "A DATABASE INDEXING ALGORITHM",
                        "A USER AUTHENTICATION METHOD"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A DEAD-LETTER QUEUE?",
                    correct_answer: "A QUEUE THAT HOLDS MESSAGES THAT COULD NOT BE SUCCESSFULLY PROCESSED",
                    options: [
                        "A QUEUE FOR MESSAGES THAT HAVE ALREADY BEEN DELETED",
                        "A QUEUE THAT HOLDS MESSAGES THAT COULD NOT BE SUCCESSFULLY PROCESSED",
                        "A QUEUE THAT STORES ONLY SUCCESSFUL LOGIN EVENTS",
                        "A QUEUE THAT NEVER ACCEPTS MESSAGES"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS SERIALIZATION?",
                    correct_answer: "CONVERTING DATA OR OBJECTS INTO A FORMAT SUITABLE FOR STORAGE OR TRANSMISSION",
                    options: [
                        "CONVERTING DATA OR OBJECTS INTO A FORMAT SUITABLE FOR STORAGE OR TRANSMISSION",
                        "DELETING OBJECTS FROM MEMORY",
                        "RUNNING DATABASE QUERIES IN PARALLEL",
                        "ENCRYPTING A NETWORK ROUTE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS DESERIALIZATION?",
                    correct_answer: "RECONSTRUCTING DATA OR OBJECTS FROM A SERIALIZED REPRESENTATION",
                    options: [
                        "COMPRESSING SOURCE CODE",
                        "RECONSTRUCTING DATA OR OBJECTS FROM A SERIALIZED REPRESENTATION",
                        "DELETING A DATABASE SCHEMA",
                        "CREATING A NEW NETWORK CONNECTION"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS JSON?",
                    correct_answer: "A TEXT-BASED DATA INTERCHANGE FORMAT",
                    options: [
                        "A PROGRAMMING LANGUAGE",
                        "A TEXT-BASED DATA INTERCHANGE FORMAT",
                        "A DATABASE ENGINE",
                        "A NETWORK TRANSPORT PROTOCOL"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS PROTOCOL BUFFERS?",
                    correct_answer: "A SCHEMA-BASED SERIALIZATION FORMAT DEVELOPED BY GOOGLE",
                    options: [
                        "A WEB BROWSER API",
                        "A SCHEMA-BASED SERIALIZATION FORMAT DEVELOPED BY GOOGLE",
                        "A DATABASE TRANSACTION ISOLATION LEVEL",
                        "A FILE SYSTEM"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS SCHEMA EVOLUTION?",
                    correct_answer: "MANAGING CHANGES TO A DATA STRUCTURE WHILE MAINTAINING COMPATIBILITY WHERE REQUIRED",
                    options: [
                        "DELETING ALL OLD DATABASE RECORDS",
                        "MANAGING CHANGES TO A DATA STRUCTURE WHILE MAINTAINING COMPATIBILITY WHERE REQUIRED",
                        "CHANGING A PROGRAMMING LANGUAGE EVERY RELEASE",
                        "REPLACING ALL NETWORK PROTOCOLS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS BACKWARD COMPATIBILITY IN A DATA SCHEMA?",
                    correct_answer: "NEWER CODE CAN READ OR HANDLE DATA PRODUCED BY AN OLDER SCHEMA VERSION",
                    options: [
                        "OLDER CODE CAN ALWAYS READ EVERY FUTURE DATA FORMAT",
                        "NEWER CODE CAN READ OR HANDLE DATA PRODUCED BY AN OLDER SCHEMA VERSION",
                        "A DATABASE CAN ONLY STORE OLD RECORDS",
                        "A SCHEMA CANNOT BE MODIFIED"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS SEMANTIC VERSIONING?",
                    correct_answer: "A VERSIONING SCHEME THAT USES MAJOR, MINOR, AND PATCH NUMBERS TO COMMUNICATE CHANGE TYPES",
                    options: [
                        "A METHOD FOR NAMING DATABASE TABLES",
                        "A VERSIONING SCHEME THAT USES MAJOR, MINOR, AND PATCH NUMBERS TO COMMUNICATE CHANGE TYPES",
                        "A METHOD FOR GENERATING RANDOM RELEASE NUMBERS",
                        "A SYSTEM FOR TRACKING USER SESSIONS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "IN SEMANTIC VERSIONING, WHAT DOES A PATCH RELEASE USUALLY INDICATE?",
                    correct_answer: "BACKWARD-COMPATIBLE BUG FIXES",
                    options: [
                        "A BREAKING API CHANGE",
                        "A NEW MAJOR ARCHITECTURE",
                        "BACKWARD-COMPATIBLE BUG FIXES",
                        "A COMPLETE REWRITE OF THE APPLICATION"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "IN SEMANTIC VERSIONING, WHAT DOES A MAJOR VERSION INCREASE USUALLY INDICATE?",
                    correct_answer: "BACKWARD-INCOMPATIBLE API CHANGES",
                    options: [
                        "ONLY DOCUMENTATION FIXES",
                        "BACKWARD-INCOMPATIBLE API CHANGES",
                        "ONLY PERFORMANCE IMPROVEMENTS",
                        "A CHANGE TO THE DEVELOPER'S OPERATING SYSTEM"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A CHANGELOG?",
                    correct_answer: "A DOCUMENT THAT RECORDS IMPORTANT CHANGES BETWEEN SOFTWARE RELEASES",
                    options: [
                        "A LIVE DATABASE CONNECTION",
                        "A DOCUMENT THAT RECORDS IMPORTANT CHANGES BETWEEN SOFTWARE RELEASES",
                        "A FILE THAT STORES USER PASSWORDS",
                        "A COMPILER CONFIGURATION"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A FEATURE FLAG?",
                    correct_answer: "A CONFIGURATION MECHANISM THAT ENABLES OR DISABLES FUNCTIONALITY WITHOUT REQUIRING A NEW DEPLOYMENT",
                    options: [
                        "A DATABASE PRIMARY KEY",
                        "A CONFIGURATION MECHANISM THAT ENABLES OR DISABLES FUNCTIONALITY WITHOUT REQUIRING A NEW DEPLOYMENT",
                        "A NETWORK SECURITY CERTIFICATE",
                        "A PROGRAMMING LANGUAGE KEYWORD"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A CANARY DEPLOYMENT?",
                    correct_answer: "RELEASING A CHANGE TO A SMALL SUBSET OF USERS OR SERVERS BEFORE EXPANDING IT",
                    options: [
                        "DEPLOYING A CHANGE TO EVERY USER AT ONCE",
                        "RELEASING A CHANGE TO A SMALL SUBSET OF USERS OR SERVERS BEFORE EXPANDING IT",
                        "DEPLOYING SOFTWARE WITHOUT TESTING",
                        "REPLACING A DATABASE WITH A FILE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A BLUE-GREEN DEPLOYMENT?",
                    correct_answer: "MAINTAINING TWO ENVIRONMENTS AND SWITCHING TRAFFIC FROM ONE TO THE OTHER",
                    options: [
                        "RUNNING TWO DIFFERENT DATABASE LANGUAGES",
                        "MAINTAINING TWO ENVIRONMENTS AND SWITCHING TRAFFIC FROM ONE TO THE OTHER",
                        "DEPLOYING ONLY DURING DAYTIME",
                        "USING TWO PROGRAMMING LANGUAGES IN ONE FILE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A ROLLBACK IN SOFTWARE DEPLOYMENT?",
                    correct_answer: "RESTORING A PREVIOUSLY WORKING SOFTWARE VERSION OR CONFIGURATION",
                    options: [
                        "DELETING THE SOURCE CODE REPOSITORY",
                        "RESTORING A PREVIOUSLY WORKING SOFTWARE VERSION OR CONFIGURATION",
                        "ADDING A NEW DATABASE TABLE",
                        "INCREASING THE NUMBER OF USERS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS INFRASTRUCTURE AS CODE?",
                    correct_answer: "MANAGING INFRASTRUCTURE THROUGH MACHINE-READABLE CONFIGURATION OR DEFINITIONS",
                    options: [
                        "WRITING ALL SERVER CONFIGURATION MANUALLY",
                        "MANAGING INFRASTRUCTURE THROUGH MACHINE-READABLE CONFIGURATION OR DEFINITIONS",
                        "STORING APPLICATION DATA IN SOURCE FILES",
                        "USING CODE ONLY FOR USER INTERFACES"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHY SHOULD APPLICATION SECRETS NOT BE HARDCODED INTO SOURCE CODE?",
                    correct_answer: "THEY CAN BE EXPOSED THROUGH REPOSITORIES, BUILDS, LOGS, OR SOURCE DISTRIBUTION",
                    options: [
                        "HARDCODED VALUES ALWAYS MAKE APPLICATIONS SLOWER",
                        "THEY CAN BE EXPOSED THROUGH REPOSITORIES, BUILDS, LOGS, OR SOURCE DISTRIBUTION",
                        "SOURCE CODE CANNOT CONTAIN STRINGS",
                        "SECRETS CAN ONLY BE STORED IN DATABASE TABLES"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A SECRETS MANAGER?",
                    correct_answer: "A SYSTEM FOR SECURELY STORING, ACCESSING, AND ROTATING SENSITIVE CREDENTIALS",
                    options: [
                        "A TOOL FOR FORMATTING SOURCE CODE",
                        "A SYSTEM FOR SECURELY STORING, ACCESSING, AND ROTATING SENSITIVE CREDENTIALS",
                        "A DATABASE QUERY OPTIMIZER",
                        "A NETWORK LOAD BALANCER"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS CONFIGURATION MANAGEMENT?",
                    correct_answer: "CONTROLLING AND MAINTAINING THE SETTINGS THAT DEFINE HOW SOFTWARE AND INFRASTRUCTURE OPERATE",
                    options: [
                        "MANAGING ONLY USER INTERFACE COLORS",
                        "CONTROLLING AND MAINTAINING THE SETTINGS THAT DEFINE HOW SOFTWARE AND INFRASTRUCTURE OPERATE",
                        "COMPILING EVERY SOURCE FILE MANUALLY",
                        "STORING ALL APPLICATION DATA IN ENVIRONMENT VARIABLES"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS IMMUTABLE INFRASTRUCTURE?",
                    correct_answer: "AN APPROACH WHERE DEPLOYED INFRASTRUCTURE IS REPLACED RATHER THAN MODIFIED IN PLACE",
                    options: [
                        "INFRASTRUCTURE THAT NEVER RECEIVES UPDATES",
                        "AN APPROACH WHERE DEPLOYED INFRASTRUCTURE IS REPLACED RATHER THAN MODIFIED IN PLACE",
                        "SERVERS THAT CANNOT BE SHUT DOWN",
                        "A DATABASE THAT DOES NOT SUPPORT DELETIONS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS DISASTER RECOVERY?",
                    correct_answer: "THE PLANNING AND PROCESS OF RESTORING SYSTEMS AFTER A MAJOR DISRUPTION",
                    options: [
                        "THE PROCESS OF WRITING NEW FEATURES",
                        "THE PLANNING AND PROCESS OF RESTORING SYSTEMS AFTER A MAJOR DISRUPTION",
                        "THE PROCESS OF DELETING OLD LOGS",
                        "THE PROCESS OF REPLACING SOFTWARE TESTS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES RTO MEAN IN DISASTER RECOVERY?",
                    correct_answer: "THE TARGET MAXIMUM TIME TO RESTORE A SERVICE AFTER DISRUPTION",
                    options: [
                        "THE MAXIMUM AMOUNT OF DATA THAT CAN BE LOST",
                        "THE TARGET MAXIMUM TIME TO RESTORE A SERVICE AFTER DISRUPTION",
                        "THE TIME REQUIRED TO WRITE SOURCE CODE",
                        "THE TIME BETWEEN DATABASE BACKUPS"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT DOES RPO MEAN IN DISASTER RECOVERY?",
                    correct_answer: "THE MAXIMUM TARGET AMOUNT OF DATA LOSS MEASURED IN TIME",
                    options: [
                        "THE TARGET TIME TO RESTORE A SERVER",
                        "THE MAXIMUM TARGET AMOUNT OF DATA LOSS MEASURED IN TIME",
                        "THE NUMBER OF SERVERS REQUIRED FOR RECOVERY",
                        "THE TIME REQUIRED TO DEPLOY A NEW FEATURE"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS AN SLI?",
                    correct_answer: "A QUANTITATIVE MEASURE OF A SERVICE'S RELIABILITY OR PERFORMANCE",
                    options: [
                        "A CONTRACT BETWEEN TWO COMPANIES",
                        "A QUANTITATIVE MEASURE OF A SERVICE'S RELIABILITY OR PERFORMANCE",
                        "A DATABASE MIGRATION SCRIPT",
                        "A SOFTWARE RELEASE NUMBER"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS AN SLO?",
                    correct_answer: "A TARGET VALUE OR RANGE FOR A SERVICE LEVEL INDICATOR",
                    options: [
                        "A TARGET VALUE OR RANGE FOR A SERVICE LEVEL INDICATOR",
                        "A PROGRAMMING LANGUAGE STANDARD",
                        "A TYPE OF DATABASE INDEX",
                        "A NETWORK ENCRYPTION ALGORITHM"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS AN SLA?",
                    correct_answer: "A FORMAL AGREEMENT DEFINING EXPECTED SERVICE LEVELS AND OFTEN REMEDIES FOR FAILING TO MEET THEM",
                    options: [
                        "A SOURCE CODE LICENCE",
                        "A FORMAL AGREEMENT DEFINING EXPECTED SERVICE LEVELS AND OFTEN REMEDIES FOR FAILING TO MEET THEM",
                        "A DATABASE BACKUP FORMAT",
                        "A SOFTWARE TESTING FRAMEWORK"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS AN ERROR BUDGET?",
                    correct_answer: "THE ACCEPTABLE AMOUNT OF UNRELIABILITY ALLOWED BY A SERVICE LEVEL OBJECTIVE",
                    options: [
                        "THE MONEY RESERVED FOR FIXING BUGS",
                        "THE ACCEPTABLE AMOUNT OF UNRELIABILITY ALLOWED BY A SERVICE LEVEL OBJECTIVE",
                        "THE NUMBER OF ERRORS A COMPILER CAN PRODUCE",
                        "THE MAXIMUM SIZE OF AN ERROR LOG"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A POSTMORTEM IN SITE RELIABILITY ENGINEERING?",
                    correct_answer: "A REVIEW OF AN INCIDENT TO UNDERSTAND ITS CAUSES, IMPACT, AND PREVENTIVE ACTIONS",
                    options: [
                        "A REPORT THAT IDENTIFIES ONLY WHO IS TO BLAME",
                        "A REVIEW OF AN INCIDENT TO UNDERSTAND ITS CAUSES, IMPACT, AND PREVENTIVE ACTIONS",
                        "A DATABASE SCHEMA DOCUMENT",
                        "A REPORT GENERATED ONLY BEFORE DEPLOYMENT"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A BLAMELESS POSTMORTEM?",
                    correct_answer: "AN INCIDENT REVIEW THAT FOCUSES ON SYSTEM CONDITIONS AND IMPROVEMENT RATHER THAN PERSONAL BLAME",
                    options: [
                        "AN INCIDENT REVIEW THAT IGNORES HUMAN ACTIONS",
                        "AN INCIDENT REVIEW THAT FOCUSES ON SYSTEM CONDITIONS AND IMPROVEMENT RATHER THAN PERSONAL BLAME",
                        "A REVIEW THAT NEVER IDENTIFIES ROOT CAUSES",
                        "A REVIEW THAT IS WRITTEN BEFORE AN INCIDENT"
                    ],
                    creator: "system",
                    status: 'undone'
                },
                {
                    question: "WHAT IS A RUNBOOK?",
                    correct_answer: "A DOCUMENTED SET OF PROCEDURES FOR OPERATING OR RESPONDING TO ISSUES IN A SYSTEM",
                    options: [
                        "A PROGRAMMING LANGUAGE REFERENCE",
                        "A DOCUMENTED SET OF PROCEDURES FOR OPERATING OR RESPONDING TO ISSUES IN A SYSTEM",
                        "A DATABASE TRANSACTION LOG",
                        "A USER REGISTRATION FORM"
                    ],
                    creator: "system",
                    status: 'undone'
                }
                            
                //EOF
            ]
        }
            //====
        ,
        {
            field: "general knowledge",
            questions: [
                {
                    question: "WHAT IS THE CAPITAL OF GHANA?",
                    correct_answer: "Accra",
                    options: ["Accra", "Kumasi", "Takoradi", "Sunyani"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH CURRENCY IS USED IN GHANA?",
                    correct_answer: "Ghanaian cedi",
                    options: ["Ghanaian cedi", "Nigerian naira", "Kenyan shilling", "South African rand"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "HOW MANY DAYS ARE IN A LEAP YEAR?",
                    correct_answer: "366",
                    options: ["365", "366", "364", "367"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH OCEAN IS THE LARGEST IN THE WORLD?",
                    correct_answer: "Pacific Ocean",
                    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "HOW MANY SIDES DOES A HEXAGON HAVE?",
                    correct_answer: "Six",
                    options: ["Five", "Six", "Seven", "Eight"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH ANIMAL IS COMMONLY CALLED THE KING OF THE JUNGLE?",
                    correct_answer: "Lion",
                    options: ["Elephant", "Tiger", "Lion", "Leopard"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE MAIN LANGUAGE SPOKEN IN BRAZIL?",
                    correct_answer: "Portuguese",
                    options: ["Spanish", "French", "Portuguese", "English"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "HOW MANY MINUTES ARE IN ONE HOUR?",
                    correct_answer: "60",
                    options: ["30", "45", "60", "90"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH IS THE LARGEST MAMMAL ON EARTH?",
                    correct_answer: "Blue whale",
                    options: ["African elephant", "Blue whale", "Giraffe", "Hippopotamus"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH PLANET IS KNOWN AS THE RED PLANET?",
                    correct_answer: "Mars",
                    options: ["Venus", "Jupiter", "Mars", "Mercury"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "HOW MANY LETTERS ARE IN THE ENGLISH ALPHABET?",
                    correct_answer: "26",
                    options: ["24", "25", "26", "28"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "IN WHICH DIRECTION DOES THE SUN RISE?",
                    correct_answer: "East",
                    options: ["West", "East", "North", "South"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DO BEES PRODUCE FROM FLOWER NECTAR?",
                    correct_answer: "Honey",
                    options: ["Milk", "Silk", "Honey", "Sugar"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH METAL IS LIQUID AT ROOM TEMPERATURE?",
                    correct_answer: "Mercury",
                    options: ["Iron", "Copper", "Mercury", "Aluminium"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A YOUNG GOAT CALLED?",
                    correct_answer: "Kid",
                    options: ["Calf", "Foal", "Kid", "Lamb"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH SHAPE HAS THREE SIDES?",
                    correct_answer: "Triangle",
                    options: ["Square", "Pentagon", "Circle", "Triangle"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH BIRD IS OFTEN ASSOCIATED WITH PEACE?",
                    correct_answer: "Dove",
                    options: ["Eagle", "Crow", "Dove", "Owl"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "HOW MANY CONTINENTS ARE THERE IN THE SEVEN-CONTINENT MODEL?",
                    correct_answer: "Seven",
                    options: ["Five", "Six", "Seven", "Eight"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH HOUSEHOLD APPLIANCE IS USED TO KEEP FOOD COLD?",
                    correct_answer: "Refrigerator",
                    options: ["Oven", "Toaster", "Blender", "Refrigerator"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PLURAL FORM OF THE WORD CHILD?",
                    correct_answer: "Children",
                    options: ["Childs", "Childes", "Children", "Childrens"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH INSTRUMENT IS USED TO MEASURE TEMPERATURE?",
                    correct_answer: "Thermometer",
                    options: ["Speedometer", "Thermometer", "Altimeter", "Odometer"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE CURRENCY OF JAPAN?",
                    correct_answer: "Yen",
                    options: ["Won", "Yuan", "Yen", "Baht"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH ANIMAL IS KNOWN FOR CARRYING ITS HOME ON ITS BACK?",
                    correct_answer: "Tortoise",
                    options: ["Rabbit", "Fox", "Tortoise", "Deer"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "HOW MANY WHEELS DOES A STANDARD BICYCLE HAVE?",
                    correct_answer: "Two",
                    options: ["One", "Two", "Three", "Four"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT COLOUR IS FORMED WHEN RED AND WHITE ARE MIXED?",
                    correct_answer: "Pink",
                    options: ["Purple", "Orange", "Pink", "Brown"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH DAY COMES AFTER FRIDAY?",
                    correct_answer: "Saturday",
                    options: ["Thursday", "Sunday", "Saturday", "Monday"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE LARGEST LAND ANIMAL?",
                    correct_answer: "African elephant",
                    options: ["Rhinoceros", "Giraffe", "African elephant", "Hippopotamus"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT MATERIAL IS COMMONLY MADE FROM TREES AND USED FOR WRITING?",
                    correct_answer: "Paper",
                    options: ["Glass", "Rubber", "Ceramic", "Paper"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DO YOU CALL A PERSON WHO WRITES BOOKS?",
                    correct_answer: "Author",
                    options: ["Editor", "Author", "Reader", "Publisher"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH SEASON GENERALLY FOLLOWS SPRING?",
                    correct_answer: "Summer",
                    options: ["Winter", "Autumn", "Summer", "Monsoon"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "HOW MANY PLAYERS FROM ONE BASKETBALL TEAM ARE ON THE COURT DURING NORMAL PLAY?",
                    correct_answer: "Five",
                    options: ["Four", "Five", "Six", "Seven"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH SENSE ORGAN IS RESPONSIBLE FOR HEARING?",
                    correct_answer: "Ear",
                    options: ["Eye", "Nose", "Ear", "Tongue"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS A HOUSE MADE OF ICE, TRADITIONALLY ASSOCIATED WITH THE ARCTIC, CALLED?",
                    correct_answer: "Igloo",
                    options: ["Cabin", "Tent", "Hut", "Igloo"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE OPPOSITE OF GENEROUS?",
                    correct_answer: "Stingy",
                    options: ["Kind", "Helpful", "Stingy", "Giving"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "HOW MANY MONTHS ARE IN A YEAR?",
                    correct_answer: "12",
                    options: ["10", "11", "12", "13"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH ANIMAL IS FAMOUS FOR ITS BLACK-AND-WHITE STRIPES?",
                    correct_answer: "Zebra",
                    options: ["Giraffe", "Cheetah", "Zebra", "Hyena"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE CAPITAL CITY OF NIGERIA?",
                    correct_answer: "Abuja",
                    options: ["Lagos", "Kano", "Abuja", "Ibadan"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH NATURAL SATELLITE ORBITS THE EARTH?",
                    correct_answer: "The Moon",
                    options: ["The Sun", "Mars", "The Moon", "Venus"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH FAIRY-TALE CHARACTER'S NOSE GROWS WHEN HE LIES?",
                    correct_answer: "Pinocchio",
                    options: ["Peter Pan", "Aladdin", "Tarzan", "Pinocchio"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE CAPITAL CITY OF FRANCE?",
                    correct_answer: "Paris",
                    options: ["Rome", "Madrid", "Paris", "Berlin"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT DO WE CALL A GROUP OF STARS THAT FORMS A RECOGNIZABLE PATTERN?",
                    correct_answer: "Constellation",
                    options: ["Galaxy", "Planet", "Orbit", "Constellation"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH OBJECT IS USED TO FIND DIRECTIONS?",
                    correct_answer: "Compass",
                    options: ["Microscope", "Telescope", "Compass", "Calculator"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE CAPITAL CITY OF KENYA?",
                    correct_answer: "Nairobi",
                    options: ["Mombasa", "Nairobi", "Kampala", "Kigali"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH COUNTRY IS FAMOUS FOR THE PYRAMIDS OF GIZA?",
                    correct_answer: "Egypt",
                    options: ["Greece", "Egypt", "Mexico", "India"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE OFFICIAL LANGUAGE OF ANGOLA?",
                    correct_answer: "Portuguese",
                    options: ["English", "French", "Portuguese", "Arabic"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH SPORT IS PLAYED AT WIMBLEDON?",
                    correct_answer: "Tennis",
                    options: ["Football", "Cricket", "Tennis", "Golf"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE NAME OF THE LINE THAT DIVIDES EARTH INTO NORTHERN AND SOUTHERN HEMISPHERES?",
                    correct_answer: "Equator",
                    options: ["Prime Meridian", "Tropic of Cancer", "Equator", "Arctic Circle"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH COUNTRY GAVE THE WORLD THE STATUE OF LIBERTY AS A GIFT TO THE UNITED STATES?",
                    correct_answer: "France",
                    options: ["Germany", "France", "Italy", "Spain"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "HOW MANY COLOURS ARE THERE IN A TRADITIONAL RAINBOW DESCRIPTION?",
                    correct_answer: "Seven",
                    options: ["Five", "Six", "Seven", "Eight"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE CAPITAL OF AUSTRALIA?",
                    correct_answer: "Canberra",
                    options: ["Sydney", "Melbourne", "Perth", "Canberra"],
                    creator: "system",
                    status: "undone"
                }
            ]
        },
        {
            field: "science",
            questions: [
                {
                    question: "WHAT IS THE CHEMICAL FORMULA FOR WATER?",
                    correct_answer: "H2O",
                    options: ["CO2", "H2O", "O2", "NaCl"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH PART OF A PLANT ABSORBS MOST WATER FROM THE SOIL?",
                    correct_answer: "Roots",
                    options: ["Leaves", "Flowers", "Roots", "Stem"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT FORCE PULLS OBJECTS TOWARDS THE EARTH?",
                    correct_answer: "Gravity",
                    options: ["Friction", "Magnetism", "Gravity", "Electricity"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE CENTRE OF AN ATOM CALLED?",
                    correct_answer: "Nucleus",
                    options: ["Electron", "Nucleus", "Shell", "Molecule"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH GAS DO PLANTS ABSORB DURING PHOTOSYNTHESIS?",
                    correct_answer: "Carbon dioxide",
                    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE CLOSEST STAR TO EARTH?",
                    correct_answer: "The Sun",
                    options: ["Sirius", "The Sun", "Polaris", "Proxima Centauri"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH ORGAN PUMPS BLOOD AROUND THE HUMAN BODY?",
                    correct_answer: "Heart",
                    options: ["Liver", "Lung", "Heart", "Kidney"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PROCESS BY WHICH A LIQUID CHANGES INTO A GAS?",
                    correct_answer: "Evaporation",
                    options: ["Condensation", "Freezing", "Evaporation", "Melting"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH STATE OF MATTER HAS A FIXED SHAPE AND FIXED VOLUME?",
                    correct_answer: "Solid",
                    options: ["Liquid", "Gas", "Plasma", "Solid"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE CHEMICAL SYMBOL FOR GOLD?",
                    correct_answer: "Au",
                    options: ["Ag", "Go", "Au", "Gd"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH BLOOD CELLS HELP THE BODY FIGHT INFECTIONS?",
                    correct_answer: "White blood cells",
                    options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE BASIC STRUCTURAL AND FUNCTIONAL UNIT OF LIFE?",
                    correct_answer: "Cell",
                    options: ["Atom", "Cell", "Organ", "Tissue"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH PLANET IS FAMOUS FOR ITS PROMINENT RING SYSTEM?",
                    correct_answer: "Saturn",
                    options: ["Earth", "Mars", "Saturn", "Mercury"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PH OF A NEUTRAL SOLUTION AT ROOM TEMPERATURE?",
                    correct_answer: "7",
                    options: ["0", "3", "7", "14"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH VITAMIN CAN THE HUMAN BODY PRODUCE IN THE SKIN THROUGH SUNLIGHT EXPOSURE?",
                    correct_answer: "Vitamin D",
                    options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin K"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT TYPE OF ENERGY IS STORED IN FOOD?",
                    correct_answer: "Chemical energy",
                    options: ["Sound energy", "Nuclear energy", "Chemical energy", "Light energy"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH INSTRUMENT IS USED TO OBSERVE VERY SMALL OBJECTS?",
                    correct_answer: "Microscope",
                    options: ["Telescope", "Microscope", "Periscope", "Binoculars"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE BOILING POINT OF PURE WATER AT SEA LEVEL?",
                    correct_answer: "100°C",
                    options: ["0°C", "50°C", "100°C", "150°C"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH PART OF A TYPICAL HUMAN CELL CONTAINS MOST OF ITS GENETIC MATERIAL?",
                    correct_answer: "Nucleus",
                    options: ["Cell membrane", "Cytoplasm", "Nucleus", "Ribosome"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE LARGEST ORGAN OF THE HUMAN BODY?",
                    correct_answer: "Skin",
                    options: ["Liver", "Brain", "Heart", "Skin"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH PLANET IS KNOWN FOR ITS GREAT RED SPOT?",
                    correct_answer: "Jupiter",
                    options: ["Neptune", "Venus", "Jupiter", "Uranus"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE CHANGE FROM A SOLID DIRECTLY INTO A GAS CALLED?",
                    correct_answer: "Sublimation",
                    options: ["Condensation", "Freezing", "Melting", "Sublimation"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH GAS MAKES UP MOST OF EARTH'S ATMOSPHERE?",
                    correct_answer: "Nitrogen",
                    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE SI UNIT OF FORCE?",
                    correct_answer: "Newton",
                    options: ["Joule", "Watt", "Newton", "Pascal"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH SCIENTIST FORMULATED THE THREE LAWS OF MOTION?",
                    correct_answer: "Isaac Newton",
                    options: ["Charles Darwin", "Isaac Newton", "Louis Pasteur", "Gregor Mendel"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE MAIN GENETIC MATERIAL IN MOST LIVING ORGANISMS?",
                    correct_answer: "DNA",
                    options: ["Starch", "Glucose", "DNA", "Cellulose"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH PART OF THE EYE CONTROLS HOW MUCH LIGHT ENTERS?",
                    correct_answer: "Iris",
                    options: ["Retina", "Cornea", "Iris", "Optic nerve"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PROCESS BY WHICH CELLS RELEASE ENERGY FROM GLUCOSE?",
                    correct_answer: "Cellular respiration",
                    options: ["Photosynthesis", "Cellular respiration", "Transpiration", "Pollination"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH METAL IS STRONGLY ATTRACTED TO A MAGNET?",
                    correct_answer: "Iron",
                    options: ["Gold", "Copper", "Iron", "Silver"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE SI UNIT OF ELECTRIC CURRENT?",
                    correct_answer: "Ampere",
                    options: ["Volt", "Ohm", "Watt", "Ampere"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH ORGANS FILTER BLOOD AND PRODUCE URINE?",
                    correct_answer: "Kidneys",
                    options: ["Lungs", "Kidneys", "Stomach", "Pancreas"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH PLANET IS CLOSEST TO THE SUN?",
                    correct_answer: "Mercury",
                    options: ["Venus", "Earth", "Mars", "Mercury"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH SUBATOMIC PARTICLE HAS A NEGATIVE ELECTRIC CHARGE?",
                    correct_answer: "Electron",
                    options: ["Proton", "Neutron", "Electron", "Nucleus"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT ARE ANIMALS THAT EAT BOTH PLANTS AND ANIMALS CALLED?",
                    correct_answer: "Omnivores",
                    options: ["Herbivores", "Carnivores", "Omnivores", "Decomposers"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE PROCESS BY WHICH WATER VAPOUR LEAVES PLANT LEAVES?",
                    correct_answer: "Transpiration",
                    options: ["Pollination", "Germination", "Transpiration", "Fertilization"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE SI UNIT OF ENERGY?",
                    correct_answer: "Joule",
                    options: ["Newton", "Joule", "Ampere", "Metre"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH LAYER OF THE EARTH LIES DIRECTLY BENEATH THE CRUST?",
                    correct_answer: "Mantle",
                    options: ["Inner core", "Outer core", "Mantle", "Atmosphere"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT TYPE OF ROCK FORMS WHEN MAGMA OR LAVA COOLS?",
                    correct_answer: "Igneous rock",
                    options: ["Sedimentary rock", "Igneous rock", "Metamorphic rock", "Limestone"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH GAS SUPPORTS ORDINARY COMBUSTION?",
                    correct_answer: "Oxygen",
                    options: ["Helium", "Neon", "Oxygen", "Nitrogen"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH PLANET IS KNOWN FOR ITS BLUE APPEARANCE AND EXTREME WINDS?",
                    correct_answer: "Neptune",
                    options: ["Mars", "Mercury", "Earth", "Neptune"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE SI BASE UNIT OF MASS?",
                    correct_answer: "Kilogram",
                    options: ["Gram", "Pound", "Newton", "Kilogram"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH SCIENTIST IS ASSOCIATED WITH EVOLUTION BY NATURAL SELECTION?",
                    correct_answer: "Charles Darwin",
                    options: ["Albert Einstein", "Charles Darwin", "Marie Curie", "Galileo Galilei"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE CHANGE FROM A GAS INTO A LIQUID CALLED?",
                    correct_answer: "Condensation",
                    options: ["Evaporation", "Sublimation", "Condensation", "Melting"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH PARTS OF THE NERVOUS SYSTEM INCLUDE THE BRAIN AND SPINAL CORD?",
                    correct_answer: "Central nervous system",
                    options: ["Peripheral nervous system", "Endocrine system", "Central nervous system", "Digestive system"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE MAIN FUNCTION OF RED BLOOD CELLS?",
                    correct_answer: "Transport oxygen",
                    options: ["Fight pathogens", "Transport oxygen", "Clot blood", "Produce hormones"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH TYPE OF LENS CONVERGES PARALLEL RAYS OF LIGHT?",
                    correct_answer: "Convex lens",
                    options: ["Concave lens", "Convex lens", "Plane mirror", "Prism"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT IS THE BOUNDARY AROUND A BLACK HOLE BEYOND WHICH LIGHT CANNOT ESCAPE CALLED?",
                    correct_answer: "Event horizon",
                    options: ["Solar wind", "Orbit line", "Photosphere", "Event horizon"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHO DISCOVERED PENICILLIN?",
                    correct_answer: "Alexander Fleming",
                    options: ["Robert Koch", "Alexander Fleming", "Edward Jenner", "Dmitri Mendeleev"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHAT TERM DESCRIBES AN ORGANISM'S ROLE IN ITS ECOSYSTEM?",
                    correct_answer: "Niche",
                    options: ["Habitat", "Population", "Niche", "Biome"],
                    creator: "system",
                    status: "undone"
                },
                {
                    question: "WHICH PARTICLE IN THE ATOMIC NUCLEUS HAS NO ELECTRIC CHARGE?",
                    correct_answer: "Neutron",
                    options: ["Electron", "Proton", "Neutron", "Ion"],
                    creator: "system",
                    status: "undone"
                }
            ]
        }
    ],
    fields: ["software engineering","general knowledge", "science"]
};





// -------
let INUSE = {
    BANK:[""],
    fields:[""]
}
let QA = {
    field:"",
    questions:[{}]
}
let PROGRESS = {
    score:0,
    field:'',
    question:'',
    questionNumber:0
}

// ELEMENTS

const elements = {
STARTBOX : document.getElementById("start"),
 STARTBTN : document.getElementById("startBtn"),
 ENDQUEST :  document.getElementById("endQ-hide"),
 SCORE : document.getElementById("score-hide"),
 QUESTIONBOX : document.getElementById("question-hide"),
 QUESTION : document.getElementById("questionShow"),
 OPTIONS : document.getElementById("options"),
 PREVQUEST : document.getElementById("prev"),
 NEXTQUEST : document.getElementById("next"),
 FIELD:  document.getElementById("field")

}

async function setActive(set=""){
   sessionStorage.setItem("quiz",set)
}

// --------
elements.STARTBTN.addEventListener("click",()=>{
    init()
    setActive("active")
})
elements.ENDQUEST.addEventListener('click',()=>{
    deinit()
    setActive('stop')
})
elements.NEXTQUEST.addEventListener('click',()=>{
    Next()
})
elements.PREVQUEST.addEventListener('click',()=>{
    Prev()
})



function ForwardCategory(){
    // First check for the category listing
    // Find the index of the current one and increment
}

function RewindCategory(){
    
}


function saveProgress(){
   
    sessionStorage.setItem('progress',JSON.stringify(PROGRESS))
}
async function checkProgress(){
let progress = sessionStorage.getItem('progress')
if (!progress){
    let random = getRandomInt(INUSE.fields.length-1)
 // SELECTING CATEGORY
 PROGRESS.field = INUSE.fields[random]
  INUSE.BANK.forEach(el=>{
    if(el.field==PROGRESS.field){
        QA=el
    }
 })
 console.log(`QA ${JSON.stringify(QA)}`)
 PROGRESS.question = QA.questions[0].question
 console.log('progress')
 console.log(PROGRESS)
 saveProgress()
    return 
}

PROGRESS = JSON.parse(progress)
INUSE.BANK.forEach(el=>{
    if(el.field==PROGRESS.field){
        QA=el
    }
 })
 console.log('same progress')
 console.log(PROGRESS)
}
function SETQuestions(){
let questions = sessionStorage.getItem('question')
if (!questions){
    sessionStorage.setItem('question',JSON.stringify(DEFAULT))
}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function LoadQuestions(){
let bank = sessionStorage.getItem('question')
 if (!bank){
    return []
 }
 INUSE = JSON.parse(bank)
 console.log(INUSE)
 checkProgress()
console.log(QA)
 return bank
}

function IsCorrect(user=""){
let currentQuestion 
QA.questions.forEach(el=>{
    if (el.question == PROGRESS.question){
        currentQuestion = el
    }
})
let answer = currentQuestion.correct_answer

if (answer == user){
    document.getElementById(user).className = "correct"
    PROGRESS.score++
    elements.SCORE.textContent =`[ ${PROGRESS.score} / ${QA.questions.length} ]`
    saveProgress()
    setTimeout(()=>{
        document.getElementById(user).className = ""
    Next()
    },2000)
}
else if (answer != user){
  document.getElementById(user).className = "wrong"
    PROGRESS.score--
    elements.SCORE.textContent =`[ ${PROGRESS.score} / ${QA.questions.length} ]`
    elements.QUESTION.textContent = `Answer: ${answer}`
    saveProgress()
    setTimeout(()=>{
        document.getElementById(user).className = ""
    Next()
    },2000)
}


}
function Next(){


PROGRESS.questionNumber++
console.log(PROGRESS.questionNumber)
if (PROGRESS.questionNumber + 1 == QA.questions.length){
    elements.NEXTQUEST.textContent="Finish"
}
if(PROGRESS.questionNumber + 1 < QA.questions.length){
    elements.NEXTQUEST.textContent="Next"
}

    if (PROGRESS.questionNumber == QA.questions.length){
    console.log(`FDONE`)
elements.QUESTION.textContent = `TOTAL SCORE  ${PROGRESS.score} / ${QA.questions.length}`
  elements.NEXTQUEST.textContent="completed"
  elements.NEXTQUEST.addEventListener('click',()=>{
    deinit()
  })
  elements.PREVQUEST.disabled = true
elements.OPTIONS.innerHTML = ''
return 
}




console.log(PROGRESS.questionNumber)
console.log(QA.questions.length)
PROGRESS.question = QA.questions[PROGRESS.questionNumber].question
console.log(PROGRESS.question)
saveProgress()
Presentation()
}
function Prev(){

if (PROGRESS.questionNumber < 0){
    elements.PREVQUEST.disabled = true
return 
}

if (PROGRESS.questionNumber  === QA.questions.length){
    elements.PREVQUEST.disabled = true
return 
}
PROGRESS.questionNumber--
console.log(PROGRESS.questionNumber)
console.log(QA.questions.length)
PROGRESS.question = QA.questions[PROGRESS.questionNumber].question
console.log(PROGRESS.question)
saveProgress()
Presentation()
}


function Presentation(){
checkProgress()
if (PROGRESS.questionNumber == QA.questions.length){
    console.log(`FDONE`)
elements.QUESTION.textContent = `TOTAL SCORE  ${PROGRESS.score} / ${QA.questions.length}`
elements.OPTIONS.innerHTML = ''
return 
}
let currentQuestion 
QA.questions.forEach(el=>{
    if (el.question == PROGRESS.question){
        currentQuestion = el
    }
})
elements.SCORE.textContent =`SCORE: [ ${PROGRESS.score} / ${QA.questions.length} ]`
elements.QUESTION.textContent = currentQuestion.question
elements.FIELD.textContent = `Category: ${PROGRESS.field}`
elements.OPTIONS.innerHTML = ''
currentQuestion.options.forEach(el=>{
    let li = document.createElement('li')
    let button = document.createElement('button')
    button.textContent = el
    button.id = el
    button.disabled = false
    button.addEventListener('click',()=>{
        IsCorrect(el)
        button.disabled = true
        elements.OPTIONS.childNodes.forEach(el=>{
            if (el.nodeName == "LI"){
                el.childNodes.forEach(el=>{
                    if (el.nodeName == "BUTTON"){
                        el.disabled = true
                    }
                })
            }
        })
    })
    li.append(button)
    elements.OPTIONS.append(li)
})
}

function init(){
    SETQuestions()
    LoadQuestions()
elements.STARTBOX.id="start-hide";
elements.STARTBOX = document.getElementById('start-hide')
    elements.ENDQUEST.id="endQ"
    elements.ENDQUEST = document.getElementById('endQ')
    elements.SCORE.id="score"
    elements.SCORE = document.getElementById('score')
    elements.QUESTIONBOX.id="question"
    elements.QUESTIONBOX = document.getElementById("question")
    Presentation()
}

function deinit(){
    elements.STARTBOX.id="start";
elements.STARTBOX = document.getElementById('start')
    elements.ENDQUEST.id="endQ-hide"
    elements.ENDQUEST = document.getElementById('endQ-hide')
    elements.SCORE.id="score-hide"
    elements.SCORE = document.getElementById('score-hide')
    elements.QUESTIONBOX.id="question-hide"
    elements.QUESTIONBOX = document.getElementById("question-hide")
    
    PROGRESS = {
    score:0,
    field:'',
    question:'',
    questionNumber:0
}
QA = {
    field:"",
    questions:[{}]
}
INUSE = {
    BANK:[""],
    fields:[""]
}
sessionStorage.clear()
}



window.addEventListener("DOMContentLoaded",()=>{
    let session = sessionStorage.getItem('quiz')
    if (session=="active"){
        init()
    }
    else if (session=="stop"){
       deinit() 
    }
})