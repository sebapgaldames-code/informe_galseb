const delitos = [
  {
    art: 'Art. 2',
    nombre: 'Acceso ilícito',
    desc: 'Acceder sin autorización o excediendo autorización superando barreras técnicas. Si la operativa implicó ingresar a sistemas de terceros, paneles administrativos o bases de datos mediante credenciales robadas, explotación de vulnerabilidades o bypass de controles, procede esta figura.',
    pena: 'Presidio menor grado mínimo o multa. Mayor si hubo ánimo de apoderamiento o divulgación.',
    aplica: true,
  },
  {
    art: 'Art. 3',
    nombre: 'Interceptación ilícita',
    desc: 'Comercializar, almacenar o usar datos obtenidos ilícitamente. Esta figura se aplica según la conducta de monetización, venta de accesos o uso fraudulento de la información.',
    pena: 'Presidio y multas. Agravantes por beneficio económico.',
    aplica: true,
  },
  {
    art: 'Art. 4',
    nombre: 'Ataque a la integridad de sistemas',
    desc: 'Dañar, alterar o impedir el funcionamiento de sistemas informáticos. Aplica si la plataforma interfirió con sistemas de terceros o afectó la disponibilidad de servicios.',
    pena: 'Presidio menor en sus grados mínimo a medio.',
    aplica: false,
  },
  {
    art: 'Art. 5',
    nombre: 'Ataque a la integridad de datos',
    desc: 'Alterar, dañar, borrar o suprimir datos informáticos sin autorización. Relevante si se modificaron o destruyeron datos de usuarios o de sistemas afectados.',
    pena: 'Presidio menor. Agravante si los datos afectados eran críticos.',
    aplica: false,
  },
  {
    art: 'Art. 6',
    nombre: 'Receptación de datos informáticos',
    desc: 'Quien comercialice, transfiera o almacene a sabiendas datos provenientes de delitos informáticos. Clave para imputar a quienes distribuyeron o vendieron información obtenida ilícitamente.',
    pena: 'Presidio menor. Multa proporcional al beneficio obtenido.',
    aplica: true,
  },
]

export default function Delitos() {
  return (
    <article className="doc-section">
      <div className="section-badge">Tipificación penal</div>
      <h2 className="section-title">Delitos según Ley 21.459</h2>

      <div className="lead-block">
        <p>
          La conducta desplegada por la plataforma puede tipificarse en múltiples figuras
          de la Ley 21.459, con posibles concurrencias que habilitan penas de presidio,
          multas, medidas cautelares y técnicas especiales de investigación.
        </p>
      </div>

      <div className="delito-list">
        {delitos.map((d) => (
          <div key={d.art} className={`delito-item ${d.aplica ? 'aplica' : ''}`}>
            <div className="delito-header">
              <span className="delito-art">{d.art}</span>
              <h3 className="delito-nombre">{d.nombre}</h3>
              {d.aplica && <span className="aplica-badge">Aplica al caso</span>}
            </div>
            <p className="delito-desc">{d.desc}</p>
            <div className="delito-pena">
              <span className="pena-label">Pena</span>
              <span>{d.pena}</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
