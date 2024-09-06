import { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    const handleEntrar = () =>{
        console.log(email);
        console.log(password);

    }

    return (
      <div>
        <form action="">
            <label htmlFor="">
                <span>Email</span>
                <input value={email} onChange={e => setEmail(e.target.value)}  />
            </label>
            <label htmlFor="">
                <span>Senha</span>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>

            <button type="button" onClick={handleEntrar}>
                Entrar
            </button>
        </form>
      </div>
    )
}