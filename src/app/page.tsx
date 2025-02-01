import Link from 'next/link';

export default function Home() {

    const jobList = [{
        id: "altec",
        name: "Altec Industries- Core Controls Intern",
        date: "June 2024 - September 2024",
    }, {
        id: "researcher",
        name: "California Polytechnic University (CENG)- Undergraduate Researcher",
        date: "January 2024 - June 2024",
    }, {
        id: "ibeeto",
        name: "Ibeeto Incorporated- Software Engineering Intern",
        date: "September 2020 - December 2023",
      }];

    const skillsList = [{
        id: 1,
        description: "Programming Languages: Python, Java, Rust, C++, C#, Go, JavaScript, HTML, CSS"
    },
    {
        id: 2,
        description: "Full-stack Windows/Linux App Development with the QT Framework using QT Creator and QML"
    },
    {
        id: 3,
        description: "AWS (HPC), Django (application of Django REST Framework), Flask, Beautiful Soup, React"
    },
    {
        id: 4,
        description: "Reverse Engineering: Reverse engineering proficiency in x86/x64 assembly, with expertise in BLE packet analysis"
    },
    {
        id: 5,
        description: "Machine Learning: Tensorflow, Pytorch (Engineered custom-trained models for object tracking)"
    },
    {
        id: 6,
        description: "Docker, SQL, CAN tools"
    }
    ]

  const jobHtml = jobList.map((job) => {
    //logic here
    return (<li key={job.id}>
      <br></br>
      <span><b><Link href={`/jobs/${job.id}`}>{job.name}</Link></b></span>
      <br></br>
      <span>{job.date}</span>
    </li>);
  });

  const skillsHtml = skillsList.map((skill) => {
    //logic here
    return (<li key={skill.id}>
      <span><b><Link href={`/skill/${skill.id}`}>{skill.name}</Link></b></span>
      <ul><span>{skill.description}</span></ul>
      <br></br>
    </li>);
  });

  return (
    <div>
        <h1>
        Dominic Streif&apos;s Resume
        </h1>
        <br>
        </br>
        <u>
        WORK EXPERIENCE:
        </u>
      <ul>
        {jobHtml}
      </ul>
      <br></br>
      <br></br>
      <u>
      TECHNICAL SKILLS:
      </u>
      <br></br>
      <br></br>
      <ul>
        {skillsHtml}
      </ul>
    </div>
  );
}
