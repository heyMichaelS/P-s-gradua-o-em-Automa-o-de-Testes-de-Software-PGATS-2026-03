const usuarios = [
    { id: 1, nome: "Ana Silva", email: "ana@email.com", senha: "senha123", expirado: false },
    { id: 2, nome: "Bruno Costa", email: "bruno@email.com", senha: "abc@456", expirado: true },
    { id: 3, nome: "Carla Mendes", email: "carla@email.com", senha: "carla!99", expirado: false },
];

export function fazerLogin(email, senha) {
    const usuario = usuarios.find(u => u.email === email);

    if (!usuario) {
        return "Credenciais incorretas";
    }
    if (usuario.senha !== senha) {
        return "Credenciais incorretas";
    }
    if (usuario.expirado) {
        return "Renove suas credenciais";
    }

    return "Login realizado com sucesso";
}

