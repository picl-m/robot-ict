import React from 'react';
import { Table } from './Table';

export const App = () => {
  return(
    <div>
      <h1>RobotICT table</h1>
      <Table minCount={1} maxCount={100} />
    </div>
  )
};
