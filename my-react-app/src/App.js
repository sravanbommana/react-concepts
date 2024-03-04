import logo from './logo.svg';
import './App.css';
import UseStateExample from './hooks/use-state/UseStateExample';
import FocusInput from './hooks/use-ref/FocusInput';
import ParentInput from './hooks/use-ref/forward-ref/ParentInput';
import CounterOne from './hooks/use-reducer/CounterOne';
import { LoginForm } from './hooks/use-context/LoginForm';
import User from './components/user/User';
import { UserContextProvider } from './hooks/use-context/UserContext';
import ParentOne from './hooks/use-callback/ParentOne';
import CounterContextProvider from './hooks/context-with-reducer/contexts/CounterContext';
import Counter from './hooks/context-with-reducer/Counter';

function App() {
  return (
    <div className="App">
      <div className="mt-5 ms-5 me-5">
        {/* <UseStateExample /> */}
        {/* REF Examples */}
        {/* <FocusInput />
        <ParentInput /> */}
        {/* Use Reducer Example */}
        {/* <CounterOne /> */}
        {/* Use Context Example */}
        {/* <UserContextProvider>
          <LoginForm />
          <User />
        </UserContextProvider> */}
        {/* Use Call Back Example */}
        {/* <ParentOne /> */}
        {/* Use Context with Reducer */}
        {/* <CounterContextProvider>
          <Counter />
        </CounterContextProvider> */}
      </div>
    </div>
  );
}

export default App;
