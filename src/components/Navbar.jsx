function Navbar({brand,links}){
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md border-b">
            <div>
                {brand}
            </div>
            <div>
                <ul className="flex items-center space-x-4">
                    <li className="text-gray-700 hover:text-blue-500"><a href={links}>Home</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar