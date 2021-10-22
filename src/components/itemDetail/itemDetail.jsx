import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext'
import { ItemCount } from '../itemCount/itemCount';

export const ItemDetail = ({ course }) => {

  const { addItem, contador, setContador, onAdd, onSubmit } = useContext(CartContext)
  const [showButton, setShowButton] = useState(true)

  const addToCart = () => {
      addItem(course, contador)
      setShowButton(false)
  }

  useEffect (() => {setContador (0) }, [])

  
  return (
    <>
      <div className="card text-white bg-dark ms-auto me-auto border-0 p-3">
        <div className="row">
          <div className="col-md-6">
            <img className="card-img" src={course.photo} alt={course.id}/>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>
              <p className="card-text">{course.price}$</p>
              <p className="card-text"><small className="text-muted">{course.category}</small></p>
              { showButton ? (
                <>
                  <ItemCount 
                  onSubstract= { onSubmit } 
                  onAdd= { onAdd} 
                  count= { contador }
                  quantity = { contador }
                  stock = { course.stock }
                  setter = { setContador }
                  />
                  { course.stock > 0 && <button onClick={addToCart} className="btn btn-danger">Agregar {contador} producto/s al carrito</button> }
                </>
                ) : (
                  <Link className="btn btn-primary" to='/cart'>Finalizar compra</Link>
                )
              }
            </div>
          </div>
        </div>
      </div>
    
          
      </>
  )
}
