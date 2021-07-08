
export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <h3><a class="navbar-brand" >Welcome to MERN Charts</a></h3>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <h5><a class="nav-item nav-link" href="/dataset" target="_blank">Dataset <span class="sr-only">(current)</span></a></h5>
                <h5> <a class="nav-item nav-link" href="https://github.com/Spectre-ak/stunning-guacamole" target="_blank">Github</a></h5>
                </div>
            </div>
        </nav>
    )
}