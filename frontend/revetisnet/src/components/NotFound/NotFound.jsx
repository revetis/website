import React from "react";
import { useTranslation } from "react-i18next";
import "./NotFound.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <div className="notfound-wrapper">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">{t("page_not_found")}</p>
      </div>
    </>
  );
}

export default NotFound;
