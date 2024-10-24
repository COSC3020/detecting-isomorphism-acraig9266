I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
https://www.w3schools.com/js/js_array_methods.asp was used for help with array methods.

# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?
T(n) ∈ $\Theta$(V<sup>3</sup>)

The main are_isomorphic function has a nested loop. The inner and outer loops in the function each execute the same number of times as there are vertices. This means the main function is V<sup>2</sup>. Each time the inner loop is executed it calls the function nodeMatch. nodeMatch has a loop that executes V times since the length of a node is equivalent to the number of vertices in an adjacency matrix. So, the nodeMatch function has a complexity of V and is being called V<sup>2</sup> times. The complexity is V<sup>2</sup>(V) = V<sup>3</sup>.

