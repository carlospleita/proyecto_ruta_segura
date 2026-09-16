export default function CampoTexto({ label, type = "text", name, value, onChange, error }) {
    return (
        <div className="campo">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
            {error && <span className="error">{error}</span>}
        </div>
    );
}
