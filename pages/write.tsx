import React from "react";
import { NextPage } from "next";

import { MainLayout } from "../layouts/MainLayout";
import { TextField } from "@material-ui/core";
import { WriteForm } from "../components/WriteForm";

interface WritePageProps {}

const WritePage: NextPage = () => {
  return (
    <div>
      <MainLayout className="main-layout-white" hideComments hideMenu>
        <WriteForm />
      </MainLayout>
    </div>
  );
};

export default WritePage;
