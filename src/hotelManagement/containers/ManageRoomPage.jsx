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
import RoomCard from "../components/RoomCard";

import getRoomData from '../services/getRoomData'
const ManageRoomPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listRoom: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [roomData, setRoomData] = useState()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRoom: true}))
				const { data: roomData } = await getRoomData()
				setRoomData(roomData.data)
			} finally {
				setIsLoading(prev => ({...prev, listRoom: false}))
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
<Layouts.ListContainerCardLayout
	title={"List Room"}
	singularName={"Room"}
	items={[roomData]}
	isLoading={isLoading.listRoom}
>
	<RoomCard
		roomData={roomData}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ManageRoomPage

