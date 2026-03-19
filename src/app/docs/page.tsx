import { Footer } from "@/ui/layout/Footer";
import { Header } from "@/ui/layout/Header";
import { DocsPage } from "@/ui/docs/DocsPage";

const Docs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <DocsPage />
      </div>
      <Footer />
    </div>
  );
};

export default Docs;
