import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { questions } from "../data/questions";

const Quiz = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    let newScore = score;
    if (answer === questions[currentQuestionIndex].answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate("Result", { score: newScore });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate("Result", { score });
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressBar,
            { width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` },
          ]}
        />
      </View>

      {/* Question Card */}
      <View style={styles.card}>
        <Text style={styles.questionText}>
          {questions[currentQuestionIndex].question}
        </Text>
      </View>

      {/* Answer Options */}
      {questions[currentQuestionIndex].options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.optionButton}
          onPress={() => handleAnswer(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      {/* Footer with Navigation Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.navButton, currentQuestionIndex === 0 && styles.disabledButton]}
          onPress={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentQuestionIndex < questions.length - 1 ? "Next" : "Finish"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5E6E8",
    justifyContent: "center",
  },
  progressContainer: {
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 20,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#6A1B9A",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    alignItems: "center",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  optionButton: {
    backgroundColor: "#871F78",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  optionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#E0B0FF",
    position: "absolute",
    bottom: 0,
    width: "112%",
  },
  navButton: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#DA70D6",
    fontWeight: "bold",
  },
});

export default Quiz;
