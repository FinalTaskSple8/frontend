/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import SearchPage from './containers/SearchPage'
import SearchresultPage from './containers/SearchresultPage'

const searchRoutes = [
{ 
	path: "/search",
	element: <SearchPage />,
}

	
,
{ 
	path: "/search/result?name?location?date?guest",
	element: <SearchresultPage />,
}

	

]

export default searchRoutes
