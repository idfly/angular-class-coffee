(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.IdFly || (this.IdFly = {});

  this.IdFly.AngularClass = (function() {
    function AngularClass() {}

    AngularClass.factory = function() {
      return this._createFactory((function(_this) {
        return function() {
          return new _this;
        };
      })(this));
    };

    AngularClass.classFactory = function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXItY2xhc3MuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7O0VBQUEsSUFBQyxDQUFBLFVBQUQsSUFBQyxDQUFBLFFBQVU7O0VBQ0wsSUFBQyxDQUFBLEtBQUssQ0FBQzs7O0lBRVgsWUFBQyxDQUFBLE9BQUQsR0FBVSxTQUFBO0FBQ1IsYUFBTyxJQUFDLENBQUEsY0FBRCxDQUFnQixDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUE7QUFBTSxpQkFBTyxJQUFJO1FBQWpCO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFoQjtJQURDOztJQUdWLFlBQUMsQ0FBQSxZQUFELEdBQWUsU0FBQTtBQUNiLGFBQU8sSUFBQyxDQUFBLGNBQUQsQ0FBZ0IsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFBO0FBQU0saUJBQU87Ozs7Ozs7OzthQUFlLE1BQWY7UUFBYjtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBaEI7SUFETTs7SUFHZixZQUFDLENBQUEsY0FBRCxHQUFpQixTQUFDLGNBQUQ7QUFDZixVQUFBO01BQUEsT0FBQSxHQUFVLElBQUksQ0FBQyxPQUFMLElBQWdCO01BRTFCLE9BQUEsR0FBVSxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUE7QUFDUixjQUFBO1VBQUEsSUFBQSxHQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQXZCLENBQTZCLEVBQTdCLEVBQWlDLFNBQWpDO1VBRVAsTUFBQSxHQUFTLGNBQUEsQ0FBQTtBQUVULGVBQUEseURBQUE7O1lBQ0UsTUFBTyxDQUFBLEtBQUMsQ0FBQSxrQkFBRCxDQUFvQixJQUFwQixDQUFBLENBQVAsR0FBb0MsSUFBSyxDQUFBLEtBQUE7QUFEM0M7VUFHQSxJQUFHLE1BQU0sQ0FBQyxVQUFQLEtBQXFCLE1BQXhCO1lBQ0UsTUFBTSxDQUFDLFVBQVAsQ0FBQSxFQURGOztBQUdBLGlCQUFPO1FBWEM7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBO0FBYVYsYUFBTyxPQUFPLENBQUMsTUFBUixDQUFlLENBQUMsT0FBRCxDQUFmO0lBaEJROztJQWtCakIsWUFBQyxDQUFBLGtCQUFELEdBQXNCLFNBQUMsSUFBRDtNQUNwQixJQUFHLElBQUksQ0FBQyxNQUFMLENBQVksQ0FBWixFQUFlLENBQWYsQ0FBQSxLQUFxQixHQUF4QjtRQUNFLElBQUEsR0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLENBQVgsRUFEVDs7TUFHQSxJQUFBLEdBQU8sR0FBQSxHQUFNO0FBRWIsYUFBTztJQU5hOzs7OztBQTNCeEIiLCJmaWxlIjoiYW5ndWxhci1jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIkBJZEZseSB8fD0ge31cbmNsYXNzIEBJZEZseS5Bbmd1bGFyQ2xhc3NcblxuICBAZmFjdG9yeTogKCkgLT5cbiAgICByZXR1cm4gQF9jcmVhdGVGYWN0b3J5KCgpID0+IHJldHVybiBuZXcgdGhpcylcblxuICBAY2xhc3NGYWN0b3J5OiAoKSAtPlxuICAgIHJldHVybiBAX2NyZWF0ZUZhY3RvcnkoKCkgPT4gcmV0dXJuIChjbGFzcyBleHRlbmRzIHRoaXMpKVxuXG4gIEBfY3JlYXRlRmFjdG9yeTogKHJlc3VsdENhbGxiYWNrKSAtPlxuICAgIGltcG9ydHMgPSB0aGlzLl9pbXBvcnQgfHwgW11cblxuICAgIGZhY3RvcnkgPSAoKSA9PlxuICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFyZ3VtZW50cylcblxuICAgICAgcmVzdWx0ID0gcmVzdWx0Q2FsbGJhY2soKVxuXG4gICAgICBmb3IgbmFtZSwgaW5kZXggaW4gaW1wb3J0c1xuICAgICAgICByZXN1bHRbQF9wcmVwYXJlSW1wb3J0TmFtZShuYW1lKV0gPSBhcmdzW2luZGV4XVxuXG4gICAgICBpZiByZXN1bHQuaW5pdGlhbGl6ZSAhPSB1bmRlZmluZWRcbiAgICAgICAgcmVzdWx0LmluaXRpYWxpemUoKVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG5cbiAgICByZXR1cm4gaW1wb3J0cy5jb25jYXQoW2ZhY3RvcnldKVxuXG4gIEBfcHJlcGFyZUltcG9ydE5hbWUgPSAobmFtZSkgLT5cbiAgICBpZiBuYW1lLnN1YnN0cigwLCAxKSA9PSAnJCdcbiAgICAgIG5hbWUgPSBuYW1lLnNsaWNlKDEpXG5cbiAgICBuYW1lID0gJ18nICsgbmFtZVxuXG4gICAgcmV0dXJuIG5hbWVcbiJdfQ==
