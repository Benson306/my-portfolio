import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const Skills = () => {
    return ( 
        <div class="pt-5 md:pt-5">
                <h2 class="text-zinc-200 text-2xl md:text-4xl font-serif font-semibold pt-1 md:pt-1">Technologies</h2>
                <h3 class="text-zinc-400 pt-5">Here are a few technologies I've been working with recently:</h3>

                <div class="flex bg-slate-700 hover:bg-slate-600 rounded-lg mt-4">
                    <ul class="p-3 md:p-8">
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> Javascript (ES 6 +)</li>
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> React, React Native</li>
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> TypeScript</li>
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> Node.js, Express</li>
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> Tailwind CSS, Bootstrap</li>
                    </ul>
                    <ul class="p-3 md:p-8">
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> Java, Spring Boot</li>
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> PHP, Laravel </li>
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> Python, Flask</li>
                        <li class="flex align-middle"><KeyboardDoubleArrowRightOutlinedIcon color={"primary"} /> MongoDB , MySQL, Redis</li>
                    </ul>
                </div>
        
        </div>
     );
}
 
export default Skills;