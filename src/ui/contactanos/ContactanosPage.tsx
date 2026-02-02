import { Footer } from "@/ui/layout/Footer";
import { Header } from "@/ui/layout/Header";
import Whatsapp from "../shared/WhatsApp";
import { ContactForm } from "./sections/ContactForm";
import { MainPhrase } from "./sections/MainPhrase";

export const ContactanosPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <div className="bg-white">
          <ContactForm />
          <MainPhrase />
        </div>
      </div>
      <Footer />
      <Whatsapp
        message="Hola, vi su web y quiero saber más sobre Flujolink y cómo funciona."
        animated
      />
    </div>
  );
};
