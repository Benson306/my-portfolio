import Card from './Card';

const Projects = ({projectsRef}) => {
    return ( 
    <div class="" ref={projectsRef}>
    <h1 class="flex md:justify-center text-zinc-200 text-2xl md:text-4xl font-serif font-semibold p-4 pt-7 md:pt-4 ">Some Things I've Built</h1>

    <div class="flex flex-wrap gap-10 justify-center p-8 pt-5">

        <Card 
            image="ecomm.png"
            title="Ecommerce Web Application" 
            description="An ecommerce web application with Cart, User dashboard and working payment options available. It also has an admin panel for management of orders, deliveries, products and delivery Locations."
            github="https://github.com/Benson306/ecommerce"
            link="https://ecomm-test.onrender.com"
            languages={["React","Node.js","Express","MongoDb"]}
        />

        <Card 
            image="rms.png"
            title="Real Estate Management System" 
            description="A web application that enables real estate professionals to track residents, leases, maintenance tasks, collect rent, and handle finances to update operations and reduce costs."
            github="https://github.com/Benson306/real_estate_php"
            link="#"
            languages={["PHP","MySQL","CSS","Daraja API"]}
        />

        <Card 
            image="utulivu.png"
            title="Utulivu Shopping Cart" 
            description="A web application that allows a customer to browse, grab a product off the shelf, and head to the checkout counter to make a purchase. It has capability for enabling instant mobile payment."
            github="https://github.com/Benson306/Shopping_Cart"
            link="https://utulivucart.netlify.app"
            languages={["React","Redux","Node.js","MongoDb"]}
        />

        <Card 
            image="hms.png"
            title="Hospital ERP" 
            description="A web application that aims at bringing quality in patient care & management with various important utilities like easy & quick patient registration, instant access to patient's complete health hsitory, integrated patient module with various other related departments and many more"
            github="https://github.com/Benson306/Hospital_Management_System"
            link="#"
            languages={["PHP","Javascript","MySQL","Mpdf"]}
        />

        <Card 
            image="brindex.png"
            title="Brindex Course Search" 
            description="A course finder application to compare diploma, undergraduate and postgraduate courses from colleges, top universities and higher education institutions across Kenya, incluiding entry requirements."
            github="https://github.com/Benson306/Brindex-Course-Search"
            link="#"
            languages={["PHP","Javascript","MySQL"]}
        />

    </div>

    </div> 
);
}
 
export default Projects;