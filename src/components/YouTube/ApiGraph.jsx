import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

export default function ApiGraph(props) {
  
  const config = {
    data: props.list,
    xField: 'date',
    yField: 'view',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    }
  };
  return <Column {...config} />;
};


