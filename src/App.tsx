import About from "./components/About";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Heading from "./components/ui/Heading";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <Layout>
      <Header>
        <Navbar />
        <Heading
          tag="h1"
          size="lg"
          title="We are creatives"
          classes="heading--spaced"
          uppercase
          center
        />
      </Header>
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
    </Layout>
  );
}

export default App;
