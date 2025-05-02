/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import * as Layouts from "@/commons/layouts";


const Detailsuser = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const editProfile = async () => {
      navigate(
        '/profile/edit?'
      );
    };
    
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "name",
          condition: "",
          label: "name",
          featureName: "name",
        }
        ,
        {
          id: "email",
          condition: "",
          label: "email",
          featureName: "email",
        }
        ,
        {
          id: "phoneNum",
          condition: "",
          label: "phoneNum",
          featureName: "phoneNum",
        }
        
      ]}
      itemsEvents={[
            <Button
              variant="secondary"
              onClick={() => editProfile()}
            >
              Edit Profile
            </Button>
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default Detailsuser;
