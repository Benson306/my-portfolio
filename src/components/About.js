import { Link } from 'react-router-dom';

const About = ({aboutRef, projectsRef}) => {

    const handleScroll = (ref) => {

        window.scrollTo({
          top: ref.offsetTop - 100,
          left: 0,
          behavior: "smooth",
        });
      };

    return ( 
    <div>
        <div class="flex flex-col md:flex-row">
            <div class="flex flex-col p-10 justify-between pt-8 md:pt-16  pl-8 md:pl-24 w-full md:w-3/4" ref={aboutRef}>
                <h4 class="text-lime-500 text-lg font-mono"> Hi, my name is</h4>
                <h1 class="text-zinc-200 text-3xl md:text-7xl font-serif font-bold pt-5">Benson Ndiwa.</h1>
                <h2 class="text-zinc-400 text-xl md:text-5xl font-serif font-semibold pt-1 md:pt-3">I am a Full Stack web Developer.</h2>

                <div class="pt-5 md:pt-10 text-sm md:text-lg text-zinc-300 font-mono">
                I'm a solution-driven web developer adept at contributing to a highly collaborative work environment and finding solutions. I have proven experience developing consumer-focused web applications. I also have good grasp of the best practices for web development, user experience, security and speed.
                </div>
            </div> 

            <div class="flex w-full md:w-1/4 px-4 md:pr-12 pt-1 md:pt-16 pb-5 justify-center">
                <img class="rounded w-3/4 md:w-full" src={require('../images/ben.jpg')} alt="" />
            </div>
        
        </div>

        <button class="ml-20 p-4 border rounded border-lime-500 hover:bg-lime-800 hover:text-white font-">
        <Link to="/#projects" onClick={()=>{handleScroll(projectsRef.current);}}> Check out my projects! </Link>
        </button>
    </div>
    );
}
 
export default About;