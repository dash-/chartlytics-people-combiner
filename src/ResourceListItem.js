import React, { Component } from 'react';
import './ResourceListItem.css';

import { ResourceListItemType } from './types';

class ResourceListItem extends Component {
  render() {
    return (
      <div className="resource-list-item">
        {this.props.resource.name}
      </div>
    );
  }
}

ResourceListItem.propTypes = {
  resource: ResourceListItemType.isRequired,
};

export default ResourceListItem;
