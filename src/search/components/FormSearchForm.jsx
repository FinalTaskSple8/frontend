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
import searchHotel from '../services/searchHotel'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormSearchForm = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const cari = (data) => {
    const cleanData = cleanFormData(data)
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Search Form" 
		  onSubmit={handleSubmit(cari)}
	
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
			  
			  <Controller
			    key="date"
		        name="date"
		        control={control}
				rules={{ required: "Harap masukkan date" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="date"
		            placeholder="Masukkan date"
					type="date"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="guest"
		        name="guest"
		        control={control}
				rules={{ required: "Harap masukkan jumlah tamu" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="jumlah tamu"
		            placeholder="Masukkan jumlah tamu"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Cari" type="submit" variant="primary">Cari</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormSearchForm
