import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { DataContext } from "../../store/GlobalState";
import { FaLongArrowAltLeft } from "react-icons/fa";
import OrderDetail from "../../components/OrderDetail";

const DetailOrder = () => {
  const { state, dispatch } = useContext(DataContext);
  const { orders } = state;

  const router = useRouter();

  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    const newArr = orders.filter((order) => order._id === router.query.id);
    setOrderDetail(newArr);
  }, [orders]);

  return (
    <div className="my-3">
      <Head>
        <title>Detail Orders</title>
      </Head>
      <div>
        <button className="btn btn-dark" onClick={() => router.back()}>
          <FaLongArrowAltLeft /> Go Back
        </button>
      </div>
      <OrderDetail orderDetail={orderDetail} />
    </div>
  );
};

export default DetailOrder;
