window.onload = function(){

  var svg = d3.select('#svg')
            .append('svg')
            .attr('height', 285)
            .attr('width', 285)
            .style('z-index', 1);

svg.attr('transform','scale(1.3)');
svg.append('rect')
    .attr('width', 200)
    .attr('height', 200)
    .attr('transform', 'translate(142,0) rotate(45)')
    .style('fill','#2ED184');

svg.append('text')
    .text('又目日')
    .attr('y', 100)
    .attr('font-size',45)
    .style('fill', '#283C3C')
    .style('font-family', '新細明體')
    .style('font-weight', 'bolder')
    .attr('transform', 'translate(56,155) rotate(-90)');
svg.append('text')
    .text('KlareH')
    .attr('y', 100)
    .attr('font-size',18)
    .style('fill', '#283C3C')
    .style('font-family', 'Courier New')
    .attr('transform', 'translate(238,160) rotate(90)');
    /*

  svg.append('rect')
      .attr('width', 100)
      .attr('height', 100)
      .attr('transform', 'translate(120,230) rotate(45)')
      .style('stroke-width',"2")
      .style('fill', 'rgba(0,0,0,0)')
      .style('stroke','#81D1AC');

  svg.append('rect')
      .attr('width', 100)
      .attr('height', 100)
      .attr('transform', 'translate(120,238) rotate(45)')
      .style('stroke-width',"2")
      .style('fill', 'rgba(0,0,0,0)')
      .style('stroke','#81D1AC');

    svg.append('rect')
        .attr('width', 100)
        .attr('height', 100)
        .attr('transform', 'translate(120,246) rotate(45)')
        .style('stroke-width',"2")
        .style('fill', 'rgba(0,0,0,0)')
        .style('stroke','#81D1AC');

    svg.append('rect')
        .attr('width', 100)
        .attr('height', 100)
        .attr('transform', 'translate(164,230) rotate(45)')
        .style('stroke-width',"2")
        .style('fill', 'rgba(0,0,0,0)')
        .style('stroke','#81D1AC');

    svg.append('rect')
        .attr('width', 100)
        .attr('height', 100)
        .attr('transform', 'translate(164,238) rotate(45)')
        .style('stroke-width',"2")
        .style('fill', 'rgba(0,0,0,0)')
        .style('stroke','#81D1AC');

    svg.append('rect')
        .attr('width', 100)
        .attr('height', 100)
        .attr('transform', 'translate(164,246) rotate(45)')
        .style('stroke-width',"2")
        .style('fill', 'rgba(0,0,0,0)')
        .style('stroke','#81D1AC');
        */
}
