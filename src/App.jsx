import { useEffect, useState } from 'react'
import './App.css'

const markdownFiles = import.meta.glob('../docs_galseb/*.md', { as: 'raw' })

const sections = [
  { key: 'resumen', title: 'Resumen', file: '01_resumen_galseb.md', icon: '📝' },
  { key: 'marco', title: 'Marco', file: '02_marco_galseb.md', icon: '📚' },
  { key: 'delitos', title: 'Delitos', file: '03_delitos_galseb.md', icon: '⚖️' },
  { key: 'comparasion', title: 'Comparación', file: '04_comparasion_galseb.md', icon: '🔍' },
  { key: 'responsabilidad', title: 'Responsabilidad', file: '05_responsabilidades_galseb.md', icon: '🏛️' },
  { key: 'datos', title: 'Datos', file: '06_datos_galseb.md', icon: '📊' },
  { key: 'conclusiones', title: 'Conclusiones', file: '07_conclusiones_galseb.md', icon: '✅' },
]

function transformMarkdownHeadings(text, icon) {
  return text.replace(/^(\s*)#+\s+/gm, `$1${icon} `)
}

function App() {
  const [selectedKey, setSelectedKey] = useState(sections[0].key)
  const [content, setContent] = useState('')

  useEffect(() => {
    const section = sections.find((item) => item.key === selectedKey)
    if (!section) {
      setContent('Sección no encontrada.')
      return
    }

    const path = `../docs_galseb/${section.file}`
    const loader = markdownFiles[path]

    if (!loader) {
      setContent('No se encontró el archivo markdown.')
      return
    }

    setContent('Cargando contenido...')
    loader().then((text) => {
      setContent(transformMarkdownHeadings(text, section.icon))
    })
  }, [selectedKey])

  const currentSection = sections.find((item) => item.key === selectedKey)

  return (
    <main className="page">
      <header className="hero-section">
        <h1>Informe Galseb</h1>
        <p>Selecciona que seccion quieres revisar su contenido.</p>
      </header>

      <nav className="button-bar">
        {sections.map((section) => (
          <button
            key={section.key}
            type="button"
            className={`tab-button ${section.key === selectedKey ? 'active' : ''}`}
            onClick={() => setSelectedKey(section.key)}
          >
            {section.key}
          </button>
        ))}
      </nav>

      <section className="content-panel">
        <div className="content-header">
          <h2>{currentSection?.title}</h2>
        </div>
        <pre className="markdown-content">{content || 'Cargando...'}</pre>
      </section>
    </main>
  )
}

export default App
