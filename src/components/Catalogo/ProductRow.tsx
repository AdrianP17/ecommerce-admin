interface Product {
  id: string | number;
  producto: string;
  categoria: string;
  stkDisponible: number;
  stkTotal: number;
}

interface ProductRowProps {
  product: Product;
  isSelected: boolean;
  onSelect: (id: Product['id']) => void;
}

export default function ProductRow({ product, isSelected, onSelect }: ProductRowProps) {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(product.id)}
          style={{
            width: 20,
            height: 20,
            appearance: "none",
            border: "2px solid #2c2c2c",
            borderRadius: "25%",
            cursor: "pointer"
          }}
        />
      </td>
      <td>{product.producto}</td>
      <td>{product.categoria}</td>
      <td>{product.stkDisponible}</td>
      <td>{product.stkTotal}</td>
    </tr>
  );
}
