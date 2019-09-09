import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | new-request', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:new-request');
    assert.ok(route);
  });
});
