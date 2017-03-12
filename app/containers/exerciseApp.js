


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ExerciseApp />
      </Provider>

      // <View>
      //   <CurrentExercise />        
      //   <ExerciseList />
      // </View>
    );
  }
}