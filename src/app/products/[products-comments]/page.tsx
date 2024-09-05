import FormComponent from "@/components/Products/Comments/FormComponent";
import React from "react";
import PinComments from "../../../components/Products/Comments/PinComments";

const ProductsCommentsPage = () => {
  return (
    <div className=" grid grid-cols-3 gap-4">
      <div className="grid col-span-3">
      <FormComponent />

      </div>
      {/* <div className="grid col-span-1">
        <PinComments/>
      </div> */}
    </div>
  );
};

export default ProductsCommentsPage;
