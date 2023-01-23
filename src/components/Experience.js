const Experience = ({experienceRef}) => {

    return ( 
    <div class="px-4 md:px-16 pt-5" ref={experienceRef}>
        <h2 class="flex justify-center text-zinc-200 text-xl md:text-4xl font-serif font-semibold pt-1 md:pt-1">Work Experience</h2>
        <div class="flex justify-center p-10">
            <table class="p-5 mx-16">
                <tr class="p-5 border-b-4 border-double hover:bg-slate-600">
                    <td class="p-5 text-xl">Darna Works Limited</td>
                    <td class="p-5">
                        <h1 class="text-xl text-lime-300 font-serif">Junior Software Developer</h1>
                        <h2 class="text-lg font-mono">Jun 2021 - May 2021</h2>
                        <ul class="list-disc font-sans pt-4">
                            <li>Code writing and debugging.</li>
                            <li>Work closely with developers to improve product functionality.</li>
                            <li>Participation in code reviews and quality assurance activities.</li>
                        </ul>

                    </td>
                </tr>

                <tr class="p-5 hover:bg-slate-600 rounded">
                    <td class="p-5 text-xl">The National Treasury</td>
                    <td class="p-5">
                        <h1 class="text-xl text-lime-300 font-serif">Industrial Attaché - IT Support</h1>
                        <h2 class="text-lg font-mono">Apr 2019 - Aug 2019</h2>
                        <ul class="list-disc font-sans pt-4">
                            <li>Troubleshoot system and network problems, diagnosing and solving technical faults.</li>
                            <li>Monitored and maintained all computer systems, installing and configuring hardware and software as well as solved technical problems.</li>
                            <li>Ensured that all system and process issues and incidents are logged and tracked using formal documentation.</li>
                        </ul>

                    </td>
                </tr>

            </table>
        </div>
    </div> 
);
}
 
export default Experience;