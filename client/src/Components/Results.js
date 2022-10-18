// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Results() {
  const [result, setResult] = useState('');

    useEffect(() => {
        loadResultData();
    }, []);


    const loadResultData = async () => {
        const token = localStorage.getItem("token");
        // const response = await axios.get('http://localhost:5001/results');
        // console.log('Onload login');
        const response = await axios.get('http://localhost:5001/results', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(response.status === 200) {
        setResult(response.data); }
        else {
          setResult(''); }
        
    }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="primary" gutterBottom>
        Exam Results
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Your Score is
        </Typography>
        <Typography variant="h6" component="div">
        9 of 10
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {result}
        </Typography>
      </CardContent>
      </Card>
  );
}
