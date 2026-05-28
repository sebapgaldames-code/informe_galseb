import { useState } from 'react'
import './App.css'
import Resumen from './components/resumen'
import Marco from './components/marco'
import Delitos from './components/delitos'
import Comparasion from './components/comparasion'
import Responsabilidad from './components/responsabilidad'
import Datos from './components/datos'
import Conclusion from './components/conclusion'

const sections = [
  { key: 'resumen', label: 'Resumen', component: <Resumen /> },
  { key: 'marco', label: 'Marco', component: <Marco /> },
  { key: 'delitos', label: 'Delitos', component: <Delitos /> },
  { key: 'comparasion', label: 'Comparación', component: <Comparasion /> },
  { key: 'responsabilidad', label: 'Responsabilidad', component: <Responsabilidad /> },
  { key: 'datos', label: 'Datos', component: <Datos /> },
  { key: 'conclusiones', label: 'Conclusiones', component: <Conclusion /> },
]

export default function App() {
  const [active, setActive] = useState('resumen')
  const current = sections.find((s) => s.key === active)

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-inner">
          <div className="header-brand">
            <span className="brand-dot" />
            <span className="brand-text">Informe Galseb</span>
          </div>
          <p className="header-sub">Análisis legal · TuMangaOnline · 2026</p>
        </div>
      </header>

      <nav className="app-nav">
        <div className="nav-inner">
          {sections.map((s) => (
            <button
              key={s.key}
              type="button"
              className={`nav-btn ${s.key === active ? 'active' : ''}`}
              onClick={() => setActive(s.key)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="app-main">
        <div className="main-inner">
          {current?.component}
        </div>
      </main>

      <footer className="app-footer">
        <span>Informe Galseb — Uso interno</span>
      </footer>
    </div>
  )
}
