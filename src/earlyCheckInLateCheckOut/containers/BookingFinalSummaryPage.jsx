/*
	Generated on 22/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import BookingFinalSummary from '../components/BookingFinalSummary'
import getBookingFinalSummaryData from '../services/getBookingFinalSummaryData'
import { useLocation } from "react-router";

const BookingFinalSummaryPage = props => {
	const location = useLocation();
  	const bookingData = location.state?.bookingData;
const [isLoading, setIsLoading] = useState({
	bookingFinalSummary: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [bookingFinalSummaryData, setBookingFinalSummaryData] = useState()

useEffect(() => {
	const fetchData = async () => {
		if (bookingData) {
			setBookingFinalSummaryData(bookingData);
			return;
		}
		try {
			setIsLoading(prev => ({ ...prev, bookingFinalSummary: true }));
			const { data: bookingFinalSummaryData } = await getBookingFinalSummaryData({ bookingId, number, hotelId });
			setBookingFinalSummaryData(bookingFinalSummaryData.data);
		} finally {
			setIsLoading(prev => ({ ...prev, bookingFinalSummary: false }));
		}
	};
	fetchData();
}, []);
	
	useEffect(() => {
		setTitle("Booking Final Summary Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/hotel/${bookingFinalSummaryData?.hotelId}/rooms/${bookingFinalSummaryData?.roomNumber}/booking/${bookingFinalSummaryData?.id}/payment`}>
			<Button className="p-2 w-full" variant="primary">Payment</Button>
			</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Booking Final Summary"}
	singularName={"Final"}
	items={{...bookingFinalSummaryData}}
	isLoading={isLoading.bookingFinalSummary}
	isCorrelatedWithAnotherComponent={false}
>
	{/* <BookingFinalSummary {...{ data : { ...bookingFinalSummaryData }}} /> */}
	<div>
		<p>Check-in: {bookingData.checkInDate}</p>
		<p>Check-out: {bookingData.checkOutDate}</p>
		<p>Total Harga: {bookingData.totalPrice}</p>
		<p>Early Check-in: {bookingData.earlyCheckIn ? "Ya" : "Tidak"}</p>
		<p>Late Check-out: {bookingData.lateCheckOut ? "Ya" : "Tidak"}</p>
		<p>Jumlah Tamu: {bookingData.numberOfGuests}</p>
		<p>Status: {bookingData.status}</p>
      {/* tampilkan data lainnya */}
    </div>
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default BookingFinalSummaryPage

