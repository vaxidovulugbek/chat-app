import './App.css';
import ChatCorrespond from './components/ChatCorrespond/ChatList';
import ChatWindow from './components/chatWindow/ChatWindow';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}
      <ChatCorrespond />
      <ChatWindow />
    </div>
  );
}

export default App;
