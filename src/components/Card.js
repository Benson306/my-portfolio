import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Card = ({title, description, image, github, link, languages}) => {

    return ( 
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-800 hover:bg-slate-700">
            <img class="w-full object-cover" src={require(`../images/${image}`)} alt={title} />
            <div class="px-6 py-4">
                <div class="flex justify-center font-bold text-xl mb-2 text-lime-500">{title}</div>
                <p class="flex justify-center text-slate-100 text-base">
                {description}
                </p>
            </div>

            <div class="flex justify-center gap-4">
                <a href={github}><GitHubIcon /></a>
                {
                    link === "#" ? <div></div> : <a href={link}><LaunchIcon /></a>
                }
                
                
            </div>

            <div class="px-6 pt-4 pb-2">
                {
                    languages.map(language =>(
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{language}</span>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Card;
