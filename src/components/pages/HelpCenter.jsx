import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { IconContext } from "react-icons";
import { PiVideoCamera } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaCircleExclamation } from "react-icons/fa6";
import './HelpCenter.css';

const HelpCenter = () => {
  const navigate = useNavigate();

  return (
    <Card id='help-center-card'>
      <Card.Body>
        <h5 className='mb-4' style={{fontWeight: 'bold'}}>Customer Service</h5>
        <p>
            <IconContext.Provider value={{ color: "#364DB9", size: "30" }}>
            <PiVideoCamera />
            </IconContext.Provider>
            &nbsp;&nbsp;&nbsp;Tutorial Video
        </p>
        <hr></hr>
        <p onClick={() => navigate('/dashboard/faq')}>
            <IconContext.Provider value={{ color: "#364DB9", size: "30" }}>
            <RiCustomerService2Line />
            </IconContext.Provider>
            &nbsp;&nbsp;&nbsp;Help Desk
        </p>
        <hr></hr>
        <p>
            <IconContext.Provider value={{ color: "#364DB9", size: "30" }}>
            <AiOutlineMail />
            </IconContext.Provider>
            &nbsp;&nbsp;&nbsp;E-mail
        </p>
        <hr></hr>
        <p>
            <IconContext.Provider value={{ color: "#364DB9", size: "30" }}>
            <HiOutlinePencilSquare />
            </IconContext.Provider>
            &nbsp;&nbsp;&nbsp;Feedback
        </p>
        <hr></hr>
        <p>
        <IconContext.Provider value={{ color: "#364DB9", size: "30" }}>
            <FaCircleExclamation />
            </IconContext.Provider>
            &nbsp;&nbsp;&nbsp;Report Problem
        </p>
        <hr></hr>
      </Card.Body>
    </Card>
  )
}

export default HelpCenter