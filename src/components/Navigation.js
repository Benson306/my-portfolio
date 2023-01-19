import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navigation = () => {

    let clicked = false;
    const handleClick = () =>{
        if(clicked){
            document.querySelector('.dropDown').style.height = '0px';

            clicked = false;

        }else if(!clicked){
            document.querySelector('.dropDown').style.height = '208px';

            clicked = true;

        }
    }


    return ( <div>
        <ul class="flex font-mono pt-5 px-10 pb-5 md:p-10 ">
            <div class="flex w-full md:basis-1/2 items-center justify-between">
                <li>BEN</li>
                <li class='md:invisible'><MenuOutlinedIcon fontSize={'large'} onClick={ handleClick }/></li>
            </div>
            <div class="hidden md:flex md:basis-1/2 items-center justify-between">
                <li>About</li>
                <li>Education</li>
                <li>Projects</li>
                <li>Contact</li>
                <li class='border-solid border-2 rounded border-slate-600 text-slate-100 p-2'>Download Resume</li>
            </div>
        </ul>
        
        <div class='dropDown absolute w-full font-mono bg-slate-800 md:invisible h-0 overflow-hidden' style={{transition:'ease-in-out 1s'}}>
            <ul class='items-center' >
                <li class='flex justify-center p-2'>About</li>
                <li class='flex justify-center p-2'>Education</li>
                <li class='flex justify-center p-2'>Projects</li>
                <li class='flex justify-center p-2'>Contact</li>
                <li class='flex justify-center border-solid border-2 rounded border-slate-600 text-slate-100 p-2'>Download Resume</li>
            </ul>
        </div>


    </div> );
}
 
export default Navigation;