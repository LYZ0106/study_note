(function (root, factory, plug) {
  factory(root.jQuery, plug);
})(window, function ($, plug) {
  var __DEFAULTS__ = {
    trigger: "keyup",
    errorMessage: "error",
    submitType: "normal",
    error: function () {
      alert("提交失败")
    },
    dataType: "json",
    type: "get"
  };
  var __RULES__ = {
    "Required": function () {
      return this.val();
    },
    "Regexp": function () {
      return new RegExp(this.data("zv-regexp")).test(this.val());
    },
    "Equals": function () {
      return $('input[name=' + this.data("zv-equals") + ']').val() === this.val();
    },
    "Different": function () {
      return $('input[name=' + this.data("zv-different") + ']').val() != this.val();
    },
    "StringlengthMin": function () {
      return parseInt(this.val().length) >= parseInt(this.data("zv-stringlength-min"));
    },
    "StringlengthMax": function () {
      return parseInt(this.val().length) <= parseInt(this.data("zv-stringlength-max"));
    },
    "Integer": function () {
      return !isNaN(this.val());
    },
    "Greaterthan": function () {
      return Number(this.val()) >= parseInt(this.data("zv-greaterthan"));
    },
    "Lessthan": function () {
      return Number(this.val()) <= parseInt(this.data("zv-lessthan"))
    },
  }
  var __PROTOTYPE__ = {
    _submit: function () {
      if (this.$fields.trigger(this.trigger).filter(".has-error").length === 0) {
        this.submitType === "normal" && this.get(0).submit();
        this.submitType === "ajax" && this._ajax();
      } else {
        alert("数据有误，无法提交");
      }
    },
    _ajax: function () {
      var form = this.get(0);
      alert($(form).serialize());
      $.ajax({
        url: form.action,
        type: this.type,
        data: $(form).serialize(),
        error: this.error,
        success: this.success,
        dataType: this.dataType
      });
    }
  };

  $.fn[plug] = function (options) {
    $.extend(this, __DEFAULTS__, options, __PROTOTYPE__);
    this.$fields = this.find("input,select,textarea").not("[type=button],[type=submit],[type=reset]");
    //console.log(this.$fields);

    var _this = this;
    this.$fields.on(this.trigger, function () {
      var $this = $(this);
      $this.removeClass("has-error has-success");
      $this.next().remove();

      var result = true;
      $.each(__RULES__, function (rule, validator) {
        if ($this.data("zv" + rule)) {
          result = validator.call($this);
          if (!result) {
            $this.after("<span style='color:red'>"
              + ($this.data("zv" + rule + "-message")
                || _this.errorMessage) + "</span>")
          }
          return result;
        }
      });
      $this.addClass(result ? "has-success" : "has-error");
    });
    this.find("[data-zv-submit=true]").click(function () {
      _this._submit();
    });
  }

  $.fn[plug].addRules = function (options) {
    $.extend(__RULES__, options)
  }
}, "myValidator");