/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const invalidTable = ({ dataHotel,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[dataHotel]}
  	  itemsAttrs={[
          {
            id: "name",
            condition: "",
            label: "name",
  		  featureName: "name",
            editable: false
          }
  ,
          {
            id: "location",
            condition: "",
            label: "location",
  		  featureName: "location",
            editable: false
          }
  ]}
        itemsEvents={(Item) => [
          
          
          
        ]}
  	/>
  </>
  )
};

export default invalidTable;
