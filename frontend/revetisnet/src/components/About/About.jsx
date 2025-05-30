import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div id="about" className="max-w-4xl mx-auto px-4 py-16 text-white">
      {/* Başlık */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        {t("about.title")}
      </motion.h2>

      {/* Profil ve Tanıtım */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <motion.img
          src="/R-profil.png"
          alt="Revetis"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          {t("about.intro")}
        </motion.p>
      </div>

      {/* Zaman Çizelgesi */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-4">{t("about.timeline_title")}</h3>
        <ul className="border-l-2 border-gray-600 pl-4 space-y-4">
          <li>
            <span className="text-sm text-gray-400">{t("about.timeline.0.date")}</span><br />
            <span>{t("about.timeline.0.text")}</span>
          </li>
          <li>
            <span className="text-sm text-gray-400">{t("about.timeline.1.date")}</span><br />
            <span>{t("about.timeline.1.text")}</span>
          </li>
          <li>
            <span className="text-sm text-gray-400">{t("about.timeline.2.date")}</span><br />
            <span>{t("about.timeline.2.text")}</span>
          </li>
        </ul>
      </motion.div>

      {/* Yetenekler */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-4">{t("about.skills_title")}</h3>
        <div className="space-y-4">
          {[
            { name: "Python", level: 90 },
            { name: "Django", level: 85 },
            { name: "React", level: 80 },
            { name: "TypeScript", level: 70 },
            { name: "HTML/CSS", level: 95 },
          ].map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default About;
