import React, { Component } from 'react';
import './ResourceList.css';

import processResources from './processResources';
import ResourceListItem from './ResourceListItem';
import { ResourceListType } from './types';

class ResourceList extends Component {
  renderListItems() {
    return processResources(this.props.resources).map((resource, key) => (
      <ResourceListItem key={key} resource={resource} />
    ));
  }

  render() {
    return (
      <table className="table table-striped resource-list">
        <thead>
          <tr>
            <th className="name">Name</th>
            <th className="type">Type</th>
            <th className="order">Order</th>
          </tr>
        </thead>
        <tbody>
          {this.renderListItems()}
        </tbody>
      </table>
    );
  }
}

ResourceList.propTypes = {
  resources: ResourceListType.isRequired,
};


export default ResourceList;
