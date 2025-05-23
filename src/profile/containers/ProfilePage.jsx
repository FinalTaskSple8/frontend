import React, { useEffect, useContext } from "react";
import { Button } from "@/commons/components";
import * as Layouts from "@/commons/layouts";
import { Link } from "react-router";
import { HeaderContext } from "@/commons/components";
import { useAuth } from "@/commons/auth";
import tokenManager from '@/commons/utils/token'
import getUserData from "@/profile/services/getUserData"; 
import Detailsuser from "../components/Detailsuser";
const ProfilePage = () => {
  const { getToken } = tokenManager();
  const token = getToken();
  console.log(token);
  const { setTitle } = useContext(HeaderContext);

  const { currentUser, setCurrentUser } = useAuth(); // tambahkan setCurrentUser

  useEffect(() => {
    setTitle("Profile Page");

    const createAndFetchProfile = async () => {
      try {
        // Auto-create profile
        const response = await fetch("http://localhost:7776/call/profile", {
          method: "POST",
          headers: {
            'Authorization': token,
          },
          body: JSON.stringify({ phone_number: "" }),
        });

        if (!response.ok) {
          console.error("Failed to create profile:", response.statusText);
          return;
        }

        console.log("Profile created successfully");

        // Ambil data user setelah profil dibuat
        const userData = await getUserData();
        if (userData) {
          setCurrentUser(userData);
          console.log("User profile fetched:", userData);
        }
      } catch (error) {
        console.error("Error during profile creation/fetching:", error);
      }
    };

    if (!currentUser) {
      createAndFetchProfile();
    }
  }, [currentUser, setTitle, token]);

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
  items={currentUser}
  isLoading={!currentUser}
  isCorrelatedWithAnotherComponent={false}
>
  <Detailsuser data={currentUser} />
</Layouts.DetailContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};

export default ProfilePage;