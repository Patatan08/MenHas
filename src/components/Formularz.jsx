import { useState } from 'react'

export default function Formularz({ haslo, ustawHaslo, dodaj }) {
  const [serwis, ustawSerwis] = useState('')
  const [login, ustawLogin] = useState('')

  const wyslij = (e) => {
    e.preventDefault()
    if (!serwis.trim() || !haslo) return
    dodaj({ serwis: serwis.trim(), login: login.trim(), haslo })
    ustawSerwis('')
    ustawLogin('')
    ustawHaslo('')
  }

  return (
    <form className="szklo" onSubmit={wyslij}>
      <h2>Nowe hasło</h2>
      <input placeholder="Serwis" value={serwis} onChange={(e) => ustawSerwis(e.target.value)} />
      <input placeholder="Login" value={login} onChange={(e) => ustawLogin(e.target.value)} />
      <input placeholder="Hasło" value={haslo} onChange={(e) => ustawHaslo(e.target.value)} />
      <button type="submit" disabled={!serwis.trim() || !haslo}>Zapisz</button>
    </form>
  )
}
