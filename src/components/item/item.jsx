import {Link} from 'react-router-dom';

export const Item = ({course}) => {
  return(
    <div className="col-md-6 col-lg-3 m-auto">
      <div className="card">
        <img className="card-img-top" src={course.photo} alt={course.id}/>
        <div className="card-body">
          <h5>{course.name}</h5>
          <p>{course.price}$</p>
          <p><small className="text-muted">{course.category}</small></p>
          <Link to={`/curso/${ course.id }`}>
            <button className="btn btn-primary">Comprar</button>
          </Link>
        </div>
      </div>
    </div>
  )
  
}