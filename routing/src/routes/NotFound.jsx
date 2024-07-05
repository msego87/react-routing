import React from 'react';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
  const navegar = useNavigate();
  return (
    <div>
        {/* para emojis Win + . */}
        <h1>Not Found 👽</h1>
        {/* si le pongo -1 a navegar, va a ir a una ruta anterior a la que estaba */}
        <button onClick={() => navegar(-1)}>go back</button>
    </div>
  )
}

export default NotFound