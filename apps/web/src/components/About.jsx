import { useTranslation } from "react-i18next";
import {
  Building2,
  Users,
  Award,
  Target,
  Calendar,
  MapPin,
} from "lucide-react";

export default function About() {
  const { t } = useTranslation();
  const stats = [
    {
      icon: Calendar,
      number: "2021",
      label: t("about.stats.foundingYear"),
      description: t("about.stats.foundingYearDesc"),
    },
    {
      icon: MapPin,
      number: "28",
      label: t("about.stats.exportCountries"),
      description: t("about.stats.exportCountriesDesc"),
    },
    {
      icon: Users,
      number: "%100",
      label: t("about.stats.customerSatisfaction"),
      description: t("about.stats.customerSatisfactionDesc"),
    },
    {
      icon: Award,
      number: "CE",
      label: t("about.stats.certification"),
      description: t("about.stats.certificationDesc"),
    },
  ];

  const values = [
    {
      icon: Target,
      title: t("about.values.mission"),
      description: t("about.values.missionDesc"),
    },
    {
      icon: Award,
      title: t("about.values.vision"),
      description: t("about.values.visionDesc"),
    },
    {
      icon: Building2,
      title: t("about.values.values"),
      description: t("about.values.valuesDesc"),
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: t("about.milestones.founding"),
      description: t("about.milestones.foundingDesc"),
    },
    {
      year: "2022",
      title: t("about.milestones.certification"),
      description: t("about.milestones.certificationDesc"),
    },
    {
      year: "2023",
      title: t("about.milestones.exportStart"),
      description: t("about.milestones.exportStartDesc"),
    },
    {
      year: "2024",
      title: t("about.milestones.globalExpansion"),
      description: t("about.milestones.globalExpansionDesc"),
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="py-16 md:py-24 px-6 bg-white" id="hakkimizda">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#b91c1c]/10 text-[#b91c1c] rounded-full text-sm font-medium mb-6">
              <Building2 size={16} />
              <span>{t("nav.about")}</span>
            </div>

            <h2
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              {t("about.header.title")}
            </h2>

            <p
              className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              {t("about.header.description")}
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;

              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group hover:bg-[#b91c1c] hover:text-white"
                >
                  <div className="w-16 h-16 bg-[#b91c1c] group-hover:bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <IconComponent
                      size={28}
                      className="text-white group-hover:text-[#b91c1c]"
                      strokeWidth={2}
                    />
                  </div>

                  <div className="text-4xl font-bold text-[#b91c1c] group-hover:text-white mb-2 transition-colors duration-300">
                    {stat.number}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                    {stat.label}
                  </h3>

                  <p className="text-gray-600 group-hover:text-white/90 text-sm transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mission, Vision, Values */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;

                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-[#b91c1c] rounded-xl flex items-center justify-center mb-6">
                      <IconComponent
                        size={24}
                        className="text-white"
                        strokeWidth={2}
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Company Story / Timeline */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Factory Background Image */}
            <div
              className="absolute inset-0 w-full h-full opacity-25"
              style={{
                backgroundImage: `url(https://ucarecdn.com/7fcfa693-d5b7-42b4-90e1-ce20ff01a5b7/-/format/auto/)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* Gradient Overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/70 via-white/60 to-gray-50/70 rounded-3xl" />

            {/* Content with relative positioning */}
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {t("about.timeline.title")}
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("about.timeline.description")}
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#b91c1c]/20 rounded-full hidden md:block"></div>

                <div className="space-y-8 md:space-y-12">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`flex flex-col md:flex-row items-center gap-8 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline Point */}
                      <div className="hidden md:block w-6 h-6 bg-[#b91c1c] rounded-full border-4 border-white shadow-lg relative z-10"></div>

                      {/* Content */}
                      <div
                        className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center md:text-left`}
                      >
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30">
                          <div className="text-3xl font-bold text-[#b91c1c] mb-3">
                            {milestone.year}
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">
                            {milestone.title}
                          </h4>
                          <p className="text-gray-700">
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      {/* Spacer for opposite side */}
                      <div className="hidden md:block flex-1"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#b91c1c] to-[#991b1b] rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Geleceği Birlikte İnşa Edelim
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Kaliteli üretim, güvenilir hizmet ve yenilikçi çözümlerle
                projelerinize değer katmaya hazırız.
              </p>
              <a
                href="/iletisim"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-[#b91c1c] rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                <span>İletişime Geçin</span>
                <Building2 size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
