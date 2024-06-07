/**
 * An object that creates a Review. Does not communicate with database directly.
 * @param {String} senderId
 * @param {String} review
 * @param {String} senderName
 * @param {String} review
 *
 */
function Review(senderID, review, senderName) {
  this.senderId = senderID;
  this.senderName = senderName;
  this.review = review;
  this.timeStamp = new Date();
}

module.exports = Review;
