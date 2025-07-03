import styles from "./Register.module.css"

import { useState, useEffect } from "react"

const Register = () => {
  const [displayName, setDisplayname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword){
        setError("As senha precisam ser iguais!")
        return
    }
    console.log(user)
  }

  
    return (
    <div className={styles.register}>
        <h1>Vamos nos cadastrar!</h1>
        <p>Crie seu usuario e compartilhe suas ideias</p>

        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text"
                name="name"
                required
                placeholder="Nome do usuario"
                value={displayName}
                onChange={(e) => setDisplayname(e.target.value)}
                />
            </label>
            <label>
                <span>E-mail:</span>
                <input type="email"
                name="email"
                required
                placeholder="teste@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                <span>Senha:</span>
                <input type="password"
                name="password"
                required
                placeholder="Insira sua senha" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label>
                <span>Confirme sua senha:</span>
                <input type="password"
                name="confirmPassword"
                required
                placeholder="Confirme sua senha" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>
            <button className="btn">Cadastrar-se</button>
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register