import Clock from './Clock'
import Timer from './Timer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div id='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Clock />} />
          <Route path='/timer' element={<Timer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 
