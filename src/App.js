export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>🎳 Kegelverein Strafen-App</h1>
        <p style={{ color: '#555' }}>Verwaltung von Strafen, Zahlungen & Übersicht</p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '30px' }}>
        <div style={{ background: 'white', borderRadius: '15px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2>💰 Offene Strafen</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'red' }}>72,50 €</p>
        </div>
        <div style={{ background: 'white', borderRadius: '15px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2>📅 Nächster Kegelabend</h2>
          <p style={{ fontSize: '1.2rem' }}>21.09.2025</p>
        </div>
        <div style={{ background: 'white', borderRadius: '15px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2>👑 König der Strafen</h2>
          <p style={{ fontSize: '1.2rem' }}>Max Müller (15 €)</p>
        </div>
      </section>

      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '30px' }}>
        <button style={{ background: '#3b82f6', color: 'white', padding: '10px 20px', borderRadius: '15px', border: 'none' }}>📋 Kegelabend erfassen</button>
        <button style={{ background: '#22c55e', color: 'white', padding: '10px 20px', borderRadius: '15px', border: 'none' }}>👥 Mitgliederliste</button>
        <button style={{ background: '#a855f7', color: 'white', padding: '10px 20px', borderRadius: '15px', border: 'none' }}>💸 Zahlungen prüfen</button>
      </div>

      <section style={{ background: 'white', borderRadius: '15px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>👥 Mitgliederübersicht</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <th style={{ padding: '8px' }}>Name</th>
              <th style={{ padding: '8px' }}>Gesamtschulden</th>
              <th style={{ padding: '8px' }}>Bezahlt</th>
              <th style={{ padding: '8px' }}>Offen</th>
              <th style={{ padding: '8px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px' }}>Max Müller</td>
              <td>15,00 €</td>
              <td>5,00 €</td>
              <td>10,00 €</td>
              <td>❌ Offen</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px' }}>Lisa Schmidt</td>
              <td>12,50 €</td>
              <td>12,50 €</td>
              <td>0,00 €</td>
              <td>✅ Bezahlt</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}