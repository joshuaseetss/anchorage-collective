export default function ServiceTable({ services }) {
  return (
    <div className="service-table-wrapper">
      <table className="service-table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Details</th>
            <th>Sign Up</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s, i) => (
            <tr key={i}>
              <td className="service-table-name">{s.name}</td>
              <td className="service-table-details">{s.details}</td>
              <td className="service-table-action">
                {s.comingSoon ? (
                  <span className="badge badge-soon">Coming Soon</span>
                ) : (
                  <a
                    href={s.signUpLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-signup"
                  >
                    Sign Up
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
