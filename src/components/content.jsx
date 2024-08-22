import './body.css';
import React, { useState, useReducer } from 'react';
import Apple from '../assets/apple.png';
import Mango from '../assets/mango.png';
import Grapes from '../assets/grapes.png';
import Strawberry from '../assets/strawberry.png';

const initialState = { count: 0 };

function Fruits(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function Fruit() {
  const [state, dispatch] = useReducer(Fruits, initialState);
  const [appleCount, setAppleCount] = useState(0);
  const [mangoCount, setMangoCount] = useState(0);
  const [grapesCount, setGrapesCount] = useState(0);
  const [strawberryCount, setStrawberryCount] = useState(0);

  const Adding = (fruit) => {
    switch (fruit) {
      case 'apple':
        setAppleCount(appleCount + 1);
        break;
      case 'mango':
        setMangoCount(mangoCount + 1);
        break;
      case 'grapes':
        setGrapesCount(grapesCount + 1);
        break;
      case 'strawberry':
        setStrawberryCount(strawberryCount + 1);
        break;
      default:
        break;
    }
  };

  const Removing = (fruit) => {
    switch (fruit) {
      case 'apple':
        setAppleCount(appleCount - 1);
        break;
      case 'mango':
        setMangoCount(mangoCount - 1);
        break;
      case 'grapes':
        setGrapesCount(grapesCount - 1);
        break;
      case 'strawberry':
        setStrawberryCount(strawberryCount - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="body">
          <div className="Apple">
            <img src={Apple} alt="Apple" className="img-fluid" />
            <h2>Apple</h2>
            <button className="Add" onClick={() => Adding('apple')}>Add</button>
            <button className="Remove" onClick={() => Removing('apple')}>
              Remove
            </button>
            <p>Quantity: {appleCount}</p>
          </div>

          <div className="Mango">
            <img src={Mango} alt="Mango" className="img-fluid" />
            <h2>Mango</h2>
            <button className="Add" onClick={() => Adding('mango')}>
              Add
            </button>
            <button className="Remove" onClick={() => Removing('mango')}>
              Remove
            </button>
            <p>Quantity: {mangoCount}</p>
          </div>

          <div className="Grapes">
            <img src={Grapes} alt="Grapes" className="img-fluid" />
            <h2>Grapes</h2>
            <button className="Add" onClick={() => Adding('grapes')}>
              Add
            </button>
            <button className="Remove" onClick={() => Removing('grapes')}>
              Remove
            </button>
            <p>Quantity: {grapesCount}</p>
          </div>

          <div className="Strawberry">
            <img src={Strawberry} alt="Strawberry" className="img-fluid" />
            <h2>Strawberry</h2>
            <button className="Add" onClick={() => Adding('strawberry')}>
              Add
            </button>
            <button className="Remove" onClick={() => Removing('strawberry')}>
              Remove
            </button>
            <p>Quantity: {strawberryCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fruit;