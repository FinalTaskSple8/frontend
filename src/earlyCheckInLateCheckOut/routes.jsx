/*
	Generated on 22/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import EarlyCheckInCheckOutPage from './containers/EarlyCheckInCheckOutPage'
import BookingFinalSummaryPage from './containers/BookingFinalSummaryPage'

const earlyCheckInLateCheckOutRoutes = [
	{ 
		path: "/hotel/:hotelId/rooms/:number/booking/summary/:bookingId/early-check-in-late-check-out",
		element: <EarlyCheckInCheckOutPage />,
	},
	{ 
		path: "/hotel/:hotelId/rooms/:number/booking/final-summary/:bookingId",
		element: <BookingFinalSummaryPage />,
	}
]

export default earlyCheckInLateCheckOutRoutes
