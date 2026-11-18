const products = [
    {
        id: 1,
        name: "Laptop",
        price: 1200,
        quantity: 2
    },
    {
        id: 2,
        name: "Smartphone",
        price: 800,
        quantity: 3
    },
    {
        id: 3,
        name: "Headphones",
        price: 150,
        quantity: 1
    },
    {
        id: 4,
        name: "Keyboard",
        price: 75,
        quantity: 4
    },
    {
        id: 5,
        name: "Mouse",
        price: 40,
        quantity: 2
    }
];

export default function ProductList(){
    return (
        <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>Product Id: {product.id}, Name: {product.name}, Price : {product.price}, Quantity: {product.quantity}, Total: {product.quantity * product.price} </li>
      ))}
      </ul>
    </div>
    )
}