/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const HotelCard = ({ dataHotel}) => {
  const { checkPermission } = useAuth();
  const { hotelId } = useParams()
  if (!Array.isArray(dataHotel) || dataHotel.length === 0) {
    return <div>Tidak ada data untuk ditampilkan</div>;
  }
  return (
    <Layouts.ListComponentCardLayout
      items={dataHotel}
      itemsAttrs={[
        { id: "name", label: "Name", featureName: "name", editable: false },
        { id: "location", label: "Location", featureName: "location", editable: false },
        { id: "price", label: "Price", featureName: "price", editable: false },
      ]}
      itemsEvents={(hotelItem) => [
        <Link to={`/hotel/${hotelItem.id}/rooms`}>
          <Button
            size="sm"
            variant=
                "primary"
          >
            View Hotel
          </Button>
        </Link>
  	]}
    />
  )	
};

export default HotelCard;
