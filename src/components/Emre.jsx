import React, { useContext } from 'react'
import { NumberContext } from '../Context/NumberContext';

export const Emre = () => {
  const { handleChange } = useContext(NumberContext);
  return (
    <div>
      <button onClick={() => handleChange(-1)}>Decrement</button>
    </div>
  );
}
