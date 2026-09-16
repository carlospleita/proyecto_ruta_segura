# Rutas seguras, componentes y formularios
Proyecto de ejemplo con autenticación simulada, formulario controlado con validación, y protección de rutas según usuario logueado y rol.

# Estructura de carpetas
src/
├── main.jsx
├── App.jsx
├── context/
│   └── AuthContext.jsx
├── routes/
│   └── PrivateRoute.jsx
├── components/
│   ├── Navbar.jsx
│   └── CampoTexto.jsx
└── pages/
    ├── Home.jsx
    ├── Login.jsx
    ├── Dashboard.jsx
    ├── Perfil.jsx
    └── NoAutorizado.jsx

# Como correrlo
```bash
npm create vite@latest mi-app -- --template react
cd mi-app
npm install
npm install react-router-dom
# reemplazá src/ por los archivos del proyecto
npm run dev
```
Abrí http://localhost:5173 en el navegador.

# Usuarios de prueba (demo)
| Email | Contraseña | Rol |
|---|---|---|
| `alumno@curso.com` | `12345678` | student |
| `admin@curso.com` | `admin123` | admin |

###