import React from "react";
import MainLayout from "@/layout/mainLayout/MainLayout";
import HomeTab from "@/tabs/homeTab/HomeTab";

interface HomePageProps {
  serverPath: string;
}

const HomePage: React.FC<HomePageProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = ({ serverPath }) => {


  return <HomeTab />;
};

export async function getServerSideProps() {
  return {
    props: {
      serverPath: "/",
    },
  };
}

HomePage.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <MainLayout
      canonical={"/"}
      title="Reserve a Trip NOW!"
      description="Reserve a Trip NOW! Czech Republic"
    >
      {page}
    </MainLayout>
  );
};

export default HomePage;
