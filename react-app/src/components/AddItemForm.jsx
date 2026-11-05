import { useState } from 'react'

// טופס הוספת פריט - מנהל State מקומי משלו
function AddItemForm({ packageId, onAddItem }) {
  const [formData, setFormData] = useState({ name: '', price: '' })

  function handleChange(event) {
    const { name, value } = event.target
    // Spread שומר על הערך של השדה השני
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const name = formData.name.trim()
    const price = Number(formData.price)

    if (!name || !price || price <= 0) return

    onAddItem(packageId, { name, price })
    setFormData({ name: '', price: '' })
  }

  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="שם המוצר"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="מחיר"
        min="1"
        value={formData.price}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn--primary">
        הוסף
      </button>
    </form>
  )
}

export default AddItemForm
