import styles from "./Register.module.css"

const Register = () => {
  return (
    <div>
        <h1>Vamos nos cadastrar!</h1>
        <p>Crie seu usuario e compartilhe suas ideias</p>

        <form>
            <label>
                <span>Nome:</span>
                <input type="text"
                name="name"
                required
                placeholder="Nome do usuario" />
            </label>
            <label>
                <span>E-mail:</span>
                <input type="email"
                name="email"
                required
                placeholder="teste@gmail.com" />
            </label>
            <label>
                <span>Senha:</span>
                <input type="password"
                name="password"
                required
                placeholder="Insira sua senha" />
            </label>
            <label>
                <span>Confirme sua senha:</span>
                <input type="password"
                name="confirmPassword"
                required
                placeholder="Confirme sua senha" />
            </label>
            <button className="btn">Cadastrar-se</button>
        </form>
    </div>
  )
}

export default Register