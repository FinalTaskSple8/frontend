/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import PaymentPage from './containers/PaymentPage'
import PaymentStatusPage from './containers/PaymentStatusPage'

const paymentRoutes = [
{ 
	path: "/hotel/:hotelId/rooms/:number/booking/:bookingId/payment",
	element: <PaymentPage />,
}

	
,
{ 
	path: "/hotel/:hotelId/rooms/:number/booking/:bookingId/payment/status",
	element: <PaymentStatusPage />,
}

	

]

export default paymentRoutes
