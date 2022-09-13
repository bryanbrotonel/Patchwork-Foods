import React, { useState } from 'react';
import SignUp from './pages/SignUp';

function App() {
  const [cart, setCart] = useState([]);
  
  return <SignUp />;
}

export default App;
