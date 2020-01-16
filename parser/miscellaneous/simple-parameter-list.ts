import { Context } from '../../../src/parser/common';
import * as t from 'assert';
import { parseScript } from '../../../src/seafox';

describe('Miscellaneous - Simple parameter list', () => {
  for (const arg of [
    // Array destructuring.
    '[]',
    '[]',
    '[a]',
    'x, [a]',
    '[a, b]',
    '[a], x',
    // Array destructuring with defaults.
    '[a = 0]',
    '[a, b] = []',
    'x, [a = 0]',
    '[a = 0], x',

    // Array destructuring with rest binding identifier.
    '[...a]',
    'x, [...a]',
    '[...a], x',
    // Array destructuring with rest binding pattern.
    '[...[a]]',
    'x, [...[a]]',
    '[...[a]], x',

    // Object destructuring.
    '{}',
    '{p: o}',
    'x, {p: o}',
    '{p: o}, x',

    // Object destructuring with defaults.
    '{p: o = 0}',
    'x, {p: o = 0}',
    '{p: o = 0}, x',
    '{ p, o } = {}',
    // Object destructuring with shorthand identifier form.
    '{o}',
    'x, {o}',
    '{o}, x',

    // Object destructuring with CoverInitName.
    '{o = 0}',
    'x, {o = 0}',
    '{o = 0}, x',

    // Object setter
    '{ set f(a = 1) }, x',

    // Default parameter.
    'd = 0',
    'x, d = 0',
    'd = 0, x',

    // Rest parameter.
    '...rest',
    'x, ...rest',
    '...x',

    // Rest parameter with array destructuring.
    '...[]',
    '...[a]',
    'x, ...[]',
    'x, ...[a]',
    // Rest parameter with object destructuring.
    '...{}',
    '...{p: o}',
    'x, ...{}',
    'x, ...{p: o}',

    // All non-simple cases combined.
    'x, d = 123, [a], {p: 0}, ...rest',

    // Misc
    'a, {b}',
    '{}',
    '[]',
    '[{}]',
    '{a}',
    'a, {b}',
    'a, b, {c, d, e}',
    'a = b',
    'a, b, c = 1',
    '...args',
    'a, b, ...rest',
    '[a, b, ...rest]',
    '{ a = {} }',
    '{ a } = { b: true }'
  ]) {
    it(`function f(${arg}) { "use strict"; }`, () => {
      t.throws(() => {
        parseScript(`function f(${arg}) { "use strict"; }`);
      });
    });

    it(`async function *f(${arg}) { "use strict"; }`, () => {
      t.throws(() => {
        parseScript(`async function *f(${arg}) { "use strict"; }`);
      });
    });

    it(`void function(${arg}) { "use strict"; };`, () => {
      t.throws(() => {
        parseScript(`void function(${arg}) { "use strict"; };`);
      });
    });

    it(`(class { constructor(${arg}) { "use strict"; } });`, () => {
      t.throws(() => {
        parseScript(`(class { constructor(${arg}) { "use strict"; } });`);
      });
    });

    it(`({ set m(${arg}) { "use strict"; } });`, () => {
      t.throws(() => {
        parseScript(`({ set m(${arg}) { "use strict"; } });`);
      });
    });

    it(`class C { async m(${arg}) { "use strict"; } }`, () => {
      t.throws(() => {
        parseScript(`class C { async m(${arg}) { "use strict"; } }`);
      });
    });

    it(`class C { *m(${arg}) { "use strict"; } }`, () => {
      t.throws(() => {
        parseScript(`class C { *m(${arg}) { "use strict"; } }`);
      });
    });

    it(`class C { async m(${arg}) { "use strict"; } }`, () => {
      t.throws(() => {
        parseScript(`class C { async m(${arg}) { "use strict"; } }`);
      });
    });

    it(`(${arg}) => { "use strict"; };`, () => {
      t.throws(() => {
        parseScript(`(${arg}) => { "use strict"; };`);
      });
    });

    it(`async (${arg}) => { "use strict"; };`, () => {
      t.throws(() => {
        parseScript(`async (${arg}) => { "use strict"; };`);
      });
    });
  }
});