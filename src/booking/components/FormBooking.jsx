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

  // Ambil data rooms dari API lokal
  const roomsResponse = await axios.get('http://localhost:7776/call/room/list');
  const rooms = roomsResponse.data.data;
  console.log(rooms);
  // Cari informasi kamar berdasarkan roomId tanpa menggunakan .find
  let room = null;
  for (let i = 0; i < rooms.length; i++) {
    const r = rooms[i];
    if (
      r.number === parseInt(number) &&
      r.hotelId === hotelId
    ) {
      room = r;
      break;
    }
  }

  if (!room) {
    notifyError('Room not found!');
    return;
  }

  const totalPrice = room.price;
  console.log(currentUser);
  // Buat data booking baru sesuai format API
  const newBooking = {
    userId: currentUser.id,
    checkInDate: cleanData.checkInDate,
    checkOutDate: cleanData.checkOutDate,
    numberOfGuests: cleanData.numberOfGuests,
    totalPrice: totalPrice.toFixed(2), // Pastikan format harga sesuai
    status: "PENDING",
    roomId: room.id,
  };

  // POST data booking baru menggunakan createBooking
  try {
    const response = await createBooking(newBooking);
    const bookingId = response.data.data.id; // pastikan backend mengembalikan bookingId
    console.log("response create booking", response.data.data.id);
    // console.log("response create booking", response.data.data.data.id);
    notifySuccess('Booking berhasil dibuat!');
    navigate(`/hotel/${hotelId}/rooms/${number}/booking/summary/${bookingId}`);
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

