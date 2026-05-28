const principios = [
  {
    titulo: '📝 Consentimiento informado', estado: 'Incumplido',
    desc: 'La plataforma recopilaba datos sin cumplir estándares claros de consentimiento expreso del titular.',
  },
  {
    titulo: '🛡️ Medidas de seguridad', estado: 'Incumplido',
    desc: 'Ausencia de protocolos de seguridad adecuados frente a accesos no autorizados y usos indebidos.',
  },
  {
    titulo: '👁️ Derechos ARCO', estado: 'Incumplido',
    desc: 'Sin mecanismos para que los titulares pudieran acceder, rectificar, cancelar u oponerse al tratamiento de sus datos.',
  },
  {
    titulo: '⚖️ Base legal del tratamiento', estado: 'Ausente',
    desc: 'No se identificó base legal válida para el tratamiento de correos electrónicos, IPs e historiales de navegación.',
  },
]

export default function Datos() {
  return (
    <article className="doc-section">
      <div className="section-badge">🔒 Privacidad</div>
      <h2 className="section-title">
        <span className="title-emoji">🔐</span>
        Protección de la vida privada
      </h2>
      <p className="section-ley">Ley 19.628 sobre protección de la vida privada</p>

      <div className="lead-block">
        <p>
          La Ley 19.628 establece principios y obligaciones para el tratamiento de datos
          personales. TMO recopilaba y almacenaba datos de usuarios sin cumplir con los
          estándares exigidos por la normativa chilena, configurando múltiples infracciones.
        </p>
      </div>

      <div className="principios-grid">
        {principios.map((p) => (
          <div key={p.titulo} className="principio-item">
            <div className="principio-header">
              <h3>{p.titulo}</h3>
              <span className={`estado-badge ${p.estado === 'Ausente' ? 'ausente' : 'incumplido'}`}>
                {p.estado === 'Ausente' ? '⚠️ ' : '❌ '}{p.estado}
              </span>
            </div>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="highlight-block warning">
        <h3>⚠️ Consecuencias legales</h3>
        <p>
          La exposición de información personal y la ausencia de protocolos de seguridad
          puede derivar en responsabilidades <strong>civiles y penales</strong>, además de
          la obligación de reparar daños ocasionados a los usuarios afectados. Los
          responsables enfrentan sanciones administrativas, judiciales y obligaciones de
          reparación.
        </p>
      </div>

      <div className="subsection">
        <h3>📂 Datos posiblemente comprometidos</h3>
        <div className="datos-tags">
          {['📧 Correos electrónicos', '🌐 Direcciones IP', '📖 Historial de lectura', '🔑 Cuentas de usuario', '🔒 Contraseñas', '🖥️ Datos de navegación'].map((d) => (
            <span key={d} className="dato-tag">{d}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
