/*
* 工厂函数擅长利用封装好的API来创建对象, 提供了让我们轻松创建对象实例的能力
* 当需要将许多相似的功能构筑到不同类型的对象中去,把这些功能抽象为mixin函数，来进行重用。
* */

// 把.constructor属性添加到所有对象实例当中去。
const withConstructor = constructor => o => {
  const proto = Object.assign({}, Object.getPrototypeOf(o), {constructor});
  return Object.assign(Object.create(proto), o);
};

// Set up some functional mixins
const withFlying = o => {
  let isFlying = false;
  return {
    ...o,
    fly() {
      isFlying = true;
      return this;
    },
    land() {
      isFlying = false;
      return this;
    },
    isFlying: () => isFlying
  }
};

const withBattery = ({capacity}) => o => {
  let percentCharged = 100;
  return {
    ...o,
    draw(percent) {
      const remaining = percentCharged - percent;
      percentCharged = remaining > 0 ? remaining : 0;
      return this;
    },
    getCharge: () => percentCharged,
    get capacity() {
      return capacity
    }
  };
};

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
const createDrone = ({capacity = '3000mAh'}) => pipe(
  withFlying,
  withBattery({capacity}),
  withConstructor(createDrone)
)({});

const myDrone = createDrone({capacity: '5500mAh'});
console.log(`
  can fly: ${ myDrone.fly().isFlying() === true }
  can land: ${ myDrone.land().isFlying() === false }
  battery capacity: ${ myDrone.capacity }
  battery status: ${ myDrone.draw(50).getCharge() }%
  battery drained: ${ myDrone.draw(75).getCharge() }%
`);

console.log(`constructor linked: ${ myDrone.constructor === createDrone }`);