import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../css/Insights.css';
import Blogs from '../components/Blog.jsx';

function Insights() {
  return (
    <div>
       <Header backgroundColor="#000000ff" />
       <section className="insights-hero-section">

<p className="big-heading-text-black" style={{ marginBottom:"40px"
}}> Blogs</p>
        
       <Blogs />
       </section>



      <Footer />
    </div>
  );
}

export default Insights;