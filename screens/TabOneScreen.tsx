import React, { useState } from "react";
import { Alert, Button, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { words } from "../word_list";

function randomWord() {
  return words[Math.floor(Math.random() * words.length)].toUpperCase();
}

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [solution, setSolution] = useState(randomWord());
  const [userInput, setUserInput] = useState("");
  const [firstGuess, setFirstGuess] = useState("");
  const [secondGuess, setSecondGuess] = useState("");
  const [thirdGuess, setThirdGuess] = useState("");
  const [fourthGuess, setFourthGuess] = useState("");
  const [fifthGuess, setFifthGuess] = useState("");
  const [sixthGuess, setSixthGuess] = useState("");
  const [guessedMissingLetters, setGuessedMissingLetters] = useState("");

  const [gameState, setGameState] = useState("GUESS");

  const errorWordNotInList = () =>
    Alert.alert("Invalid Guess", "Your guess is not in the list", [
      {
        text: "OK",
      },
    ]);

  function resetGame() {
    setSolution(randomWord());
    setUserInput("");
    setFirstGuess("");
    setSecondGuess("");
    setThirdGuess("");
    setFourthGuess("");
    setFifthGuess("");
    setSixthGuess("");
    setGuessedMissingLetters("");
    setGameState("GUESS");
  }

  function doGuess() {
    if (!words.includes(userInput.toLowerCase())) {
      errorWordNotInList();
    } else {
      let guessedLettersNotInSolution = guessedMissingLetters;
      for (let letter of userInput) {
        if (!solution.includes(letter)) {
          if (!guessedMissingLetters.includes(letter)) {
            guessedLettersNotInSolution += letter;
          }
        }
      }
      setGuessedMissingLetters(guessedLettersNotInSolution);

      if (firstGuess == "") {
        setFirstGuess(userInput);
      } else if (secondGuess == "") {
        setSecondGuess(userInput);
      } else if (thirdGuess == "") {
        setThirdGuess(userInput);
      } else if (fourthGuess == "") {
        setFourthGuess(userInput);
      } else if (fifthGuess == "") {
        setFifthGuess(userInput);
      } else if (sixthGuess == "") {
        setSixthGuess(userInput);
        if (userInput !== solution) {
          setGameState("LOSE");
        }
      }
      if (userInput == solution) {
        setGameState("WIN");
      }
      setUserInput("");
    }
  }

  function checkLetter(letter: string, index: number) {
    if (solution[index] === letter) {
      return styles.correctLetter;
    } else if (solution.includes(letter)) {
      return styles.misplacedLetter;
    }
    return styles.incorrectLetter;
  }

  return (
    <View style={styles.container}>
      {firstGuess !== "" ? (
        <View style={styles.fixToText}>
          <Text style={checkLetter(firstGuess[0], 0)}>{firstGuess[0]}</Text>
          <Text style={checkLetter(firstGuess[1], 1)}>{firstGuess[1]}</Text>
          <Text style={checkLetter(firstGuess[2], 2)}>{firstGuess[2]}</Text>
          <Text style={checkLetter(firstGuess[3], 3)}>{firstGuess[3]}</Text>
          <Text style={checkLetter(firstGuess[4], 4)}>{firstGuess[4]}</Text>
        </View>
      ) : (
        <View style={styles.fixToText}>
          <Text style={styles.emptySquare}>
            {userInput === "" ? " " : userInput[0]}
          </Text>
          <Text style={styles.emptySquare}>{userInput[1]}</Text>
          <Text style={styles.emptySquare}>{userInput[2]}</Text>
          <Text style={styles.emptySquare}>{userInput[3]}</Text>
          <Text style={styles.emptySquare}>{userInput[4]}</Text>
        </View>
      )}
      {secondGuess === "" ? (
        <View style={styles.fixToText}>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
        </View>
      ) : (
        <View style={styles.fixToText}>
          <Text style={checkLetter(secondGuess[0], 0)}>{secondGuess[0]}</Text>
          <Text style={checkLetter(secondGuess[1], 1)}>{secondGuess[1]}</Text>
          <Text style={checkLetter(secondGuess[2], 2)}>{secondGuess[2]}</Text>
          <Text style={checkLetter(secondGuess[3], 3)}>{secondGuess[3]}</Text>
          <Text style={checkLetter(secondGuess[4], 4)}>{secondGuess[4]}</Text>
        </View>
      )}
      {thirdGuess === "" ? (
        <View style={styles.fixToText}>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
        </View>
      ) : (
        <View style={styles.fixToText}>
          <Text style={checkLetter(thirdGuess[0], 0)}>{thirdGuess[0]}</Text>
          <Text style={checkLetter(thirdGuess[1], 1)}>{thirdGuess[1]}</Text>
          <Text style={checkLetter(thirdGuess[2], 2)}>{thirdGuess[2]}</Text>
          <Text style={checkLetter(thirdGuess[3], 3)}>{thirdGuess[3]}</Text>
          <Text style={checkLetter(thirdGuess[4], 4)}>{thirdGuess[4]}</Text>
        </View>
      )}
      {fourthGuess === "" ? (
        <View style={styles.fixToText}>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
        </View>
      ) : (
        <View style={styles.fixToText}>
          <Text style={checkLetter(fourthGuess[0], 0)}>{fourthGuess[0]}</Text>
          <Text style={checkLetter(fourthGuess[1], 1)}>{fourthGuess[1]}</Text>
          <Text style={checkLetter(fourthGuess[2], 2)}>{fourthGuess[2]}</Text>
          <Text style={checkLetter(fourthGuess[3], 3)}>{fourthGuess[3]}</Text>
          <Text style={checkLetter(fourthGuess[4], 4)}>{fourthGuess[4]}</Text>
        </View>
      )}
      {fifthGuess === "" ? (
        <View style={styles.fixToText}>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
          <Text style={styles.emptySquare}> </Text>
        </View>
      ) : (
        <View style={styles.fixToText}>
          <Text style={checkLetter(fifthGuess[0], 0)}>{fifthGuess[0]}</Text>
          <Text style={checkLetter(fifthGuess[1], 1)}>{fifthGuess[1]}</Text>
          <Text style={checkLetter(fifthGuess[2], 2)}>{fifthGuess[2]}</Text>
          <Text style={checkLetter(fifthGuess[3], 3)}>{fifthGuess[3]}</Text>
          <Text style={checkLetter(fifthGuess[4], 4)}>{fifthGuess[4]}</Text>
        </View>
      )}
      {sixthGuess === "" ? (
        <View style={styles.fixToText}>
          <Text style={styles.emptySquare}>
            {userInput === "" ? " " : userInput[0]}
          </Text>
          <Text style={styles.emptySquare}>{userInput[1]}</Text>
          <Text style={styles.emptySquare}>{userInput[2]}</Text>
          <Text style={styles.emptySquare}>{userInput[3]}</Text>
          <Text style={styles.emptySquare}>{userInput[4]}</Text>
        </View>
      ) : (
        <View style={styles.fixToText}>
          <Text style={checkLetter(sixthGuess[0], 0)}>{sixthGuess[0]}</Text>
          <Text style={checkLetter(sixthGuess[1], 1)}>{sixthGuess[1]}</Text>
          <Text style={checkLetter(sixthGuess[2], 2)}>{sixthGuess[2]}</Text>
          <Text style={checkLetter(sixthGuess[3], 3)}>{sixthGuess[3]}</Text>
          <Text style={checkLetter(sixthGuess[4], 4)}>{sixthGuess[4]}</Text>
        </View>
      )}

      {gameState === "WIN" ? (
        <View>
          <Text>You WIN!</Text>

          <Button onPress={() => resetGame()} title="Start Over" />
        </View>
      ) : null}
      {gameState === "LOSE" ? (
        <View>
          <Text>You didn't win this one!</Text>

          <Button onPress={() => resetGame()} title="Try Again" />
        </View>
      ) : null}
      {gameState === "GUESS" ? (
        <>
          <View style={styles.fixToText}>
            {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map(
              (letter) => (
                <Button
                  key={letter}
                  title={letter}
                  onPress={() =>
                    userInput.length < 5
                      ? setUserInput(userInput + letter)
                      : setUserInput(userInput)
                  }
                />
              )
            )}
          </View>

          <View style={styles.fixToText}>
            {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((letter) => (
              <Button
                key={letter}
                title={letter}
                onPress={() =>
                  userInput.length < 5
                    ? setUserInput(userInput + letter)
                    : setUserInput(userInput)
                }
              />
            ))}
          </View>

          <View style={styles.fixToText}>
            <Button
              title="Enter"
              disabled={userInput.length !== 5}
              onPress={() => doGuess()}
            />
            {["Z", "X", "C", "V", "B", "N", "M"].map((letter) => (
              <Button
                key={letter}
                title={letter}
                onPress={() =>
                  userInput.length < 5
                    ? setUserInput(userInput + letter)
                    : setUserInput(userInput)
                }
              />
            ))}

            <Button
              title="⌫"
              onPress={() =>
                userInput.length > 0
                  ? setUserInput(userInput.substr(0, userInput.length - 1))
                  : setUserInput(userInput)
              }
            />
          </View>
        </>
      ) : null}
    </View>
  );
}

// These styles are reusable in the app.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    height: 40,
    width: 40,
    borderWidth: 1,
    padding: 10,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  correctLetter: {
    width: 75,
    padding: 12,
    margin: 3,
    fontSize: 34,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgb(106, 170, 100)",
  },
  incorrectLetter: {
    width: 75,
    padding: 12,
    margin: 3,
    fontSize: 34,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgb(120, 124, 126)",
  },
  misplacedLetter: {
    width: 75,
    padding: 12,
    margin: 3,
    fontSize: 34,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgb(201, 180, 88)",
  },
  emptySquare: {
    width: 75,
    padding: 12,
    margin: 3,
    fontSize: 34,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "white",
    borderColor: "rgb(211, 214, 218)",
    borderWidth: 4,
  },
});
