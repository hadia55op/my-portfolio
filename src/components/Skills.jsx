import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill,index)=>(

            <div
              key={index}
              className="bg-slate-800 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition"
            >
              {skill}
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;