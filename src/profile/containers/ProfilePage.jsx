/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useContext } from "react";
import { Button } from "@/commons/components";
import * as Layouts from "@/commons/layouts";
import { Link } from "react-router";
import { HeaderContext } from "@/commons/components";
import { useAuth } from "@/commons/auth";

const ProfilePage = () => {
  const { currentUser } = useAuth(); // Ambil data pengguna dari context
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Profile Page");
  }, []);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <Layouts.ViewContainerButtonLayout>
          <Link to={`/profile/edit`}>
            <Button className="p-2 w-full" variant="primary">
              Edit Profile
            </Button>
          </Link>
        </Layouts.ViewContainerButtonLayout>
      }
    >
      <Layouts.DetailContainerLayout
        title={"Details user"}
        singularName={"user"}
        items={currentUser} // Tampilkan data pengguna
        isLoading={!currentUser}
        isCorrelatedWithAnotherComponent={false}
      >
        <div>
          <p><strong>Nama:</strong> {currentUser?.name}</p>
          <p><strong>Email:</strong> {currentUser?.email}</p>
          <p><strong>Nomor Telepon:</strong> {currentUser?.phoneNum}</p>
        </div>
      </Layouts.DetailContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};

export default ProfilePage;

