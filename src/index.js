const width = 500;
const height = 500;
const legendSize = 10;
const radius = 225;
const legendLabels = {
  type: ['','project','group','library','methodology','database','language'],
  proficiency: ['0','3','6','9','12']
};
const color = d3.scale.category20();
const heat = d3.scale.linear()
  .domain([1,12])
  .range(['rgb(255, 255, 255)','rgb(255, 0, 0)']);

let data = undefined;

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

const legend = d3.select('svg')
  .selectAll('g')
  .data(legendLabels.type)
  .enter()
  .append('g')
    .attr('class', 'legend')
    .attr('transform', (d, i) => { return `translate(0,${10+i*legendSize})`; });

legend.append('rect')
  .attr('width', legendSize)
  .attr('height', legendSize)
  .style('fill', color)
  .style('stroke', color);

legend.append('text')
  .attr('x', legendSize+4)
  .attr('y', legendSize-1)
  .text((d) => { return d; });

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
  } else {
    data = root;
    update();
  }
});

function update() {

  const path = svg.datum(data).selectAll('path')
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
    .style('stroke', 'white')
    .style('fill', (d) => {
      return color(d.type);
    })
    .style('fill-rule', 'evenodd')
    .each((d) => {
      d.x0 = d.x;
      d.dx0 = d.dx;
    });

  d3.selectAll('input')
    .on('change', function() {
      const val = this.value;

      path.transition()
        .duration(400)
        .style('opacity', (d) => {
          return (val==='proficiency'&&(d.type==='group'||d.type==='project')) ? 0.4 : 1;
        })
        .style('fill', (d) => {
          return (val==='proficiency'&&d.type!=='project'&&d.type!=='group') ? heat(d.proficiency) : color(d.type);
        });


    });
}
