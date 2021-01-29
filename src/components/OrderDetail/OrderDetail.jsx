import { useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import { getCart, getOrders } from "../../utilities/redux/actions/orders"

export default function OrderDetail() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <h1>order detail</h1>
  );
}