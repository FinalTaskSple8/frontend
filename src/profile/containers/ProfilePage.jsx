import React, { useEffect, useContext } from "react";
import { Button } from "@/commons/components";
import * as Layouts from "@/commons/layouts";
import { Link } from "react-router";
import { HeaderContext } from "@/commons/components";
import { useAuth } from "@/commons/auth";
import getUserData from "@/profile/services/getUserData"; 
import Detailsuser from "../components/Detailsuser";

const ProfilePage = () => {
  const { setTitle } = useContext(HeaderContext);
  const { currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    setTitle("Profile Page");

    const fetchProfile = async () => {
      try {
        const userData = await getUserData();
        if (userData) {
          setCurrentUser(userData);
          console.log("User profile fetched:", userData);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    if (!currentUser) {
      fetchProfile();
    }
  }, [currentUser, setTitle, setCurrentUser]);

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
