// LOGIN FORM
async function loginHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#login-username').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (!username || !password) {
    // modal code
    var elems = document.querySelector('.modal');
    const instance = M.Modal.init(elems);

    // open the modal
    instance.open();

    // event listener button to close instance
    let closeHandler = document.querySelector('.modal-close');
    closeHandler.addEventListener('click', function () {
      instance.close();
    });
  } else if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      // modal code
      var elems = document.querySelector('#modal3');
      const instance = M.Modal.init(elems);

      // open the modal
      instance.open();

      // event listener button to close instance
      let closeHandler = document.querySelector('.modal-close');
      closeHandler.addEventListener('click', function () {
        instance.close();
      });
    }
  }
}

// SIGN-UP FORM
async function registerHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#register-username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#register-password').value.trim();

  if (!username || !password || !email) {
    // modal code
    var elems = document.querySelector('#modal2');
    const instance = M.Modal.init(elems);

    // open the modal
    instance.open();

    // event listener button to close instance
    let closeHandler = document.querySelector('.modal-close');
    closeHandler.addEventListener('click', function () {
      instance.close();
    });
  } else if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { 'Content-type': 'application/json' },
    });

    if (response.ok) {
      console.log('here');
      document.location.replace('/dashboard/');
    } else {
      // modal code
      var elems = document.querySelector('#modal4');
      const instance = M.Modal.init(elems);

      // open the modal
      instance.open();

      // event listener button to close instance
      let closeHandler = document.querySelector('.modal-close');
      closeHandler.addEventListener('click', function () {
        instance.close();
      });
    }
  }
}

document
  .querySelector('.register-form')
  .addEventListener('submit', registerHandler);

document.querySelector('.login-form').addEventListener('submit', loginHandler);
