/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormBooking from '../components/FormBooking';

const BookingPage = props => {
const [isLoading, setIsLoading] = useState({
	bookingForm: false,

	});
	const { setTitle } = useContext(HeaderContext);

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, bookingForm: true}))


	    setIsLoading(prev => ({...prev, bookingForm: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Booking Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Form"}
		isLoading={isLoading.bookingForm}
	>
		<FormBooking
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default BookingPage

