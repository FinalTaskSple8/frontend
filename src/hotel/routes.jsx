/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import RoomPage from './containers/RoomPage'
import HotelPage from './containers/HotelPage'

const hotelRoutes = [
{ 
	path: "/hotel/:hotelId/rooms",
	element: <RoomPage />,
}

	
,
{ 
	path: "/hotel",
	element: <HotelPage />,
}

	

]

export default hotelRoutes
