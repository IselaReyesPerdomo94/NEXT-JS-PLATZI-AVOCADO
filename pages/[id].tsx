import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>();
  const router = useRouter();
  const {
    query: { id },
  } = router;

  useEffect(() => {
    window
      .fetch(`api/avo/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const displayName = product ? product.name : "No es un producto valido";
  return (
    <section>
      <h1>Product: {displayName} </h1>
    </section>
  );
};

export default ProductPage;
