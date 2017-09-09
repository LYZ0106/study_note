let voidValue = {
  C: {},//默认配置规则

  //未通过验证时输出的信息
  M: {
    isEmpty: 'EMPTY',
    isPhone: 'NOTPHONE',
    isBoolean: 'NOTBOOLEAN',
    isLength: 'BIGGER THAN MAX',
    isUndefined: 'UNDEFINED',
    isNumber: 'NOTNUMBER'
  },

  //自定义规则，所有的规则在里面逐步添加
  R: {
    isEmpty(v) {
      return v !== '';
    },
    isUndefined(v) {
      return typeof v === 'undefined';
    },
    isPhone(v) {
      return /^1[3|4|5|8]\d{9}$/.test(v);
    },
    isBoolean(v) {
      return Object.prototype.toString.call(v) === '[object Boolean]';
    },
    isNumber(v) {
      return Object.prototype.toString.call(v) === '[object Number]';
    },
    isName(v) {
      return /^[\u4E00-\u9FFF]{1,6}$/.test(v);
    },
    isAdress(v) {
      return this.isEmpty(v) && v.length < 200;
    }
  },

  vaild: function (d) {
    for (let i in d) {
      if (!this.C[i]) continue;

      // 判断是否有用户自定义输出的字符串，这里其实是经常用到的，
      // 比如某个字段没有通过验证需要怎么样提示，以及提示的文字，在验证表单是尤其重要！
      if (this.C[i].fn) {
        let fn = this.R[this.C[i]['fn']] || this.C[i]['fn'],
          message = this.C[i]['tip'];
      } else {
        let fn = this.R[this.C[i]] || this.C[i],
          message = this.M[this.C[i]];
      }

      //这里我们判断是需要执行验证函数还是比对数值大小
      let t = Object.prototype.toString.call(fn);

      if (t === '[object Function]') {
        if (!fn(d[i])) {
          console.warn(message);
          return false;
        }
      } else if (t === '[object Number]') {
        if (!/\d+/.test(d[i]) || parseInt(d[i]) >= fn) {
          console.warn(message);
          return false;
        }
      }
    }

    return d;//如果都匹配到了，可以输出完整的数据源对象。
  }
}

//C是公开的对象，外面可以任意改变其值，是为了针对多种多样的验证逻辑。
voidValue.C = {
  firstName: {fn: 'isName', tip: '请填写正确的姓名'},
  //最外层的字段必须是和数据源字段一一对应的，里面的对象第一个参数fn是需要验证的方法，第二个是未通过该方法时提示的文字。
  lastName: {fn: 'isName', tip: '请填写正确的姓名'},
  age: {fn: 122, tip: '您是彭祖吗？这么高龄！'},
  adress: {fn: 'isAdress', tip: '请输入正确的地址'},
  phone: {fn: 'isPhone', tip: '请填写正确的手机号码'},
  boss: {fn: 'isBoolean', tip: '你确定你是老板妈妈吗？'},
}

let m = voidValue.vaild(data);
