import { CircularProgress } from '@material-ui/core';
import React from 'react';

const Loader = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%'
      }}
    >
      <div>
        <CircularProgress />
      </div>
    </div>
  );
};

export default Loader;