import assert from "assert";
import { fazerLogin } from "../src/Login.js";

describe("fazerLogin()", function () {

    it("Teste 1 — deve retornar sucesso com email e senha corretos", function () {
        const resultado = fazerLogin("ana@email.com", "senha123");
        assert.strictEqual(resultado, "Login realizado com sucesso");
    });

    it("Teste 2 — deve informar que as credenciais expiraram", function () {
        const resultado = fazerLogin("bruno@email.com", "abc@456");
        assert.strictEqual(resultado, "Renove suas credenciais");
    });

    it("Teste 3 — deve retornar erro quando o usuário não existe", function () {
        const resultado = fazerLogin("fantasma@email.com", "qualquer123");
        assert.strictEqual(resultado, "Credenciais incorretas");
    });

    it("Teste 4 — deve retornar erro quando a senha está incorreta", function () {
        const resultado = fazerLogin("carla@email.com", "senhaerrada");
        assert.strictEqual(resultado, "Credenciais incorretas");
    });

});
