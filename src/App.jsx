import { useState, useEffect } from 'react'
import './App.css'
import Resumen from './components/resumen'
import Marco from './components/marco'
import Delitos from './components/delitos'
import Comparasion from './components/comparasion'
import Responsabilidad from './components/responsabilidad'
import Datos from './components/datos'
import Conclusion from './components/conclusion'

const sections = [
  { key: 'resumen',        label: 'Resumen',        emoji: '📋', component: <Resumen /> },
  { key: 'marco',          label: 'Marco',          emoji: '📚', component: <Marco /> },
  { key: 'delitos',        label: 'Delitos',        emoji: '⚖️', component: <Delitos /> },
  { key: 'comparasion',    label: 'Comparación',    emoji: '🌐', component: <Comparasion /> },
  { key: 'responsabilidad',label: 'Responsabilidad',emoji: '🏛️', component: <Responsabilidad /> },
  { key: 'datos',          label: 'Datos',          emoji: '🔒', component: <Datos /> },
  { key: 'conclusiones',   label: 'Conclusiones',   emoji: '✅', component: <Conclusion /> },
]

export default function App() {
  const [active, setActive] = useState('resumen')
  const [dark, setDark] = useState(false)
  const current = sections.find((s) => s.key === active)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-inner">
          <div className="header-brand">
            <span className="brand-dot" />
            <span className="brand-text">Informe Galseb</span>
          </div>
          <p className="header-sub">Análisis legal · TuMangaOnline · 2026</p>
          <button className="theme-toggle" onClick={() => setDark(d => !d)} aria-label="Cambiar tema">
            {dark ? '☀️' : '🌙'} {dark ? 'Claro' : 'Oscuro'}
          </button>
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
              <span className="nav-emoji">{s.emoji}</span>
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
        Informe Galseb — Uso interno · {current?.emoji} {current?.label}
      </footer>
    </div>
  )
}
