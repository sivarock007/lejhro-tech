import React from 'react';
import ReactDOM from 'react-dom';
import MenuIcon from '@mui/icons-material/Menu';


// Create a component for the technology website
const TechnologyWebsite = () => {
  
  return (
    <div>
     
      <header style={{backgroundColor: "#cc9900",color: "#fff",padding:"20px 100px 20px 160px"}}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <div className="logo">
            <h1 style={{fontSize: "44px"}}>LEJHRO</h1>
          </div>
          <nav>
            <ul style={{listStyle:"none",display : 'inline-flex'}}>
              <li><a style={{textDecoration:"none",color:"#fff",padding:"0 25px"}} href="#Innovations">Innovations</a></li>
              <li><a style={{textDecoration:"none",color:"#fff",padding:"0 25px"}} href="#Business Serviecs">Business Serviecs</a></li>
              <li><a style={{textDecoration:"none",color:"#fff",padding:"0 25px"}} href="#Financial Services">Financial Services</a></li>
              <li><a style={{textDecoration:"none",color:"#fff",padding:"0 25px"}} href="#Bootcamp">Bootcamp</a></li>
            </ul>
          </nav>
          <MenuIcon sx={{borderRadius:"50%",color:"#000",background:"#fff",padding:"10px"}}></MenuIcon>
        </div>
        <h1 style={{fontSize: "44px"}}>Blogs</h1>
      </header>
      <main style={{padding:"25px 160px 25px 160px",backgroundColor:"#eeef"}}>
      <main style={{backgroundColor:"#fff",borderRadius:"20px",padding:"40px 30px"}}>
        <section>
          <h1>Data Analysis: Everything You Need to Know</h1>
          <h2>Without big data analytics, companies are blind and deaf, wandering out onto the web like deer on a freeway.</h2>
          <h2>~ Geoffrey Moore</h2>
          <p>Companies today need every edge and advantage they can get. Thanks to obstacles like rapidly changing markets, economic uncertainty, finicky consumer attitudes, and even global pandemics, businesses today are working with slimmer margins for error.</p>
          <p>Companies that want to thrive in these competitive markets can improve their odds of success with the help of data analysis.</p>
          <p>This strategy is common sense, and it applies to personal life as well as business. No one makes important decisions without first finding out what’s at stake, the pros and cons, and the possible outcomes. Similarly, no company that wants to succeed should make decisions based on bad data. Organisations need information; they need data. This is where data analysis enters the picture.</p>

        </section>
        <section>
          <h2>What is data analysis?</h2>
          <p>Data analysis is defined as a process of cleaning, transforming, and modelling data to discover useful information for business decision-making. The purpose of Data Analysis is to extract useful information from data and take the decision based upon the data analysis.</p>
          <p>The information gathered from the data are then presented visually in the form of charts, graphs, or dashboards.</p>
          <p>The information discovered can help aid the company’s or organisation’s growth. Decision-makers will be able to come to an actionable conclusion and make the right business decisions.</p>
          <p></p>
        </section>
        <section>
          <h2>Types of Data Analysis:</h2>
          <h4>Text Analysis</h4>
          <p>Text Analysis is also referred to as Data Mining. It is one of the methods of data analysis to discover a pattern in large data sets using databases or data mining tools. It used to transform raw data into business information.</p>
        </section>
        <section>
          <h4>Descriptive Analysis</h4>
          <p>The descriptive analysis method is the starting point to any analytic reflection, and it aims to answer the question of what happened? It does this by ordering, manipulating, and interpreting raw data from various sources to turn it into valuable insights for your organisation.</p>
        </section>
        <section>
          <h4>Exploratory Analysis</h4>
          <p>As its name suggests, the main aim of the exploratory analysis is to explore. Prior to it, there was still no notion of the relationship between the data and the variables. Once the data is investigated, the exploratory analysis enables you to find connections and generate hypotheses and solutions for specific problems.</p>
        </section>
        <section>
          <h4>Statistical Analysis</h4>
          <p>Statistical Analysis shows “What happened?” by using past data in the form of dashboards. Statistical Analysis includes collection, Analysis, interpretation, presentation, and modelling of data. It analyses a set of data or a sample of data.</p>
        </section>
        <section>
          <h4>Predictive analysis</h4>
          <p>The predictive method allows you to look into the future to answer the question: what will happen? In order to do this, it uses the results of the previously mentioned descriptive, exploratory, and diagnostic analysis, in addition to machine learning (ML) and artificial intelligence (AI). Like this, you can uncover future trends, potential problems or inefficiencies, connections, and casualties in your data.</p>
        </section>
        <section>
          <h4>Diagnostic Analysis</h4>
          <p>Diagnostic Analysis shows “Why did it happen?” by finding the cause from the insight found in Statistical Analysis. This Analysis is useful to identify behaviour patterns of data. If a new problem arrives in your business process, then you can look into this Analysis to find similar patterns of that problem. And it may have chances to use similar prescriptions for the new problems.</p>
        </section>
        <section>
          <h2>Data Analysis Process</h2>
          <p>The Data Analysis Process is gathering information by using a proper application or tool which allows you to explore the data and find a pattern in it.</p>
          <p>It has following phases:</p>
        </section>
        <section>
          <h4>Identify:</h4>
          <p>You first need to identify why you need it in the first place. The identification is the stage in which you establish the questions you will need to answer. For example, what is the customer's perception of our brand? Or what type of packaging is more engaging to our potential customers? Once the questions are outlined you are ready for the next step.</p>
        </section>
        <section>
          <h4>Collect:</h4>
          <p>This is the stage where you start collecting the needed data. Here, you define which sources of information you will use and how you will use them. The collection of data can come in different forms such as internal or external sources, surveys, interviews, questionnaires, focus groups, among others.</p>
        </section>
        <section>
          <h4>Cleaning:</h4>
          <p>Now whatever data is collected may not be useful or irrelevant to your aim of Analysis, hence it should be cleaned. The data which is collected may contain duplicate records, white spaces or errors. The data should be cleaned and error free. This phase must be done before Analysis because based on data cleaning, your output of Analysis will be closer to your expected outcome.</p>
        </section>
        <section>
          <h4>Analysis:</h4>
          <p>Once the data is collected, cleaned, and processed, it is ready for Analysis. As you manipulate data, you may find you have the exact information you need, or you might need to collect more data. During this phase, you can use data analysis tools and software which will help you to understand, interpret, and derive conclusions based on the requirements.</p>
        </section>
        <section>
          <h4>Interpretation:</h4>
          <p>After analysing your data, it’s finally time to interpret your results. You can choose the way to express or communicate your data analysis either you can use simply in words or maybe a table or chart.</p>
        </section>
        </main>
      </main>
      <footer>
        <div style={{padding:"5px",backgroundColor:"#3486eb"}}></div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"25px 160px 20px 160px"}}>
          <div>
            <h2>Company</h2>
            <p>Innovations</p>
            <p>Business Services</p>
            <p>Financial Services</p>
            <p>Lejhro recruiter</p>
            <p>About</p>
            <p>Blog</p>
            <p></p>
          </div>
          <div>
            <h2>Programs</h2>
            <p>Lejhro Bootcamp</p>
          </div>
          <div>
            <h2>Support</h2>
            <p>Contact</p>
            <p>Term of use</p>
            <p>Privacy statement</p>
          </div>
          <div>
            <h2>Connect with us</h2>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Linkedin</p>
          </div>
        </div>
        <p style={{textAlign:"center"}}>&copy; 2023 LEJHRO. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Render the component in the DOM
ReactDOM.render(<TechnologyWebsite />, document.getElementById('root'));
export default TechnologyWebsite