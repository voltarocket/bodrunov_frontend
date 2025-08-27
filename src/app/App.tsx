import AppRouter from '../config/router'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <AppRouter />
      </div>
    </Router>
  )
}

export default App
