// מארז ריק: שם המארז + כפתור התחלת הרכבה
function EmptyPackage({ pkg, onStartPacking }) {
  return (
    <div className="package package--empty">
      <h2 className="package__title">{pkg.recipient}</h2>
      <button
        type="button"
        className="btn btn--primary"
        onClick={() => onStartPacking(pkg.id)}
      >
        התחל להרכיב מארז
      </button>
    </div>
  )
}

export default EmptyPackage
