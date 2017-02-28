const validator = require('validator');

module.exports = {
  /**
   * Validate the sign up form
   *
   * @param {object} payload - the HTTP body message
   * @returns {object} The result of validation. Object contains a boolean validation result,
   *                   errors tips, and a global message for the whole form.
   */
  validateSignupForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
      isFormValid = false;
      errors.username = 'Please provide a username.';
    }

    if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
      isFormValid = false;
      errors.email = 'Please provide a correct email address.';
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
      isFormValid = false;
      errors.password = 'Password must have at least 8 characters.';
    }

    if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
      isFormValid = false;
      errors.name = 'Please provide your name.';
    }

    if (!payload || typeof payload.name !== 'string' || payload.location.trim().length === 0) {
      isFormValid = false;
      errors.location = 'Please provide your location ("City, ST").';
    }

    if (!isFormValid) {
      message = 'Check the form for errors.';
    }

    return {
      success: isFormValid,
      message,
      errors,
    };
  },

  /**
   * Validate the login form
   *
   * @param {object} payload - the HTTP body message
   * @returns {object} The result of validation. Object contains a boolean validation result,
   *                   errors tips, and a global message for the whole form.
   */
  validateLoginForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
      isFormValid = false;
      errors.email = 'Please provide your email address.';
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
      isFormValid = false;
      errors.password = 'Please provide your password.';
    }

    if (!isFormValid) {
      message = 'Check the form for errors.';
    }

    return {
      success: isFormValid,
      message,
      errors,
    };
  },

  validateEventForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.title !== 'string' || payload.title.trim().length === 0) {
      isFormValid = false;
      errors.title = 'Please provide your party\'s title.';
    }

    if (!payload || typeof payload.location !== 'string' || validator.contains(payload.location, 'null') || validator.contains(payload.location, 'undefined')) {
      isFormValid = false;
      errors.title = 'Please provide your party\'s location.';
    }

    if (!payload || typeof payload.eventTime !== 'string' || payload.eventTime.trim().length === 0) {
      isFormValid = false;
      errors.eventTime = 'Please provide your party\'s time.';
    }

    if (!payload || typeof payload.eventDate !== 'string' || payload.eventDate.trim().length === 0) {
      isFormValid = false;
      errors.eventDate = 'Please provide your party\'s date.';
    } else if (validator.isBefore(payload.eventDate)) {
      isFormValid = false;
      errors.eventDate = 'That date has passed!';
    }

    if (payload.picLink !== '' && !validator.isURL(payload.picLink)) {
      isFormValid = false;
      errors.picLink = 'Please provide a valid link to your hosted image.';
    }

    if (payload.busLink !== '' && !validator.isURL(payload.busLink)) {
      isFormValid = false;
      errors.busLink = 'Please provide a valid link to your business.';
    }

    if (!isFormValid) {
      message = 'Check the form for errors.';
    }

    return {
      success: isFormValid,
      message,
      errors,
    };
  }
};
