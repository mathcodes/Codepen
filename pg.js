if (this.actual == null) {
  this.message = function() {
    return "Expected " + this.actual + " to be a number";
  };
}