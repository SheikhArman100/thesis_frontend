/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function UsedCarInput() {
  const navigate = useNavigate();
  // brand
  const [brandName, setbrandName] = useState("");

  const brand_list = [
    "Brand",
    "Toyota",
    "Nissan",
    "Honda",
    "Mitsubishi",
    "Hyundai",
    "BMW",
    "Suzuki",
    "Mazda",
    "Mercedes-Benz",
    "Kia",
    "Maruti Suzuki",
    "Tata",
    "Ford",
    "Range Rover",
    "Lexus",
    "Proton",
    "Audi",
    "Haval",
    "Mahindra",
    "Volkswagen",
    "Jaguar",
    "Jeep",
  ];

  // model
  const [modelName, setmodelName] = useState("");

  const model_list = {
    Brand: [],
    Toyota: [
      "Premio",
      "Sprinter",
      "Fielder",
      "Corolla",
      "RAV4",
      "Allion",
      "Axio",
      "Vista",
      "Prius",
      "Noah",
      "Hilux",
      "Hiace",
      "Harrier",
      "Vios",
      "C-HR",
      "Passo",
      "Prado",
      "Land Cruiser",
      "Aqua",
      "Esquire",
      "Exiv",
      "Corolla Cross",
      "Other Model",
      "Sienta",
      "Starlet",
      "Corona",
      "Platz",
      "ist",
      "Vitz",
      "Ractis",
      "Probox",
      "86",
      "Succeed",
      "Mark II",
      "Alphard",
      "Kluger",
      "Auris",
      "T100",
      "Voxy",
      "Avanza",
      "Rush",
      "Raum",
      "Yaris Cross",
      "Aygo",
      "LiteAce",
      "TownAce",
      "Starlet Soleil",
      "MR2",
      "Carina",
      "Mark X",
      "Corsa",
      "Paseo",
      "Crown",
      "Highlander",
      "Estima",
      "X Assista",
      "Belta",
      "Celica",
      "2000GT",
      "RunX",
      "Verossa",
      "Spacio",
      "Camry",
      "Wish",
      "HiClass",
      "Allex",
      "Yaris",
      "ToyoAce",
      "Tercel",
      "Cami",
      "Cross",
      "Progrès",
      "Dyna",
      "Isis",
      "Sienna",
      "Chaser",
      "Echo",
      "Soarer",
    ],
    Nissan: [
      "X-Trail",
      "Bluebird",
      "Sunny",
      "Vanette",
      "Sylphy",
      "Juke",
      "Navara",
      "Diesel",
      "Teana",
      "Patrol",
      "100NX",
      "Carryboy",
      "Other Model",
      "Cefiro",
      "Murano",
      "Wingroad",
      "Urvan",
      "March",
      "Caravan",
      "Hardbody Truck",
      "Cube",
      "Tiida",
      "Rogue",
      "Elgrand",
    ],
    Honda: [
      "Vezel",
      "Grace",
      "CR-V",
      "Civic",
      "Freed",
      "Accord",
      "Insight",
      "Fit",
      "CR-Z",
      "CR-X",
      "City",
      "Jazz",
      "Airwave",
      "HR-V",
    ],
    Mitsubishi: [
      "Outlander",
      "Pajero",
      "Challenger",
      "Attrage",
      "l200",
      "Lancer",
      "X-Pander",
      "Outlandar",
      "Galant",
      "V6",
      "l300",
      "GLX",
      "Mirage",
      "Other Model",
      "Eclipse Cross",
      "ASX",
    ],
    Hyundai: [
      "H1",
      "Tucson",
      "Accent",
      "Santa Fe",
      "Xcent",
      "Other Model",
      "Sonata",
      "Elantra",
      "Ancient",
      "Terracan",
      "Santafi",
      "i10",
    ],
    BMW: [
      "3 Series",
      "7 Series",
      "X5",
      "5 Series",
      "X7",
      "M3",
      "730li",
      "X1",
      "525i",
      "640i",
      "1 Series",
      "520d",
      "X3",
    ],
    Suzuki: [
      "Hustler",
      "Wagon R",
      "Vitara",
      "Alto",
      "SX4 S-Cross",
      "Ciaz",
      "Swift",
      "Solio",
      "Jimny",
      "Liana",
    ],
    Mazda: ["Axela", "CX-7", "CX-3", "Demio", "MX-5", "Other Model", "RX-8"],
    "Mercedes-Benz": [
      "E-Class",
      "E 250",
      "C-Class",
      "E 240",
      "CLA-Class",
      "GLS-Class",
      "Other Model",
      "M-Class",
      "CLK-Class",
      "S-Class",
      "GLB 200",
      "GLE-Class",
      "GL-Class",
      "B160",
      "GLC-Class",
    ],
    Kia: ["Sportage", "Optima", "Sorento"],
    "Maruti Suzuki": [
      "WagonR",
      "Alto 800",
      "Zen",
      "Other Model",
      "Ciaz",
      "800",
      "Zen Estilo",
      "Esteem",
      "Grand Vitara",
    ],
    Tata: ["Tiago", "Indigo Ecs", "Indigo", "Nano"],
    Ford: ["Fiesta", "Ranger", "Eco Sport", "Ecosport", "Mondeo"],
    "Range Rover": ["400"],
    Lexus: ["NX", "RX", "LX", "CT", "Other Model", "HS 250h"],
    Proton: ["Saga", "Preve", "Exora"],
    Audi: ["A8", "A4", "A6", "Q7"],
    Haval: ["H6", "H2", "Jolion"],
    Mahindra: ["Quanto", "TUV300"],
    Volkswagen: ["Passat"],
    Jaguar: ["F-Type"],
  };
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    manufacture_year: "",
    condition: "",
    transmission: "",
    body_type: "",
    fuel_type: "",
    engine_capacity: "",
    mileage: "",
    AC_system: "",
    Accident_history: "",
    Camera_facility: "",
    Light_facility: "",
    owner_info: "",
  });
  const {
    brand,
    model,
    manufacture_year,
    condition,
    transmission,
    body_type,
    fuel_type,
    engine_capacity,
    mileage,
    AC_system,
    Accident_history,
    Camera_facility,
    Light_facility,
    owner_info,
  } = formData;

  const condition_list = [
    {
      label: "Condition",
      value: "",
    },
    {
      label: "Used",
      value: "Used",
    },
    {
      label: "Reconditioned",
      value: "Reconditioned",
    },
  ];
  const transmission_list = [
    {
      label: "Transmission",
      value: "",
    },
    {
      label: "Automatic",
      value: "Automatic",
    },
    {
      label: "Manual",
      value: "Manual",
    },
  ];
  const bodyType_list = [
    {
      label: "Body type",
      value: "",
    },
    {
      label: "Saloon",
      value: "Saloon",
    },
    {
      label: "MPV",
      value: "MPV",
    },
    {
      label: "SUV / 4x4",
      value: "SUV / 4x4",
    },
    {
      label: "Hatchback",
      value: "Hatchback",
    },
    {
      label: "Estate",
      value: "Estate",
    },
    {
      label: "Coupé/Sports",
      value: "Coupé/Sports",
    },
    {
      label: "Convertible",
      value: "Convertible",
    },
  ];
  const ac_system_list = [
    {
      label: "AC System",
      value: "",
    },
    {
      label: "Air Conditioned",
      value: "Air Conditioned",
    },
    {
      label: "Non_Air Conditioned",
      value: "Non_Air Conditioned",
    },
  ];
  const accident_list = [
    {
      label: "Accident History",
      value: "",
    },

    {
      label: "No Accident",
      value: "No Accident",
    },
    {
      label: "Accident",
      value: "Unknown",
    },
  ];
  const camera_list = [
    {
      label: "Camera Facility",
      value: "",
    },
    {
      label: "Rare Camera",
      value: "Rare camera",
    },
    {
      label: "No Info",
      value: "No info",
    },
  ];
  const light_list = [
    {
      label: "Light Facility",
      value: "",
    },
    {
      label: "LED",
      value: "LED",
    },
    {
      label: "No LED",
      value: "No LED",
    },
    {
      label: "LED Backlight",
      value: "LED Backlight",
    },
  ];
  const owner_list = [
    {
      label: "Owner_Info",
      value: "",
    },
    {
      label: "MEMBER",
      value: "MEMBER",
    },
    {
      label: "NOT Member",
      value: "NOT MEMBER",
    },
  ];

  const SubmitInput = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/predict",
        {
          ...formData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log(data);
      navigate("/predictprice", {
        state: {
          price: data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const brandChange = (e) => {
    setbrandName(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const modelChange = (e) => {
    setmodelName(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative mx-4 flex h-screen  flex-col overflow-x-hidden">
      <Header />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: [0.6, 0.01, 0, 0.95],
          duration: 1,
          delay: 1.8,
        }}
        className="mt-6"
      >
        <h1 className="text-center text-2xl font-bold sm:text-4xl ">
          Car's Value
        </h1>
        <div className="mt-4 h-full w-full rounded-lg bg-gray-700 px-4 py-4 lg:mx-8 ">
          <h2 className="text-center text-lg font-semibold">
            Trade-In and Private Party Values
          </h2>
          <form
            className="mt-2 flex flex-col items-center space-y-4"
            onSubmit={SubmitInput}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {/* brand */}
              <select
                name="brand"
                onChange={brandChange}
                className="relative block h-[3rem] w-[8.5rem] overflow-hidden rounded-md border border-gray-200 bg-gray-700  px-3 pt-2 text-sm font-semibold text-gray-400 shadow-sm outline-none focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 sm:h-[4rem] sm:w-[13rem] lg:h-[5rem] lg:w-[15rem] lg:text-lg"
              >
                {brand_list.map((state) => (
                  <option>{state}</option>
                ))}
              </select>
              {/* model */}
              {brandName ? (
                <select
                  name="model"
                  onChange={modelChange}
                  className="relative block h-[3rem] w-[8.5rem] overflow-hidden rounded-md border border-gray-200 bg-gray-700  px-3 pt-2 text-sm font-semibold text-gray-400 shadow-sm outline-none focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 sm:h-[4rem] sm:w-[13rem] lg:h-[5rem] lg:w-[15rem] lg:text-lg"
                >
                  {model_list[brandName].map((state) => (
                    <option>{state}</option>
                  ))}
                </select>
              ) : (
                <select className="relative block h-[3rem] w-[8.5rem] overflow-hidden rounded-md border border-gray-200 bg-gray-700  px-3 pt-2 text-sm font-semibold text-gray-400 shadow-sm outline-none focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 sm:h-[4rem] sm:w-[13rem] lg:h-[5rem] lg:w-[15rem] lg:text-lg">
                  <option>Model</option>
                </select>
              )}

              <SimpleInput
                feature="Year"
                name="manufacture_year"
                value={manufacture_year}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <DropdownInput
                feature_list={condition_list}
                name="condition"
                value={condition}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <DropdownInput
                feature_list={transmission_list}
                name="transmission"
                value={transmission}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <DropdownInput
                feature_list={bodyType_list}
                name="body_type"
                value={body_type}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <SimpleInput
                feature="Fuel type"
                name="fuel_type"
                value={fuel_type}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <SimpleInput
                feature="Engine capacity"
                name="engine_capacity"
                value={engine_capacity}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <SimpleInput
                feature="Mileage"
                name="mileage"
                value={mileage}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <DropdownInput
                feature_list={ac_system_list}
                name="AC_system"
                value={AC_system}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <DropdownInput
                feature_list={accident_list}
                name="Accident_history"
                value={Accident_history}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <DropdownInput
                feature_list={camera_list}
                name="Camera_facility"
                value={Camera_facility}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <DropdownInput
                feature_list={light_list}
                name="Light_facility"
                value={Light_facility}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <DropdownInput
                feature_list={owner_list}
                name="owner_info"
                value={owner_info}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="relative h-[5rem] w-[8.5rem]  rounded-xl bg-yellow-400 text-xl font-bold text-black sm:h-[7rem] sm:w-[13rem] lg:h-[7rem] lg:w-[18rem] "
            >
              GO
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

function SimpleInput({ feature, name, value, onChange }) {
  return (
    <label
      htmlFor={feature}
      className="relative block h-[3rem]  w-[8.5rem] overflow-hidden rounded-md border border-gray-200 bg-gray-700 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 sm:h-[4rem] sm:w-[13rem] lg:h-[5rem] lg:w-[15rem] lg:text-base "
    >
      <input
        type="text"
        id={feature}
        placeholder={feature}
        name={name}
        value={value}
        className="peer border-none bg-gray-700 p-1 text-xl  placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
        onChange={onChange}
        autoComplete="off"
      />

      <span className="absolute left-5 top-2 -translate-y-1/2 text-xs text-gray-200 opacity-50 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-sm lg:peer-placeholder-shown:text-lg ">
        {feature}
      </span>
    </label>
  );
}
function DropdownInput({ feature_list, onChange, name }) {
  return (
    <select
      name={name}
      onChange={onChange}
      className="relative block h-[3rem] w-[8.5rem] overflow-hidden rounded-md border border-gray-200 bg-gray-700  px-3 pt-2 text-sm font-semibold text-gray-400 shadow-sm outline-none focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 sm:h-[4rem] sm:w-[13rem] lg:h-[5rem] lg:w-[15rem] lg:text-lg "
    >
      {feature_list?.map((list, index) => (
        <option key={index} value={list.value} className="">
          {list.label}
        </option>
      ))}
    </select>
  );
}

export default UsedCarInput;
