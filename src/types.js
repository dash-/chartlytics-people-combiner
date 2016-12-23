import { PropTypes } from 'react';
import { TYPE_PERSON, TYPE_PLACE } from './constants';

export const ResourceTypeType = PropTypes.oneOf(
  [TYPE_PERSON, TYPE_PLACE]
);

export const PeopleType = PropTypes.arrayOf(
  PropTypes.string
);

export const ResourceListItemType = PropTypes.oneOfType([
  PropTypes.shape({
    type: ResourceTypeType,
    order: PropTypes.number,
    name: PropTypes.string,
  }),
  PropTypes.shape({
    type: ResourceTypeType,
    order: PropTypes.number,
    people: PropTypes.arrayOf(PropTypes.string),
  }),
]);

export const ResourceListType = PropTypes.arrayOf(ResourceListItemType);
