import React from "react";
import { useSelector } from "react-redux";
import { PRODUCT } from "../utils/constants";
import { useFormik } from "formik";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";
import { MODULES, FORMATS } from "../utils/constants";

const Edit = () => {
  const productDetails = useSelector((store) => store.product.product);

  const trlList = useSelector((store) => store.trl.trlList);

  // if (!productDetails) return null;
 

  const formik = useFormik({
    initialValues: {
      name: productDetails.name ?? "",
      description: productDetails.description ?? "",
      video: "",
      categories: "",
      businessModel: "",
      trl: productDetails.trl ?? {},
      investmentEffort: productDetails.investmentEffort ?? "",
    },
    onSubmit: (values) => {
      const categoryInArray = values.categories
        .split(",")
        .map((category, index) => {
          return { id: index + 1, name: category };
        });
      const businessModelInArray = values.businessModel
        .split(",")
        .map((businessModel, index) => {
          return { id: index + 1, name: businessModel };
        });
      const payloads = {
        ...values,
        categories: categoryInArray,
        businessModel: businessModelInArray,
        ...pendingValues,
      };
      const pendingValues = Object.keys(productDetails).filter(
        (key) => !payloads[key]
      );

      const payload = {
        ...values,
        categories: categoryInArray,
        businessModel: businessModelInArray,
        ...pendingValues,
      };
      // Get all the pending values from thr productDetails
      // and add them to the payload
      console.log(payload);
      // submitForm(payload);
    },
  });

  const { values, handleChange, handleSubmit } = formik;
  console.log(values);

  const handleDescriptionChange = (content) => {
    formik.setFieldValue("description", content);
  };

  const submitForm = async (e) => {
    const data = await axios.put("https://api-test.innoloft.com" + PRODUCT, e);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex mt-20 -ml-[300px] w-[75%] sm:ml-0 sm:mt-0 h-screen sm:w-[900px] 2xl:w-[1200px] flex-col">
        <h1 className="font-bold text-lg p-4 ml-10">Offer title</h1>

        <div className="sm:m-10 sm:h-[400px] sm:grid sm:grid-flow-col sm:grid-cols-12">
          <div className="col-span-8 grid grid-flow-row grid-rows-6 border border-gray-150">
            <div className="row-span-2 border border-gray-150">
              <img
                className="ml-24 mt-0 sm:mt-0 sm:ml-28 h-[200px] sm:h-[200px]"
                src={productDetails.picture}
                alt="product img"
              />
            </div>

            <div className="-mt-2 sm:mt-0 row-span-4 sm:ml-0 ml-5 text-left sm:border sm:border-gray-150">
              <input
                name="name"
                onChange={handleChange}
                className="ml-10 sm:ml-4 m-4 p-2 font-bold sm:w-[95%] w-[75%] text-lg border border-gray-200"
                type="text"
                value={values.name}
              />

              <ReactQuill
                name="description"
                theme="snow"
                modules={MODULES}
                value={values.description}
                formats={FORMATS}
                placeholder="write your content ...."
                onChange={handleDescriptionChange}
                style={{ height: "220px" }}
              ></ReactQuill>
              <div className="flex justify-end sm:mt-20 2xl:mt-10">
                <button className="mt-20 m-5 p-5 sm:p-3 sm:m-2 bg-red-300 hover:bg-red-200 rounded-lg">
                  Cancel
                </button>
                <button
                  className="mt-20 m-5 p-5 sm:p-3 sm:m-2 bg-green-300 hover:bg-green-200 rounded-lg"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-4 border border-gray-150">
            <h1 className="ml-4 p-2 text-xl font-bold">Offered By</h1>
            <img
              className="ml-4 sm:ml-4 sm:p-2 p-2 h-16 sm:h-12 2xl:h-16"
              src="https://img.innoloft.com/logo.svg"
              alt=""
            />

            <div className="flex p-2 mt-4">
              <div>
                <img
                  className="2xl:ml-6 2xl:h-16 sm:h-14 h-16 rounded-full"
                  src={productDetails.user.profilePicture}
                  alt=""
                />
              </div>
              <div>
                <span className="2xl:ml-6 font-bold sm:ml-2">
                  {productDetails.user.firstName} {productDetails.user.lastName}
                </span>
                <span className="block ml-6 text-gray-700">
                  {productDetails.company.name}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <span className="ml-6 text-gray-700">
                {productDetails.company.address.street}{" "}
                {productDetails.company.address.house},
              </span>
              <span className="ml-6 block text-gray-700">
                {productDetails.company.address.zipCode}{" "}
                {productDetails.company.address.city.name},{" "}
                {productDetails.company.address.country.name}
              </span>
            </div>
          </div>
        </div>

        <div className="sm:m-10 sm:mt-[250px] 2xl:m-10 2xl:mt-52 border border-gray-150 h-[400px]">
          <h2 className="font-bold text-xl p-6">Video</h2>

          <div className="mb-4">
            <input
              name="video"
              onChange={handleChange}
              className="p-3 rounded-lg w-[85%] ml-6 sm:ml-0 sm:w-full border border-gray-200"
              type="text"
              placeholder="Add a youtube or vimeo link"
            />
          </div>
        </div>

        <div className="m-10 flex-col sm:mt-[4px] sm:h-[700px] 2xl:h-[800px] border border-gray-150">
          <div className="font-bold text-xl p-4">Offer Details</div>

          <div className="p-4">
            <span className="block text-xl font-bold py-6">Technology</span>
            <input
              name="categories"
              onChange={handleChange}
              className="border border-gray-200 sm:w-full w-[95%] text-[13px] sm:text-md p-2"
              type="text"
              placeholder="enter technology names comma separated"
            />
          </div>

          <div className="p-4">
            <span className="block text-xl font-bold py-6">Business Model</span>
            <input
              name="businessModel"
              onChange={handleChange}
              className="border sm:w-full w-[95%] text-[13px] sm:text-md border-gray-200 p-2"
              type="text"
              placeholder="enter business model comma separated"
            />
          </div>

          <div className=" p-4">
            <span className="block text-xl font-bold py-6 ">TRL</span>
            <select
              className=""
              name="trl"
              onChange={(event) => {
                // console.log(event.target.value)
                formik.setFieldValue(
                  "trl",
                  trlList.find((trl) => trl.id === event.target.value)
                );
              }}
              id="trl"
            >
              {trlList.map((trl) => (
                <option className="" value={trl.id}>
                  {trl.id} - {trl.name}
                </option>
              ))}
            </select>
          </div>

          <div className="p-4 mb-28">
            <span className="block text-xl font-bold py-6">Costs</span>
            <input
              name="investmentEffort"
              onChange={handleChange}
              className="sm:w-full w-[95%] text-[13px] sm:text-md border border-gray-200 p-2"
              type="text"
              placeholder="enter Investment Effort"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Edit;
