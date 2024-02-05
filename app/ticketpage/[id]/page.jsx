import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>
        <TicketForm></TicketForm>
      </h1>
    </div>
  );
};

export default page;
