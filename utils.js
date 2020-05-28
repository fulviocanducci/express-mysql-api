Array.prototype.firstOrDefault = function () {
  if (this.length > 0) {
    return this[0];
  }
  return {};
};
