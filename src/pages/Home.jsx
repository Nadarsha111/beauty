import React from 'react';
import TopNav from '../components/TopNav';
import Banner from '../components/Banner';
import Card from '../components/Card/Card';
import { useFetch } from '../hooks/useFetch';
const Home = () => {
  const { data } = useFetch('/products.json');


  return (
    <>
      <TopNav />
      <Banner />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Latest Items
        </h2>

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
      </div>
    </>
  );
};

export default Home;
