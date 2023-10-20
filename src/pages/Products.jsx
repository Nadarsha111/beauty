import Card from '../components/Card/Card';
import { useFetch } from '../hooks/useFetch';
import TopNav from '../components/TopNav';

const Products = () => {
  const { data, loading } = useFetch('/products.json');

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <TopNav />
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            img={item.api_featured_image}
            title={item.name}
            price={item.price}
            pageurl={item.product_api_url}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
