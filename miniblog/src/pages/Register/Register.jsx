import styles from "./Register.module.css"

import { useState, useEffect } from "react"
import { useAuthetication } from "../../hooks/useAuthentication"

const Register = () => {
  const [displayName, setDisplayname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const {createUser, error: authError, loading} = useAuthetication()

  const handleSubmit = async (e) => {
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

    const res = await createUser(user);
    console.log(res)
  }

    useEffect(() =>{
      if(authError){
        setError(authError)
      }
    }, [authError])

  
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
            {!loading && <button className="btn">Cadastrar</button>}
            {loading && (
              <button className="btn">Aguarde...</button>
            )}
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register