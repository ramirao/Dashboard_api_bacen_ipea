import  React, {useState, useEffect} from 'react';
import axios from 'axios';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';


const serieEndPoint = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.1/dados?formato=json';



function preventDefault(event) {
  event.preventDefault();
}

export default function Indicador(props) {
  const [data, setData] = useState([])

	useEffect(( ) => {
		
		const axiosGet =  async () => {
		 const response = await	axios.get(serieEndPoint);
		 setData(response.data.slice(-60));
		};

		axiosGet( );
  
	
	}, []);

    //const lastItem = data.at(-1);
   

  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <Typography component="p" variant="h3" color={props.color}>
        {props.value}
      </Typography>
      <Typography color="#FFFFFF" sx={{ flex: 1 }}>
        {props.date}
      </Typography>
      <div>
        <Link color="#FFFFFF" href="#" onClick={preventDefault}>
          Ver série
        </Link>
      </div>
    </React.Fragment>
  );
}