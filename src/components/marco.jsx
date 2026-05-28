const normas = [
  {
    num: '01', titulo: 'Delitos informáticos', ley: 'Ley 21.459',
    desc: 'Acceso ilícito, interceptación y ataque a la integridad de sistemas o datos. Receptación de datos informáticos: quien comercialice, transfiera o almacene datos provenientes de delitos informáticos puede ser sancionado.',
    sancion: 'Presidio y multas',
  },
  {
    num: '02', titulo: 'Derechos de autor', ley: 'Ley 17.336',
    desc: 'Poner a disposición, reproducir o distribuir obras protegidas sin autorización constituye infracción penal y civil. Medidas cautelares habituales: bloqueo de dominios, órdenes de retiro y comiso de servidores.',
    sancion: 'Civil + Penal',
  },
  {
    num: '03', titulo: 'Datos personales', ley: 'Ley 19.628',
    desc: 'Si la plataforma almacenó o procesó datos personales (correos, IPs, historiales), podría haber infracciones por falta de bases legales, medidas de seguridad insuficientes y vulneración de derechos ARCO.',
    sancion: 'Sanciones administrativas',
  },
  {
    num: '04', titulo: 'Lavado de activos', ley: 'Ley 20.393',
    desc: 'Conversión de ingresos a criptomonedas y ocultamiento de fondos puede activar investigaciones por blanqueo y responsabilidad penal de personas jurídicas según la normativa aplicable.',
    sancion: 'Penal empresarial',
  },
  {
    num: '05', titulo: 'Protección del consumidor', ley: 'Ley 19.496',
    desc: 'Regula relaciones entre proveedores y consumidores y sanciona prácticas comerciales abusivas y publicidad engañosa. Pueden activarse reclamaciones administrativas y acciones colectivas ante SERNAC.',
    sancion: 'Administrativo + Civil',
  },
  {
    num: '06', titulo: 'Pruebas y sanciones', ley: 'Investigación forense',
    desc: 'Incautación de servidores, análisis de logs, trazabilidad de criptomonedas y cooperación internacional con proveedores de hosting y redes publicitarias.',
    sancion: 'Comiso + Presidio',
  },
]

export default function Marco() {
  return (
    <article className="doc-section">
      <div className="section-badge">📚 Marco normativo</div>
      <h2 className="section-title">
        <span className="title-emoji">⚖️</span>
        Legislación aplicable en Chile
      </h2>

      <div className="lead-block">
        <p>
          La actuación puede encuadrarse en múltiples cuerpos normativos chilenos, cada uno
          con consecuencias penales, civiles y administrativas independientes que pueden
          concurrir simultáneamente.
        </p>
      </div>

      <div className="norma-list">
        {normas.map((n) => (
          <div key={n.num} className="norma-item">
            <div className="norma-header">
              <span className="norma-num">{n.num}</span>
              <div className="norma-meta">
                <strong>{n.titulo}</strong>
                <code className="norma-ley">{n.ley}</code>
              </div>
              <span className="sancion-badge">{n.sancion}</span>
            </div>
            <p className="norma-desc">{n.desc}</p>
          </div>
        ))}
      </div>
    </article>
  )
}
