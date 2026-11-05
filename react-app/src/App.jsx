import { useState } from 'react'
import PackagesList from './components/PackagesList'
import './App.css'

// נתוני ההתחלה של המארזים
const initialPackages = [
  {
    id: 1,
    recipient: 'יעד 1',
    status: 'ריק',
    items: [],
  },
  {
    id: 2,
    recipient: 'יעד 2',
    status: 'בהרכבה',
    items: [
      { id: 1, name: 'פריט 1', price: 40 },
      { id: 2, name: 'פריט 2', price: 25 },
    ],
  },
  {
    id: 3,
    recipient: 'יעד 3',
    status: 'ריק',
    items: [],
  },
  {
    id: 4,
    recipient: 'יעד 4',
    status: 'בהרכבה',
    items: [{ id: 1, name: 'פריט 3', price: 60 }],
  },
]

// מחזיר את המערך עם המארז הרלוונטי מעודכן (ללא Mutation על המערך המקורי)
function updatePackageById(packages, packageId, updater) {
  return packages.map((pkg) =>
    pkg.id === packageId ? { ...pkg, ...updater(pkg) } : pkg,
  )
}

function App() {
  const [packages, setPackages] = useState(initialPackages)

  // ריק -> בהרכבה
  function startPacking(packageId) {
    setPackages((prev) =>
      updatePackageById(prev, packageId, () => ({ status: 'בהרכבה' })),
    )
  }

  // הוספת פריט חדש למארז מסוים
  function addItem(packageId, newItem) {
    setPackages((prev) =>
      updatePackageById(prev, packageId, (pkg) => {
        const nextItemId = pkg.items.length
          ? Math.max(...pkg.items.map((item) => item.id)) + 1
          : 1
        return {
          items: [...pkg.items, { ...newItem, id: nextItemId }],
        }
      }),
    )
  }

  // הסרת פריט ספציפי מהמארז
  function removeItem(packageId, itemId) {
    setPackages((prev) =>
      updatePackageById(prev, packageId, (pkg) => ({
        items: pkg.items.filter((item) => item.id !== itemId),
      })),
    )
  }

  // סגירת המארז: חזרה ל"ריק" ומחיקת כל הפריטים
  function closePackage(packageId) {
    setPackages((prev) =>
      updatePackageById(prev, packageId, () => ({
        status: 'ריק',
        items: [],
      })),
    )
  }

  return (
    <div className="app">
      <h1>ניהול מארזי שי</h1>
      <PackagesList
        packages={packages}
        onStartPacking={startPacking}
        onClose={closePackage}
        onAddItem={addItem}
        onRemoveItem={removeItem}
      />
    </div>
  )
}

export default App
