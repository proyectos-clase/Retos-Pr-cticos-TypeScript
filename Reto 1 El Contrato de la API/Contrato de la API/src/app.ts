// 1. Creamos la interfaz
interface UsuarioAPI {
    id: number;
    username: string;
    email: string;
    rol: 'admin' | 'editor' | 'alumno';
    token?: string;
}

// 2. Creamos un usuario válido
const usuarioValido: UsuarioAPI = {
    id: 1,
    username: 'juan123',
    email: 'juan@gmail.com',
    rol: 'alumno',
    token: 'abc123'
};

// 3. Creamos un usuario incorrecto
const usuarioIncorrecto: UsuarioAPI = {
    id: 2,
    username: 'maria456',
    email: 'maria@gmail.com',
    rol: 'invitado'
};