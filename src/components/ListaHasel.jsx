import { useState } from 'react'

export default function ListaHasel({ hasla, usun }) {
  const [skopiowane, ustawSkopiowane] = useState(null)

  const kopiuj = async (wpis) => {
    await navigator.clipboard.writeText(wpis.haslo)
    ustawSkopiowane(wpis.id)
    setTimeout(() => ustawSkopiowane(null), 1500)
  }

  return (
    <section className="szklo">
      <h2>Zapisane hasła</h2>
      {hasla.length === 0 && <p className="puste">Brak zapisanych haseł</p>}
      {hasla.map((h) => (
        <div className="wpis" key={h.id}>
          <div>
            <strong>{h.serwis}</strong>
            <span>{h.login}</span>
          </div>
          <div className="akcje">
            <button type="button" onClick={() => kopiuj(h)}>{skopiowane === h.id ? 'Skopiowano' : 'Kopiuj'}</button>
            <button type="button" className="usun" onClick={() => usun(h.id)}>Usuń</button>
          </div>
        </div>
      ))}
    </section>
  )
}
