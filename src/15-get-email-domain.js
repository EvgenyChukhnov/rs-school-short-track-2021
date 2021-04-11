/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

//  let em = 'prettyandsimple@example.com';

function getEmailDomain(email) {
  const emailEnding = email.split('@');
  return emailEnding[emailEnding.length - 1];
}

module.exports = getEmailDomain;
// getEmailDomain(em);
