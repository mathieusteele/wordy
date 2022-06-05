# Overview

I have built some simple web applications with React in the past, and I wanted to see how similar it is to develop mobile apps with React Native. To accomplish that goal, I decided to practice with React Native by developing the popular game WORDLE (copyright Josh Wordle and/or New York Times).

This app recreates some of the experience of this popular word game by prompting the user to guess a five letter word, providing feedback to the user in the form of coloring the letters. Green means the letter is in the word and in the correct position, yellow means the letter is in the word but not in the correct position, and Gray means that the letter is not present in the solution word.

I began playing Wordle with my kids and it became a fun thing to do when we had a few minutes and wanted to expand their vocabulary and thinking skills. It can be frustrating to play with others because you get only one game per day. In my implementation, the user can play again with a fresh word after completing a game.

[Watch a demonstration video](https://www.youtube.com/watch?v=twkhX84OO-4)

# Development Environment

I built this using React Native and optimized the experience for the older iPhone I have.  

React Native gives the option of JavaScript or TypeScript and I opted to use TypeScript.

# Useful Websites

* [React Native Docs](https://reactnative.dev/)

# Future Work

* Show the current text entry only on the corresponding line for the curent guess.
* Style the buttons on the keyboard for previously guessed letters.
* Optimize styling to be more responsive for different device sizes