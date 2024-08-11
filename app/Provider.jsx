import React from 'react';
import Header from './_components/Header';

function Provider({children}) {
  return (
    <div> 
      <Header/>
      <div style={{ marginTop: '9.5rem' }}>
        {children}
      </div>
    </div>
  )
}

export default Provider
