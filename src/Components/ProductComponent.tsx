
interface ProductProps {
    product: string;
    price: number;
}

const ProductComponent = ({product, price}: ProductProps) => {
  return (
    <div>
      <p>Produto: <strong>{product}</strong>, Preço: <strong>R$ {price}</strong></p>
    </div>
  )
}

export default ProductComponent