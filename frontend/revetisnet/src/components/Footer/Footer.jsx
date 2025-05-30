import React from "react";
import { useTranslation } from "react-i18next";
import { FormControl, InputLabel, Link, MenuItem, Select } from "@mui/material";
import "./Footer.css";

function Footer({ showLanguageSwitcher = true }) {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };

  const pages = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blogs" },
    { label: "Projects", href: "/projects" },
  ];

  const contracts = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="footer-wrapper ">
      <div className="footer-container">
        <div className="footer-logo-section">
          <a href="/">
            <img src="/logo.png" alt="Revetis Logo" className="footer-logo" />
          </a>
          <p className="footer-brand">Revetis</p>
        </div>

        <div className="footer-group">
          <h2 className="footer-header">{t("Pages")}</h2>
          {pages.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="footer-link"
              underline="none"
            >
              {t(item.label)}
            </Link>
          ))}
        </div>

        <div className="footer-group">
          <h2 className="footer-header">{t("Contracts")}</h2>
          {contracts.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="footer-link"
              underline="none"
            >
              {t(item.label)}
            </Link>
          ))}
        </div>

        {showLanguageSwitcher && (
          <FormControl
            variant="outlined"
            size="small"
            sx={{ minWidth: 120, color: "white" }}
          >
            <InputLabel sx={{ color: "white" }}>{t("Language")}</InputLabel>
            <Select
              value={i18n.language}
              onChange={handleLanguageChange}
              label={t("Language")}
              sx={{
                color: "white",
                ".MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                ".MuiSvgIcon-root": { color: "white" },
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="tr">Türkçe</MenuItem>
            </Select>
          </FormControl>
        )}
      </div>

      {/* <hr className="footer-divider" /> */}

      <div className="footer-bottom mt-10">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Revetis. {t("All rights reserved.")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
