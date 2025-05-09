/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
const PaymentStatusPage = () => {
  const [paymentData, setPaymentData] = useState(null);
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Payment Status Page");

    // Ambil data payment dari localStorage
    const data = JSON.parse(localStorage.getItem('paymentData'));
    setPaymentData(data);
  }, []);

  return (
    <Layouts.ViewContainerLayout>
      <div>
        <h3>Payment Status</h3>
        <p>Booking ID: {paymentData?.bookingId || 'N/A'}</p>
        <p>Total Amount: {paymentData?.totalAmount || 'N/A'}</p>
        <p>Status: {paymentData?.status || 'N/A'}</p>
        <p>Payment Method: {paymentData?.paymentMethod || 'N/A'}</p>
      </div>
    </Layouts.ViewContainerLayout>
  );
};

export default PaymentStatusPage;

