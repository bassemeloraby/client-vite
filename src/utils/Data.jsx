import { Fragment } from "react";
import { FcSearch, FcFilledFilter } from "react-icons/fc";

export const mainPages = [
  {
    id: 1,
    text: "Medicine",
    ping: [
      { name: "search", link: "/allD/allDugsSearch", icon: <FcSearch /> },
      { name: "MedCalc", link: "/medCalc" },
    ],
  },

  {
    id: 2,
    text: "Cosmotics",
    ping: [
      {
        name: "search",
        link: "/cosmotics/cosmoticSearch",
        icon: <FcSearch />,
      },
      {
        name: "filter",
        link: "/cosmotics/cosmoticFilter",
        icon: <FcFilledFilter />,
      },
      {
        name: "cosmoticSF",
        link: "/cosmotics/cosmoticSF",
        icon: (
          <Fragment>
            <FcFilledFilter /> <FcSearch />
          </Fragment>
        ),
      },
      {
        name: "Diapers",
        link: "/cosmotics/diapers",
        icon: "",
      },
      {
        name: "Companies",
        link: "/Companies",
        icon: "",
      },
    ],
  },
  {
    id: 3,
    text: "Insurance",
    ping: [{ name: "insurance", link: "/insurance" }],
  },
  {
    id: 4,
    text: "CosmoticGrid",
    ping: [{ name: "CosmoticGrid", link: "/cosmoticGrid" }],
  },
  {
    id: 5,
    text: "Course",
    ping: [{ name: "EXCEL", link: "/course" }],
  },
];
export const adminPages = [
  {
    id: 1,
    text: "Medicine Admin",
    ping: [
      { name: "search", link: "/allD/allDugsSearch", icon: <FcSearch /> },
      { name: "MedCalc", link: "/medCalc" },
    ],
  },
  {
    id: 2,
    text: "Cosmotic Admin",
    ping: [
      { name: "table", link: "/cosmoticAdmin", icon: "" },
      { name: "MedCalc", link: "/medCalc" },
    ],
  },
];

export const mainUrl = "https://rich-blue-llama-vest.cyclic.cloud/api/";

export const insuranceLinks = [
  {
    id: 1,
    text: "الضمان الصحى",
    link: "https://chi.gov.sa/AboutCCHI/CCHIprograms/Pages/IDF.aspx",
  },
  {
    id: 3,
    text: "bupa",
    link: "https://onlineservices.bupa.com.sa/",
  },
  {
    id: 4,
    text: "I care",
    link: "https://i-care.globemedsaudi.com:8036/",
  },
  {
    id: 5,
    text: "waseel",
    link: "https://portal.waseel.com/WaseelSwitch/web/xhtml/login/HomePage.jsf",
  },
  {
    id: 5,
    text: "wasfaty",
    link: "https://wasfaty.sa/",
  },
  {
    id: 6,
    text: "استعلام عن التامين",
    link: "https://eservices.chi.gov.sa/Pages/ClientSystem/CheckInsurance.aspx",
  },
];