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
const FormBooking = () => {
	const { hotelId, number } = useParams(); // Pindahkan ke dalam komponen
	const { control, handleSubmit } = useForm();
	const navigate = useNavigate();
  
	const send = (data) => {
	  const cleanData = cleanFormData(data);
	  console.log('Data:', data); // Debugging
	  console.log('hotelId:', hotelId); // Debugging
	  console.log('number:', number); // Debugging
  
	  // Simpan data ke localStorage
	  localStorage.setItem('bookingFormData', JSON.stringify(cleanData));
  
	  // Arahkan ke halaman BookingSummaryPage
	  navigate(`/hotel/${hotelId}/rooms/${number}/booking/summary`);
  
	  notifySuccess(`Data berhasil disimpan ke local storage!`);
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
  


export default FormBooking
