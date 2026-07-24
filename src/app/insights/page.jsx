import '../../css/Insights.css';
import Blogs from '../../components/Blog.jsx';

export const metadata = {
  alternates: {
    canonical: "/insights",
  },
  title: "SAP Access Management Insights & Resources | s4access",
  description: "Explore s4access’s insights on SAP access governance, compliance trends,\nsecurity best practices and expert resources to empower your enterprise strategy.",
};


function Insights() {
  return (
    <div>
      

      <section className="insights-hero-section">
        <h1 className="big-heading-text-black" style={{ marginBottom: "40px" }}>
          Blogs
        </h1>

        <Blogs limit="all" />
      </section>

          </div>
  );
}

export default Insights;
