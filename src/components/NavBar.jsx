import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    
    function handleLogout() {
        logout();
        navigate("/");
    }
    return (
        <nav className="navbar">
            <Link to="/">Inicio</Link>
            {user ? (
                <>
                    <Link to="/dashboard">Dashboard</Link>
                    {user.role == "admin" && <Link to="/perfil">Perfil Admin</Link>}
                    <span>Hola, {user.email}</span>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </>
            ) : (
            <Link to="/login">Ingresar</Link>
            )}
        </nav>
    )
}