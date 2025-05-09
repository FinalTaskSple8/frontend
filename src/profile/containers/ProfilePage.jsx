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

import Detailsuser from '../components/Detailsuser'
import getUserData from '../services/getUserData'
const ProfilePage = props => {
const [isLoading, setIsLoading] = useState({
	detailsuser: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [userData, setUserData] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailsuser: true}))
			const { data: userData } = await getUserData({  })
			setUserData(userData.data)
		} finally {
			setIsLoading(prev => ({...prev, detailsuser: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Profile Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/profile/edit
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Edit Profile
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Details user"}
	singularName={"user"}
	items={{...userData}}
	isLoading={isLoading.detailsuser}
	isCorrelatedWithAnotherComponent={false}
>
	<Detailsuser {...{ data : { ...userData }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ProfilePage

