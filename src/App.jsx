import { useState, useEffect } from 'react'
import ListaHasel from './components/ListaHasel.jsx'
import Generator from './components/Generator.jsx'
import Formularz from './components/Formularz.jsx'

const wczytaj = () => {
  try {
    const dane = JSON.parse(localStorage.getItem('hasla'))
    return Array.isArray(dane) ? dane : []
  } catch {
    return []
  }
}

export default function App() {
  const [hasla, ustawHasla] = useState(wczytaj)
  const [noweHaslo, ustawNoweHaslo] = useState('')

  useEffect(() => {
    localStorage.setItem('hasla', JSON.stringify(hasla))
  }, [hasla])

  const dodaj = (wpis) => ustawHasla((stare) => [{ id: crypto.randomUUID(), ...wpis }, ...stare])
  const usun = (id) => ustawHasla((stare) => stare.filter((h) => h.id !== id))

  return (
    <main>
      <h1>Menedżer Haseł</h1>
      <div className="siatka">
        <div className="kolumna">
          <Generator naWygenerowano={ustawNoweHaslo} />
          <Formularz haslo={noweHaslo} ustawHaslo={ustawNoweHaslo} dodaj={dodaj} />
        </div>
        <ListaHasel hasla={hasla} usun={usun} />
      </div>
    </main>
  )
}
