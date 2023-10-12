import React from "react";
import { useSelector } from "react-redux";

const View = () => {
  const productDetails = useSelector((store) => store.product.product);
  
  if (!productDetails) return null;
  const video = productDetails.video.slice(productDetails.video.indexOf('=')+1);
 

  return (
    
    <div className="flex mt-20 -ml-[350px] sm:ml-0 sm:mt-0 h-screen    w-[95%] sm:w-[800px] 2xl:w-[1200px] flex-col">

      <div className="sm:m-10 sm:h-[400px] sm:grid sm:grid-flow-col sm:grid-cols-12">
        <div className="col-span-8 grid grid-flow-row grid-rows-6 sm:border sm:border-gray-150">
          <div className="row-span-2 sm:border sm:border-gray-150">
            <img
              className="ml-16 mt-0 sm:mt-0 sm:ml-28 h-[200px] sm:h-[200px]"
              src={productDetails.picture}
              alt="product img"
            />
          </div>

          <div className="-mt-20 sm:mt-0 row-span-4 text-left sm:border sm:border-gray-150">
            <h1 className="font-bold p-6 text-4xl">{productDetails.name}</h1>
            <div className="ml-4 mr-4 mb-4 text-gray-700">
              <span className="p-6">{productDetails.description}</span>
            </div>
          </div>
        </div>

        <div className="col-span-4 sm:border sm:border-gray-150">
          <h1 className="ml-2 p-2 text-xl font-bold">Offered By</h1>
          <img
            className="sm:ml-4 sm:p-2 p-2 h-16 sm:h-12 2xl:h-16"
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

          <div className="mt-10 ml-20 2xl:ml-20 sm:ml-4">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.778501869687!2d6.098085976876113!3d50.77967946360373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c09963c8e4ae6b%3A0xbb82ea0594132a59!2sInnoloft%20GmbH!5e0!3m2!1sen!2sin!4v1696945780427!5m2!1sen!2sin"
              width="200"
              height="250"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="sm:m-10 sm:mt-[450px] 2xl:m-10 2xl:mt-52 sm:border sm:border-gray-150 h-[400px]">
        <h2 className="font-bold text-xl p-6">Video</h2>

        <div className="2xl:ml-56 sm:ml-3">
        <iframe className="w-[350px] sm:w-[700px]" width="700" height="320" src={"https://www.youtube.com/embed/"+video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

      <div className="m-10 flex-col 2xl:h-[400px] sm:border sm:border-gray-150">
        <div className="font-bold text-xl p-4">Offer Details</div>
        <div className="2xl:grid 2xl:grid-flow-col 2xl:grid-cols-12">
          <div className="ml-0 sm:ml-10 2xl:col-span-6 2xl:p-4 2xl:flex-col">
            <span className="block text-xl font-bold py-6">Technology</span>
            {productDetails.categories.map((category) => (<span className="block my-2 sm:my-0 sm:inline-block text-sm border border-gray-150 mx-2 p-2 rounded-xl bg-gray-200">{category.name}</span>))}
          </div>
          <div className="sm:ml-6 col-span-6 p-4 flex-col 2xl:ml-12">
            <span className="block text-xl font-bold py-6">Business Model</span>
            {productDetails.businessModels.map((businessModel) => <span className="block my-2 sm:my-0 sm:inline text-sm border w-36 border-gray-150 mx-2 p-2 rounded-xl bg-gray-200">{businessModel.name}</span>)}
          </div>
        </div>

        <div className="sm:ml-6 2xl:grid 2xl:grid-flow-col 2xl:grid-cols-12">
          <div className="2xl:col-span-7 p-4">
            <span className="block text-xl font-bold py-6">TRL</span>
            <span className="block my-2 sm:my-0 sm:inline text-sm border border-gray-150 mx-2 p-2 rounded-xl bg-gray-200">{productDetails.trl.id} - {productDetails.trl.name}</span>
          </div>
          <div className="ml-4 sm:ml-4 2xl:col-span-5 2xl:p-4 2xl:-ml-10">
            <span className="block text-xl font-bold py-6">Costs</span>
            <span className="block my-2 sm:my-0 sm:inline text-sm border border-gray-150 mx-2 p-2 rounded-xl bg-gray-200">{productDetails.investmentEffort}</span>
          </div>
        </div>
      </div>
      
      </div>

      
  );
};

export default View;
