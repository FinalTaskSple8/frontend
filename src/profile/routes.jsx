/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import EditProfilePage from './containers/EditProfilePage'
import ProfilePage from './containers/ProfilePage'

const profileRoutes = [
{ 
	path: "/profile/edit",
	element: <EditProfilePage />,
}

	
,
{ 
	path: "/profile",
	element: <ProfilePage />,
}

	

]

export default profileRoutes
