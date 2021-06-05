# [Check if Word Equals Summation of Two Words](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/submissions/)

### Time: ~ 40 minutes


### Thoughts:
You can programmatically determine the value of a given letter, for instance, by getting it's ascii value and subtracting the difference (`a` is `97`), but a lookup table makes more sense because the values never change, and you don't have to do any additional math.

I could have sped this up by just putting all the calculations in the loop, but I made a dedicated function for portability reasons.

I got hung up on a couple of things on this one. First, I totally spaced the _Math_ functions in Javascript, and tried to execute `10^pow` which was resulting in very odd things. (this is because the `^` operator is a bitwise `XOR`).