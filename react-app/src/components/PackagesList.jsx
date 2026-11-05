import EmptyPackage from './EmptyPackage'
import PackingPackage from './PackingPackage'

// קומפוננטת אב לכל המארזים - מריצה map על המערך ומחליטה איזה בן להציג
function PackagesList({
  packages,
  onStartPacking,
  onClose,
  onAddItem,
  onRemoveItem,
}) {
  return (
    <ul className="packages-list">
      {packages.map((pkg) => (
        <li key={pkg.id} className="package-card">
          {pkg.status === 'ריק' ? (
            <EmptyPackage pkg={pkg} onStartPacking={onStartPacking} />
          ) : (
            <PackingPackage
              pkg={pkg}
              onClose={onClose}
              onAddItem={onAddItem}
              onRemoveItem={onRemoveItem}
            />
          )}
        </li>
      ))}
    </ul>
  )
}

export default PackagesList
