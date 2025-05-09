import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import profileRoutes from "@/profile/routes";
import hotelManagementRoutes from "@/hotelManagement/routes";
import searchRoutes from "@/search/routes";
import hotelRoutes from "@/hotel/routes";
import bookingRoutes from "@/booking/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...profileRoutes, 
	...hotelManagementRoutes, 
	...searchRoutes, 
	...hotelRoutes, 
	...bookingRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
