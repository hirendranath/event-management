import Events from "../Events/Events";


const Event = ({event}) => {
    const {id, name, image, price, description} = event;
    return (
        <div>
            {
                events.map(event => <Events key={id} event={event} ></Events> )
            }
        </div>
    );
};

export default Event;