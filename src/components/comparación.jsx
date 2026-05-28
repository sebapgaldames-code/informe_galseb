const marcos = [
  {
    pais: 'Estados Unidos',
    ley: 'CFAA — 18 U.S.C. §1030',
    alcance: 'Prohíbe acceso no autorizado, daño por transmisión de código, tráfico de credenciales y fraudes informáticos. Amplio alcance extraterritorial.',
    sanciones: 'Prisión (hasta varios años), multas y acciones civiles por daños.',
    aplicabilidad: 'Alta',
    nivel: 3,
  },
  {
    pais: 'Unión Europea',
    ley: 'Directiva NIS2',
    alcance: 'Marco de gestión de riesgos y notificación de incidentes para entidades esenciales e importantes (energía, banca, salud, infraestructuras digitales).',
    sanciones: 'Sanciones administrativas significativas. Responsabilidad de la alta dirección.',
    aplicabilidad: 'Media',
    nivel: 2,
  },
  {
    pais: 'Brasil',
    ley: 'Ley 12.737',
    alcance: 'Tipifica invasión de dispositivos, obtención o alteración de datos, difusión de material íntimo. Agravantes por perjuicio económico.',
    sanciones: 'Reclusión y multa. Aumentos de pena por comercialización o daño económico.',
    aplicabilidad: 'Media',
    nivel: 2,
  },
  {
    pais: 'Chile',
    ley: 'Ley 21.459',
    alcance: 'Tipifica acceso ilícito, daño a sistemas, interceptación y receptación. Protege integridad, disponibilidad y confidencialidad de sistemas y datos.',
    sanciones: 'Penas de presidio y multas. Medidas cautelares, incautación y comiso de evidencia digital.',
    aplicabilidad: 'Alta',
    nivel: 3,
    destacado: true,
  },
]

const nivelLabel = ['', 'Baja', 'Media', 'Alta']

export default function Comparacion() {
  return (
    <article className="doc-section">
      <div className="section-badge">Derecho comparado</div>
      <h2 className="section-title">Comparación de marcos regulatorios</h2>

      <div className="lead-block">
        <p>
          Análisis de los principales regímenes normativos aplicables a conductas como las
          desplegadas por TMO, evaluando alcance territorial, sanciones y aplicabilidad
          directa al caso.
        </p>
      </div>

      <div className="comp-grid">
        {marcos.map((m) => (
          <div key={m.pais} className={`comp-card ${m.destacado ? 'destacado' : ''}`}>
            {m.destacado && <div className="dest-ribbon">Marco local</div>}
            <div className="comp-card-header">
              <span className="comp-pais">{m.pais}</span>
              <code className="comp-ley">{m.ley}</code>
            </div>
            <p className="comp-alcance">{m.alcance}</p>
            <div className="comp-footer">
              <div className="comp-sanciones">
                <span className="comp-label">Sanciones</span>
                <span>{m.sanciones}</span>
              </div>
              <div className={`comp-nivel nivel-${m.nivel}`}>
                {nivelLabel[m.nivel]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
