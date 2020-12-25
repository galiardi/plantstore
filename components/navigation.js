import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand" href="#">Inicio</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/productos">
                <a className="nav-link active" aria-current="page" >Productos</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/usuarios">
                <a className="nav-link">Usuarios</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/nosotros">
                <a className="nav-link">Nosotros</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation