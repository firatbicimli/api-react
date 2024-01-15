import { BsBookmark } from "react-icons/bs"
import { RiArrowRightSLine } from "react-icons/ri"
import './api-item.scss'


const ApiItem = ({data: api}) => {
    return (
        <div className="api-item">
            <div className="item-icon"></div>
            <div className="item-detail">
                <h4>{api.name}</h4>
                <div className="item-category">{api.category}</div>
                <div className="item-description">{api.description}</div>
            </div>
            <div className="item-hover">
                <button>
                    <BsBookmark />
                    Bookmark
                </button>
                <a href="#">
                    API DOCs
                    <RiArrowRightSLine />
                </a>
            </div>
        </div>
    )
}

export default ApiItem