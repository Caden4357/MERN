import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Main name="Wilcox, Caden" initialAge={23} hairColor="Blonde"/>

      <Main name="Smith, John" initialAge={34} hairColor="Brown"/>

      <Main name="Withers, Bill" initialAge={69} hairColor="Black"/>

      <Main name="Adams, Amy" initialAge={36} hairColor="Red"/>
    </div>
  );
}

export default App;
