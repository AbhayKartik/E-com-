const Navbar = () => {
    return (

        <nav style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", padding: "15px", backgroundColor: "#a8dadc", }}>
            <div>
                <a className="navbar-brand fs-3 " href="/" style={{ marginLeft: "30px" }}>E-Com</a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "50px", marginRight: "2rem", fontSize: "20px", }}>
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                <a className="nav-link" href="#">Features</a>
                <a className="nav-link" href="#">Pricing</a>
            </div>
        </nav>
    )
}

export default Navbar
