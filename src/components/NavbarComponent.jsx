import CartWidget from'./CartWidget'

const NavbarComponent = () => {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
<div class="container-fluid">
<nav class="navbar bg-body-tertiary">
<div class="container">
    <a class="navbar-brand" href="#">
    <img src='./logo.png' alt='logo'></img>
    </a>
</div>
</nav>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        <a class="nav-link" href="#">Mac</a>
        <a class="nav-link" href="#">Iphone</a>
        <a class="nav-link" href="#">Watch</a>
        <a class="nav-link" href="#">Airpods</a>
        <CartWidget/>
    </div>
    </div>
</div>
</nav>
    )
}

export default NavbarComponent