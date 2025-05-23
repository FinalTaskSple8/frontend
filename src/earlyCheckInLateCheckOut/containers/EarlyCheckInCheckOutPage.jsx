/*
	Generated on 22/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormEarlyCheckInLateCheckOut from '../components/ModifiedFormEarlyCheckInLateCheckOut'
const EarlyCheckInCheckOutPage = props => {
const [isLoading, setIsLoading] = useState({
	earlyCheckInLateCheckOut: false,

	});
	const { setTitle } = useContext(HeaderContext);

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, earlyCheckInLateCheckOut: true}))


	    setIsLoading(prev => ({...prev, earlyCheckInLateCheckOut: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Early CheckIn CheckOut Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"CheckIn"}
		isLoading={isLoading.earlyCheckInLateCheckOut}
	>
		<ModifiedFormEarlyCheckInLateCheckOut
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EarlyCheckInCheckOutPage

