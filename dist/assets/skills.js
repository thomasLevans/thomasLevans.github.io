export default {
  name: 'My Knowledge Nexus',
  children: [
    {
      name: 'MUSC-BMIC',
      type: 'group',
      children: [
        {
          name: 'linkedCT',
          type: 'project',
          children: [
            {
              name: 'Javascript',
              type: 'language',
              proficiency: 90,
              children: [
                {
                  name: 'D3',
                  type: 'library',
                  proficiency: 70,
                  children: []
                }
              ]
            },
            {
              name: 'Open Linked Data',
              type: 'methodology',
              proficiency: 80,
              children: [
                {
                  name: 'SPARQL',
                  type: 'language',
                  proficiency: 60,
                  children: []
                },
                {
                  name: 'RDF/XML',
                  type: 'language',
                  proficiency: 70,
                  children: []
                },
                {
                  name: 'Ontologies',
                  type: 'language',
                  proficiency: 50,
                  children: []
                }
              ]
            }
          ]
        },
        {
          name: 'Translational Science Visualization',
          type: 'project',
          children: [
            {
              name: 'Open Linked Data',
              type: 'methodology',
              proficiency: 80,
              children: [
                {
                  name: 'SPARQL',
                  type: 'language',
                  proficiency: 60,
                  children: []
                },
                {
                  name: 'RDF/XML',
                  type: 'language',
                  proficiency: 70,
                  children: []
                }
              ]
            },
            {
              name: 'Data Science',
              type: 'methodology',
              proficiency: 50,
              children: [
                {
                  name: 'Graph Theory',
                  type: 'methodology',
                  proficiency: 80,
                  children: [
                    {
                      name: 'Graph Database',
                      type: 'database',
                      proficiency: 80,
                      children: []
                    }
                  ]
                },
                {
                  name: 'Translational Science Research',
                  type: 'methodology',
                  proficiency: 80,
                  children: []
                },
                {
                  name: 'Bioinformatics',
                  type: 'methodology',
                  proficiency: 70,
                  children: []
                }
              ]
            },
            {
              name: 'Agile',
              type: 'methodology',
              proficiency: 90,
              children: [
                {
                  name: 'TDD',
                  type: 'methodology',
                  proficiency: 90,
                  children: []
                }
              ]
            },
            {
              name: 'Javascript',
              type: 'language',
              proficiency: 90,
              children: [
                {
                  name: 'D3',
                  type: 'library',
                  proficiency: 80,
                  children: []
                },
                {
                  name: 'Karma',
                  type: 'library',
                  proficiency: 60,
                  children: []
                },
                {
                  name: 'Jasmine',
                  type: 'library',
                  proficiency: 70,
                  children: []
                },
                {
                  name: 'RequireJS',
                  type: 'library',
                  proficiency: 70,
                  children: []
                },
                {
                  name: 'PhantomJS',
                  type: 'library',
                  proficiency: 60,
                  children: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'COFC-CIRDLES',
      type: 'group',
      children: [
        {
          name: 'Topsoil',
          type: 'project',
          children: [
            {
              name: 'Java 8',
              type: 'language',
              proficiency: 80,
              children: [
                {
                  name: 'Webkit',
                  type: 'library',
                  proficiency: 50,
                  children: []
                }
              ]
            },
            {
              name: 'Javascript',
              type: 'language',
              proficiency: 90,
              children: [
                {
                  name: 'D3',
                  type: 'library',
                  proficiency: 80,
                  children: []
                },
                {
                  name: 'Karma',
                  type: 'library',
                  proficiency: 60,
                  children: []
                },
                {
                  name: 'Jasmine',
                  type: 'library',
                  proficiency: 70,
                  children: []
                },
                {
                  name: 'BusterJS',
                  type: 'library',
                  proficiency: 50,
                  children: []
                },
                {
                  name: 'PhantomJS',
                  type: 'library',
                  proficiency: 60,
                  children: []
                }
              ]
            },
            {
              name: 'Geology',
              type: 'methodology',
              proficiency: 70,
              children: []
            },
            {
              name: 'DevOps',
              type: 'methodology',
              proficiency: 80,
              children: [
                {
                  name: 'QA',
                  type: 'methodology',
                  proficiency: 80,
                  children: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'School Projects',
      type: 'group',
      children: [
        {
          name: 'TeaMate',
          type: 'project',
          children: [
            {
              name: 'H/FOSS',
              type: 'methodology',
              proficiency: 70,
              children: []
            },
            {
              name: 'Unit Testing',
              type: 'methodology',
              proficiency: 90,
              children: []
            },
            {
              name: 'Test Suite Design',
              type: 'methodology',
              proficiency: 80,
              children: []
            },
            {
              name: 'Group Collaboration',
              type: 'methodology',
              proficiency: 100,
              children: []
            }
          ]
        },
        {
          name: 'Wally\'s Wacky Wand Shoppe',
          type: 'project',
          children: [
            {
              name: 'Full Stack Development',
              type: 'methodology',
              proficiency: 80,
              children: []
            },
            {
              name: 'PHP',
              type: 'language',
              proficiency: 60,
              children: []
            },
            {
              name: 'Database Design',
              type: 'methodology',
              proficiency: 80,
              children: []
            },
            {
              name: 'MySQL',
              type: 'language',
              proficiency: 90,
              children: []
            },
            {
              name: 'Javascript',
              type: 'language',
              proficiency: 90,
              children: [
                {
                  name: 'Angular',
                  type: 'library',
                  proficiency: 60,
                  children: []
                },
                {
                  name: 'D3',
                  type: 'library',
                  proficiency: 80,
                  children: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Personal Projects',
      type: 'group',
      children: [
        {
          name: 'VisualTree',
          type: 'project',
          children: [
            {
              name: 'Algorithm Design',
              type: 'methodology',
              proficiency: 80,
              children: []
            },
            {
              name: 'Graph Theory',
              type: 'methodology',
              proficiency: 80,
              children: []
            },
            {
              name: 'Javascript',
              type: 'language',
              proficiency: 90,
              children: [
                {
                  name: 'D3',
                  type: 'library',
                  proficiency: 80,
                  children: []
                },
                {
                  name: 'Mocha',
                  type: 'library',
                  proficiency: 90,
                  children: []
                },
                {
                  name: 'Chai',
                  type: 'library',
                  proficiency: 90,
                  children: []
                },
                {
                  name: 'ES6',
                  type: 'library',
                  proficiency: 90,
                  children: []
                },
                {
                  name: 'Webpack',
                  type: 'library',
                  proficiency: 80,
                  children: []
                },
                {
                  name: 'Node',
                  type: 'library',
                  proficiency: 80,
                  children: []
                }
              ]
            }
          ]
        },
        {
          name: 'VotingExample',
          type: 'project',
          children: [
            {
              name: 'Functional Programming',
              type: 'methodology',
              proficiency: 80,
              children: []
            },
            {
              name: 'Javascript',
              type: 'language',
              proficiency: 90,
              children: [
                {
                  name: 'React',
                  type: 'library',
                  proficiency: 70,
                  children: []
                },
                {
                  name: 'Redux',
                  type: 'library',
                  proficiency: 70,
                  children: []
                },
                {
                  name: 'Mocha',
                  type: 'library',
                  proficiency: 90,
                  children: []
                },
                {
                  name: 'Chai',
                  type: 'library',
                  proficiency: 90,
                  children: []
                },
                {
                  name: 'Immutable',
                  type: 'library',
                  proficiency: 70,
                  children: []
                },
                {
                  name: 'ES6',
                  type: 'library',
                  proficiency: 90,
                  children: []
                },
                {
                  name: 'Webpack',
                  type: 'library',
                  proficiency: 80,
                  children: []
                }
              ]
            }
          ]
        },
        {
          name: 'Whiteboard',
          type: 'project',
          children: [
            {
              name: 'Javascript',
              type: 'language',
              proficiency: 90,
              children: [
                {
                  name: 'Mocha',
                  type: 'library',
                  proficiency: 90,
                  children: []
                },
                {
                  name: 'Chai',
                  type: 'library',
                  proficiency: 90,
                  children: []
                },
                {
                  name: 'Immutable',
                  type: 'library',
                  proficiency: 70,
                  children: []
                },
                {
                  name: 'ES6',
                  type: 'library',
                  proficiency: 90,
                  children: []
                },
                {
                  name: 'Webpack',
                  type: 'library',
                  proficiency: 80,
                  children: []
                },
                {
                  name: 'D3',
                  type: 'library',
                  proficiency: 80,
                  children: []
                },
                {
                  name: 'socket.io',
                  type: 'library',
                  proficiency: 70,
                  children: []
                }
              ]
            }
          ]
        },
        {
          name: 'RustForge',
          type: 'project',
          children: [
            {
              name: 'Funcitonal Programming',
              type: 'methodology',
              proficiency: 80,
              children: []
            },
            {
              name: 'RESTful API',
              type: 'methodology',
              proficiency: 90,
              children: []
            },
            {
              name: 'MongoDB',
              type: 'database',
              proficiency: 90,
              children: []
            },
            {
              name: 'Open Data',
              type: 'methodology',
              proficiency: 80,
              children: []
            }
          ]
        },
        {
          name: 'ConnectFour',
          type: 'project',
          children: [
            {
              name: 'Bootstrap',
              type: 'library',
              proficiency: 80,
              children: []
            },
            {
              name: 'D3',
              type: 'library',
              proficiency: 80,
              children: []
            },
            {
              name: 'Game Logic',
              type: 'methodology',
              proficiency: 70,
              children: []
            }
          ]
        }
      ]
    }
  ]
};
