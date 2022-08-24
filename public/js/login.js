// LOGIN FORM
async function loginHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      medthod: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { 'Content-type': 'applcation/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Incorrect username or password');
    }
  }
}

// SIGN-UP FORM
async function registerHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#register-username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#register-password').value.trim();

  if (username && first_name && email && password) {
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
      document.location.replace('/dashboard');
    } else {
      alert('Username or email already in use');
    }
  }
}

document
  .querySelector('.register-form')
  .addEventListener('submit', registerHandler);

document
  .querySelector('.login-form')
  .addEventListener('submit', loginHandler);
