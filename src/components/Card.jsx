import './Card.css';

// const Card = ({number}) => {
//     return (
//         <div className='card-bg'>
//             <div className="card-num">{number}</div>
//             <div className='card-info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam impedit praesentium labore veritatis sapiente iste expedita aperiam? Nisi, sit mollitia?</div>
//         </div>
//     );

// };




const Card = ({task,image,date,key}) => {

    return (
        
        <button className='btn' value="Click">
            
            <img src={image} alt="user photo" className='card-image'/>
            <div className="card-name">{task}</div>
            <div className='card-date'>{date}</div>

        </button>
    );

};

export default Card;