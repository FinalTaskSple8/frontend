/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
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
import sendRoomUpgrade from '../services/sendRoomUpgrade'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormRoomUpgrade = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const send = (data) => {
    const cleanData = cleanFormData(data)
    sendRoomUpgrade({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/hotel/${number/booking/summary}`)
  	notifySuccess(`Send Room Upgrade berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Room Upgrade" 
		  onSubmit={handleSubmit(send)}
	
	    vas={[
		  ]}
	
		  formFields={[
		  
	
		  
		  <Controller
		    key=""
	        name=""
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Room Type"
	            options={"halo"}
	            optionLabel="invalid"
	            placeholder="Masukkan room type"
					fieldState={fieldState}
	            {...field}
					isRequired={false}
	          />
	
	        )}
	      />
		  ]}
	
		  itemsEvents={[
				<Button key="Send" type="submit" variant="primary">Send</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormRoomUpgrade
