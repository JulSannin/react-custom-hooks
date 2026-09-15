import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [value, setValue] = useLocalStorage('');

  return (
    <>
      <p>
        <label style={{ marginRight: '10px' }}>Сохраненное значение:</label>
        {value}
      </p>
      <p>
        <input onChange={(event) => setValue(event.target.value)}/>
      </p>
    </>
  );
}

export default App;
