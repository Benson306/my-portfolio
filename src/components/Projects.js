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
            github="#"
            link="https://ecomm-test.onrender.com"
            languages={["Angular","Spring Boot", "MySQL","Tailwind CSS"]}
        />

        <Card 
            image="utulivu.png"
            title="Utulivu Shopping Cart" 
            description="A web application that allows a customer to browse, grab a product off the shelf, and head to the checkout counter to make a purchase. It has capability for enabling instant mobile payment."
            github="https://github.com/Benson306/Shopping_Cart"
            link="https://utulivucart.netlify.app"
            languages={["React","Redux","Node.js","MongoDb", "Tailwind CSS"]}
        />

        <Card 
            image="ikowhat.png"
            title="An Online Clothing Store" 
            description="The online clothing store project is a modern e-commerce application built using the React JavaScript library. It offers a visually appealing and user-friendly interface, allowing customers to browse and purchase clothing items with ease."
            github="https://github.com/Benson306/react-store-frontend"
            link="https://merchstoreapp.netlify.app/"
            languages={["React","UseReducer","Node Js","MongoDb", "Redis" ,"Tailwind CSS"]}
        />

        

        <Card 
            image="rms.png"
            title="Real Estate Management System" 
            description="A web application that enables real estate professionals to track residents, leases, maintenance tasks, collect rent, and handle finances to update operations and reduce costs."
            github="#"
            link="#"
            languages={["Spring Boot","React","Daraja API"]}
        />

        <Card 
            image="hms.png"
            title="Hospital ERP" 
            description="A web application that aims at bringing quality in patient care & management with various important utilities like easy & quick patient registration, instant access to patient's complete health hsitory, integrated patient module with various other related departments and many more"
            github="https://github.com/Benson306/Hospital_Management_System"
            link="#"
            languages={["Angular","Node JS","Mongo DB"]}
        />

        <Card 
            image="expense.png"
            title="React Expense Tracker" 
            description="This is a simple Expense Tracker application built with React JS and React Router DOM 6. It allows you to track your expenses, manage monthly budgets, and perform various operations such as adding, editing, and deleting expenses."
            github="https://github.com/Benson306/expense-tracker"
            link="https://bens-expense-tracker.netlify.app"
            languages={["Javascript","Tailwind CSS", "useContext", "useReducer"]}
        />

        <Card 
            image="brindex.png"
            title="Brindex Course Search" 
            description="A course finder application to compare diploma, undergraduate and postgraduate courses from colleges, top universities and higher education institutions across Kenya, incluiding entry requirements."
            github="#"
            link="#"
            languages={["Angular","Spring Boot","MySQL"]}
        />

        <Card 
            image="darna.png"
            title="A Construction Company Website" 
            description="The construction website, developed using PHP, JS, and Bootstrap, showcases a responsive design that adapts to various devices and screen sizes. It leverages interactive JavaScript functionalities to enhance user experience, while PHP handles dynamic content generation, enabling seamless management of project information, portfolios, and contact forms."
            github="https://github.com/Benson306/darnaworks"
            link="https://darnaworksltd.co.ke"
            languages={["Bootstrap","PHP","PHP Mailer","CSS", "Javascript"]}
        />

        <Card 
            image="compleat.png"
            title="A Mediation Firm Website" 
            description="The construction website, developed using PHP, JS, and Bootstrap, showcases a responsive design that adapts to various devices and screen sizes. It leverages interactive JavaScript functionalities to enhance user experience, while PHP handles dynamic content generation, enabling seamless management of project information, portfolios, and contact forms."
            github="https://github.com/Benson306/compleat_africa"
            link="https://compleat.co.ke"
            languages={["Javascript", "Bootstrap","PHP","PHP Mailer","CSS"]}
        />
    </div>
    <div class="flex flex-wrap gap-10 justify-center p-8 pt-5">    
        <Card 
            image="utulivu-react-native.jpeg"
            title="An Electronic Store" 
            description="The electronic store app project is a cross-platform mobile application built with React Native. It offers a seamless shopping experience with features like product browsing, cart management, and secure payment options, providing users with a convenient way to purchase products directly from their mobile devices."
            github="https://github.com/Benson306/utulivu-ecommerce"
            link="#"
            languages={["React Native","UseReducer","Spring Boot","MySQL", "Redis"]}
        />

        <Card 
            image="weatherApp.jpeg"
            title="Weather App" 
            description="The weather app project is a mobile application developed using the React Native framework. It provides real-time weather information and a sleek user interface, allowing users to easily check the weather forecast for their location and other desired locations."
            github="https://github.com/Benson306/weather-app"
            link="#"
            languages={["React Native","UseReducer","Spring Boot","MongoDB", "Redis"]}
        />

    </div>

    </div> 
);
}
 
export default Projects;