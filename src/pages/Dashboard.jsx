import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
    const { user } = useAuth();
    return (
        <div className="card">
            <div className="card-contenido">
                <h1>Dashboard</h1>
                <p>Hola, {user.email}. Tu rol es "{user.role}".</p>
            </div>
        </div>
    );
}
