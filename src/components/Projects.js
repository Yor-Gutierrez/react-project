import { Col, Container, Row, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import { ProjectCard } from "./ProjectCards";

export const Projects = () =>{

    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
    return(
     <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam porro, laboriosam ea animi officiis consequuntur perspiciatis sint cum doloremque dolorum voluptatibus consectetur laborum voluptates accusantium nulla incidunt, dolorem tempora magni.</p>
                <TabContainer id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab one</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third" >
                        Tab three
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <TabContent>
                    <TabPane eventKey="first">
                        <Row>
                            {
                            projects.map((project, index) =>{
                                return(
                                   <ProjectCard
                                   key={index}
                                   {...project}
                                   />
                                )
                            })
                            }
                        </Row>
                    </TabPane>
                    <TabPane eventKey="second">Lorem Ipsum</TabPane>
                    <TabPane eventKey="third">Lorem Ipsum</TabPane>
                    </TabContent>
                    </TabContainer>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
     </section>
    )
}