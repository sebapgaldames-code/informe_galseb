const actores = [
  {
    rol: 'Operadores y administradores',
    desc: 'Propietarios y administradores técnicos responsables de garantizar la legalidad de la operación y proteger la integridad, disponibilidad y confidencialidad de los sistemas.',
    riesgos: [
      { tipo: 'Penal', detalle: 'Delitos tipificados en Ley 21.459: acceso ilícito, interceptación.' },
      { tipo: 'Civil', detalle: 'Daños y perjuicios a víctimas, lucro cesante y daño moral.' },
      { tipo: 'Administrativo', detalle: 'Sanciones sectoriales si afectan servicios regulados.' },
    ],
    nivel: 'alto',
  },
  {
    rol: 'Proveedores de hosting, cloud y CDN',
    desc: 'Obligados a custodiar y entregar información según la ley y órdenes judiciales, aplicar políticas de uso aceptable y suspender servicios ante órdenes judiciales o abuso comprobado.',
    riesgos: [
      { tipo: 'Administrativo', detalle: 'Multas por incumplimiento de obligaciones sectoriales o contractuales.' },
      { tipo: 'Procesal', detalle: 'Medidas cautelares sobre servidores.' },
      { tipo: 'Civil', detalle: 'Reclamaciones por facilitar actividad ilícita si hay negligencia probada.' },
    ],
    nivel: 'medio',
  },
  {
    rol: 'Usuarios y víctimas',
    desc: 'Generalmente sin responsabilidad penal, salvo uso fraudulento de datos por terceros. Pueden ejercer acciones civiles y administrativas como titulares de derechos afectados.',
    riesgos: [
      { tipo: 'Recomendado', detalle: 'Recopilar pruebas (capturas, comunicaciones) y cambiar credenciales.' },
      { tipo: 'Acción', detalle: 'Presentar denuncia penal y reclamos ante SERNAC o autoridades sectoriales.' },
    ],
    nivel: 'bajo',
  },
]

export default function Responsabilidad() {
  return (
    <article className="doc-section">
      <div className="section-badge">Responsabilidades</div>
      <h2 className="section-title">Cadena de responsabilidad legal</h2>

      <div className="lead-block">
        <p>
          La operación de TMO involucró a distintos actores con diferentes grados de
          responsabilidad. Identificar la cadena completa es clave para una persecución
          penal efectiva y la reparación de daños.
        </p>
      </div>

      <div className="actor-list">
        {actores.map((a) => (
          <div key={a.rol} className={`actor-card nivel-${a.nivel}`}>
            <div className="actor-header">
              <div>
                <h3 className="actor-rol">{a.rol}</h3>
                <p className="actor-desc">{a.desc}</p>
              </div>
              <span className={`riesgo-badge ${a.nivel}`}>{a.nivel === 'alto' ? 'Riesgo alto' : a.nivel === 'medio' ? 'Riesgo medio' : 'Sin riesgo penal'}</span>
            </div>
            <div className="riesgos-grid">
              {a.riesgos.map((r) => (
                <div key={r.tipo} className="riesgo-item">
                  <span className={`riesgo-tipo tipo-${r.tipo.toLowerCase()}`}>{r.tipo}</span>
                  <p>{r.detalle}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
