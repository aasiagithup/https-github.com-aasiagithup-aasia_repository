import { Link } from "react-router-dom";

const Projects = () => {
  return(<>
  <h1>My Projects</h1>
  <div className ="row">
    <div className="-col-md-6">
    <div className="card" style="width: 18rem;">
 <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <Link to="/myprojects">veiw assignment</Link>
    
  </div>
</div>
    </div>
  </div>
  </>)
}
export default Projects;