/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import BookingPage from './containers/BookingPage'
import BookingSummaryPage from './containers/BookingSummaryPage'

const bookingRoutes = [
{ 
	path: "/hotel/:hotelId/rooms/:number/booking",
	element: <BookingPage />,
}

	
,
{ 
	path: "/hotel/:hotelId/rooms/:number/booking/summary",
	element: <BookingSummaryPage />,
}

	

]

export default bookingRoutes
