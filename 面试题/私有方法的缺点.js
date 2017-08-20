//问题:在JavaScript中创建一个真正的private方法有什么缺点？
//每一个对象都会创建一个private方法的方法，这样很耗费内存

var Employee = function (name, company, salary) {
  this.name = name || "";
  this.company = company || "";
  this.salary = salary || 5000;

  // 私有方法
  var increaseSalary = function () {
    this.salary = this.salary + 1000;
  };

  // 公有方法
  this.dispalyIncreasedSalary = function () {
    increaseSlary();
    console.log(this.salary);
  }
}

var emp1 = new Employee("John", "Pluto", 3000);
var emp2 = new Employee("Merry", "Pluto", 2000);
var emp3 = new Employee("Ren", "Pluto", 2500);
//在这里 emp1,emp2,emp3都有一个increaseSalary私有方法的副本。
//所以我们除非必要，非常不推荐使用私有方法。