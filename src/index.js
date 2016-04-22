const width = 500;
const height = 500;
const radius = 250;
const color = d3.scale.category20();

const tooltip = d3.select('body')
  .append('div')
  .attr('class', 'tooltip')
  .style('opacity', 0);

const svg = d3.select('#vis')
  .append('svg')
    .attr('width', width)
    .attr('height', height)
  .append('g')
    .attr('transform', `translate(${width/2},${height/2})`);

const partition = d3.layout.partition()
  .sort(null)
  .size([Math.PI * 2, Math.pow(radius, 2)])
  .value((d) => { return 1; });

const arc = d3.svg.arc()
  .startAngle((d) => { return d.x; })
  .endAngle((d) => { return d.x + d.dx; })
  .innerRadius((d) => { return Math.sqrt(d.y); })
  .outerRadius((d) => { return Math.sqrt(d.y + d.dy); });

d3.json('../res/skills.json', (err, root) => {
  if (err) {
    console.error(`Error loading data: ${err.message}`);
  }

  const path = svg.datum(root).selectAll('path')
    .data(partition.nodes)
    .enter()
    .append('path')
    .attr('display', (d) => { return d.depth ? null : 'none'; })
    .attr('d', arc)
    .on('mouseover', (d) => {
      tooltip.transition()
        .duration(200)
        .style('opacity', 0.8);

      tooltip.html(`<h3>${d.name}</h3>`)
        .attr('width', (d.name.length + 20)+'px')
        .style('left', d3.event.pageX + 'px')
        .style('top', (d3.event.pageY - 28) + 'px');
    })
    .on('mouseout', (d) => {
      tooltip.transition()
        .duration(200)
        .style('opacity', 0);
    })
    .style('stroke', '#fff')
    .style('fill', (d) => { return color((d.children ? d : d.parent).name); })
    .style('fill-rule', 'evenodd')
    .each((d) => {
      d.x0 = d.x;
      d.dx0 = d.dx;
    });

});
