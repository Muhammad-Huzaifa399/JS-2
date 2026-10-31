// chp 6-9 

// q1
// document.write("Result: <br>");
// var a = 10;
// document.write("The value of a is: " + a + "<br>" + "..........................................." + "<br><br>");

// ++a;
// document.write("The value of ++a is: " + a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br><br>");

// document.write("The value of a++ is: " + a + "<br>");
// a++;
// document.write("Now the value of a is: " + a + "<br><br><br>");

// --a;
// document.write("The value of --a is: " + a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br><br>");

// document.write("The value of a-- is: " + a + "<br>");
// a--;
// document.write("Now the value of a is: " + a + "<br><br><br>");


// q2
// var a = 2, b = 1;
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");

// // --a - --b + ++b + b--
// var Result = --a - --b + ++b + b-- ;
// document.write("result is " + Result + "<br>");

// // --a
// --a;
// document.write("--a is " + a + "<br>");

// // --a - --b
// --a, --b;
// var result1 = a - b;
// document.write("--a - --b is " + result1 + "<br>");

// // --a - --b + ++b
// --a, --b, ++b;
// var result2 = a - b + b;
// document.write("--a - --b + ++b is " + result2 + "<br>");

// // --a - --b + ++b + b--
// --a, --b, ++b, b--;
// var result2 = a - b + b + b;
// document.write("--a - --b + ++b + b-- is " + result2 + "<br>");


// q3
// var username = prompt("Enter a name");
// alert("hello " + username + " Welcome back");

// q4
// there isn't a question 4

// q5
// var input = prompt("Enter a number");

// if (input === "" || input === null) {
//     input = 5;
// }
// else if (!isNaN(input)){
//     input = Number(input);
// }
// else {
//     input = 5;
// }

// document.write("<h2>Multiplication Table Of " + input + "</h2> <br>")

// document.write( input + "* 1 = " + input*1 + "<br>");
// document.write( input + "* 2 = " + input*2 + "<br>");
// document.write( input + "* 3 = " + input*3 + "<br>");
// document.write( input + "* 4 = " + input*4 + "<br>");
// document.write( input + "* 5 = " + input*5 + "<br>");
// document.write( input + "* 6 = " + input*6 + "<br>");
// document.write( input + "* 7 = " + input*7 + "<br>");
// document.write( input + "* 8 = " + input*8 + "<br>");
// document.write( input + "* 9 = " + input*9 + "<br>");
// document.write( input + "* 10 = " + input*10 + "<br>");


// q6
// // a
// var subject1 = prompt("subject1");
// var subject2 = prompt("subject2");
// var subject3 = prompt("subject3");

// // b
// var totalMarks = 100;

// // c
// var obtained1 = prompt("english obtained marks");

// // d
// var obtained2 = prompt("math obtained marks");
// var obtained3 = prompt("urdu obtained marks");

// // e
// var percent1 = Number(obtained1) / totalMarks * 100;
// var percent2 = Number(obtained2) / totalMarks * 100;
// var percent3 = Number(obtained3) / totalMarks * 100;

// document.write("<h1> Subject Total Marks Obtained Marks Percentage </h1>");
// document.write(subject1 + "    " + totalMarks + "    " + obtained1 + "    " + percent1 + "%<br>" + subject2 + "    " + totalMarks + "    " + obtained2 + "    " + percent2 + "%<br>" + subject3 + "    " + totalMarks + "    " + obtained3 + "    " + percent3 + "%<br>")

// var totalMarks = totalMarks * 3;
// var obtainedMarks = +obtained1 + +obtained2 + +obtained3;
// var Percentage = obtainedMarks /totalMarks * 100;
// document.write(totalMarks + "    " + obtainedMarks + "    " + Percentage + "%");

