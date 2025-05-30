import React from "react";
import { useTranslation } from "react-i18next";

function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-white">
        {t("privacy.title")}
      </h1>
      <p className="mb-2 text-white">{t("privacy.description1")}</p>
      <p className="mb-2 text-white">{t("privacy.description2")}</p>
      <p className="mb-2 text-white">{t("privacy.description3")}</p>
      <p className="mt-4 text-sm text-white">{t("privacy.note")}</p>
    </div>
  );
}

export default PrivacyPolicy;
