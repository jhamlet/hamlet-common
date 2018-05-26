import * as predicates from './predicates';
import * as projections from './projections';

export * from './predicates';
export * from './projections';

export default {
  ...predicates,
  ...projections
};

