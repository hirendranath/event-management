import { useLoaderData } from "react-router-dom";

const Events = () => {
    const events = useLoaderData();
    return (
        <div>
            <h2>Hi, this is Events Page</h2>
            <h3>Events: {events.length} </h3>
            
        </div>
    );
};

export default Events;