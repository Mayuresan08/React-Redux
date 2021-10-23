import {Provider} from "react-redux"
import Counter from './Counter';
import CounterHook from "./CounterHooks";
import Array from './Array';
import { store } from "./store";
function App() {

  return (

    <Provider store={store}>
      <Counter/>
      <CounterHook/>
      <Array/>
    </Provider>
  );
}

export default App;

