import { useTranslation } from "react-i18next";

export default function CtaSection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="bg-gradient-to-r from-[#b91c1c] to-[#991b1b] rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            {t("cta.customNeeds")}
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {t("cta.customDescription")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="px-8 py-4 bg-white text-[#b91c1c] font-semibold rounded-xl hover:bg-gray-50 transition-colors inline-block"
            >
              {t("cta.customQuote")}
            </a>
            <button className="px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-xl transition-colors">
              {t("cta.downloadCatalog")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
