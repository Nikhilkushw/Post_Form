import React from "react";
import CarBrandForm from "./carsData";
import InputData from "./inputFormate";
import BoxSelector from "./boxSelect";
import AdTitleInput from "./adTitleInput";
import DescriptionText from "./descriptionText";
import PriceInput from "./priceInput";
import PhotoGrid from "./imageUpload";
import ConfirmLocationForm from "./ProfileData";
import LocationSelector from "./location";

const FormData = () => {
  const carModels = [
    "BMW M3", "Audi A4", "Mercedes-Benz S-Class", "Toyota Corolla", "Honda Civic",
    "Ford Mustang", "Hyundai Sonata", "Kia Sorento", "Chevrolet Camaro", "Volkswagen Golf",
    "Nissan Altima", "Tata Nexon", "Mahindra Thar", "Renault Duster", "Skoda Octavia",
    "Volvo XC90", "Lexus RX", "Jaguar F-Type", "Jeep Wrangler", "MG Hector",
    "Porsche 911", "Ferrari F8 Tributo", "Lamborghini Huracán", "Aston Martin DB11",
    "Rolls-Royce Phantom", "Bentley Continental GT", "Mini Cooper", "Suzuki Swift",
    "Mazda CX-5", "Subaru Outback"
  ];

  const carBrands = [
    "BMW", "Audi", "Mercedes-Benz", "Toyota", "Honda", "Ford", "Hyundai", "Kia",
    "Chevrolet", "Volkswagen", "Nissan", "Tata", "Mahindra", "Renault", "Skoda",
    "Volvo", "Lexus", "Jaguar", "Jeep", "MG", "Porsche", "Ferrari", "Lamborghini",
    "Aston Martin", "Rolls-Royce", "Bentley", "Mini", "Suzuki", "Mazda", "Subaru"
  ];

  const carVariants = [
    "BMW M3 Competition", "Audi A4 Avant", "Mercedes-Benz S-Class Coupe", "Toyota Corolla Altis",
    "Honda Civic Type R", "Ford Mustang GT", "Hyundai Elantra N", "Kia Sportage SX",
    "Chevrolet Corvette Stingray", "Volkswagen Passat R-Line", "Nissan Skyline GT-R",
    "Tata Harrier XZ+", "Mahindra XUV700 AX7", "Renault Kwid Climber", "Skoda Superb L&K",
    "Volvo XC60 Inscription", "Lexus LX 570", "Jaguar XE R-Dynamic", "Jeep Grand Cherokee Summit",
    "MG ZS EV Exclusive", "Porsche Cayenne Turbo", "Ferrari 812 Superfast", "Lamborghini Aventador S",
    "Aston Martin Vantage Roadster", "Rolls-Royce Wraith", "Bentley Flying Spur V8",
    "Mini John Cooper Works", "Suzuki Vitara Brezza ZDI+", "Mazda MX-5 Miata", "Subaru Impreza WRX STI",
    "Ford F-150 Raptor", "Hyundai Kona Electric"
  ];

  const fuelOptions = ["CNG & Hybrids", "Diesel", "Electric", "LPG", "Petrol"];
  const transmissionOption = ["Automatic", "Manual"];
  const OwnersData = ["1st", "2nd", "3rd", "4th", "4+"];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="flex flex-col mt-12 justify-center items-center gap-2">
      <h1 className="text-[24px] font-bold text-center uppercase w-full">POST YOUR AD</h1>
      <div className="border-[1.3px] w-[65%] border-gray-300 rounded">
        <div className="border-b border-[1.3px] border-gray-300">
          <div className="mx-6 flex flex-col gap-5 pt-5 pb-5">
            <h2 className="text-[20px] font-bold uppercase">SELECTED CATEGORY</h2>
            <div className="flex gap-2 items-baseline">
              <p className="text-xs font-semibold text-gray-500">Cars / Cars</p>
              <a className="text-blue-900 font-semibold text-sm" href="/">Change</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="m-6">
            <h2 className="text-[20px] font-bold uppercase mb-4">INCLUDE SOME DETAILS</h2>
            <p>Brand *</p>
            <CarBrandForm car={carBrands} />
          </div>

          <div className="m-6">
            <p>Model *</p>
            <CarBrandForm car={carModels} />
          </div>

          <div className="m-6">
            <p>Variants *</p>
            <CarBrandForm car={carVariants} />
          </div>

          <div className="mx-6">
            <InputData Heading="Year" text="Year is mandatory. Please complete the required field." />
          </div>

          <div>
            <BoxSelector boxSelectData={fuelOptions} Heading="Fuel" />
          </div>

          <div>
            <BoxSelector boxSelectData={transmissionOption} Heading="Transmission" />
          </div>

          <div className="mx-6">
            <InputData Heading="KM driven" text="KM driven is mandatory. Please complete the required field." />
          </div>

          <div className="mx-2">
            <BoxSelector boxSelectData={OwnersData} Heading="No. of Owners" />
          </div>

          <div className="mx-6 mb-4">
            <AdTitleInput Heading="Ad title" warnText="Mention the key features of your item (e.g. brand, model, age, type)" minLen={70} padding="px-4 py-3" />
          </div>

          <div className="mx-6">
            <DescriptionText Heading="Description" warnText="Include condition, features and reason for selling" minLen={4096} padding="" />
          </div>
        </div>

        <div className="border-b border-t mt-6 border-gray-300">
          <div className="mx-6 flex flex-col gap-5 pt-5 pb-5">
            <h2 className="text-[20px] font-bold uppercase">SET A PRICE</h2>
            <PriceInput />
          </div>
        </div>

        <div>
          <h2 className="text-[20px] mx-6 font-bold uppercase">UPLOAD UP TO 20 PHOTOS</h2>
          <PhotoGrid />
        </div>

        <div className="mx-6">
          <LocationSelector />
        </div>

        <div>
          <ConfirmLocationForm />
        </div>

        <div className="mx-6 my-6">
          <button
            type="submit"
            className="w-[100px] bg-blue-100 text-blue-700 font-semibold py-3 rounded-md hover:bg-blue-200 transition duration-200"
          >
            POST
          </button>
        </div>
      </div>
    </form>
    </>
  );
};

export default FormData;
