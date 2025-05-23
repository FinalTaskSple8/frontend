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
import getHotelById from '../services/getHotelById';

import BookingSummary from '../components/BookingSummary'
import getBookingSummaryData from '../services/getBookingSummaryData'
const BookingSummaryPage = props => {
const { number, hotelId, bookingId } = useParams();
	const [isLoading, setIsLoading] = useState({
	bookingSummary: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [bookingSummaryData, setBookingSummaryData] = useState()
const [hotelData, setHotelData] = useState(null);
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, bookingSummary: true}))
			const { data: bookingSummaryData } = await getBookingSummaryData({ id: bookingId })
			setBookingSummaryData(bookingSummaryData.data, bookingId)
      const hotel = await getHotelById(hotelId);
      setHotelData(hotel.data);
		} finally {
			setIsLoading(prev => ({...prev, bookingSummary: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Booking Summary Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={{
              pathname: `/hotel/${hotelId}/rooms/${number}/booking/${bookingId}/payment`,
              state: { bookingSummary: bookingSummaryData }
            }}>
              <Button className="p-2" variant="primary">
                Proceed to Payment
              </Button>
            </Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Booking Summary"}
	singularName={"Summary"}
	items={{...bookingSummaryData}}
	isLoading={isLoading.bookingSummary}
	isCorrelatedWithAnotherComponent={false}
>
	<BookingSummary {...{ data : { ...bookingSummaryData, hotelData }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default BookingSummaryPage

