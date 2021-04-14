import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Chart = () => {
  const svgRef = useRef();

  useEffect(() => {
    const DATA = [
      { id: 'd1', region: 'USA', value: 10 },
      { id: 'd2', region: 'USA', value: 12 },
      { id: 'd3', region: 'USA', value: 11 },
      { id: 'd4', region: 'USA', value: 6 },
    ];

    const CHART_WIDTH = 600;
    const CHART_HEIGHT = 400;

    
    // equally distributed items along the x axis
    // padding is the total no between bars
    const x = d3.scaleBand().rangeRound([0,CHART_WIDTH]).padding(0.1);
    
    // reflects data values along the y axis
    // remember range starts with the highest value as y starts from top to bottom
    const y = d3.scaleLinear().range([CHART_HEIGHT,0])

    const chartContainer = d3
      .select(svgRef.current)
      .attr('width', CHART_WIDTH)
      .attr('height', CHART_HEIGHT);

    // which data should reflect or take
    x.domain(DATA)

    // append svg group to group bars
    const chart = chartContainer.append('g');
    // on my chart select all elemenst with class bar, these might not exit yet
    // so we join data so d3js tells us what is the difference we access to the missing data with enter
    // on enter we append some elements (rect)
    chart
      .selectAll('.bar')
      .data(DATA)
      .enter()
      .append('rect')
      .classed('bar', true);
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default Chart;
