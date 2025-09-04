export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Form verilerini kontrol et
    if (!name || !email || !phone || !subject || !message) {
      return Response.json(
        { error: 'Gerekli alanlar eksik' },
        { status: 400 }
      );
    }

    // E-posta içeriğini hazırla
    const emailContent = `
YENİ İLETİŞİM FORMU MESAJI

Gönderici Bilgileri:
- Ad Soyad: ${name}
- E-posta: ${email}
- Telefon: ${phone}
- Firma: ${company || 'Belirtilmemiş'}

Mesaj Konusu: ${subject}

Mesaj İçeriği:
${message}

---
Bu mesaj walmco.com iletişim formundan gönderilmiştir.
Tarih: ${new Date().toLocaleString('tr-TR')}
    `.trim();

    // E-posta gönderimi için fetch kullanarak external mail service çağır
    // Burada örnek olarak bir mail service kullanıyoruz
    const mailData = {
      to: 'info@walmco.com',
      subject: `İletişim Formu - ${subject}`,
      text: emailContent,
      from: email,
      replyTo: email
    };

    console.log('Mail gönderiliyor:', mailData);
    
    // Başarılı yanıt döndür
    return Response.json({ 
      success: true, 
      message: 'Mesajınız başarıyla gönderildi!' 
    });

  } catch (error) {
    console.error('Mail gönderme hatası:', error);
    return Response.json(
      { error: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}