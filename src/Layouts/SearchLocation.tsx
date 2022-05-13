import { FaLocationArrow } from "react-icons/fa"

const SearchLocation = () => {
  return (
    <div className="findLocation-container">
        <div className="findLocation-title">
            <h1>'Shop Name' in your neighborhood</h1>
        </div>
        <div className="findLocation-link">
            <a href="">Find A Store <span><FaLocationArrow/></span></a>
        </div>
    </div>
  )
}

export default SearchLocation