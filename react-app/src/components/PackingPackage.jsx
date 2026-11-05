import AddItemForm from './AddItemForm'

// מארז בהרכבה: רשימת פריטים, מחיקה, סה"כ, טופס הוספה וסגירת המארז
function PackingPackage({ pkg, onClose, onAddItem, onRemoveItem }) {
  const totalPrice = pkg.items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="package package--packing">
      <h2 className="package__title">{pkg.recipient}</h2>

      {pkg.items.length === 0 ? (
        <p className="package__empty-text">עדיין לא נוספו פריטים</p>
      ) : (
        <ul className="items-list">
          {pkg.items.map((item) => (
            <li key={item.id} className="item">
              <span className="item__name">{item.name}</span>
              <span className="item__price">{item.price} ₪</span>
              <button
                type="button"
                className="btn btn--remove"
                aria-label="הסר פריט"
                onClick={() => onRemoveItem(pkg.id, item.id)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="package__total">סה"כ: {totalPrice} ₪</p>

      <AddItemForm packageId={pkg.id} onAddItem={onAddItem} />

      <button
        type="button"
        className="btn btn--close"
        onClick={() => onClose(pkg.id)}
      >
        סגור ושלח מארז
      </button>
    </div>
  )
}

export default PackingPackage
