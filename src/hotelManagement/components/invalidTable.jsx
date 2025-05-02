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

const invalidTable = ({ roomData,
	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[roomData]}
  	  itemsAttrs={[
          {
            id: "number",
            condition: "",
            label: "number",
  		  featureName: "number",
            editable: false
          }
  ,
          {
            id: "type",
            condition: "",
            label: "type",
  		  featureName: "type",
            editable: false
          }
  ,
          {
            id: "price",
            condition: "",
            label: "price",
  		  featureName: "price",
            editable: false
          }
  ,
          {
            id: "isAvailable",
            condition: "",
            label: "isAvailable",
  		  featureName: "isAvailable",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default invalidTable;
