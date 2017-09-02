if (typeof Object.create !== "function") {
  Object.create = function (proto, propertiesObject) {
    if (!(proto === null || typeof proto === "object" || typeof proto === "function")) {
      throw TypeError('Argument must be an object, or null');
    }

    var temp = new Object();
    temp.__proto__ = proto;
    if(typeof propertiesObject ==="object")
      Object.defineProperties(temp,propertiesObject);
    return temp;
  };
}