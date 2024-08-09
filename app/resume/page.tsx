import data from '../../data';

export default function Resume() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Skills</h3>
        <ul className="list-disc pl-6">
          {data.resume.skills.map((skill, index) => (
            <li key={index}>
              <strong>{skill.title}:</strong> {skill.details}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Experience</h3>
        {data.resume.experiences.map((exp, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold">{exp.jobTitle} at {exp.company}</h4>
            <p className="italic">{exp.dates}</p>
            <ul className="list-disc pl-6 mt-2">
              {exp.details.map((detail, detailIndex) => (
                <li key={detailIndex}>
                  <strong>{detail.title}:</strong> {detail.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">Education</h3>
        {data.resume.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-xl font-bold">{edu.title}</h4>
            <ul className="list-disc pl-6">
              {edu.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}