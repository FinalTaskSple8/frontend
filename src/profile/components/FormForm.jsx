/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
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
import saveChanges from '../services/saveChanges'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";
import { useAuth } from "@/commons/auth";

const FormForm = () => {
  const { currentUser, setCurrentUser } = useAuth(); // Pastikan setCurrentUser tersedia
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const send = async (data) => {
  try {
    const updatedData = {
      ...currentUser,
      name: data.name, // Pastikan sesuai dengan backend
      phone_number: data.phoneNum, // Sesuaikan key dengan backend
    };

    const response = await saveChanges(currentUser.userId, updatedData);

    if (response) {
      setCurrentUser(response); // Perbarui data pengguna di context
      notifySuccess("Data berhasil diperbarui!");
      navigate("/profile");
    } else {
      notifyError("Gagal memperbarui data pengguna.");
    }
  } catch (error) {
    console.error("Error saving changes:", error);
    notifyError("Gagal memperbarui data pengguna.");
  }
};
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Profile" 
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
			    key="phoneNum"
		        name="phoneNum"
		        control={control}
				rules={{ required: "Harap masukkan phone number" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="phone number"
		            placeholder="Masukkan phone number"
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

export default FormForm
