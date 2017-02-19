 <h1>Welcome!</h1>
 <h3>More content will be added soon.</h3>
 <?php if (! $this->isLoggedIn) : ?>
    <a class="btn btn-sm btn-success" href="/account/login">Login </a> or
    <a class="btn btn-sm btn-success" href="/account/register">Register</a>
 <?php endif ?>