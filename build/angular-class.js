(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.IdFly || (this.IdFly = {});

  this.IdFly.AngularClass = (function() {
    function AngularClass() {}

    AngularClass.factory = function() {
      return this._createFactory((function(_this) {
        return function() {
          return new _this();
        };
      })(this));
    };

    AngularClass.classFactory = function() {
      console.log('angular-class-coffee: @classFactory is deprecated; use ' + '@class() instead');
      return this["class"]();
    };

    AngularClass["class"] = function() {
      return this._createFactory((function(_this) {
        return function() {
          return ((function(superClass) {
            extend(_Class, superClass);

            function _Class() {
              return _Class.__super__.constructor.apply(this, arguments);
            }

            return _Class;

          })(_this));
        };
      })(this));
    };

    AngularClass.directive = function() {
      return ((function(_this) {
        return function() {
          var key, object, value;
          object = {};
          for (key in _this) {
            value = _this[key];
            if (key === '__super__') {
              continue;
            }
            object[key] = value;
          }
          object.controller = _this.factory();
          object.link = (function(_scope, element, _attrs, controller) {
            if (controller.link) {
              return controller.link(element);
            }
          });
          return object;
        };
      })(this));
    };

    AngularClass._createFactory = function(resultCallback) {
      var factory, imports;
      imports = this._import || [];
      factory = (function(_this) {
        return function() {
          var args, i, index, len, name, result;
          args = Array.prototype.concat.apply([], arguments);
          result = resultCallback();
          for (index = i = 0, len = imports.length; i < len; index = ++i) {
            name = imports[index];
            result[_this._prepareImportName(name)] = args[index];
          }
          if (result.initialize !== void 0) {
            result.initialize();
          }
          return result;
        };
      })(this);
      return imports.concat([factory]);
    };

    AngularClass._prepareImportName = function(name) {
      if (name.substr(0, 1) === '$') {
        name = name.slice(1);
      }
      name = '_' + name;
      return name;
    };

    return AngularClass;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXItY2xhc3MuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7O0VBQUEsSUFBQyxDQUFBLFVBQUQsSUFBQyxDQUFBLFFBQVU7O0VBQ0wsSUFBQyxDQUFBLEtBQUssQ0FBQzs7O0lBRVgsWUFBQyxDQUFBLE9BQUQsR0FBVSxTQUFBO0FBQ1IsYUFBTyxJQUFDLENBQUEsY0FBRCxDQUFnQixDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUE7QUFDckIsaUJBQVcsSUFBQSxLQUFBLENBQUE7UUFEVTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBaEI7SUFEQzs7SUFLVixZQUFDLENBQUEsWUFBRCxHQUFlLFNBQUE7TUFDYixPQUFPLENBQUMsR0FBUixDQUFZLHlEQUFBLEdBQ1Ysa0JBREY7QUFFQSxhQUFPLElBQUMsQ0FBQSxPQUFBLENBQUQsQ0FBQTtJQUhNOztJQUtmLFlBQUMsQ0FBQSxPQUFBLENBQUQsR0FBUSxTQUFBO0FBQ04sYUFBTyxJQUFDLENBQUEsY0FBRCxDQUFnQixDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUE7QUFBTSxpQkFBTzs7Ozs7Ozs7O2FBQWUsTUFBZjtRQUFiO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFoQjtJQUREOztJQUdSLFlBQUMsQ0FBQSxTQUFELEdBQVksU0FBQTtBQUNWLGFBQU8sQ0FBQyxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUE7QUFDTixjQUFBO1VBQUEsTUFBQSxHQUFTO0FBRVQsZUFBQSxZQUFBOztZQUNFLElBQUcsR0FBQSxLQUFPLFdBQVY7QUFDRSx1QkFERjs7WUFHQSxNQUFPLENBQUEsR0FBQSxDQUFQLEdBQWM7QUFKaEI7VUFNQSxNQUFNLENBQUMsVUFBUCxHQUFvQixLQUFDLENBQUEsT0FBRCxDQUFBO1VBQ3BCLE1BQU0sQ0FBQyxJQUFQLEdBQWMsQ0FBQyxTQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLE1BQWxCLEVBQTBCLFVBQTFCO1lBQ2IsSUFBRyxVQUFVLENBQUMsSUFBZDtxQkFDRSxVQUFVLENBQUMsSUFBWCxDQUFnQixPQUFoQixFQURGOztVQURhLENBQUQ7QUFLZCxpQkFBTztRQWZEO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFEO0lBREc7O0lBbUJaLFlBQUMsQ0FBQSxjQUFELEdBQWlCLFNBQUMsY0FBRDtBQUNmLFVBQUE7TUFBQSxPQUFBLEdBQVUsSUFBSSxDQUFDLE9BQUwsSUFBZ0I7TUFFMUIsT0FBQSxHQUFVLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQTtBQUNSLGNBQUE7VUFBQSxJQUFBLEdBQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBdkIsQ0FBNkIsRUFBN0IsRUFBaUMsU0FBakM7VUFFUCxNQUFBLEdBQVMsY0FBQSxDQUFBO0FBRVQsZUFBQSx5REFBQTs7WUFDRSxNQUFPLENBQUEsS0FBQyxDQUFBLGtCQUFELENBQW9CLElBQXBCLENBQUEsQ0FBUCxHQUFvQyxJQUFLLENBQUEsS0FBQTtBQUQzQztVQUdBLElBQUcsTUFBTSxDQUFDLFVBQVAsS0FBcUIsTUFBeEI7WUFDRSxNQUFNLENBQUMsVUFBUCxDQUFBLEVBREY7O0FBR0EsaUJBQU87UUFYQztNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUE7QUFhVixhQUFPLE9BQU8sQ0FBQyxNQUFSLENBQWUsQ0FBQyxPQUFELENBQWY7SUFoQlE7O0lBa0JqQixZQUFDLENBQUEsa0JBQUQsR0FBc0IsU0FBQyxJQUFEO01BQ3BCLElBQUcsSUFBSSxDQUFDLE1BQUwsQ0FBWSxDQUFaLEVBQWUsQ0FBZixDQUFBLEtBQXFCLEdBQXhCO1FBQ0UsSUFBQSxHQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsQ0FBWCxFQURUOztNQUdBLElBQUEsR0FBTyxHQUFBLEdBQU07QUFFYixhQUFPO0lBTmE7Ozs7O0FBckR4QiIsImZpbGUiOiJhbmd1bGFyLWNsYXNzLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiQElkRmx5IHx8PSB7fVxuY2xhc3MgQElkRmx5LkFuZ3VsYXJDbGFzc1xuXG4gIEBmYWN0b3J5OiAoKSAtPlxuICAgIHJldHVybiBAX2NyZWF0ZUZhY3RvcnkoKCkgPT5cbiAgICAgIHJldHVybiBuZXcgdGhpcygpXG4gICAgKVxuXG4gIEBjbGFzc0ZhY3Rvcnk6ICgpIC0+XG4gICAgY29uc29sZS5sb2coJ2FuZ3VsYXItY2xhc3MtY29mZmVlOiBAY2xhc3NGYWN0b3J5IGlzIGRlcHJlY2F0ZWQ7IHVzZSAnICtcbiAgICAgICdAY2xhc3MoKSBpbnN0ZWFkJylcbiAgICByZXR1cm4gQGNsYXNzKClcblxuICBAY2xhc3M6ICgpIC0+XG4gICAgcmV0dXJuIEBfY3JlYXRlRmFjdG9yeSgoKSA9PiByZXR1cm4gKGNsYXNzIGV4dGVuZHMgdGhpcykpXG5cbiAgQGRpcmVjdGl2ZTogKCkgLT5cbiAgICByZXR1cm4gKCgpID0+XG4gICAgICBvYmplY3QgPSB7fVxuXG4gICAgICBmb3Iga2V5LCB2YWx1ZSBvZiB0aGlzXG4gICAgICAgIGlmIGtleSA9PSAnX19zdXBlcl9fJ1xuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZVxuXG4gICAgICBvYmplY3QuY29udHJvbGxlciA9IEBmYWN0b3J5KClcbiAgICAgIG9iamVjdC5saW5rID0gKChfc2NvcGUsIGVsZW1lbnQsIF9hdHRycywgY29udHJvbGxlcikgLT5cbiAgICAgICAgaWYgY29udHJvbGxlci5saW5rXG4gICAgICAgICAgY29udHJvbGxlci5saW5rKGVsZW1lbnQpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBvYmplY3RcbiAgICApXG5cbiAgQF9jcmVhdGVGYWN0b3J5OiAocmVzdWx0Q2FsbGJhY2spIC0+XG4gICAgaW1wb3J0cyA9IHRoaXMuX2ltcG9ydCB8fCBbXVxuXG4gICAgZmFjdG9yeSA9ICgpID0+XG4gICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJndW1lbnRzKVxuXG4gICAgICByZXN1bHQgPSByZXN1bHRDYWxsYmFjaygpXG5cbiAgICAgIGZvciBuYW1lLCBpbmRleCBpbiBpbXBvcnRzXG4gICAgICAgIHJlc3VsdFtAX3ByZXBhcmVJbXBvcnROYW1lKG5hbWUpXSA9IGFyZ3NbaW5kZXhdXG5cbiAgICAgIGlmIHJlc3VsdC5pbml0aWFsaXplICE9IHVuZGVmaW5lZFxuICAgICAgICByZXN1bHQuaW5pdGlhbGl6ZSgpXG5cbiAgICAgIHJldHVybiByZXN1bHRcblxuICAgIHJldHVybiBpbXBvcnRzLmNvbmNhdChbZmFjdG9yeV0pXG5cbiAgQF9wcmVwYXJlSW1wb3J0TmFtZSA9IChuYW1lKSAtPlxuICAgIGlmIG5hbWUuc3Vic3RyKDAsIDEpID09ICckJ1xuICAgICAgbmFtZSA9IG5hbWUuc2xpY2UoMSlcblxuICAgIG5hbWUgPSAnXycgKyBuYW1lXG5cbiAgICByZXR1cm4gbmFtZVxuIl19
