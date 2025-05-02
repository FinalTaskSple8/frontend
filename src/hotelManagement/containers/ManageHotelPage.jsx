/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
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
import Table from "../components/invalidTable";

import getDataHotel from '../services/getDataHotel'
const ManageHotelPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	hotel: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataHotel, setDataHotel] = useState()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, hotel: true}))
				const { data: dataHotel } = await getDataHotel()
				setDataHotel(dataHotel.data)
			} finally {
				setIsLoading(prev => ({...prev, hotel: false}))
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
<Layouts.ListContainerTableLayout
	title={"Hotel"}
	singularName={""}
	items={[dataHotel]}
	isLoading={isLoading.hotel}
>
	<invalidTable
		dataHotel={dataHotel}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ManageHotelPage

