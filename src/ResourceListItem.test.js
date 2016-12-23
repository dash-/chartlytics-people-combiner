import React from 'react';
import ReactDOM from 'react-dom';
import ResourceListItem from './ResourceListItem';

it('renders without crashing', () => {
  const testResource = {
    type: 'Person',
    order: 1,
    people: ['Brian'],
  };

  const div = document.createElement('div');
  ReactDOM.render(
    <table>
      <tbody>
        <ResourceListItem resource={testResource} />
      </tbody>
    </table>,
    div
  );
});
