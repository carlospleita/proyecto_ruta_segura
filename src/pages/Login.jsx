import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import CampoTexto from "../components/CampoTexto";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validar(values) {
    const errores = {};
    if (!EMAIL_REGEX.test(values.email)) {
        errores.email = "Ingresá un email válido";
    }
    if (values.password.length < 6) {
        errores.password = "La contraseña debe tener al menos 6 caracteres";
    }
    return errores;
}

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [errorGeneral, setErrorGeneral] = useState("");
    const [enviando, setEnviando] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        const nuevosValues = { ...form, [name]: value };
        setForm(nuevosValues);
        setErrors(validar(nuevosValues));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const nuevosErrores = validar(form);
        setErrors(nuevosErrores);
        if (Object.keys(nuevosErrores).length > 0) return;

        setEnviando(true);
        setErrorGeneral("");

        const exito = await login(form.email, form.password);
        setEnviando(false);

        if (exito) {
            const destino = location.state?.from?.pathname || "/dashboard";
            navigate(destino, { replace: true });
        } else {
            setErrorGeneral("Email o contraseña incorrectos");
        }
    }

    const hayErrores = Object.keys(errors).length > 0;

    return (
        <div className="login-form">
            <h1>Ingresar</h1>
            <form onSubmit={handleSubmit}>
                <CampoTexto
                    label="Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <CampoTexto
                    label="Contraseña"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    error={errors.password}
                />
                {errorGeneral && <p className="error">{errorGeneral}</p>}
                <button type="submit" disabled={hayErrores || enviando}>
                    {enviando ? "Ingresando..." : "Ingresar"}
                </button>
            </form>
        </div>
    );
}
