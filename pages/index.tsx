import { useState, useEffect } from "react";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((res) => res.json())
      .then(({ data }) => {
        setProductList(data);
      });
  }, []);

  return (
    <div>
      <h1>Hola mundo precioso!</h1>
      {productList.map((avocado, index) => (
        <p key={index}>{avocado.name}</p>
      ))}
    </div>
  );
};

export default Home;
