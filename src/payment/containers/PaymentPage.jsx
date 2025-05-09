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
import { useSearchParams } from "react-router";
import FormSelectPaymentMethod from '../components/FormSelectPaymentMethod'
const PaymentPage = props => {
const [isLoading, setIsLoading] = useState({
	selectPaymentMethod: false,
	payment: false,

	});
	const { setTitle } = useContext(HeaderContext);



	
	useEffect(() => {
		setTitle("Payment Page")
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
		singularName={"Payment"}
		
	>
		<FormSelectPaymentMethod
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default PaymentPage

