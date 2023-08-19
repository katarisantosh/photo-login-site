document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from reloading page

    // Get values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Usually, you'd validate these with a backend, but for this demo, we'll skip that.
    alert(`Username: ${username}\nPassword: ${password}`); // Not recommended in real usage!

    // Show photo
    document.getElementById('photoContainer').hidden = false;
});
