/*
  Generated on 09/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/

import React from 'react';
import { useAuth } from '@/commons/auth';
import * as Layouts from "@/commons/layouts";

const Detailsuser = ({ data }) => {
  const { checkPermission } = useAuth();
  console.log("Data in Detailsuser:", data);
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "name",
          label: "Nama",
          featureName: "name",
        },
        {
          id: "email",
          label: "Email",
          featureName: "email",
        },
        {
          id: "phoneNum",
          label: "Nomor Telepon",
          featureName: "phoneNum",
        },  
      ]}
      itemsEvents={[]}
      itemsModals={[]}
    />
  );
};

export default Detailsuser;
