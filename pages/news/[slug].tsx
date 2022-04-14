import { MainLayout } from "../../layouts/MainLayout";
import React from "react";
import { PostComments } from "../../components/PostComments";

export default function Post() {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <PostComments />
    </MainLayout>
  );
}
