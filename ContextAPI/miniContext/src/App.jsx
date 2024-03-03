import "./App.css";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>ContextAPI - Chai</h1>
    </UserContextProvider>
  );
}

export default App;
