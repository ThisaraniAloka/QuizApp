import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

const Result = ({ route, navigation }) => {
  const { score } = route.params;
  const [modalVisible, setModalVisible] = useState(score === 5); // Show modal if score is 5

  // Adjusted performance messages
  const getMessage = () => {
    if (score === 0) return "Better luck next time! 😢";
    if (score === 1) return "Keep practicing! You can do it! 😊";
    if (score === 2) return "Nice effort! Try again for a better score! 👍";
    if (score === 3) return "Well done! You're improving! 🎯";
    if (score === 4) return "Great job! Almost perfect! 🌟";
    return "Excellent! You're a quiz master! 🏆"; // Full score message
  };

  return (
    <View style={styles.container}>
      {/* Celebration Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>🎉 Congratulations! 🎉</Text>
            <Text style={styles.modalSubText}>You got a perfect score! 🏆</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Score Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Quiz Completed! 🎉</Text>
        <Text style={styles.score}>Your Score: {score}/5</Text>
        <Text style={styles.message}>{getMessage()}</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.exitButton]} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5E6E8",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    elevation: 5,
    alignItems: "center",
    width: "90%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007BFF",
  },
  message: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
    width: "80%",
    alignItems: "center",
  },
  exitButton: {
    backgroundColor: "#DC3545",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  /* 🎉 Celebration Modal Styles 🎉 */
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)", 
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    width: "80%",
  },
  modalText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#28A745", 
  },
  modalSubText: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Result;
