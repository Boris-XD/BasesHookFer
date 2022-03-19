import useFetchGifts from "../hooks/useFetchGifts";
import ItemGift from "./ItemGift";

const GifGrid = ({ category }) => {

  const { data: gifts, loading } = useFetchGifts(category);

  return (
    <>
      <h2>{category}</h2>
      {
        loading && <h5>Cargando....</h5>
      }
      <div className="container-cards">
        {gifts.map((item) => (
          <ItemGift key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
