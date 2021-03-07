import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button/Button';
 

const imageModal = props =>
  ReactDOM.createPortal(
    <div className="image--modal">
      <header className="image--modal__header">
        <h1>{props.title}</h1>
      </header>
      <div className="image--modall__content">{props.children}</div>
      <div className="image--modal__actions">
  
      </div>
    </div>,
    document.getElementById('image-modal-root')
  );

export default imageModal;
