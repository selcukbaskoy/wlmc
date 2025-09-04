export default function PleksiYazimFarklari() {
  return (
    <article className="prose prose-lg max-w-none text-gray-800">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Terminoloji Rehberi
      </h2>
      <p className="mb-6">
        <strong>Pleksi</strong>, <strong>plexi</strong>, <strong>fleksi</strong>{" "}
        yoksa <strong>pileksi</strong> mi? Bu makalemizde doğru yazımları ve
        kullanım alanlarını açıklıyoruz.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Temel Terminoloji ve Orijinler
      </h2>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-blue-800 mb-4">
          📚 Etimoloji (Köken Bilgisi)
        </h3>
        <p className="text-blue-700 mb-4">
          Tüm bu terimler <strong>PMMA (Polimetil Metakrilat)</strong>{" "}
          malzemesinin farklı yazılışlarıdır. Orijinal marka adı olan{" "}
          <strong>"Plexiglas"</strong> Almanya kökenlidir ve 1933'te icat
          edilmiştir.
        </p>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>
            <strong>Plexiglas:</strong> Orijinal Alman marka adı (Röhm GmbH)
          </li>
          <li>
            <strong>Perspex:</strong> İngiliz versiyonu (ICI)
          </li>
          <li>
            <strong>Lucite:</strong> Amerikan versiyonu (DuPont)
          </li>
          <li>
            <strong>Acrylite:</strong> Başka bir ticari isim
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Türkiye'de Kullanılan Yazımlar
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h4 className="font-bold text-green-800 mb-3">✅ Doğru Yazımlar</h4>
          <ul className="space-y-3 text-green-700">
            <li>
              <strong>Pleksi:</strong> Türkçeleştirilmiş en yaygın form
            </li>
            <li>
              <strong>Pleksiglas:</strong> Teknik dokümanlarda tercih edilen
            </li>
            <li>
              <strong>PMMA:</strong> Bilimsel/teknik çevrelerde kullanılan
            </li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h4 className="font-bold text-red-800 mb-3">
            ⚠️ Yaygın Yanlış Yazımlar
          </h4>
          <ul className="space-y-3 text-red-700">
            <li>
              <strong>Plexi:</strong> Teknik açıdan yanlış değil ama Türkçe
              değil
            </li>
            <li>
              <strong>Fleksi/Flexi:</strong> Tamamen yanlış yazım
            </li>
            <li>
              <strong>Pileksi:</strong> Halk arasında görülen yanlış
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Sektörde Kullanım Analizi
      </h2>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Yazım
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Kullanım Oranı
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Tercih Eden Sektör
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Önerilen Durum
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 font-bold text-gray-900">Pleksi</td>
              <td className="px-6 py-4 text-gray-700">%67</td>
              <td className="px-6 py-4 text-gray-700">
                Genel halk, medya, pazarlama
              </td>
              <td className="px-6 py-4 text-green-600 font-semibold">
                ✓ Önerilen
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 font-bold text-gray-900">Pleksiglas</td>
              <td className="px-6 py-4 text-gray-700">%23</td>
              <td className="px-6 py-4 text-gray-700">
                Teknik dokümanlar, mimarlar
              </td>
              <td className="px-6 py-4 text-green-600 font-semibold">
                ✓ Önerilen
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-bold text-gray-900">Plexi</td>
              <td className="px-6 py-4 text-gray-700">%8</td>
              <td className="px-6 py-4 text-gray-700">
                İthalatçılar, yabancı firmalar
              </td>
              <td className="px-6 py-4 text-yellow-600 font-semibold">
                △ Kabul edilebilir
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 font-bold text-gray-900">Fleksi</td>
              <td className="px-6 py-4 text-gray-700">%2</td>
              <td className="px-6 py-4 text-gray-700">
                Yanlış telaffuz edenler
              </td>
              <td className="px-6 py-4 text-red-600 font-semibold">✗ Yanlış</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Korkuluk Sistemlerinde Doğru Kullanım
      </h2>

      <div className="space-y-6 mb-8">
        <div className="p-6 border-l-4 border-green-500 bg-green-50">
          <h4 className="font-bold text-green-800 mb-3">
            🏗️ İnşaat ve Mimarlık Projelerinde
          </h4>
          <p className="text-green-700 mb-3">
            <strong>Pleksi korkuluk</strong> veya{" "}
            <strong>pleksiglas korkuluk</strong>
            yazımları tercih edilmelidir. Özellikle teknik şartnamesine bu
            şekilde yazılmalı.
          </p>
          <div className="text-sm text-green-600">
            ✓ "Pleksi merdiven korkuluk montajı yapılacaktır."
            <br />✓ "Pleksiglas küpeşte sistemi uygulanacaktır."
          </div>
        </div>

        <div className="p-6 border-l-4 border-blue-500 bg-blue-50">
          <h4 className="font-bold text-blue-800 mb-3">
            💬 Müşteri İletişiminde
          </h4>
          <p className="text-blue-700 mb-3">
            Müşteriler genellikle "
            <strong>evime pleksi korkuluk yaptırmak istiyorum</strong>" der. Bu
            doğal ve kabul edilebilir bir kullanımdır.
          </p>
          <div className="text-sm text-blue-600">
            ✓ "Pleksi küpeşteci arıyorum"
            <br />✓ "Pleksi korkulukcu önerisi var mı?"
            <br />✓ "Plexi küpeşte fiyatları nedir?"
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Sonuç ve Öneriler
      </h2>

      <div className="bg-gray-100 border-l-4 border-[#b91c1c] p-6 mb-6">
        <h4 className="font-bold text-gray-800 mb-4">
          📋 Kullanım Rehberi Özeti
        </h4>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>🎯 Günlük Kullanım:</strong> "Pleksi korkuluk" en doğal ve
            yaygın tercihtir. "
            <strong>Evime pleksi küpeşte yaptırmak istiyorum</strong>" gibi
            cümleler tamamen doğrudur.
          </p>
          <p>
            <strong>📋 Teknik Dökümanlar:</strong> "Pleksiglas korkuluk" veya
            "PMMA korkuluk sistemi" daha profesyonel görünür.
          </p>
          <p>
            <strong>❌ Kaçınılması Gerekenler:</strong> "Fleksi", "flexi",
            "pileksi" gibi yazımlar kesinlikle kullanılmamalıdır.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#b91c1c] to-[#991b1b] text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Doğru Terminoloji ile Profesyonel İletişim
        </h3>
        <p className="mb-6 text-lg opacity-90">
          <strong>Türkiye pleksi üreticisi</strong> Walmco olarak 28 ülkeye
          ihracatımızda hem yerel hem uluslararası terminolojiyi doğru
          kullanıyoruz.
        </p>
        <div className="space-y-2 text-sm opacity-80">
          <p>✓ Türkçe: Pleksi Korkuluk</p>
          <p>✓ Teknik: Pleksiglas Korkuluk</p>
          <p>✓ Uluslararası: PMMA Railing System</p>
          <p>✓ 25 yıllık sektör deneyimi</p>
        </div>
      </div>
    </article>
  );
}
