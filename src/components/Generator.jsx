import { useState } from 'react'

const znaki = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-_'
const limit = 256 - (256 % znaki.length)

export default function Generator({ naWygenerowano }) {
  const [dlugosc, ustawDlugosc] = useState(16)

  const generuj = () => {
    let wynik = ''
    while (wynik.length < dlugosc) {
      for (const n of crypto.getRandomValues(new Uint8Array(dlugosc * 2))) {
        if (n < limit && wynik.length < dlugosc) wynik += znaki[n % znaki.length]
      }
    }
    naWygenerowano(wynik)
  }

  return (
    <section className="szklo">
      <h2>Generator haseł</h2>
      <label htmlFor="dlugosc">Długość: {dlugosc}</label>
      <input id="dlugosc" type="range" min="8" max="32" value={dlugosc} onChange={(e) => ustawDlugosc(Number(e.target.value))} />
      <button type="button" onClick={generuj}>Generuj bezpieczne hasło</button>
    </section>
  )
}
