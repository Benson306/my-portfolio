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
                <li class='md:pl-12'>
                    <img src={require('../images/letter-b2.png')} alt="" />
                </li>
                <li class='md:invisible'><MenuOutlinedIcon color='success' fontSize={'large'} onClick={ handleClick }/></li>
            </div>
            <div class="hidden md:flex md:basis-1/2 items-center justify-between">
                <li class='no-underline hover:underline decoration-lime-500 decoration-dotted underline-offset-8'>About</li>
                <li class='no-underline hover:underline decoration-lime-500 decoration-dotted underline-offset-8'>Education</li>
                <li class='no-underline hover:underline decoration-lime-500 decoration-dotted underline-offset-8'>Projects</li>
                <li class='no-underline hover:underline decoration-lime-500 decoration-dotted underline-offset-8'>Contact</li>
                <li class='border-solid border-2 rounded-lg border-lime-500 text-slate-100 p-2'>Download Resume</li>
            </div>
        </ul>
        
        <div class='dropDown absolute w-full font-mono bg-slate-800 md:invisible h-0 overflow-hidden' style={{transition:'ease-in-out 1s'}}>
            <ul class='items-center' >
                <li class='flex justify-center p-2'>About</li>
                <li class='flex justify-center p-2'>Education</li>
                <li class='flex justify-center p-2'>Projects</li>
                <li class='flex justify-center p-2'>Contact</li>
                <li class='flex justify-center border-solid border-2 rounded border-lime-500 text-slate-100 p-2'>Download Resume</li>
            </ul>
        </div>


    </div> );
}
 
export default Navigation;