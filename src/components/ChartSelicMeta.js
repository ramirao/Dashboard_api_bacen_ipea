import  React, {useState, useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import { Area, AreaChart, CartesianGrid, LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip } from 'recharts';
import Title from './Title';
import axios from 'axios';
import {format, parseISO} from "date-fns";
//import pt from 'date-fns/locale/pt';





const serieEndPoint = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados?formato=json';

//const serie = DataRequest(endPoint);




export default function ChartSelicMeta() {
  //const serie = DataRequest( );
  const [data, setData] = useState([])

	useEffect(( ) => {
		
		const axiosGet =  async () => {
		 const response = await	axios.get(serieEndPoint);
		 setData(response.data.slice(-360));
		};

		axiosGet( );
   
	
	}, []);
	
	console.log(data);
 // const arr = data.reduce((acc,curVal) => acc.concat(curVal.valor),[])

  //console.log(arr);
  const serie = data;
  const menor = 2 //Math.min(...arr);
 

  const maior = 11; /*arr.reduce((a,b) => {
    return Math.max(a,b);
  });
    */
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Meta Tx Selic</Title>
      <ResponsiveContainer>
        <AreaChart
          data={serie}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <defs>
            <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0975BA" stopOpacity={0.9}/>
              <stop offset="95%" stopColor="#0975BA" stopOpacity={0.09}/>
            </linearGradient>
          </defs>
          <CartesianGrid opacity="0.5" vertical={false} />
          <XAxis
            dataKey="data"
            axisLine={false}
            tickLine={false}
            stroke="#FFFF"
            style={theme.typography.body2}
	    
          />
          <YAxis domain={[menor,maior]}
            axisLine={false}
            tickLine={false}
            stroke="#FFFF"
            style={theme.typography.body2}
            tickFormatter ={number => `% ${number.toFixed(2)}`}
          >
            
          </YAxis>
          <Area
            fill='url(#color3)'
            isAnimationActive={true}
            type="monotone"
            dataKey="valor"
            stroke='#0975BA'
            dot={false}
          
          />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}