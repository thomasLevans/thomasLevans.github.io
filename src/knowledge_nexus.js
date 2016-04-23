

/**
* Creates a D3 cluster layout representing a hierarchy of Knowledge,
* specifically the skills I have acquired grouped by project and
* organizational group.
* This module is not currently bundled with D3 and assumes the `d3`
* global is available.
*
* @class KnowledgeNexus
* @param svg - d3 svg alias
*/

module.exports = class KnowledgeNexus {

  constructor(svg) {
    this.svg = svg;
    this.width = 500;
    this.height = 500;
    this.legendSize = 10;
    this.radius = 250;
    this.color = d3.scale.category20();
    this.heat = d3.scale.linear()
      .domain([1,10])
      .range(['lightgray','red']);

    this.tooltip = d3.select('.tooltip');

    this.legend = d3.select('svg')
      .selectAll('g')
      .data(['','project','group','library','methodology','database','language'])
      .enter()
      .append('g')
        .attr('class', 'legend')
        .attr('transform', (d, i) => { return `translate(0,${10+i*legendSize})`; });

    this.legend.append('rect')
      .attr('width', legendSize)
      .attr('height', legendSize)
      .style('fill', color)
      .style('stroke', color);

    this.legend.append('text')
      .attr('x', legendSize+4)
      .attr('y', legendSize-1)
      .text((d) => { return d; });

    this.partition = d3.layout.partition()
      .sort(null)
      .size([Math.PI * 2, Math.pow(radius, 2)])
      .value((d) => { return 1; });

    this.arc = d3.svg.arc()
      .startAngle((d) => { return d.x; })
      .endAngle((d) => { return d.x + d.dx; })
      .innerRadius((d) => { return Math.sqrt(d.y); })
      .outerRadius((d) => { return Math.sqrt(d.y + d.dy); });

  }

  propagateUpdate(root) {
    this.path = this.svg.datum(root).selectAll('path')
      .data(this.partition.nodes, (d) => { return d.name; })
      .enter()
      .append('path')
      .attr('display', (d) => { return d.depth ? null : 'none'; })
      .attr('d', this.arc)
      .on('mouseover', (d) => {
        this.tooltip.transition()
          .duration(200)
          .style('opacity', 0.8);

        this.tooltip.html(`<h3>${d.name}</h3>`)
          .attr('width', (d.name.length + 20)+'px')
          .style('left', d3.event.pageX + 'px')
          .style('top', (d3.event.pageY - 28) + 'px');
      })
      .on('mouseout', (d) => {
        this.tooltip.transition()
          .duration(200)
          .style('opacity', 0);
      })
      .style('stroke', 'lightgray')
      // .style('opacity', 0.8)
      .style('fill', (d) => {
        return this.color(d.type);
      })
      .style('fill-rule', 'evenodd')
      .each((d) => {
        d.x0 = d.x;
        d.dx0 = d.dx;
      });

  }

  updataData(newData) {

  }

};
