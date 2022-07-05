import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

export default function ApiGraph(props) {
  const data = [
    {
      type: 'JANUARY',
      sales: props.list[props.list.length-1]
    },
    {
      type: 'FEBRUARY',
      sales: 52,
    },
    {
      type: 'MARCH',
      sales: 61,
    },
    {
      type: 'APRIL',
      sales: 145,
    },
    {
      type: 'MAY',
      sales: 48,
    },
    {
      type: 'JUNE',
      sales: 38,
    },
    {
      type: 'JULY',
      sales: 38,
    },
    {
      type: 'AUGUST',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
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


