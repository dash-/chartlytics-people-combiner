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
      <div className="resource-list">
        {this.renderListItems()}
      </div>
    );
  }
}

ResourceList.propTypes = {
  resources: ResourceListType.isRequired,
};

export default ResourceList;
