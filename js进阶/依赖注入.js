//bind函数。js可以通过bind,apply,call等函数可以很方便地控制函数的参数和this变量，
// 所以简单地依赖注入在很多情况下已经被不知不觉地使用

function DI(dependency) {
  this.dependency = dependency;
}

DI.prototype.inject = function (func) {
  let deps = /^[^(]+\(([^)]+)/.exec(func.toString());

  //  构建参数绑定数组
  deps = deps
    ? deps[1]
      .split(/\s?,\s?/)
      .map(dep => this.dependency[dep])
    : [];

  return () => func.apply(this, deps); // 通过apply将依赖参数传入函数
}


/*******************************/
let deps = { // 要注入的依赖
  dep1: () => 'this is dep1',
  dep2: () => 'this is dep2',
  dep3: () => 'this is dep3',
  dep4: () => 'this is dep4',
};

let di = new DI(deps); // 新建一个“注射器”

// 注射
let myFunc = di.inject(function (dep3, dep1, dep2) {
  return [dep3(), dep1(), dep2()].join(' -> ');
});

// 测试
console.log(myFunc())