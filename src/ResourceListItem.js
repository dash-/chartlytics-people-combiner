import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import './ResourceListItem.css';

import { TYPE_PERSON, TYPE_PLACE } from './constants';
import { ResourceListItemType } from './types';

class ResourceListItem extends Component {
  renderNames() {
    const names = this.props.resource.people || [this.props.resource.name];

    return names.map((name, key) => (
      <p key={key}>{name}</p>
    ));
  }

  renderType() {
    const icons = {
      [TYPE_PERSON]: 'user',
      [TYPE_PLACE]: 'map-marker',
    }

    return (
      <p>
        <Icon name={icons[this.props.resource.type]} />
        {this.props.resource.type}
      </p>
    );
  }

  render() {
    return (
      <tr className="resource-list-item">
        <td className="names">
          {this.renderNames()}
        </td>
        <td className="type">
          {this.renderType()}
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
