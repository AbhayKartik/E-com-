
const Sidebar = () => {
    return (
        <div style={{ width: "30%", height: "100vh", }}>
            <span className="fs-2  m-5">Category</span>
            <ul style={{ listStyle: "none", marginTop: "20px", gap: "50px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", fontSize: "20px", marginLeft: "20px" }}>
                <li>All</li>
                <li>Jeans</li>
                <li>Shirts</li>
                <li>T-Shirts</li>
                <li>Denim</li>
            </ul>
        </div>
    )
}

export default Sidebar
