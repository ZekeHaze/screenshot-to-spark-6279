// Número de WhatsApp provisional: reemplazar por el número real de Limonson.
export const WHATSAPP_NUMBER = "526420000000";
export const whatsappLink = (text = "Hola, me interesa información sobre Limonson.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const CONTACT_NAME = "Jorge Alberto Mendívil Valdés";
export const LOCATION = "Navojoa, Sonora, México";
export const SLOGAN = "¡Disfruta C-Natural!";
