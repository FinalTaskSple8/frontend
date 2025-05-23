/*
	Generated on 22/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "@/commons/auth";
import axios from "axios";
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
import addEarlyCheckInLateCheckOut from '../services/addEarlyCheckInLateCheckOut'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";
import { useParams } from "@/commons/hooks/useParams"

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ModifiedFormEarlyCheckInLateCheckOut = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  	const navigate = useNavigate();
	const { currentUser } = useAuth();
	const { hotelId, number } = useParams();
	const save = async (data) => {
		const cleanData = cleanFormData(data);
		// Ambil data rooms dari API lokal
		const roomsResponse = await axios.get(`${backendUrl}/call/room/list`);
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

		const totalPrice = room.price * cleanData.numberOfGuests;
		console.log(currentUser);
		// Buat data booking baru sesuai format API
		const earlyCheckInBool = cleanData.earlyCheckIn === "Ya";
		const lateCheckOutBool = cleanData.lateCheckOut === "Ya";
		console.log("earlyCheckInBool", earlyCheckInBool);
		console.log("earlyCheckin", cleanData.earlyCheckIn);

		const newBooking = {
		userId: currentUser.id,
		checkInDate: cleanData.checkInDate,
		checkOutDate: cleanData.checkOutDate,
		numberOfGuests: cleanData.numberOfGuests,
		earlyCheckIn: earlyCheckInBool,
		lateCheckOut: lateCheckOutBool,
		earlyCheckInFee: earlyCheckInBool ? room.price * 0.1 : 0,
		lateCheckOutFee: lateCheckOutBool ? room.price * 0.1 : 0,
		totalPrice: totalPrice.toFixed(2),
		status: "PENDING",
		roomId: room.id,
		};

		console.log("newBooking", newBooking);
		// POST data booking baru menggunakan createBooking
		try {
			const response = await addEarlyCheckInLateCheckOut(newBooking);
			const bookingId = response.data.data.id; // pastikan backend mengembalikan bookingId
			const bookingData = response.data.data;
			console.log("response create booking", response.data.data.id);
			// console.log("response create booking", response.data.data.data.id);
			notifySuccess('Booking berhasil dibuat!');
			navigate(`/hotel/${hotelId}/rooms/${number}/booking/final-summary/${bookingId}`,{
				state: { bookingData },
			});

			} catch (error) {
				console.error(error);
				notifyError('Gagal membuat booking!');
			}
			};
	
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Early CheckIn Late CheckOut" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
		  ]}
	
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
		      />
	,
			  
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
		      />
	,
			  
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
		      />
		  ,
	
		  
		  <Controller
		    key="earlyCheckIn"
	        name="earlyCheckIn"
	        control={control}
			defaultValue={false}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Tambah Early CheckIn"
	            options={[
					{ label: "Ya", value: true },
					{ label: "Tidak", value: false },
				]}
	            optionLabel="label"
	            placeholder="Pilih tambah early checkin"
					fieldState={fieldState}
					
	            {...field}
					isRequired={false}
	          />
	
	        )}
	      />
	,
		  
		  <Controller
		    key="lateCheckOut"
	        name="lateCheckOut"
	        control={control}
			defaultValue={false}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Tambah Late CheckOut"
	            options={[
					{ label: "Ya", value: true },
					{ label: "Tidak", value: false },
				]}
	            optionLabel="label"
	            placeholder="Pilih tambah late checkout"
					fieldState={fieldState}
					
	            {...field}
					isRequired={false}
	          />
	
	        )}
	      />
		  ]}
	
		  itemsEvents={[
				<Button key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormEarlyCheckInLateCheckOut
