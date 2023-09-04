// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const settings = {
    dots: true,
    slidersToShow: 1,
    slidersToScroll: 1,
  }
  const {planetsList} = props
  return (
    <div data-testId="planets" className="carousel-container">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem key={each.id} planetDetails={each} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
