"use client";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/919911560588?text=Hello%20VKSK%20Team%2C%20I%20would%20like%20to%20book%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-[999]
        w-14 h-14 md:w-16 md:h-16
        rounded-full
        bg-[#25D366]
        flex items-center justify-center
        shadow-2xl
        transition-transform duration-300
        hover:scale-110
        animate-whatsapp-attention
      "
    >
      <img
        src="/image/whatsap-svg.webp"
        alt="WhatsApp"
        className="w-full h-full object-cover rounded-full"
      />
    </a>
  );
}
