import React from "react";
import ContentArea from "../../layout/ContentArea";
import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar";
import styled from "styled-components";

const DashboardPage = () => {
  return (
    <div class="min-h-full">
      <Header />
      <main className="flex">
        <Sidebar />
        <ContentArea
          className="grow w-14"
         
        />
      </main>
    </div>
  );
};

// const Wrapper = styled.div`
//   main {
//     display: flex;
//   }
// `;

export default DashboardPage;
