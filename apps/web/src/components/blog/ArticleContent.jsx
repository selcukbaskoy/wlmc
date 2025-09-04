import { useTranslation } from "react-i18next";
import PleksiMontajRehberi from "./articles/PleksiMontajRehberi";
import EvimePleksiKupeste from "./articles/EvimePleksiKupeste";
import PleksiYazimFarklari from "./articles/PleksiYazimFarklari";
import PaslanmazPirincSistemler from "./articles/PaslanmazPirincSistemler";
import IstanbulUreticiRehberi from "./articles/IstanbulUreticiRehberi";
import WalmcoPleksiKorkuluk from "./articles/WalmcoPleksiKorkuluk";

export default function ArticleContent({ slug }) {
  const { t } = useTranslation();
  switch (slug) {
    case "walmco-pleksi-korkuluk":
      return <WalmcoPleksiKorkuluk />;
      
    case "pleksi-korkuluk-montaj-rehberi":
      return <PleksiMontajRehberi />;

    case "evime-pleksi-kupeste-yaptirmak":
      return <EvimePleksiKupeste />;
    case "pleksi-plexi-fleksi-yazim-farklari":
      return <PleksiYazimFarklari />;
    case "paslanmaz-pirinc-korkuluk-sistemleri":
      return <PaslanmazPirincSistemler />;
    case "istanbul-pleksi-uretici-rehberi":
      return <IstanbulUreticiRehberi />;
    default:
      return <div>{t("blog.contentNotFound")}</div>;
  }
}
