# [Running Sum of 1D Array](https://leetcode.com/problems/running-sum-of-1d-array/)

### Time: ~ 30 minutes


### Thoughts:
The simple solution was to just do a for loop, and that was what I did on my first attempt. That worked fine and it came out to faster than ~25%. My second attempt I decided to use the native `array.forEach` method, which gained a lot of ground in efficiency. It's not a ton - about 20ms, but if we were talking about tens of thousands of rows, it's a big deal.  