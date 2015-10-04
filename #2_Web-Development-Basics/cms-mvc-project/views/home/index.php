 <h1>Welcome!</h1>
 <h3>More content will be added soon.</h3>
 <?php if (! $this->isLoggedIn) : ?>
    <a href="/account/login">Login</a>
    <a href="/account/register">Register</a>
 <?php endif ?>