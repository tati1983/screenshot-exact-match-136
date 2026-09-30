export const EMAIL = "eca.espacioculturalasociativo@gmail.com";
export const PHONE_DISPLAY = "+54 9 3446 317963";
export const PHONE_TEL = "+5493446317963";
export const WHATSAPP = "https://wa.me/5493446317963";
// Reemplazar por el link de invitación real cuando exista el grupo (https://chat.whatsapp.com/...)
export const WHATSAPP_GROUP = "https://chat.whatsapp.com/";
export const IG_URL =
  "https://www.instagram.com/eca.espacioculturalasociativo?stkn=MXJnOWwxdmc0cWZwdg%3D%3D";
export const YT_URL = "https://youtube.com";
// Reemplazar por el link de pago real de Mercado Pago
export const MP_LINK = "https://link.mercadopago.com.ar/";

export const MAILTO = `mailto:${EMAIL}`;

// Envío de formularios directo al correo de ECA (la primera vez llega un mail de activación)
export async function enviarAlMail(datos: Record<string, string>) {
  const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ _template: "table", _captcha: "false", ...datos }),
  });
  if (!res.ok) throw new Error(`Error ${res.status}`);
}
