const ProductOne = () => {
  return (
    <div className="grid grid-rows justify-center items-center">
      <img className="w-50 h-50 object-cover" src="https://i.pinimg.com/736x/27/15/76/27157648e1ad5532f448e7da81188d44.jpg" alt="t-shirt" />
      <h2 className="mt-3">T-shirt</h2>
      <p>Price: <strong>500 SEK</strong></p>
      
      <div>
          <img className="w-50 h-50 object-cover" src="https://i.pinimg.com/736x/5e/81/f0/5e81f0b0690996d301c67abe583349f9.jpg" alt="dress" />
          <h2 className="mt-3">Dress</h2>
          <p>Price: <strong>400 SEK</strong></p>
        </div>
  </div>
  )
}
export default ProductOne