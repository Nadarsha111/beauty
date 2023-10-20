import { PiUserCircleThin } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const TopNav = () => {
  const products = useSelector((state) => state.cart.products);
  console.log(products);
  return (
    <div className="mt-5 flex h-14  items-start justify-between bg-white px-16">
      <div className="flex ">
        <img src="/logo.jpeg" alt="logo" className="ml-2 h-10" />
      </div>
      <div className="flex items-end gap-4">
        <div className="flex items-end">
          <ul className="flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">
                Cart({products?.length == 0 ? 0 : products.length})
              </Link>
            </li>
            <li>About</li>
          </ul>
        </div>
        <div className="flex items-end gap-4">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full border-2 border-gray-300 px-2"
          />
          <div className="items-end">
            <PiUserCircleThin size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
