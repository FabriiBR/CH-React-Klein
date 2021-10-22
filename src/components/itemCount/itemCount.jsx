export const ItemCount = ({onSubstract, onAdd, count, setter, quantity, stock}) => {    
  return (
      <div className="container">
          {stock > 0 ? (
              <div>
                  <button onClick={() => onSubstract(count, setter)}>-</button>
                  {quantity}
                  <button onClick={() => onAdd(count, setter, stock)}>+</button>
              </div>
          ):(
              <p>Lo sentimos, no tenemos más stock de este producto</p>
          )} 
      </div>
  )
}
export default ItemCount;