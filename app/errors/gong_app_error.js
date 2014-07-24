function GongAppError(message) {
  this.name = "GongAppError";
  this.message = (message || "");
}

GongAppError.prototype = Error.prototype;

module.exports = GongAppError;