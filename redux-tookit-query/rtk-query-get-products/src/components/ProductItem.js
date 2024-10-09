const ProductItem = ({ product }) => {
  if (!product) return <div>Loading product</div>;
  const { title, description, images } = product;
  const image = images[0];

  return (
    <article>
      <h2>{title}</h2>
      <img src={image} alt={title} width={100} />
      <p>{description}</p>
    </article>
  );
};

export default ProductItem;
