import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function BigTitle() {
  const { t } = useTranslation();

  return (
    <div className="text-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white"
      >
        {t("hero.greeting")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-300 mt-4"
      >
        {t("hero.description")}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-300 mt-4"
      >
        <Button
          variant="outlined"
          href="/projects"
          sx={{
            color: "white",
            transition: "all 0.3s ease",
            borderColor: "white",
            "&:hover": {
              transform: "scale(1.05)",
              transition: "all 0.3s ease",
            },
          }}
        >
          {t("hero.projects_button")}
        </Button>
      </motion.p>
    </div>
  );
}

export default BigTitle;
