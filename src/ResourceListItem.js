import React, { Component } from 'react';
import './ResourceListItem.css';

import { ResourceListItemType } from './types';

class ResourceListItem extends Component {
  renderNames() {
    const names = this.props.resource.people || [this.props.resource.name];

    return names.map((name, key) => (
      <p key={key}>{name}</p>
    ));
  }

  render() {
    return (
      <tr className="resource-list-item">
        <td className="names">
          {this.renderNames()}
        </td>
        <td className="type">
          <p>{this.props.resource.type}</p>
        </td>
        <td className="order">
          <p>{this.props.resource.order}</p>
        </td>
      </tr>
    );
  }
}

ResourceListItem.propTypes = {
  resource: ResourceListItemType.isRequired,
};


export default ResourceListItem;
