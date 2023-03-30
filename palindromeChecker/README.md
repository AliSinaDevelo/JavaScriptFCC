Palindrome Checker

The palindrome function checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward. For example, "racecar" and "A man, a plan, a canal: Panama" are palindromes.

The function works by first converting the input string to lowercase and removing all non-alphanumeric characters using a regular expression. It then checks if the resulting string is equal to the reversed version of itself, which is achieved by splitting the string into an array of characters, reversing the order of the array, and then joining the characters back together.
Usage

To use the palindrome function, pass in a string as an argument, like this:



    palindrome("eye");

The function will return a boolean value indicating whether or not the input string is a palindrome.
Example



    palindrome("eye"); // returns true
    palindrome("not a palindrome"); // returns false
    palindrome("A man, a plan, a canal: Panama"); // returns true

Notes

    The function treats uppercase and lowercase letters as equivalent.
    The function ignores all non-alphanumeric characters, such as punctuation marks and spaces.
    If the input string is empty or contains only non-alphanumeric characters, the function will return true, since it can be considered a palindrome.