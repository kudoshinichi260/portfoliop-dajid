import React,{useEffect,useState} from 'react'
import './Project.css'
import ProjectItem from './ProjectItem'
function Project() {
    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch("http://localhost:8080/hello")
        .then((res) => res.text())        
        .then((data) => setMessage(data))
        .catch((err) => console.error("Lỗi khi gọi API:", err));
    }, []);
    const projects =  [
        { name: "Project",timework: "20-5-2002",description: "Description", size: 5, tech: "React", respon: "Full stack"},
        { name: "Project",timework: "20-5-2002",description: "Description", size: 5, tech: "React", respon: "Full stack"},
        { name: "Project",timework: "20-5-2002",description: "Description", size: 5, tech: "React", respon: "Full stack"},
      ];
    return (
        <section className="project section" id="project">
            <h2 className="section__title">
                Projects 
            </h2>
            <span className="section__subtitle">
                {message}
            </span>
            <ProjectItem projects={projects}></ProjectItem> 
        </section>
    )
}

export default Project