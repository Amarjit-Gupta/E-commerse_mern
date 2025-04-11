const Data = ({ item, handleClick }) => {
  const { title, description, price, img } = item;
  return (
    <>
      <div className="items">
        <div className="image">
          <img src={img} alt="Broken image" />
        </div>
        <div>
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <div className="price">Price: &nbsp; ${price}</div>
          <button onClick={() => handleClick(item)} className="addToCart" >Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default Data;