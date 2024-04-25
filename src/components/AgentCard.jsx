import '../styles/agentCard.css';
import SOS from './HelpButton';


const Card = (props) => {
    return (
        <div className="card">
            <div className="container">
                <div className='left'>
                    <p>{props.name}</p> 
                </div>
                <div className='right'>
                    <p className='inline'>{props.callTime}</p>
                    <p className='inline'>{props.metrica}</p>
                    <p className='inline'>{props.ranking}</p>
                </div>
            </div>
            <p>{props.restTime}</p>
            <SOS name="Help" />
            <SOS name="Contact" />
        </div>
    );
};
export default Card;
