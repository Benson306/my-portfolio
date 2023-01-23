const Education = ({educationRef}) => {
    return ( 
        <div class="px-4 md:px-16 pt-10" ref={educationRef}>
        <h2 class="text-zinc-200 text-xl md:text-4xl font-serif font-semibold pt-1 md:pt-1">Education and Certifications</h2>
        <div class="mt-5 ml-1 md:ml-10 pt-5 rounded bg-slate-500 hover:bg-slate-600 p-5 w-full md:w-1/2">
            <h1 class="text-xl md:text-2xl font-serif text-lime-300">Bsc. Information Technology</h1>
            <h2 class="text-lg">Multimedia University of Kenya</h2>
            <h3 class=" font-mono">Sep 2017 - Dec 2022</h3>
        </div>

        <div class="mt-5 ml-1 md:ml-10 pt-5 rounded bg-slate-500 hover:bg-slate-600 p-5 w-full md:w-1/2">
            <h1 class="text-xl md:text-2xl font-serif text-lime-300">AWS Certified Cloud Practitioner</h1>
            <h2 class="text-lg">Azubi Africa (AWS RE/Start Program)</h2>
            <h3 class=" font-mono">May 2022 - Aug 2022</h3>
        </div>
    </div>
     );
}
 
export default Education;