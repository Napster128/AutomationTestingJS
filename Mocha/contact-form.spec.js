import ContactForm from './contact-form.js';
import { expect } from 'chai';
import assert from 'assert';
import { before } from 'mocha';

describe('ContactForm', () => {
  let contactFormInstance;
  before(() => {
    contactFormInstance = new ContactForm();
  })
  describe('emailField', () => {
    ['test@example.com', 'test@yandex.ru'].forEach(email => {
      it(`should set value ${email}`, () => {
        contactFormInstance.fillingEmail(email);
        assert.equal(contactFormInstance.emailField, email);
      });
    });
    it('should be empty after form sending', () => {
      contactFormInstance.sendForm();
      expect(contactFormInstance.emailField).is.empty;
    });
    describe('form state after sending', () => {
      it('should be set true after form sending', () => {
          contactFormInstance.sendForm();
          expect(contactFormInstance.isSet).is.true;
      });
    });
  })

})
