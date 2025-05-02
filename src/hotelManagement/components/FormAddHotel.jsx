/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  RadioInputField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveHotel from '../services/saveHotel'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddHotel = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const send = (data) => {
    const cleanData = cleanFormData(data)
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Hotel" 
		  onSubmit={handleSubmit(send)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="name"
		        name="name"
		        control={control}
				rules={{ required: "Harap masukkan name" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="name"
		            placeholder="Masukkan name"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="location"
		        name="location"
		        control={control}
				rules={{ required: "Harap masukkan location" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="location"
		            placeholder="Masukkan location"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Send" type="submit" variant="primary">Send</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddHotel
