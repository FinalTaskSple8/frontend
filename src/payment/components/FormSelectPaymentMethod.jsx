/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import {
  Button,
  SelectionField,
} from "@/commons/components";
import cleanFormData from "@/commons/utils/cleanFormData";
import { notifyError, notifySuccess } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormSelectPaymentMethod = () => {
  const { bookingId } = useParams(); // Ambil bookingId dari URL
  const [bookingSummary, setBookingSummary] = useState(null); // State untuk menyimpan data booking
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  // Fetch data booking berdasarkan bookingId
  useEffect(() => {
    const fetchBookingSummary = async () => {
      try {
        // Konversi bookingId ke integer
        const numericBookingId = parseInt(bookingId, 10);

        // Lakukan request ke API dengan bookingId sebagai integer
        const response = await axios.get(`http://localhost:3004/bookings/${numericBookingId}`);
        setBookingSummary(response.data); // Simpan data booking ke state
      } catch (error) {
        console.error("Failed to fetch booking data:", error);
        notifyError("Failed to fetch booking details. Please try again.");
      }
    };

    fetchBookingSummary();
  }, [bookingId]);

  const send = async (data) => {
    if (!bookingSummary) {
      notifyError("Booking details are missing. Please try again.");
      return;
    }

    const cleanData = cleanFormData(data);

    // Buat data payment baru
    const newPayment = {
      id: Date.now(), // Gunakan timestamp sebagai ID unik
      userId: bookingSummary.userId,
      bookingId: bookingSummary.id,
      totalAmount: bookingSummary.totalPrice,
      status: "UNPAID", // Default status
      paymentMethod: cleanData.paymentMethod,
    };

    try {
      // POST data payment ke API
      await axios.post("http://localhost:3004/payments", newPayment);

      // Simpan data payment ke localStorage
      localStorage.setItem("paymentData", JSON.stringify(newPayment));

      notifySuccess("Payment method selected successfully!");
      navigate(`/hotel/${bookingSummary.hotelId}/rooms/${bookingSummary.roomId}/booking/${bookingSummary.id}/payment/status`);
    } catch (error) {
      console.error(error);
      notifyError("Failed to process payment!");
    }
  };

  if (!bookingSummary) {
    return <div>Loading booking details...</div>; // Tampilkan loading jika data belum tersedia
  }

  return (
    <div>
      <Layouts.FormComponentLayout
        title="Select Payment Method"
        onSubmit={handleSubmit(send)}
        formFields={[
          <Controller
            key="paymentMethod"
            name="paymentMethod"
            control={control}
            rules={{ required: "Please select a payment method" }}
            render={({ field, fieldState }) => (
              <SelectionField
                label="Payment Method"
                options={[
                  { label: "E-Wallet", value: "ewallet" },
                  { label: "Credit Card", value: "credit_card" },
                  { label: "M-Banking", value: "mbanking" },
                ]}
                optionLabel="label"
                optionValue="value"
                placeholder="Select a payment method"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
        ]}
        itemsEvents={[
          <Button key="Send" type="submit" variant="primary">
            Confirm Payment
          </Button>,
        ]}
      />
    </div>
  );
};

export default FormSelectPaymentMethod;