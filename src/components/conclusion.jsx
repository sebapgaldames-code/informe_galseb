const acciones = [
  {
    num: '01',
    titulo: 'Prosecución penal y civil',
    desc: 'Dirigida a responsables identificados, apoyada en peritajes forenses y trazabilidad de criptomonedas.',
    tags: ['Fiscalía', 'Forense digital', 'Criptomonedas'],
  },
  {
    num: '02',
    titulo: 'Reparación y protección',
    desc: 'Medidas para titulares de derechos y usuarios afectados: retirada de contenidos, indemnizaciones y apoyo para mitigación de riesgos de seguridad.',
    tags: ['Indemnizaciones', 'Retiro de contenidos', 'Seguridad'],
  },
  {
    num: '03',
    titulo: 'Políticas preventivas',
    desc: 'Reforzar cooperación internacional con proveedores de hosting y redes publicitarias, exigir mayores controles de cumplimiento a intermediarios.',
    tags: ['Cooperación internacional', 'Compliance', 'Prevención'],
  },
]

export default function Conclusion() {
  return (
    <article className="doc-section">
      <div className="section-badge">Conclusiones</div>
      <h2 className="section-title">Síntesis y acciones prioritarias</h2>

      <div className="lead-block">
        <p>
          La operación y cierre de TuMangaOnline configura un conjunto de riesgos jurídicos
          y operativos significativos. La evidencia técnica y económica incautada refuerza
          la posibilidad de acciones penales y medidas cautelares, y obliga a una
          investigación forense integral para trazar la cadena de responsabilidad.
        </p>
      </div>

      <div className="resumen-delitos">
        <h3>Delitos configurados</h3>
        <div className="delitos-tags">
          {[
            'Propiedad intelectual',
            'Delitos informáticos',
            'Lavado de activos',
            'Protección de datos',
            'Responsabilidad civil',
          ].map((d) => (
            <span key={d} className="delito-tag">{d}</span>
          ))}
        </div>
      </div>

      <h3 className="acciones-titulo">Acciones prioritarias</h3>
      <div className="acciones-list">
        {acciones.map((a) => (
          <div key={a.num} className="accion-item">
            <span className="accion-num">{a.num}</span>
            <div className="accion-body">
              <strong>{a.titulo}</strong>
              <p>{a.desc}</p>
              <div className="accion-tags">
                {a.tags.map((t) => (
                  <span key={t} className="accion-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="highlight-block">
        <p>
          Estas líneas permiten tanto <strong>sancionar conductas ilícitas</strong> como
          mitigar daños y reducir la recurrencia de esquemas similares en el ecosistema
          digital latinoamericano.
        </p>
      </div>
    </article>
  )
}
