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
import saveRoom from '../services/saveRoom'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddRoom = ({ 
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
		  title="Add Room" 
		  onSubmit={handleSubmit(send)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="number"
		        name="number"
		        control={control}
				rules={{ required: "Harap masukkan number" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="number"
		            placeholder="Masukkan number"
					type="number"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="type"
		        name="type"
		        control={control}
				rules={{ required: "Harap masukkan type" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="type"
		            placeholder="Masukkan type"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="price"
		        name="price"
		        control={control}
				rules={{ required: "Harap masukkan price" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="price"
		            placeholder="Masukkan price"
					type="number"
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

export default FormAddRoom
