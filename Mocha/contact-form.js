/**
 * This class will simulate the behavior of a contact form.
 *
 * @class ContactForm
 * @constructor
 * @returns {ContactForm}
 */
class ContactForm {
  /**
   * @description Constructor for the ContactForm class.
   * @description This function will create all properties of the class.
   * @description All properties will be set to default values.
   */
  constructor() {
    this.emailField = '';
    this.isSet = false;
  }

  /**
   * This function will fill the email field with the given text.
   *
   * @function fillingEmail
   * @param {string} text - The text to fill the email field with.
   */
  fillingEmail(text) {
    this.emailField = text;
  }

  /**
   * This function will send the contact form.
   *
   * @function sendForm
   * @description The function will clear the email field and set the
   *   isSet property to true.
   */
  sendForm() {
    this.emailField = '';
    this.isSet = true;
  }
}
export default ContactForm;