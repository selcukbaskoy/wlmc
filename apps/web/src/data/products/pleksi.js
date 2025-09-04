import { pleksiBabalar } from "./pleksi/babalar";
import { pleksiDikmelerPremium } from "./pleksi/dikmeler-premium";
import { pleksiDiamond } from "./pleksi/diamond";
import { pleksiDikmelerModeller } from "./pleksi/dikmeler-modeller";
import { pleksiAksesuarlar } from "./pleksi/aksesuarlar";

export const pleksiProducts = [
  ...pleksiBabalar,
  ...pleksiDikmelerPremium,
  ...pleksiDiamond,
  ...pleksiDikmelerModeller,
  ...pleksiAksesuarlar,
];
