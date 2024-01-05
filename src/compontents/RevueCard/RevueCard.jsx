export default function RevueCard ({id, username, rating, description}) {
  return (
    <div data-id={id}>
      <h3>{rating}/5 ⭐</h3>
      <p>{description}</p>
      <span>- {username}</span>
    </div>
  )
}