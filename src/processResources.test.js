import processResources from './processResources';
import resources from './resources';

it('processes without crashing', () => {
  processResources(resources);
});
