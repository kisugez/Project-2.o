import { Main } from "@/components/blocks/Main/Main";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { DefaultBanner } from "@/components/sections/DefaultBanner/DefaultBanner";
import { HedaerSection } from "@/components/templates/HeaderSection/HeaderSection";

export const ContactPage = () => {
  return (
    <>
      <HedaerSection title="Kontakt" />
      <Main>
        <ContactSection />
        <DefaultBanner />
      </Main>
    </>
  );
};
