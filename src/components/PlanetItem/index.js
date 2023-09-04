// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {id, imageUrl, description, name} = planetDetails
  return (
    <div testid="planets" className="planet-item-details">
      <img src={imageUrl} alt={`planet ${name}`} className="image-size" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
