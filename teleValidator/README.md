Phone Number Validator

This is a JavaScript program that validates whether a given string is a valid US phone number. The program uses a regular expression to match the input string against a pattern that represents a valid phone number.

The telephoneCheck function takes a string argument and returns a boolean value indicating whether the input string is a valid US phone number. The function uses the test method of the RegExp object to check whether the input string matches the regular expression.

The regular expression used in this program matches US phone numbers in the following formats:

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555
    1 555-555-5555
    1 (555) 555-5555

The regular expression also allows for an optional leading 1 and an optional space after the leading 1.
Example Usage

javascript

telephoneCheck("555-555-5555");
// returns true

In this example, the input string "555-555-5555" is a valid US phone number, and the program returns true.

javascript

telephoneCheck("555-5555");
// returns false

In this example, the input string "555-5555" is not a valid US phone number, and the program returns false.
Installation

This program does not require any installation. You can simply copy the telephoneCheck function into your JavaScript code and call it with the appropriate argument.
License

This program is licensed under the MIT License. See the LICENSE file for details.