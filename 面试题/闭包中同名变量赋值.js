var foo = 'hello';

(function () {
  let foo = foo  // todo
  foo = foo || 'world';
  console.log(foo);
})();