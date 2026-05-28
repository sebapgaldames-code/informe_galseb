export default function Resumen() {
  return (
    <article className="doc-section">
      <div className="section-badge">📋 Resumen ejecutivo</div>
      <h2 className="section-title">
        <span className="title-emoji">📰</span>
        Operaciones y consecuencias legales
      </h2>

      <div className="lead-block">
        <p>
          TuMangaOnline (TMO) operó desde 2014 hasta su desmantelamiento en abril de 2026.
          La investigación culminó con un operativo policial que dejó el sitio inaccesible
          y la detención de tres personas.
        </p>
      </div>

      <div className="card-grid">
        <div className="stat-card">
          <span className="stat-label">💰 Ingresos estimados</span>
          <span className="stat-value">&gt; €4.000.000</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">🪙 Monederos incautados</span>
          <span className="stat-value">&gt; €400.000</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">📅 Años de operación</span>
          <span className="stat-value">2014 – 2026</span>
        </div>
      </div>

      <div className="subsection">
        <h3>🖥️ Modelo de operación</h3>
        <p>
          La plataforma usaba servidores centralizados, CDN y técnicas para evadir bloqueos
          mediante dominios alternativos y mirrors. Desplegaba scripts y pop‑ups que
          incrementaban el riesgo de malware y exposición a contenido para adultos. La
          monetización se basó en publicidad agresiva y criptomonedas.
        </p>
      </div>

      <div className="subsection">
        <h3>📉 Efectos del cierre</h3>
        <p>
          El cierre impactó directamente a titulares de derechos y usuarios: editoriales,
          autores y traductores sufrieron perjuicios por la distribución masiva no autorizada,
          mientras que millones de lectores perdieron acceso a colecciones, marcadores y
          comunidades.
        </p>
      </div>

      <div className="highlight-block">
        <h3>⚠️ Riesgos post‑cierre</h3>
        <ul className="styled-list">
          <li>Mirrors, clones, phishing y estafas dirigidas a usuarios</li>
          <li>Robo de credenciales en sitios clonados</li>
          <li>Persistencia de malware en dispositivos de usuarios</li>
        </ul>
      </div>

      <div className="subsection">
        <h3>💡 Recomendaciones</h3>
        <div className="recom-grid">
          <div className="recom-item">
            <span className="recom-tag">👤 Usuarios</span>
            <p>Evitar mirrors, no introducir credenciales en sitios clonados, cambiar contraseñas y escanear dispositivos.</p>
          </div>
          <div className="recom-item">
            <span className="recom-tag">🏛️ Autoridades</span>
            <p>Fortalecer canales de denuncia, coordinar con proveedores de hosting y promover cooperación internacional para rastreo de activos.</p>
          </div>
          <div className="recom-item">
            <span className="recom-tag">🏢 Industria</span>
            <p>Impulsar alternativas legales en español y modelos de suscripción adaptados a mercados latinoamericanos.</p>
          </div>
        </div>
      </div>
    </article>
  )
}
