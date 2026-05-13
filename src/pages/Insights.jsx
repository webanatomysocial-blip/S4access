import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../css/Insights.css";
import Blogs from "../components/Blog.jsx";
import { Helmet } from "react-helmet-async";

function Insights() {
  return (
    <div>
      <Helmet>
        <title>SAP Access Management Insights & Resources | s4access</title>
        <meta
          name="title"
          content="SAP Access Management Insights & Resources | s4access"
        />
        <meta
          name="description"
          content="Explore s4access’s insights on SAP access governance, compliance trends,
security best practices and expert resources to empower your enterprise strategy."
        />
      </Helmet>

      <Header backgroundColor="#000000ff" />
      <section className="insights-hero-section">
        <h1 className="big-heading-text-black" style={{ marginBottom: "40px" }}>
          Blogs
        </h1>

        <Blogs limit="all" />
      </section>

      <Footer />
    </div>
  );
}

export default Insights;
