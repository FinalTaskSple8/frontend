/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import ManageHotelPage from './containers/ManageHotelPage'
import AddHotelPage from './containers/AddHotelPage'
import ManageRoomPage from './containers/ManageRoomPage'
import AddRoomPage from './containers/AddRoomPage'

const hotelManagementRoutes = [
{ 
	path: "/manage-hotel",
	element: <ManageHotelPage />,
}

	
,
{ 
	path: "/manage-hotel/add",
	element: <AddHotelPage />,
}

	
,
{ 
	path: "/manage-hotel/:hotelId/rooms",
	element: <ManageRoomPage />,
}

	
,
{ 
	path: "/manage-hotel/:hotelId/rooms/add",
	element: <AddRoomPage />,
}

	

]

export default hotelManagementRoutes
