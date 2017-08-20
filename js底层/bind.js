if(Function.prototype.bind===undefined){
  Function.prototype.bind=function(obj){
    var fn=this;
    var args=Array.prototype.slice.call(arguments,1);

    return function(){
      var innerArgs=Array.prototype.slice.call(arguments);
      var allArgs=args.concat(innerArgs) // todo

      fn.apply(obj,allArgs);
    }
  }
}
