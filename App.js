import React, { useState } from 'react';
import {
  Button,
  FlatList,
  // Text,
  // TextInput,
  // ScrollView,
  StyleSheet,
  View
} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    console.log(goalTitle);
    setCourseGoals(currentGoals => [...currentGoals, { id : Math.random().toString(), value: goalTitle}]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button onPress={() => setAddMode(true)} title={"Add New Goal"} />
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} />
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
