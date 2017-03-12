import * as types from '../actions/actionTypes';

// this will eventually be moved from this file
const exercises = [
  {
    id: 1, // consider key uniqueness problem if an exercise is in a routine more than once
    name: 'Jumping Jacks',
    metrics: {
      reps: 40
    }
  },
  {
    id: 2,
    name: 'Squats',
    metrics: {
      reps: 30
    }
  },
  {
    id: 3,
    name: 'Push Ups',
    metrics: {
      reps: 20
    }
  }
]

const initialState = {
  excercises: exercises,
  currentExerciseIndex: 0
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.NEXT_EXERCISE:
      return {
        ...state,
        currentExerciseIndex: state.currentExerciseIndex + 1
      };
    default:
      return state;
  }
}