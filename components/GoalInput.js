import React, { useState } from 'react';

import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'; 

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const addGoalHandler = () => {
    console.log(enteredGoal);
    setCourseGoals(currentGoals => [...currentGoals, { id : Math.random().toString(), value: enteredGoal}]);
  };

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal animationType={"slide"} visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  }
});

export default GoalInput;