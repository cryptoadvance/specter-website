import { Card } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

export default function ContactAssociation() {
  return (
    <section>
      <Card className="bg-specter-navy rounded-xl p-8 md:p-12 shadow-2xl border-0">
        <ContactForm
          showTitle={true}
          showImage={false}
          title="Contact Association"
        />
      </Card>
    </section>
  );
}
