const template = document.createElement("template");
template.innerHTML = /*html*/`
  <style>
    * {
      font-size: 200%;
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }
  </style>
  <button id="dec">-</button>
  <span id="count"></span>
  <button id="inc">+</button>`;

  var TermsAgreement = class extends HTMLElement {
    connectedCallback() {
      this.delegatedEvent = theme.addDelegateEventListener(document, 'click', '#cartform [name="checkout"], .additional-checkout-buttons input, a[href*="/checkout"]', this.handleFormSubmittingEvent.bind(this));
    }

    disconnectedCallback() {
      document.removeEventListener('click', this.delegatedEvent);
    }

    handleFormSubmittingEvent(evt) {
      if (!this.querySelector('input:checked')) {
        evt.preventDefault();
        theme.showQuickPopup(theme.strings.cart_terms_confirmation, $(evt.target));
      }
    }
  };

customElements.define('terms-agreement', TermsAgreement);