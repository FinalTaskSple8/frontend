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

import getRoomData from '../services/getRoomData'
const ManageRoomPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	room: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [roomData, setRoomData] = useState()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, room: true}))
				const { data: roomData } = await getRoomData()
				setRoomData(roomData.data)
			} finally {
				setIsLoading(prev => ({...prev, room: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Manage Room Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Room"}
	singularName={""}
	items={[roomData]}
	isLoading={isLoading.room}
>
	<invalidTable
		roomData={roomData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ManageRoomPage

