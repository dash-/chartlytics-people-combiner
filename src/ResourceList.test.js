import React from 'react';
import ReactDOM from 'react-dom';
import ResourceList from './ResourceList';

it('renders without crashing', () => {
  const resources = [
    {
      type: 'Person',
      order: 1,
      name: 'Brian'
    }, {
      type: 'Place',
      order: 2,
      name: 'Ohio'
    }, {
      type: 'Place',
      order: 12,
      name: 'Ohio'
    }, {
      type: 'Person',
      order: 14,
      name: 'Sarah'
    }
  ];

  const div = document.createElement('div');
  ReactDOM.render(
    <ResourceList resources={resources} />,
    div
  );
});
