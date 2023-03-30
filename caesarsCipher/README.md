ROT13 Encoder/Decoder

The rot13 function is a simple encoder/decoder that uses the ROT13 cipher. ROT13 is a Caesar cipher with a shift of 13, which means that each letter in the input string is replaced by the letter 13 positions ahead of it in the alphabet. For example, A becomes N, B becomes O, and so on. The cipher is symmetrical, which means that applying the ROT13 cipher to the same string twice will result in the original string.

The function works by iterating over each character in the input string and determining its position in the alphabet. If the character is not a letter, it is left unchanged. Otherwise, the function computes the new position of the letter using the ROT13 cipher and replaces it with the corresponding letter.
Usage

To use the rot13 function, pass in a string as an argument, like this:



    rot13("SERR PBQR PNZC");

The function will return the encoded/decoded string using the ROT13 cipher.
Example


    rot13("SERR PBQR PNZC"); // returns "FREE CODE CAMP"
    rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); // returns "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

Notes

    The function preserves the case of the letters in the input string.
    The function does not modify non-alphabetic characters such as spaces, punctuation, or digits.

