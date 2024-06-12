import './App.css';
import Quiz from './components/Quiz';
import { Header } from './components/comman/Header';

function App() {
  return (
    <>
      <Header />
      <main className="pt-7">
        <div className="container">
          <Quiz />
        </div>
      </main>
    </>
  );
}

export default App;
