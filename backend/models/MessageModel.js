/**
 * An object that creates a message. Does not communicate with database directly.
 * @param {String} sender
 * @param {String} receiver
 * @param {String} msg
 */
function Message(sender, receiver, msg) {
  this.sender = sender;
  this.receiver = receiver;
  this.message = msg;
  this.timeStamp = new Date();
}

module.exports = Message;
