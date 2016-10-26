/* @flow */
import isArray from 'lodash.isArray';
import assign from 'lodash.assign';

type Rules = Object | Object[];

export default function StyleSheet(rules: Rules): Rules {
  if (!rules) return {};
  const input: Array = isArray(rules) ? rules : [rules];
  return assign({}, ...input);
}
