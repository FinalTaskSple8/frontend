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

import getSearchHotelData from '../services/getSearchHotelData'
const SearchresultPage = props => {
const { date, name, location, guest } = useParams()
	const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	hotel: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchHotelData, setSearchHotelData] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, hotel: true}))
				const { data: searchHotelData } = await getSearchHotelData({ guest, name, location, date })
				setSearchHotelData(searchHotelData.data)
			} finally {
				setIsLoading(prev => ({...prev, hotel: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Search result Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Hotel"}
	singularName={""}
	items={[searchHotelData]}
	isLoading={isLoading.hotel}
>
	<invalidTable
		searchHotelData={searchHotelData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default SearchresultPage

