/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  RadioInputField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import createBooking from '../services/createBooking'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";
import { useParams } from "@/commons/hooks/useParams"
import axios from 'axios';
import { useAuth } from "@/commons/auth"; // Import useAuth untuk mendapatkan currentUser

const FormBooking = () => {
  const { hotelId, number } = useParams();
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { currentUser } = useAuth(); // Ambil currentUser dari context

  const send = async (data) => {
  const cleanData = cleanFormData(data);

  // Ambil data bookings, rooms, dan hotels dari db.json
  const bookingsResponse = await axios.get('http://localhost:3004/bookings');
  const roomsResponse = await axios.get('http://localhost:3004/rooms');
  const hotelsResponse = await axios.get('http://localhost:3004/hotels');

  const bookings = bookingsResponse.data;
  const rooms = roomsResponse.data;
  const hotels = hotelsResponse.data;

  // Hitung bookingId baru
  const newBookingId = (bookings.length > 0 ? bookings[bookings.length - 1].id + 1 : 1).toString();

  // Cari harga kamar berdasarkan roomId
  const room = rooms.find((room) => room.number === parseInt(number) && room.hotelId === hotelId);
  if (!room) {
    notifyError('Room not found!');
    return;
  }

  // Cari informasi hotel berdasarkan hotelId
  const hotel = hotels.find((hotel) => hotel.id === hotelId);
  if (!hotel) {
    notifyError('Hotel not found!');
    return;
  }

  const totalPrice = room.price;

  // Buat data booking baru
  const newBooking = {
    id: newBookingId,
    userId: currentUser.id,
    roomId: room.id,
    checkInDate: cleanData.checkInDate,
    checkOutDate: cleanData.checkOutDate,
    numberOfGuests: cleanData.numberOfGuests,
    totalPrice,
    status: "CONFIRMED",
    paymentId: newBookingId,
  };

  // POST data booking baru ke API
  try {
    await axios.post('http://localhost:3004/bookings', newBooking);

    // Simpan data ke localStorage untuk digunakan di halaman ringkasan
    const bookingSummary = {
      bookingId: newBookingId,
      userId: currentUser.id,
      roomId: room.id,
      hotelId: hotel.id,
      hotelName: hotel.name,
      hotelLocation: hotel.location,
      totalPrice,
      checkInDate: cleanData.checkInDate,
      checkOutDate: cleanData.checkOutDate,
      numberOfGuests: cleanData.numberOfGuests,
    };
    localStorage.setItem('bookingSummary', JSON.stringify(bookingSummary));

    notifySuccess('Booking berhasil dibuat!');
    navigate(`/hotel/${hotelId}/rooms/${number}/booking/summary`);
  } catch (error) {
    console.error(error);
    notifyError('Gagal membuat booking!');
  }
};

  return (
    <div>
      <Layouts.FormComponentLayout
        title="Booking Form"
        onSubmit={handleSubmit(send)}
        formFields={[
          <Controller
            key="checkInDate"
            name="checkInDate"
            control={control}
            rules={{ required: "Harap masukkan check in date" }}
            render={({ field, fieldState }) => (
              <InputField
                label="Check In Date"
                placeholder="Masukkan check in date"
                type="date"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
          <Controller
            key="checkOutDate"
            name="checkOutDate"
            control={control}
            rules={{ required: "Harap masukkan check out date" }}
            render={({ field, fieldState }) => (
              <InputField
                label="Check Out Date"
                placeholder="Masukkan check out date"
                type="date"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
          <Controller
            key="numberOfGuests"
            name="numberOfGuests"
            control={control}
            rules={{ required: "Harap masukkan number of guests" }}
            render={({ field, fieldState }) => (
              <InputField
                label="Number of Guests"
                placeholder="Masukkan number of guests"
                type="number"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
        ]}
        itemsEvents={[
          <Button key="Send" type="submit" variant="primary">
            Send
          </Button>,
        ]}
      />
    </div>
  );
};

export default FormBooking;

