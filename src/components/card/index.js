import React  from 'react'
import './index.scss'
import {Link} from 'react-router-dom'

function Card(props) {
    return(
        <div className="card-item">
                <Link to={'/product/'+props.product.id}><img src={props.product.image} alt={props.product.name}/></Link>
                <p className="p1">{props.product.name}</p>
                <p className="p2">${props.product.price}</p>
        </div>
    )
}

export default Card