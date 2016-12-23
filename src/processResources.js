import { fromJS } from 'immutable';
import { TYPE_PERSON } from './constants';

const emptyMemo = {
  type: TYPE_PERSON,
  order: null,
  people: [],
};

const flushPeople = reduction => {
  if(reduction.getIn(['memo', 'people']).size < 1) {
    return reduction;
  }

  return reduction.update('output', output => (
    output.push(reduction.get('memo'))
  )).set('memo', fromJS(emptyMemo));
};

const personReducer = (reduction, resource) => {
  switch(resource.get('type')) {
    case TYPE_PERSON:
      return reduction.update('memo', memo => (
        memo.set('order', resource.get('order'))
          .update('people', people => people.push(resource.get('name')))
      ));
    default:
      return flushPeople(reduction).update('output', output => (
        output.push(resource)
      ));
  }
}

const processResources = resources => {
  const reduction = fromJS(resources)
    .sort((a, b) => a.get('order') - b.get('order'))
    .reduce(personReducer, fromJS({
      memo: emptyMemo,
      output: []}
    ));

  return flushPeople(reduction).get('output').toJS();
};

export default processResources;
