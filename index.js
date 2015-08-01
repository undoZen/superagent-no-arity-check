var Request = require('superagent').Request;
var end = Request.prototype.end;
if (typeof window !== "undefined" && window && 'document' in window) {
  Request.prototype.ennd = function () {
    this.callback = function(err, res){
      var fn = this._callback;
      return fn(err, res);
    };
    end.apply(this, arguments);
  };
} else {
  Request.prototype.ennd = function () {
    this.callback = function(err, res){
      var fn = this._callback;
      this.clearTimeout();
      if (this.called) return console.warn('double callback!');
      this.called = true;
      return fn(err, res);
    };
    end.apply(this, arguments);
  };
}
