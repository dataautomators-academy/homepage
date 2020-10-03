import $ from 'jquery';

/**
 * Form submission
 */

const formElm = document.querySelector('form');
formElm.onsubmit = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(Array.from(new FormData(formElm)));

  $.post('https://nnxirtzjgqauhzo.form.io/contactus/submission', {
    data: {
      yourName: data.name,
      email1: data.email,
      subject: data.subject,
      message1: data.message,
    },
  })
    .done(function () {
      alert('Your message have been submitted');
      formElm.reset();
    })
    .fail(function () {
      alert('There was an error with your submission');
    });
};
