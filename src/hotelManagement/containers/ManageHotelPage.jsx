/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import HotelCard from "../components/HotelCard";

import getDataHotel from '../services/getDataHotel'
const ManageHotelPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listHotel: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataHotel, setDataHotel] = useState()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listHotel: true}))
				const { data: dataHotel } = await getDataHotel()
				setDataHotel(dataHotel.data)
			} finally {
				setIsLoading(prev => ({...prev, listHotel: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Manage Hotel Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/manage-hotel/add
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Add Hotel
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Hotel"}
	singularName={"Hotel"}
	items={[dataHotel]}
	isLoading={isLoading.listHotel}
>
	<HotelCard
		dataHotel={dataHotel}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ManageHotelPage

