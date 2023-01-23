import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';

import file from '../images/CV.docx';

const Navigation = ({aboutRef, educationRef, experienceRef, projectsRef, contactsRef}) => {

    let clicked = false;
    const handleClick = () =>{
        if(clicked){
            document.querySelector('.dropDown').style.height = '0px';

            clicked = false;

        }else if(!clicked){
            document.querySelector('.dropDown').style.height = '248px';

            clicked = true;

        }
    }

    const handleScroll = (ref) => {
        document.querySelector('.dropDown').style.height = '0px';
        clicked = false;

        window.scrollTo({
          top: ref.offsetTop - 100,
          left: 0,
          behavior: "smooth",
        });
      };

      const onDownload = () => {
        fetch(file).then((response) => {
          response.blob().then((blob) => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement("a");
            a.href = url;
            a.download = "CV.docx";
            a.click();
          });
        });
      };

    return ( <div>
        <ul class="sticky top-0 z-50 flex font-mono pt-5 px-5 pb-5 md:p-3 shadow-sm shadow-lime-900">
            <div class="flex w-full md:basis-1/2 items-center justify-between">
                <li class='md:pl-12'>
                    <img src={require('../images/letter-b2.png')} alt="" />
                </li>
                <li class='md:invisible'><MenuOutlinedIcon color='success' fontSize={'large'} onClick={ handleClick }/></li>
            </div>
            <div class="hidden md:flex md:basis-1/2 items-center justify-between">
                <li class='no-underline hover:underline decoration-lime-500 decoration-dotted underline-offset-8'>
                    <Link to="/#about" onClick={()=>{handleScroll(aboutRef.current);}} >About</Link>
                </li>
                <li class='no-underline hover:underline decoration-lime-500 decoration-dotted underline-offset-8'>
                    <Link to="/#education" onClick={()=>{handleScroll(educationRef.current);}} >Education</Link>
                </li>
                <li class='no-underline hover:underline decoration-lime-500 decoration-dotted underline-offset-8'>
                    <Link to="/#projects" onClick={()=>{handleScroll(experienceRef.current);}} >Experience</Link>
                </li>
                <li class='no-underline hover:underline decoration-lime-500 decoration-dotted underline-offset-8'>
                    <Link to="/#projects" onClick={()=>{handleScroll(projectsRef.current);}} >Projects</Link>
                </li>
                <li class='no-underline hover:underline decoration-lime-500 decoration-dotted underline-offset-8'>
                    <Link to="/#contacts" onClick={()=>{handleScroll(contactsRef.current);}} >Contact</Link>
                </li>
                <li class='border-solid border-2 rounded-lg border-lime-500 text-slate-100 p-2'>
                    <Link to="" onClick={onDownload}>Download Resume</Link>
                </li>
            </div>
        </ul>
        
        <div class='dropDown absolute w-full font-mono bg-slate-800 md:invisible h-0 overflow-hidden' style={{transition:'ease-in-out 0.3s'}}>
            <ul class='items-center' >
                <li class='flex justify-center p-2'>
                    <Link to="/#about" onClick={()=>{handleScroll(aboutRef.current);}} >About</Link>
                </li>
                <li class='flex justify-center p-2'>
                    <Link to="/#education" onClick={()=>{handleScroll(educationRef.current);}} >Education</Link>
                </li>
                <li class='flex justify-center p-2'>
                    <Link to="/#projects" onClick={()=>{handleScroll(experienceRef.current);}} >Experience</Link>
                </li>
                <li class='flex justify-center p-2'>
                    <Link to="/#projects" onClick={()=>{handleScroll(projectsRef.current);}} >Projects</Link>
                </li>
                <li class='flex justify-center p-2'>
                    <Link to="/#contacts" onClick={()=>{handleScroll(contactsRef.current);}}  >Contact</Link>
                </li>
                <li class='flex justify-center border-solid border-2 rounded border-lime-500 text-slate-100 p-2'>
                    <Link to="" onClick={onDownload}>Download Resume</Link>
                </li>
            </ul>
        </div>


    </div> );
}
 
export default Navigation;